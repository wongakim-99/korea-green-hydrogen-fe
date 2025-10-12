/**
 * 관리자 대시보드
 * 
 * 문의 목록을 표시하는 대시보드
 * - 문의 통계
 * - 최근 문의 목록
 * - 반응형 테이블/카드
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'pending' | 'read';
  createdAt: string;
  company?: string;
  phone?: string;
}

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [updatingStatus, setUpdatingStatus] = useState<string | null>(null);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const response = await fetch('/api/admin/inquiries?limit=20');
      const result = await response.json();

      if (result.success) {
        setInquiries(result.data.inquiries || []);
      } else {
        setError('문의 목록을 불러오는데 실패했습니다.');
      }
    } catch (error) {
      console.error('문의 목록 조회 오류:', error);
      setError('문의 목록을 불러오는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusMap = {
      pending: { text: '대기', color: 'bg-yellow-50 text-yellow-700' },
      read: { text: '확인', color: 'bg-blue-50 text-blue-700' }
    };
    
    const statusInfo = statusMap[status as keyof typeof statusMap] || statusMap.pending;
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusInfo.color}`}>
        {statusInfo.text}
      </span>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const updateStatus = async (inquiryId: string, newStatus: 'pending' | 'read') => {
    setUpdatingStatus(inquiryId);
    try {
      const response = await fetch(`/api/admin/inquiries/${inquiryId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });

      const result = await response.json();

      if (result.success) {
        setInquiries(inquiries.map(inquiry => 
          inquiry.id === inquiryId 
            ? { ...inquiry, status: newStatus }
            : inquiry
        ));
      } else {
        alert('상태 변경에 실패했습니다.');
      }
    } catch (error) {
      console.error('상태 변경 오류:', error);
      alert('상태 변경 중 오류가 발생했습니다.');
    } finally {
      setUpdatingStatus(null);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-500">문의 목록을 불러오는 중...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6 bg-slate-50 min-h-screen -mx-6 -my-6 px-6 py-6">
      {/* 헤더 */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">문의 관리</h1>
        <p className="mt-1 text-sm text-gray-600">
          총 {inquiries.length}개의 문의가 있습니다.
        </p>
      </div>

      {/* 통계 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 text-sm font-bold">
                    {inquiries.filter(i => i.status === 'pending').length}
                  </span>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    대기 중
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {inquiries.filter(i => i.status === 'pending').length}건
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm font-bold">
                    {inquiries.filter(i => i.status === 'read').length}
                  </span>
                </div>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    확인됨
                  </dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {inquiries.filter(i => i.status === 'read').length}건
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 문의 목록 */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            최근 문의
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            최근 접수된 문의 목록입니다.
          </p>
        </div>

        {/* 데스크톱 테이블 */}
        <div className="hidden md:block">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  이름
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  이메일
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  문의 유형
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  상태
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  접수일
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  작업
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {inquiries.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-gray-50">
                  <td className="px-6 py-6 whitespace-nowrap text-sm font-medium text-gray-900">
                    {inquiry.name}
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-400">
                    {inquiry.email}
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-400">
                    {inquiry.subject}
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap">
                    {getStatusBadge(inquiry.status)}
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-400">
                    {formatDate(inquiry.createdAt)}
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <Link
                        href={`/admin/inquiries/${inquiry.id}`}
                        className="text-sky-600 hover:text-sky-900 text-xs"
                      >
                        상세보기
                      </Link>
                      <button
                        onClick={() => updateStatus(inquiry.id, 'read')}
                        disabled={updatingStatus === inquiry.id || inquiry.status === 'read'}
                        className={`px-2 py-1 text-xs rounded-md font-medium ${
                          inquiry.status === 'read'
                            ? 'bg-blue-100 text-blue-800 cursor-not-allowed'
                            : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                        } disabled:opacity-50`}
                      >
                        {updatingStatus === inquiry.id ? '처리중...' : '확인처리'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 모바일 카드 */}
        <div className="md:hidden">
          <ul className="divide-y divide-gray-200">
            {inquiries.map((inquiry) => (
              <li key={inquiry.id}>
                <div className="block hover:bg-gray-50 px-4 py-5">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {inquiry.name}
                      </p>
                      <p className="text-sm text-gray-400 truncate">
                        {inquiry.email}
                      </p>
                      <p className="text-xs text-gray-400">
                        {inquiry.subject} • {formatDate(inquiry.createdAt)}
                      </p>
                      <div className="mt-4 flex space-x-2">
                        <Link
                          href={`/admin/inquiries/${inquiry.id}`}
                          className="text-sky-600 hover:text-sky-900 text-xs"
                        >
                          상세보기
                        </Link>
                        <button
                          onClick={() => updateStatus(inquiry.id, 'read')}
                          disabled={updatingStatus === inquiry.id || inquiry.status === 'read'}
                          className={`px-2 py-1 text-xs rounded-md font-medium ${
                            inquiry.status === 'read'
                              ? 'bg-blue-100 text-blue-800 cursor-not-allowed'
                              : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                          } disabled:opacity-50`}
                        >
                          {updatingStatus === inquiry.id ? '처리중...' : '확인처리'}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusBadge(inquiry.status)}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {inquiries.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-500">문의가 없습니다.</div>
          </div>
        )}
      </div>
    </div>
  );
}


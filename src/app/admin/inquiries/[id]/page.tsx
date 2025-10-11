/**
 * 문의 상세보기 페이지
 * 
 * 개별 문의의 상세 정보를 표시
 * - 문의 내용 전체 표시
 * - 상태 변경 기능
 * - 답변 작성 기능 (추후)
 */

'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'pending' | 'read' | 'replied';
  createdAt: string;
  company?: string;
  phone?: string;
}

export default function InquiryDetailPage() {
  const router = useRouter();
  const params = useParams();
  const inquiryId = params.id as string;

  const [inquiry, setInquiry] = useState<Inquiry | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [updatingStatus, setUpdatingStatus] = useState(false);

  useEffect(() => {
    if (inquiryId) {
      fetchInquiry();
    }
  }, [inquiryId]);

  const fetchInquiry = async () => {
    try {
      const response = await fetch(`/api/admin/inquiries/${inquiryId}`);
      const result = await response.json();

      if (result.success) {
        setInquiry(result.data);
      } else {
        setError('문의를 불러오는데 실패했습니다.');
      }
    } catch (error) {
      console.error('문의 조회 오류:', error);
      setError('문의를 불러오는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (newStatus: 'pending' | 'read' | 'replied') => {
    if (!inquiry) return;

    setUpdatingStatus(true);
    try {
      const response = await fetch(`/api/admin/inquiries/${inquiryId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });

      const result = await response.json();

      if (result.success) {
        setInquiry({ ...inquiry, status: newStatus });
      } else {
        alert('상태 변경에 실패했습니다.');
      }
    } catch (error) {
      console.error('상태 변경 오류:', error);
      alert('상태 변경 중 오류가 발생했습니다.');
    } finally {
      setUpdatingStatus(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusMap = {
      pending: { text: '대기', color: 'bg-yellow-100 text-yellow-800' },
      read: { text: '확인', color: 'bg-blue-100 text-blue-800' },
      replied: { text: '답변', color: 'bg-green-100 text-green-800' }
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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-500">문의를 불러오는 중...</div>
      </div>
    );
  }

  if (error || !inquiry) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
        {error || '문의를 찾을 수 없습니다.'}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">문의 상세보기</h1>
          <p className="mt-1 text-sm text-gray-600">
            문의 ID: {inquiry.id}
          </p>
        </div>
        <Link
          href="/admin/dashboard"
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          목록으로 돌아가기
        </Link>
      </div>

      {/* 문의 정보 카드 */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              문의 정보
            </h3>
            <div className="flex items-center space-x-3">
              {getStatusBadge(inquiry.status)}
              <div className="flex space-x-2">
                <button
                  onClick={() => updateStatus('read')}
                  disabled={updatingStatus || inquiry.status === 'read'}
                  className={`px-3 py-1 text-xs rounded-md font-medium ${
                    inquiry.status === 'read'
                      ? 'bg-blue-100 text-blue-800 cursor-not-allowed'
                      : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                  }`}
                >
                  확인 처리
                </button>
                <button
                  onClick={() => updateStatus('replied')}
                  disabled={updatingStatus || inquiry.status === 'replied'}
                  className={`px-3 py-1 text-xs rounded-md font-medium ${
                    inquiry.status === 'replied'
                      ? 'bg-green-100 text-green-800 cursor-not-allowed'
                      : 'bg-green-100 text-green-800 hover:bg-green-200'
                  }`}
                >
                  답변 완료
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200">
          <dl>
            {/* 기본 정보 */}
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">이름</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {inquiry.name}
              </dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">이메일</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <a href={`mailto:${inquiry.email}`} className="text-sky-600 hover:text-sky-900">
                  {inquiry.email}
                </a>
              </dd>
            </div>

            {inquiry.phone && (
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">전화번호</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <a href={`tel:${inquiry.phone}`} className="text-sky-600 hover:text-sky-900">
                    {inquiry.phone}
                  </a>
                </dd>
              </div>
            )}

            {inquiry.company && (
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">회사명</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {inquiry.company}
                </dd>
              </div>
            )}

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">문의 유형</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {inquiry.subject}
              </dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">접수일</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {formatDate(inquiry.createdAt)}
              </dd>
            </div>

            {/* 문의 내용 */}
            <div className="bg-gray-50 px-4 py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 mb-3">문의 내용</dt>
              <dd className="text-sm text-gray-900 whitespace-pre-wrap bg-white p-4 rounded-md border">
                {inquiry.message}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* 답변 섹션 (추후 구현) */}
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            답변 관리
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            답변 작성 기능은 추후 구현 예정입니다.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <div className="text-center py-8">
            <div className="text-gray-400 text-sm">
              답변 작성 기능 준비 중...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

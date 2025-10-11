'use client';

import { useState } from 'react';

/**
 * InquiryForm 컴포넌트
 * 
 * 문의하기 폼 - 이름, 이메일, 회사명, 전화번호, 문의 유형, 문의 내용
 * TODO: 추후 /api/contact 엔드포인트와 연동 필요
 */

// 공통 input 스타일
const inputClassName = "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 hover:border-sky-300";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: API 연동
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
    
    alert('문의사항이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
      {/* 헤더 */}
      <div className="mb-8">
        <div className="w-12 h-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mb-4"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">문의하기</h2>
        <p className="text-gray-600 mt-3">궁금하신 내용을 작성해주시면 빠르게 연락드리겠습니다.</p>
      </div>
      
      {/* 폼 */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 이름 & 이메일 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              이름 *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={inputClassName}
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              이메일 *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={inputClassName}
            />
          </div>
        </div>

        {/* 회사명 & 전화번호 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
              회사명
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className={inputClassName}
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              전화번호
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputClassName}
            />
          </div>
        </div>

        {/* 문의 유형 */}
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
            문의 유형 *
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className={`${inputClassName} cursor-pointer`}
          >
            <option value="">선택해주세요</option>
            <option value="general">일반 문의</option>
            <option value="technical">기술 문의</option>
            <option value="partnership">파트너십 문의</option>
            <option value="investment">투자 문의</option>
            <option value="career">채용 문의</option>
          </select>
        </div>

        {/* 문의 내용 */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            문의 내용 *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className={`${inputClassName} resize-none`}
            placeholder="문의하실 내용을 상세히 작성해주세요."
          />
        </div>

        {/* 제출 버튼 */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-sky-500 to-sky-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-sky-600 hover:to-sky-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          문의하기
        </button>
      </form>
    </div>
  );
}


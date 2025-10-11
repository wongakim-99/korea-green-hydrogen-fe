'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

/**
 * InquiryForm 컴포넌트
 * 
 * 문의하기 폼 - 이름, 이메일, 회사명, 전화번호, 문의 유형, 문의 내용
 * TODO: 추후 /api/contact 엔드포인트와 연동 필요
 */

// 공통 input 스타일
const inputClassName = "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200 hover:border-sky-300";

export default function InquiryForm() {
  const t = useTranslations('Inquiry.form');
  
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
    
    alert(t('successMessage'));
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
      {/* 헤더 */}
      <div className="mb-8">
        <div className="w-12 h-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full mb-4"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('title')}</h2>
        <p className="text-gray-600 mt-3">{t('description')}</p>
      </div>
      
      {/* 폼 */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 이름 & 이메일 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              {t('fields.name')} *
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
              {t('fields.email')} *
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
              {t('fields.company')}
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
              {t('fields.phone')}
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
            {t('fields.subject')} *
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className={`${inputClassName} cursor-pointer`}
          >
            <option value="">{t('subjectOptions.placeholder')}</option>
            <option value="general">{t('subjectOptions.general')}</option>
            <option value="technical">{t('subjectOptions.technical')}</option>
            <option value="partnership">{t('subjectOptions.partnership')}</option>
            <option value="investment">{t('subjectOptions.investment')}</option>
            <option value="career">{t('subjectOptions.career')}</option>
          </select>
        </div>

        {/* 문의 내용 */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            {t('fields.message')} *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className={`${inputClassName} resize-none`}
            placeholder={t('messagePlaceholder')}
          />
        </div>

        {/* 제출 버튼 */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-sky-500 to-sky-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-sky-600 hover:to-sky-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          {t('submitButton')}
        </button>
      </form>
    </div>
  );
}


'use client';

import Image from 'next/image';

type TabType = 'korea' | 'nz';

interface TeamTabMenuProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  locale: string;
}

export default function TeamTabMenu({ activeTab, setActiveTab, locale }: TeamTabMenuProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      {/* Korea Tab */}
      <button
        onClick={() => setActiveTab('korea')}
        className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group ${
          activeTab === 'korea' 
            ? 'ring-4 ring-sky-500 shadow-2xl transform scale-105' 
            : 'hover:shadow-xl hover:scale-102'
        }`}
      >
        <div className="aspect-[16/10] relative">
          <Image
            src="/images/about/profile/korea.jpg"
            alt="South Korea Branch"
            fill
            className="object-cover"
          />
          <div className={`absolute inset-0 transition-colors ${
            activeTab === 'korea' 
              ? 'bg-gradient-to-t from-sky-900/90 via-sky-800/70 to-sky-600/50' 
              : 'bg-gradient-to-t from-gray-900/80 via-gray-800/60 to-gray-700/40 group-hover:from-sky-900/70 group-hover:via-sky-800/50 group-hover:to-sky-600/30'
          }`}></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
            <div className={`mb-4 transition-transform ${activeTab === 'korea' ? 'scale-110' : 'group-hover:scale-105'}`}>
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              South Korea
            </h2>
            <p className="text-lg md:text-xl text-gray-100 font-medium">
              {locale === 'ko' ? 'KGH 글로벌 본사' : 'KGH Global Headquarters'}
            </p>
            {activeTab === 'korea' && (
              <div className="mt-4 flex items-center text-sky-200">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">{locale === 'ko' ? '선택됨' : 'Selected'}</span>
              </div>
            )}
          </div>
        </div>
      </button>

      {/* New Zealand Tab */}
      <button
        onClick={() => setActiveTab('nz')}
        className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group ${
          activeTab === 'nz' 
            ? 'ring-4 ring-emerald-500 shadow-2xl transform scale-105' 
            : 'hover:shadow-xl hover:scale-102'
        }`}
      >
        <div className="aspect-[16/10] relative">
          <Image
            src="/images/about/profile/new-zealand.jpg"
            alt="New Zealand Branch"
            fill
            className="object-cover"
          />
          <div className={`absolute inset-0 transition-colors ${
            activeTab === 'nz' 
              ? 'bg-gradient-to-t from-emerald-900/90 via-emerald-800/70 to-emerald-600/50' 
              : 'bg-gradient-to-t from-gray-900/80 via-gray-800/60 to-gray-700/40 group-hover:from-emerald-900/70 group-hover:via-emerald-800/50 group-hover:to-emerald-600/30'
          }`}></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
            <div className={`mb-4 transition-transform ${activeTab === 'nz' ? 'scale-110' : 'group-hover:scale-105'}`}>
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              New Zealand
            </h2>
            <p className="text-lg md:text-xl text-gray-100 font-medium text-center leading-relaxed">
              The Southern Hemisphere Branch<br />for KGH Global
            </p>
            {activeTab === 'nz' && (
              <div className="mt-4 flex items-center text-emerald-200">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">{locale === 'ko' ? '선택됨' : 'Selected'}</span>
              </div>
            )}
          </div>
        </div>
      </button>
    </div>
  );
}

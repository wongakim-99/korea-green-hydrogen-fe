import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '프로젝트 - Korea Green Hydrogen',
  description: 'Korea Green Hydrogen가 수행한 주요 프로젝트와 성과를 소개합니다.',
};

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: '부산 그린수소 생산단지',
      category: '그린수소 생산',
      location: '부산광역시',
      year: '2023',
      capacity: '1,000톤/년',
      description: '재생에너지를 활용한 대규모 그린수소 생산 시설로, 연간 1,000톤의 친환경 수소를 생산합니다.',
      image: '/placeholder-project1.jpg',
      status: '운영중'
    },
    {
      id: 2,
      title: '수도권 수소충전소 네트워크',
      category: '인프라 구축',
      location: '서울/경기',
      year: '2022-2023',
      capacity: '20개소',
      description: '수도권 전역에 수소차 충전 인프라를 구축하여 수소 모빌리티 확산에 기여하고 있습니다.',
      image: '/placeholder-project2.jpg',
      status: '운영중'
    },
    {
      id: 3,
      title: '울산 산업단지 연료전지 발전소',
      category: '연료전지',
      location: '울산광역시',
      year: '2023',
      capacity: '50MW',
      description: '산업단지 내 안정적인 전력 공급을 위한 대용량 수소연료전지 발전 시설입니다.',
      image: '/placeholder-project3.jpg',
      status: '건설중'
    },
    {
      id: 4,
      title: '제주 그린수소 실증단지',
      category: '연구개발',
      location: '제주특별자치도',
      year: '2024',
      capacity: '500톤/년',
      description: '풍력 발전과 연계한 그린수소 생산 및 활용 기술 실증 프로젝트입니다.',
      image: '/placeholder-project4.jpg',
      status: '계획중'
    }
  ];

  const achievements = [
    {
      number: '50+',
      label: '완료 프로젝트',
      description: '성공적으로 완료된 수소 에너지 프로젝트'
    },
    {
      number: '2,500+',
      label: '톤/년',
      description: '연간 수소 생산 총 용량'
    },
    {
      number: '100+',
      label: '충전소',
      description: '구축 및 운영 중인 수소충전소'
    },
    {
      number: '200MW',
      label: '발전용량',
      description: '연료전지 발전 총 용량'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            프로젝트
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            대한민국의 수소 에너지 미래를 만들어가는 주요 프로젝트들을 소개합니다
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">주요 성과</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Korea Green Hydrogen가 이룬 혁신적인 성과들입니다.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {achievement.label}
                </div>
                <div className="text-sm text-gray-600">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">주요 프로젝트</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              전국 각지에서 진행 중인 혁신적인 수소 에너지 프로젝트들을 확인해보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-green-200 to-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-green-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-green-600 font-medium">프로젝트 이미지</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                        project.status === '운영중' ? 'bg-green-100 text-green-800' :
                        project.status === '건설중' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>

                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">분야:</span>
                      <span className="ml-1 font-medium text-gray-900">{project.category}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">규모:</span>
                      <span className="ml-1 font-medium text-gray-900">{project.capacity}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Innovation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">기술 혁신</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              지속적인 연구개발을 통해 수소 에너지 기술의 혁신을 이끌어가고 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">효율성 향상</h3>
              <p className="text-gray-600">
                전기분해 효율을 90% 이상으로 향상시킨 
                차세대 수소 생산 기술 개발
              </p>
            </div>

            <div className="text-center p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">안전성 강화</h3>
              <p className="text-gray-600">
                AI 기반 안전 모니터링 시스템으로 
                수소 취급의 안전성을 극대화
              </p>
            </div>

            <div className="text-center p-8 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">비용 절감</h3>
              <p className="text-gray-600">
                모듈화된 시스템 설계로 
                구축 및 운영 비용을 30% 절감
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            다음 프로젝트의 파트너가 되어주세요
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Korea Green Hydrogen와 함께 지속가능한 에너지 미래를 만들어가세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              프로젝트 문의
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-block"
            >
              서비스 보기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

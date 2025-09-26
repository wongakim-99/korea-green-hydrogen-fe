export default function ResourceCirculationSection() {
  return (
    <section id="resource-circulation" className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 snap-start flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">순환 시스템</h3>
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 border-4 border-blue-200 rounded-full"></div>
                </div>
                <div className="relative z-10 grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm font-medium">에너지 생산</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm font-medium">비료 제조</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm font-medium">해외 수출</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm font-medium">수익 창출</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">완벽한 자원 순환</h2>
                <p className="text-blue-600 font-medium">Complete Resource Circulation</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              에너지 생산 후 남은 슬러지는 <strong>고품질의 친환경 비료</strong>로 재탄생하여 
              해외 시장에 수출되며, 버려지는 것 하나 없는 자원 순환을 실현합니다.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-4">순환 효과</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">폐기물 재활용률</span>
                  <span className="font-bold text-blue-600">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">비료 품질 등급</span>
                  <span className="font-bold text-blue-600">A급</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">해외 수출 비율</span>
                  <span className="font-bold text-blue-600">80%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

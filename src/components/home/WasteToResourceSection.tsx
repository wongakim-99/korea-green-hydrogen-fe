export default function WasteToResourceSection() {
  return (
    <section id="waste-to-resource" className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 snap-start flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">폐기물의 자원화</h2>
                <p className="text-green-600 font-medium">From Waste to Resource</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              하수 슬러지와 음식물 폐기물을 최첨단 <strong>열가수분해(THP) 기술</strong>로 처리하여, 
              고효율의 바이오가스와 청정 수소 에너지를 생산합니다.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-600">하수 슬러지 → 바이오가스 → 청정 수소</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-600">음식물 폐기물 → 메탄 가스 → 재생 에너지</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <p className="text-gray-600">최첨단 THP 기술로 처리 효율 극대화</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">기술 프로세스</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">1</span>
                  <div>
                    <p className="font-medium text-gray-900">폐기물 수집</p>
                    <p className="text-sm text-gray-600">하수 슬러지, 음식물 폐기물</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">2</span>
                  <div>
                    <p className="font-medium text-gray-900">THP 처리</p>
                    <p className="text-sm text-gray-600">열가수분해 기술 적용</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">3</span>
                  <div>
                    <p className="font-medium text-gray-900">에너지 생산</p>
                    <p className="text-sm text-gray-600">바이오가스, 청정 수소</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

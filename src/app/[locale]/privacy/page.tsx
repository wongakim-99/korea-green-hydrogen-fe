import type { Metadata } from 'next';
import { useLocale } from 'next-intl';

export const metadata: Metadata = {
  title: '개인정보 처리방침 - KGH GLOBAL',
  description: 'KGH GLOBAL 개인정보 처리방침 안내 페이지',
};

export default function PrivacyPolicyPage() {
  const locale = useLocale();

  if (locale !== 'ko') {
    return (
      <section className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-700">The Korean version of our Privacy Policy is shown for now. An English version will be provided soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">[KGH GLOBAL] 개인정보 처리방침</h1>
        <p className="text-gray-600 mb-8">본 방침은 이용자의 개인정보와 권익 보호를 위해 적용됩니다.</p>

        {/* 제1조 */}
        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">제1조 (개인정보의 수집 항목 및 수집 방법)</h2>
        <h3 className="text-lg font-medium text-gray-900 mb-2">1) 수집하는 개인정보 항목</h3>
        <ul className="list-disc pl-6 text-gray-800 space-y-1">
          <li>필수 항목: 이름, 이메일, 문의 유형, 문의 내용</li>
          <li>선택 항목: 회사명, 전화번호</li>
        </ul>
        <h3 className="text-lg font-medium text-gray-900 mt-4 mb-2">2) 수집 방법</h3>
        <p className="text-gray-800">홈페이지 내 ‘문의하기’ 입력 폼에 이용자가 직접 기입하는 방식</p>

        {/* 제2조 */}
        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">제2조 (개인정보의 수집 및 이용 목적)</h2>
        <ul className="list-disc pl-6 text-gray-800 space-y-1">
          <li>고객 문의 처리: 문의 확인, 사실관계 확인을 위한 연락, 처리 결과 통보</li>
          <li>서비스 안내: 문의 내용에 따른 관련 서비스·견적·자료 등의 안내</li>
        </ul>

        {/* 제3조 */}
        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">제3조 (개인정보의 처리 및 보유 기간)</h2>
        <p className="text-gray-800">회사는 법령에 따른 보유·이용기간 또는 정보주체로부터 동의받은 기간 내에서 개인정보를 처리·보유합니다.</p>
        <ul className="list-disc pl-6 text-gray-800 space-y-1 mt-2">
          <li>보유 근거: 정보주체의 동의, 문의 이력 관리</li>
          <li>보유 기간: 문의 처리 완료 후 1년</li>
          <li>예외: 관련 법령에서 정한 기간 동안 보관해야 하는 경우 해당 법령에 따름</li>
        </ul>

        {/* 제4조 */}
        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">제4조 (개인정보의 파기절차 및 방법)</h2>
        <ul className="list-disc pl-6 text-gray-800 space-y-1">
          <li>파기절차: 목적 달성 후 별도 DB(종이의 경우 별도 문서함)로 옮겨 내부 방침 및 법령에 따라 일정 기간 저장 후 또는 즉시 파기</li>
          <li>파기방법: 전자파일은 복구가 불가능한 기술적 방법으로 삭제, 종이 문서는 분쇄 또는 소각</li>
        </ul>

        {/* 제5조 */}
        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">제5조 (개인정보의 제3자 제공)</h2>
        <p className="text-gray-800">회사는 제2조의 목적 범위 내에서만 개인정보를 처리하며, 원칙적으로 사전 동의 없이 외부에 제공하지 않습니다. 다만 다음의 경우는 예외로 합니다.</p>
        <ul className="list-disc pl-6 text-gray-800 space-y-1 mt-2">
          <li>이용자가 사전에 동의한 경우</li>
          <li>법령에 의거하거나 수사기관의 적법한 요구가 있는 경우</li>
        </ul>

        {/* 제6조 */}
        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">제6조 (개인정보처리의 위탁)</h2>
        <p className="text-gray-800">원활한 서비스 제공을 위해 다음과 같이 개인정보 처리업무를 위탁할 수 있습니다. 위탁 시 관련 법령에 따라 수탁자에 대한 관리·감독을 수행합니다.</p>
        <div className="overflow-x-auto mt-3">
          <table className="w-full text-left border border-gray-200">
            <thead className="bg-gray-50 text-gray-900">
              <tr>
                <th className="p-3 border-b border-gray-200">수탁자</th>
                <th className="p-3 border-b border-gray-200">위탁 업무 내용</th>
                <th className="p-3 border-b border-gray-200">보관 위치</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              <tr className="align-top">
                <td className="p-3 border-b border-gray-200">Vercel Inc.</td>
                <td className="p-3 border-b border-gray-200">웹사이트 호스팅, 배포, 엣지 네트워크 운영</td>
                <td className="p-3 border-b border-gray-200">Vercel 인프라(지역 및 PoP은 서비스 최적화에 따라 다양한 국가에 위치할 수 있음)</td>
              </tr>
              <tr className="align-top">
                <td className="p-3">MongoDB Inc. (MongoDB Atlas)</td>
                <td className="p-3">문의 데이터의 데이터베이스 저장 및 관리</td>
                <td className="p-3">Atlas가 제공하는 리전(환경 설정에 따라 상이)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-2">※ 실제 사용 인프라·리전은 운영 설정에 따라 달라질 수 있으며, 변경 시 본 방침을 통해 고지합니다.</p>

        {/* 제7조 */}
        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">제7조 (정보주체 및 법정대리인의 권리·의무 및 그 행사방법)</h2>
        <ul className="list-disc pl-6 text-gray-800 space-y-1">
          <li>이용자는 언제든지 자신의 개인정보에 대해 조회·수정·삭제·처리정지를 요청할 수 있습니다.</li>
          <li>요청은 아래 개인정보 보호책임자에게 서면, 전화, 이메일로 하실 수 있으며, 회사는 지체 없이 조치합니다.</li>
          <li>오류 정정 요청 시 정정 완료 전까지 해당 개인정보는 이용 또는 제공하지 않습니다.</li>
        </ul>

        {/* 제8조 */}
        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">제8조 (개인정보 보호책임자)</h2>
        <ul className="list-disc pl-6 text-gray-800 space-y-1">
          <li>성명: 김성천</li>
          <li>직책: 대표</li>
          <li>연락처: +82-10-8925-2285</li>
          <li>이메일: koreagreenhydrogen@gmail.com</li>
        </ul>

        {/* 제9조 */}
        <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">제9조 (개인정보 처리방침 변경)</h2>
        <p className="text-gray-800">본 개인정보 처리방침은 시행일로부터 적용되며, 법령 및 내부 방침의 변경에 따라 내용이 추가·삭제·정정되는 경우 변경사항의 시행 7일 전부터 홈페이지 공지사항을 통해 고지합니다.</p>

        <p className="mt-8 text-sm text-gray-500">시행일: 2025-01-01</p>
      </div>
    </section>
  );
}



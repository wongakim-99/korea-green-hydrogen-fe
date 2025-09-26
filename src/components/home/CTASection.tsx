import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-sky-600 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          지속가능한 미래를 함께 만들어가세요
        </h2>
        <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
          Korea Green Hydrogen와 함께 친환경 수소 에너지로 더 나은 내일을 준비하세요.
        </p>
        <Link
          href="/contact"
          className="bg-white text-sky-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
        >
          지금 상담받기
        </Link>
      </div>
    </section>
  );
}

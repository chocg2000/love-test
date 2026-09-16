import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '개인정보처리방침 | 연애 MBTI 테스트',
  description: '연애 MBTI 테스트 서비스의 개인정보처리방침 및 구글 애드센스 쿠키 정책 안내입니다.',
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 py-6 px-2 text-gray-800 animate-fade-in">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/" className="text-purple-600 font-bold text-sm hover:underline flex items-center gap-1">
          ← 메인으로 돌아가기
        </Link>
        <span className="text-xs text-gray-400">시행일자: 2026년 9월 16일</span>
      </div>

      <h1 className="text-2xl font-extrabold text-purple-900 mb-6 pb-2 border-b border-purple-200">
        개인정보처리방침
      </h1>

      <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-base font-bold text-purple-800 mb-2">1. 총칙</h2>
          <p>
            ‘연애 MBTI 테스트’(이하 ‘서비스’)는 이용자의 개인정보를 중요시하며, 「개인정보 보호법」 및 관련 법령을 준수하고 있습니다.
            본 방침은 서비스가 이용자로부터 어떤 정보를 수집하고 어떻게 이용하며, 쿠키 및 제3자 광고 사업자와 관련하여 어떤 조치를 취하고 있는지 알려드립니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-purple-800 mb-2">2. 수집하는 개인정보 항목 및 방법</h2>
          <p>
            본 서비스는 회원가입이나 로그인 절차 없이 누구나 자유롭게 이용할 수 있는 무료 웹 테스트 서비스입니다.
            따라서 이용자의 이름, 주민등록번호, 연락처 등 고유식별정보를 직접 수집하거나 서버에 저장하지 않습니다.
            모든 MBTI 진단 및 점수 계산은 이용자의 브라우저 내에서만 안전하게 처리됩니다.
          </p>
        </section>

        <section className="bg-purple-50 p-4 rounded-xl border border-purple-100">
          <h2 className="text-base font-bold text-purple-900 mb-2">3. 구글 애드센스(Google AdSense) 및 제3자 쿠키(Cookie) 정책</h2>
          <p className="mb-2">
            본 웹사이트는 지속적인 무료 서비스 제공과 운영비 충당을 위해 구글 애드센스(Google LLC) 등 제3자 광고 사업자의 광고 서비스를 게재하고 있습니다.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700">
            <li>Google을 포함한 제3자 공급업체는 이용자가 본 웹사이트나 다른 웹사이트를 방문한 과거 기록을 바탕으로 맞춤형 광고를 게재하기 위해 쿠키(Cookie)를 사용합니다.</li>
            <li>Google의 광고 쿠키(DoubleClick 쿠키 등)를 사용하면 본 웹사이트 및 인터넷상의 다른 사이트 방문 기록을 바탕으로 Google과 그 파트너사가 적합한 맞춤형 광고를 이용자에게 표시할 수 있습니다.</li>
            <li>이용자는 <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline font-medium">Google 광고 설정</a>을 방문하여 개인 맞춤 광고 게재를 언제든지 사용 중지할 수 있습니다.</li>
            <li>또한, <a href="https://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline font-medium">aboutads.info</a>에 방문하여 제3자 공급업체의 맞춤형 광고용 쿠키 사용을 선택 해제할 수 있습니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold text-purple-800 mb-2">4. 쿠키(Cookie)의 설치·운영 및 거부</h2>
          <p>
            이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 웹 브라우저 상단의 도구 &gt; 인터넷 옵션 &gt; 개인정보 메뉴 설정을 통해 모든 쿠키를 허용하거나,
            쿠키가 저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다. 단, 쿠키 저장을 거부할 경우 일부 서비스 기능 이용에 불편이 있을 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-purple-800 mb-2">5. 개인정보 보호책임자 및 문의처</h2>
          <p>
            서비스 이용 중 발생하는 개인정보 보호 관련 민원이나 문의사항은 아래의 연락처로 문의해 주시기 바랍니다.
          </p>
          <div className="mt-2 bg-gray-50 p-3 rounded-lg border text-xs text-gray-600 space-y-1">
            <p><strong>책임자:</strong> 서비스 관리팀</p>
            <p><strong>이메일:</strong> <a href="mailto:contact@lovatest.com" className="text-purple-600 underline">contact@lovatest.com</a></p>
          </div>
        </section>

        <section>
          <h2 className="text-base font-bold text-purple-800 mb-2">6. 고지의 의무</h2>
          <p>
            현 개인정보처리방침 내용의 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일 전부터 서비스 화면을 통해 고지할 것입니다.
          </p>
        </section>
      </div>
    </main>
  );
}

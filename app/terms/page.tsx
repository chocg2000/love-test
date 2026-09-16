import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '이용약관 | 연애 MBTI 테스트',
  description: '연애 MBTI 테스트 서비스의 이용약관 및 서비스 면책 조항 안내입니다.',
};

export default function TermsPage() {
  return (
    <main className="flex-1 py-6 px-2 text-gray-800 animate-fade-in">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/" className="text-purple-600 font-bold text-sm hover:underline flex items-center gap-1">
          ← 메인으로 돌아가기
        </Link>
        <span className="text-xs text-gray-400">시행일자: 2026년 9월 16일</span>
      </div>

      <h1 className="text-2xl font-extrabold text-purple-900 mb-6 pb-2 border-b border-purple-200">
        서비스 이용약관
      </h1>

      <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-base font-bold text-purple-800 mb-2">제1조 (목적)</h2>
          <p>
            본 약관은 ‘연애 MBTI 테스트’(이하 ‘서비스’)가 제공하는 모든 심리 진단, 성향 분석 콘텐츠 및 부가 서비스의 이용조건 및 절차에 관한 기본적인 사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-purple-800 mb-2">제2조 (서비스의 내용 및 면책)</h2>
          <p className="mb-2">
            1. 본 서비스에서 제공하는 모든 테스트 결과(조선시대 신분, 플러팅 유형, 연애 흑역사 등)는 통계적 성향 분류와 심리학적 이론을 바탕으로 재구성한 엔터테인먼트형 콘텐츠입니다.
          </p>
          <p>
            2. 본 서비스의 결과는 의학적·법률적·전문 심리상담의 효력을 갖지 않으며, 결과에 따른 이용자의 주관적 판단 및 행동에 대해 서비스 운영진은 법적 책임을 지지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-purple-800 mb-2">제3조 (지적재산권의 귀속)</h2>
          <p>
            서비스가 제작한 문항, 일러스트, 캐릭터, 분석 텍스트 등에 대한 저작권 및 기타 지적재산권은 서비스 운영자에게 귀속됩니다.
            이용자는 서비스를 이용하여 얻은 정보를 운영자의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-purple-800 mb-2">제4조 (광고 및 제휴 링크 게재)</h2>
          <p>
            서비스는 이용자에게 양질의 무료 콘텐츠를 지속적으로 제공하기 위해 웹페이지 내에 제3자 광고(구글 애드센스 등) 및 제휴마케팅 링크(쿠팡 파트너스 등)를 게재할 수 있습니다.
          </p>
        </section>
      </div>
    </main>
  );
}

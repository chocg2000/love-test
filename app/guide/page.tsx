import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'MBTI 16개 유형별 연애 스타일 & 공략 가이드 | 연애 백과',
  description: '16가지 MBTI 성격 유형별 연애 특징, 이상형, 플러팅 방법 및 주의점 총정리 백과사전입니다.',
};

const MBTI_GUIDES = [
  {
    type: 'ISTJ',
    title: '원칙과 신뢰의 연애주의자',
    desc: '약속을 목숨처럼 여기며, 말보다 묵묵한 행동으로 사랑을 증명합니다. 가벼운 연애보다는 미래를 함께할 수 있는 안정적이고 진지한 관계를 선호합니다.',
    ideal: '시간 약속을 잘 지키고 예의 바르며 감정 기복이 적은 사람',
    tip: '감정 표현이 서툴 수 있으니 조급해하지 말고 꾸준한 신뢰를 보여주세요.',
  },
  {
    type: 'ISFJ',
    title: '다정하고 세심한 헌신형 연애가',
    desc: '상대방의 사소한 취향과 말 한마디까지 기억하며 정성껏 챙겨줍니다. 겉으로는 조용하지만 사랑하는 사람을 위해 아낌없이 헌신하는 따뜻한 심성의 소유자입니다.',
    ideal: '자신의 배려와 헌신을 당연하게 여기지 않고 진심으로 고마워할 줄 아는 사람',
    tip: '속상한 일이 있어도 참는 경향이 있으니 먼저 부드럽게 속마음을 물어봐 주세요.',
  },
  {
    type: 'INFJ',
    title: '영혼의 교감을 꿈꾸는 로맨티스트',
    desc: '표면적인 조건보다 마음의 깊이와 영혼의 소통을 중요하게 여깁니다. 마음을 여는 데 시간이 오래 걸리지만, 한 번 확신이 들면 흔들림 없는 헌신을 보입니다.',
    ideal: '도덕적이고 진중하며, 삶에 대한 깊은 대화를 편안하게 나눌 수 있는 사람',
    tip: '혼자만의 충전 시간이 반드시 필요한 유형이므로 개인 공간을 존중해 주는 배려가 필요합니다.',
  },
  {
    type: 'INTJ',
    title: '전략적이고 확고한 미래 지향가',
    desc: '연애도 인생의 중요한 프로젝트로 바라보며, 서로 발전할 수 있는 성숙한 관계를 추구합니다. 불필요한 감정 소모와 밀당을 매우 싫어합니다.',
    ideal: '자신의 영역에서 전문성이 있고 지적 호기심을 자극해 줄 수 있는 독립적인 사람',
    tip: '직설적인 화법 뒤에 진심이 담겨 있습니다. 논리적인 대화로 소통할 때 가장 편안함을 느낍니다.',
  },
  {
    type: 'ISTP',
    title: '쿨하지만 은근히 다정한 츤데레',
    desc: '구속과 집착을 가장 질색하며, 각자의 사생활을 존중하는 자유로운 연애를 추구합니다. 말은 무심하지만 행동으로 묵묵히 도와주는 실전파입니다.',
    ideal: '말이 잘 통하고 취미를 함께 즐길 수 있으면서도 적당한 거리를 둘 줄 아는 사람',
    tip: '너무 잦은 연락이나 감정의 강요는 부담스러워할 수 있으니 여유를 두고 지켜봐 주세요.',
  },
  {
    type: 'ISFP',
    title: '순수하고 감성적인 잔잔한 낭만파',
    desc: '다투는 것을 싫어하며 상대방에게 잘 맞춰주는 평화주의자입니다. 소소한 일상 속에서 함께 시간을 보내며 느끼는 소박한 행복을 소중히 여깁니다.',
    ideal: '따뜻하고 다정하며, 자신을 편안하게 만들어주고 배려심이 깊은 사람',
    tip: '거절을 잘 못하는 성격이므로 부담스럽지 않게 선택권을 주는 것이 좋습니다.',
  },
  {
    type: 'INFP',
    title: '운명적 사랑을 기다리는 동화 속 순정파',
    desc: '영화나 소설 같은 로맨틱한 인연을 꿈꿉니다. 순수하고 깊은 감수성을 지니고 있으며, 상대방의 마음을 섬세하게 읽어내는 공감 능력이 탁월합니다.',
    ideal: '자신의 가치관과 감성을 비판하지 않고 있는 그대로 이해해 주는 따뜻한 사람',
    tip: '작은 말 한마디에도 상처를 쉽게 받을 수 있으니 부드럽고 다정한 표현을 사용해 주세요.',
  },
  {
    type: 'INTP',
    title: '지적 매력에 이끌리는 호기심 탐구형',
    desc: '사랑도 지적인 탐구 대상으로 바라보며, 흥미로운 대화가 통할 때 깊은 매력을 느낍니다. 겉으론 무심해 보이지만 마음이 열리면 어린아이처럼 장난을 칩니다.',
    ideal: '상식이 풍부하고 유머 코드가 맞으며, 논리적이고 유연한 사고를 가진 사람',
    tip: '연애 신호를 눈치채지 못할 때가 많으므로 마음을 솔직하고 명확하게 전달하는 것이 좋습니다.',
  },
  {
    type: 'ESTP',
    title: '짜릿하고 열정적인 즉흥 직진파',
    desc: '좋아하는 사람이 생기면 망설이지 않고 직진합니다. 지루한 일상 데이트보다 활동적이고 스릴 있는 야외 데이트를 즐기며 분위기를 주도합니다.',
    ideal: '센스 있고 쿨하며, 새로운 도전을 두려워하지 않고 함께 신나게 놀 수 있는 사람',
    tip: '밀당하거나 시간을 끌면 금세 흥미를 잃을 수 있으니 반응을 시원시원하게 보여주세요.',
  },
  {
    type: 'ESFP',
    title: '온 세상을 밝히는 비타민 사랑꾼',
    desc: '순간의 감정에 솔직하며, 상대방을 즐겁고 행복하게 만들어주는 최고의 분위기 메이커입니다. 기념일이나 특별한 이벤트를 기획하는 것을 좋아합니다.',
    ideal: '리액션이 좋고 칭찬을 아끼지 않으며, 함께 있을 때 에너지를 북돋아 주는 사람',
    tip: '관심과 애정 표현을 적극적으로 해줄 때 가장 큰 사랑을 느낍니다.',
  },
  {
    type: 'ENFP',
    title: '열정과 아이디어가 샘솟는 자유로운 영혼',
    desc: '금세 사랑에 빠지며 상대방의 장점을 무한대로 발견해 내는 사랑스러운 타입입니다. 통통 튀는 매력과 유쾌한 대화로 상대방의 마음을 사로잡습니다.',
    ideal: '엉뚱한 상상력과 꿈을 지지해 주고, 감정 기복을 부드럽게 감싸줄 수 있는 어른스러운 사람',
    tip: '반복되는 지루한 패턴보다 가끔 깜짝 선물이나 새로운 장소 데이트를 제안해 보세요.',
  },
  {
    type: 'ENTP',
    title: '재치 넘치는 티키타카 밀당의 고수',
    desc: '위트 있는 말솜씨와 장난기로 상대방을 쥐락펴락합니다. 뻔한 연애를 거부하며, 서로에게 자극과 영감을 줄 수 있는 스마트한 파트너를 원합니다.',
    ideal: '자기 주관이 뚜렷하고 당당하며, 티키타카 대화 배틀을 즐길 줄 아는 위트 있는 사람',
    tip: '논쟁을 즐기지만 상대를 이기려는 게 아니라 관심의 표현입니다. 재치 있게 받아쳐 주세요.',
  },
  {
    type: 'ESTJ',
    title: '책임감 있고 든든한 리더형 낭군/여장부',
    desc: '연인과의 약속과 미래 계획을 철저하게 지켜내는 든든한 버팀목입니다. 애매한 관계를 싫어하며 솔직하고 명확한 소통을 가장 선호합니다.',
    ideal: '시간 관념이 철저하고 예의 바르며, 자신의 삶에 충실하고 똑 부러지는 사람',
    tip: '연애도 일처럼 이끌려 할 수 있으니 가끔은 편안하게 쉴 수 있는 분위기를 만들어주세요.',
  },
  {
    type: 'ESFJ',
    title: '사랑과 칭찬을 듬뿍 주는 헌신적 조력자',
    desc: '연인의 주변 지인과 가족까지 살뜰히 챙기는 정 많은 스타일입니다. 상대방이 무엇을 필요로 하는지 먼저 파악하고 섬세하게 채워줍니다.',
    ideal: '다정다감하고 표현이 풍부하며, 작은 배려에도 진심 어린 칭찬을 아끼지 않는 사람',
    tip: '자신의 헌신에 대한 감사의 말 한마디가 최고의 보상입니다. 칭찬을 듬뿍 아끼지 마세요.',
  },
  {
    type: 'ENFJ',
    title: '연인의 성장을 응원하는 따뜻한 멘토',
    desc: '상대방의 고민을 내 일처럼 공감하며, 함께 더 나은 사람이 되도록 이끌어주는 다정한 서포터입니다. 사람의 마음을 얻는 데 탁월합니다.',
    ideal: '진실되고 따뜻하며, 마음을 투명하게 열어 보이고 신뢰를 소중히 여기는 사람',
    tip: '남을 챙기느라 정작 자신의 피로는 숨길 때가 있으니 먼저 다정하게 챙겨주세요.',
  },
  {
    type: 'ENTJ',
    title: '주도적이고 확신에 찬 직진형 정복자',
    desc: '마음에 드는 상대가 나타나면 확신을 가지고 적극적으로 대시합니다. 서로에게 긍정적인 자극이 되고 함께 비전을 실현해 갈 파트너십을 추구합니다.',
    ideal: '자존감이 높고 배울 점이 많으며, 독립적이면서도 큰 목표를 향해 나아가는 사람',
    tip: '우유부단한 태도를 답답해할 수 있으니 자신의 생각과 의견을 분명하게 표현하는 것이 좋습니다.',
  },
];

export default function GuidePage() {
  return (
    <main className="flex-1 py-6 px-2 text-gray-800 animate-fade-in">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/" className="text-purple-600 font-bold text-sm hover:underline flex items-center gap-1">
          ← 메인으로 돌아가기
        </Link>
        <span className="text-xs text-gray-400">MBTI 연애 심층 분석집</span>
      </div>

      <div className="text-center mb-8">
        <div className="text-4xl mb-2">📚</div>
        <h1 className="text-2xl font-extrabold text-purple-900 leading-snug">
          MBTI 16개 유형별<br />
          <span className="text-pink-600">연애 성향 & 공략 가이드</span>
        </h1>
        <p className="text-xs text-gray-500 mt-2">
          각 성격 유형이 사랑에 빠지는 순간부터 이상형, 연애 팁까지 한눈에 확인하세요.
        </p>
      </div>

      <div className="space-y-6">
        {MBTI_GUIDES.map((item) => (
          <article
            key={item.type}
            className="bg-white/90 backdrop-blur rounded-2xl p-5 shadow-sm border border-pink-100/80 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="px-2.5 py-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-extrabold text-xs rounded-full">
                {item.type}
              </span>
              <h2 className="text-base font-bold text-purple-900 flex-1 ml-3">
                {item.title}
              </h2>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed mb-3">
              {item.desc}
            </p>

            <div className="bg-pink-50/60 rounded-xl p-3 text-[11px] space-y-1.5 border border-pink-100/60">
              <p>
                <strong className="text-pink-700">💘 이상형:</strong> {item.ideal}
              </p>
              <p>
                <strong className="text-purple-700">💡 연애 꿀팁:</strong> {item.tip}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold text-sm px-6 py-3 rounded-xl shadow hover:opacity-95 transition"
        >
          나의 연애 MBTI 지금 테스트하기 →
        </Link>
      </div>
    </main>
  );
}

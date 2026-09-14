# 연애 MBTI 테스트 웹사이트 - 진행 상황

## 완료된 작업

`index.html` 단일 파일로 완성형 웹사이트 제작 완료.

- **기술 스택**: HTML5 + Tailwind CSS(CDN) + Vanilla JS, 외부 라이브러리 없음, 서버/DB 없음
- **3가지 테스트 모드** (각 12문항, E/I·S/N·T/F·J/P 4문항씩 3문항)
  - 👑 조선시대 내 연애 신분 테스트
  - 💬 소개팅 카톡 플러팅 유형 테스트
  - 🤦‍♂️ 나의 연애 흑역사 유형 테스트
- **결과 콘텐츠**: MBTI 16유형 × 3모드 = 48개 결과(이모지+타이틀+3줄 설명) 전부 창작 완료
- **화면 흐름**: 메인 → 질문(프로그레스 바) → 3초 로딩(스피너, 전면광고 삽입용 주석 위치) → 결과
- **수익화 영역(placeholder)**: 구글 애드센스 배너, 쿠팡 파트너스 아웃링크 버튼, 카카오톡 공유/링크 복사 버튼
- **OG 메타 태그**: head에 틀 포함(실제 도메인/이미지로 교체 필요)
- JS 문법 Node로 검증 완료, Chrome/Edge에서 로컬 실행 확인 완료

## 배포 전 실제 값으로 교체해야 할 항목

`index.html` 내 주석으로 표시되어 있음:

- 구글 애드센스 `data-ad-client` / `data-ad-slot`
- 쿠팡 파트너스 딥링크 (`href="#"` 부분)
- 카카오톡 공유 SDK 키 (현재는 Web Share API 폴백으로만 동작)
- OG 메타 태그의 `og:image`, `og:url` (실제 배포 도메인)

## 로컬에서 열 때 참고사항

- 이 PC는 `.html` 기본 연결 프로그램이 **메모장**으로 되어 있어서 더블클릭하면 메모장이 열림 → 브라우저(Edge/Chrome)로 직접 열어야 함
- 경로에 공백과 특수문자(`(3가지 모드 통합형)`)가 있어서, PowerShell에서 `Start-Process`로 열 때 **경로를 따옴표로 감싸서 하나의 인자로 전달**해야 정상 동작함 (안 그러면 경로가 스페이스 기준으로 쪼개져 여러 개의 잘못된 탭이 열림)

```powershell
$path = "C:\Users\kimsj\OneDrive\바탕 화면\MBTI 및 연애 성향 테스트(3가지 모드 통합형)\index.html"
$quoted = '"' + $path + '"'
Start-Process -FilePath "msedge.exe" -ArgumentList $quoted
```

## 다음 단계 (진행 중)

배포 플랫폼으로 **GitHub Pages** 선택 완료.

완료된 것:
- `git init` + `main` 브랜치로 첫 커밋 완료 (index.html, README.md)

남은 것 (사용자가 브라우저에서 직접 해야 함, `gh` CLI 미설치):
1. https://github.com/new 에서 새 저장소 생성 (Public, 초기화 옵션 체크 해제)
2. 생성된 저장소 URL(`https://github.com/{계정명}/{저장소명}.git`)을 알려주면 `git remote add origin ...` + `git push -u origin main`으로 push 진행
3. push 후 저장소 Settings → Pages → Branch: main 으로 설정하면 `https://{계정명}.github.io/{저장소명}/` 에서 접속 가능

이후 실제 배포 전 [배포 전 실제 값으로 교체해야 할 항목](#배포-전-실제-값으로-교체해야-할-항목)도 처리 필요.

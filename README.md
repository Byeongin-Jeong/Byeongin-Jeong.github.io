# Developer Byeong-In Jeong Portfolio

[https://byeongin-jeong.github.io](https://byeongin-jeong.github.io)

Vite + React + TypeScript 기반의 개인 포트폴리오 사이트입니다.
소스코드 수정 없이 `src/config/` 안의 JSON 파일만 수정해서 내용을 업데이트할 수 있습니다.

## 시작하기

```bash
npm install      # 의존성 설치
npm run dev      # 로컬 개발 서버 (http://localhost:5173)
npm run build    # 프로덕션 빌드 (dist/ 생성)
npm run deploy   # 빌드 후 gh-pages 브랜치로 자동 배포
```

## 내용 수정

[src/config/](src/config/) 안의 JSON 파일만 수정하면 됩니다.

| 파일 | 내용 |
| --- | --- |
| `profile.json` | 이름, 직함, 자기소개, 연락처, 외부 링크 |
| `stats.json` | 헤더 아래 표시되는 통계 (경력 연차, 프로젝트 수 등) |
| `experience.json` | 경력 (회사, 직무, 기간, 주요 업무) |
| `projects.json` | 프로젝트 (이름, 설명, 기여 내역, 기술 스택) |
| `skills.json` | 보유 기술 (카테고리별) |
| `education.json` | 학력 |

배열에 항목을 추가/삭제하면 자동으로 반영됩니다.

## 배포

GitHub Pages는 `gh-pages` 브랜치를 서빙하도록 설정되어 있습니다.

```bash
npm run deploy
```

위 명령 한 번이면:
1. 프로덕션 빌드 (`vite build`)
2. `dist/` 내용을 `gh-pages` 브랜치로 push
3. 1~5분 내 사이트에 반영

소스코드는 `main` 브랜치에, 빌드 산출물은 `gh-pages` 브랜치에 분리되어 관리됩니다.

## 디렉토리 구조

```
src/
├── config/        # 모든 콘텐츠 (JSON)
├── sections/      # 각 섹션 컴포넌트 (config 읽어서 렌더링)
├── components/    # 공통 컴포넌트
├── App.tsx
├── main.tsx
├── index.css      # 전역 스타일 + 다크모드 변수
└── types.ts       # config 타입 정의
```

## 기술 스택

- Vite + React 18 + TypeScript
- 다크모드 지원 (시스템 설정 자동 감지 + 토글)
- 배포: gh-pages (npm)

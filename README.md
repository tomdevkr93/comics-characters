<p align="center">
    <img src="https://github.com/user-attachments/assets/1d0e9d09-cd35-492b-99f0-55d99a3f1252" alt="마블 로고" width=250 height=250>
</p>

<h1 align="center">🦸‍♂️ Marvel Explorer</h1>

<p align="center">
<a href="https://nextjs.org/">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js" alt="Next.js">
</a>
<a href="https://www.typescriptlang.org/">
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript" alt="TypeScript">
</a>
<a href="https://tanstack.com/query/latest">
  <img src="https://img.shields.io/badge/TanStack%20Query-5.0-ff4154?style=flat&logo=react-query" alt="TanStack Query">
</a>
<a href="https://next-auth.js.org/">
  <img src="https://img.shields.io/badge/NextAuth.js-4.0-green?style=flat&logo=next.js" alt="NextAuth.js">
</a>
<a href="https://developer.marvel.com/">
  <img src="https://img.shields.io/badge/Marvel%20API-Comics-red?style=flat&logo=marvel" alt="Marvel API">
</a>
<a href="https://github.com/tomdevkr93/marvel-explorer/blob/main/LICENSE">
<img src="https://img.shields.io/github/license/tomdevkr93/marvel-explorer?color=red" alt="라이선스: MIT" />
</a>
<a href="https://github.com/tomdevkr93/marvel-explorer">
<img src="https://img.shields.io/github/stars/tomdevkr93/marvel-explorer.svg?style=flat&logo=github&colorB=deeppink&label=stars" alt="GitHub 스타">
</a>

<br>
마블 익스플로러는 마블 코믹스 API를 사용하여 마블 캐릭터 목록과 상세 정보를 표시하는 Next.js 웹 애플리케이션입니다.<br />
마블 유니버스의 수백 명의 영웅과 빌런들을 둘러보고 그들의 능력과 특징을 확인할 수 있습니다.
<br>
<br>
이 프로젝트는 Next.js 14, TypeScript, TanStack Query를 사용한 효율적인 데이터 페칭, NextAuth.js를 이용한 인증 등 최신 웹 개발 기술을 적용하고 학습하기 위한 프로젝트입니다.
<br>
<a href="https://github.com/tomdevkr93/marvel-explorer/issues/new">버그 신고</a>
·
<a href="https://github.com/tomdevkr93/marvel-explorer/issues/new">기능 요청</a>
<br>
</p>

## 목차

- [목차](#목차)
- [스크린샷](#스크린샷)
- [빠른 시작](#빠른-시작)
- [프로젝트 구조](#프로젝트-구조)
- [사용된 기술](#사용된-기술)
- [개발 환경](#개발-환경)
- [CI/CD 파이프라인](#cicd-파이프라인)
- [라이선스](#라이선스)

## 스크린샷
[스크린샷 추가 예정]

<img src="https://github.com/user-attachments/assets/51ec4f60-e4ce-46a8-b655-4d07df2f8e0f" width="360" />


## 빠른 시작

Marvel Explorer를 시작하려면 다음 단계를 따르세요

1. 저장소 클론

   ```
   git clone https://github.com/tomdevkr93/marvel-explorer.git
   ```

2. 의존성 설치

   ```
   cd marvel-explorer
   yarn set version berry
   yarn install
   ```

3. 환경 변수 설정
   루트 디렉토리에 `.env.local` 파일을 생성하고 다음 내용을 추가하세요

   ```
   [수정 예정]
   MARVEL_PUBLIC_KEY=your_marvel_public_key
   MARVEL_PRIVATE_KEY=your_marvel_private_key
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. 개발 서버 실행:

   ```
   yarn dev
   ```

5. 브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 애플리케이션을 확인하세요.

## 프로젝트 구조

[추가 예정]

<!-- - **pages**: Next.js 페이지 및 API 라우트
- **components**: 재사용 가능한 React 컴포넌트
- **lib**: 핵심 유틸리티, API 클라이언트, 헬퍼 함수
- **hooks**: 커스텀 React 훅
- **types**: TypeScript 타입 정의
- **styles**: 전역 스타일 및 CSS 모듈

```
📦marvel-explorer
┣ 📂components
┃ ┣ 📂layout
┃ ┣ 📂ui
┃ ┗ 📂characters
┣ 📂pages
┃ ┣ 📂api
┃ ┣ 📂auth
┃ ┗ 📂characters
┣ 📂lib
┃ ┣ 📂api
┃ ┣ 📂auth
┃ ┗ 📂utils
┣ 📂hooks
┣ 📂types
┣ 📂styles
┣ 📜next.config.js
┣ 📜package.json
┗ 📜tsconfig.json
``` -->

## 사용된 기술

| 기술                                                | 사용 목적                                    |
| --------------------------------------------------- | -------------------------------------------- |
| [Next.js 14](https://nextjs.org/)                   | 웹 애플리케이션 구축을 위한 React 프레임워크 |
| [TypeScript](https://www.typescriptlang.org/)       | 정적 타이핑 및 개선된 개발자 경험            |
| [TanStack Query](https://tanstack.com/query/latest) | 데이터 페칭, 캐싱, 상태 관리                 |
| [NextAuth.js](https://next-auth.js.org/)            | 인증 및 세션 관리(CredentialsProvider, Google)   |
| [Marvel Comics API](https://developer.marvel.com/)  | 마블 캐릭터 및 코믹스 데이터 가져오기        |
| [ESLint](https://eslint.org/)                       | 코드 린팅 및 포맷팅                          |

## 개발 환경

- Node.js 18.x 이상
- npm 7.x 이상
- 권장 확장 프로그램이 설치된 VS Code (ESLint, Prettier)

## CI/CD 파이프라인

이 프로젝트는 지속적 통합 및 배포를 위해 GitHub Actions를 사용합니다. 파이프라인에는 다음이 포함됩니다:

- 푸시 및 풀 리퀘스트 시 자동 빌드 및 테스트
- ESLint를 사용한 코드 품질 검사
- main 브랜치 병합 시 Vercel로 자동 배포

## 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다 - 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

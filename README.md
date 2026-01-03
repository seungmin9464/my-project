# My Project

Vue 3 + TypeScript 기반의 개인 웹 프로젝트입니다.  
로그인을 시작으로 사용자(User) / 관리자(Admin) 권한을 분리한  
현대적이고 깔끔한 UI의 웹 애플리케이션을 만드는 것이 목표입니다.

---

## Project Structure

```text
my-project/
 ├─ frontend/   # Vue 3 + Vite + TypeScript
 └─ backend/    # (예정)

Tech Stack
Frontend
 ├─ Vue 3
 ├─ Vite
 ├─ TypeScript
 ├─ Vue Router
 └─ Tailwind CSS

Current Progress
 ├─ Vue 3 + TypeScript 프로젝트 초기 세팅
 ├─ Vue Router 적용
 ├─ Tailwind CSS 설정 완료
 ├─ 전역 스타일(Common CSS) 정리
 ├─ 로그인 페이지 UI 구현 (Light UI)
 ├─ 옅은 회색 배경 + 하얀 카드 레이아웃
 ├─ 반응형 및 PC 환경 고려
 └─ Login → Dashboard UX 흐름 구성 (임시)

Screens
 ├─ /login : 로그인 페이지
 └─ /dashboard : 로그인 후 메인 페이지 (구현 중)

Next Steps
 ├─ Pinia를 이용한 로그인 상태 관리
 ├─ User / Admin 권한 분기
 ├─ 대시보드 UI 구성
 ├─ 회원가입 / 비밀번호 찾기 페이지
 └─ Backend API 연동

Notes
 ├─ UI는 PC 환경 기준으로 설계
 ├─ 공통 스타일은 전역 CSS에서 관리
 └─ 기능보다 구조와 UX 흐름을 우선하여 개발

<div align="center"><img src="imgs/blog-logo.png"></div>

<img src="imgs/blog.png">

**[Features]**

```
- 회원가입 / 로그인
- 포스트 작성, 수정 및 삭제 기능
- 블로그 포스트 목록 및 포스트를 읽는 기능
```

**[Technology]**

```
FRONT-END
- JavaScript
- React.js
- Redux, Redux-saga
- Axios
- Styled-component

BACK-END
- Node.js
- Koa
- MongoDB
- JWT
- bcrypt
```

### > 회원가입 및 로그인

### > 포스트 작성

### > 포스트 수정 및 삭제

**[Project structure - FRONTEND]**

```
.
├─ README.md
├─ jsconfig.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  └─ ...
├─ src
│  ├─ components
│  │  ├─ auth
│  │  │  ├─ AuthForm.js
│  │  │  └─ AuthTemplate.js
│  │  ├─ base
│  │  │  └─ Header.js
│  │  ├─ common
│  │  │  ├─ AskModal.js
│  │  │  ├─ Button.js
│  │  │  ├─ Header.js
│  │  │  ├─ Responsive.js
│  │  │  ├─ SubInfo.js
│  │  │  └─ Tags.js
│  │  ├─ post
│  │  │  ├─ AskRemoveModal.js
│  │  │  ├─ PostActionButtons.js
│  │  │  └─ PostViewer.js
│  │  ├─ posts
│  │  │  ├─ PostList.js
│  │  │  └─ pagination.js
│  │  └─ write
│  │     ├─ Editor.js
│  │     ├─ TagBox.js
│  │     └─ WriteActionButtons.js
│  ├─ containers
│  │  ├─ auth
│  │  │  ├─ LoginForm.js
│  │  │  └─ RegisterForm.js
│  │  ├─ common
│  │  │  └─ HeaderContainer.js
│  │  ├─ post
│  │  │  └─ PostViewerContainer.js
│  │  ├─ posts
│  │  │  ├─ PaginationContainer.js
│  │  │  └─ PostListContainer.js
│  │  └─ write
│  │     ├─ EditorContainer.js
│  │     ├─ TagBoxContainer.js
│  │     └─ WriteActionButtonsContainer.js
│  ├─ lib
│  │  ├─ api
│  │  │  ├─ auth.js
│  │  │  ├─ client.js
│  │  │  └─ posts.js
│  │  ├─ createRequestSaga.js
│  │  └─ styles
│  │     └─ palette.js
│  ├─ modules
│  │  ├─ auth.js
│  │  ├─ index.js
│  │  ├─ loading.js
│  │  ├─ post.js
│  │  ├─ posts.js
│  │  ├─ user.js
│  │  └─ write.js
│  ├─ pages
│  │   ├─ LoginPage.js
│  │   ├─ PostListPage.js
│  │   ├─ PostPage.js
│  │   ├─ RegisterPage.js
│  │   └─ WritePage.js
│  ├─ App.css
│  ├─ App.js
│  ├─ App.test.js
│  ├─ index.css
│  ├─ index.js
│  ├─ logo.svg
│  ├─ reportWebVitals.js
│  └─ setupTests.js
│
```

**[Project structure - BACKEND]**

```
.
├─ jsconfig.json
├─ package.json
├─ src
│  ├─ api
│  │  ├─ auth
│  │  │  ├─ auth.ctrl.js
│  │  │  └─ index.js
│  │  ├─ index.js
│  │  └─ posts
│  │     ├─ index.js
│  │     └─ posts.ctrl.js
│  ├─ createFakeData.js
│  ├─ index.js
│  ├─ lib
│  │  ├─ checkLoggedIn.js
│  │  └─ jwtMiddleware.js
│  ├─ main.js
│  └─ models
│     ├─ post.js
│     └─ user.js
│
```

**[Reference]**

```
리액트를 다루는 기술
```

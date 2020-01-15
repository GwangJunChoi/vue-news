# used
* node 
* vue
* github
[Vuejs style guide](https://vuejs.org/v2/style-guide/)

# API Information
* hacker news
  * [공식사이트](https://news.ycombinator.com/)
  * [API 문서 주소](https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md)
# vue cli
* [공식사이트](https://cli.vuejs.org/)
>##### insatll
```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```
>##### create a projeect
```
vue create my-project
# OR
vue ui
```
>##### vue webpack 설정 
* [vue webpack 설정 ](https://cli.vuejs.org/guide/webpack.html#simple-configuration)
```
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      new MyAwesomeWebpackPlugin()
    ]
  }
}

```
>##### vue preset 
* vue 프로젝트 기본적인 구성
```
//vue create <프로젝트명>
default(babel, eslint)
Manually selectfeatures
```

# Eslint
* javascript 코드에 특정 스타일과 규칙을 적용해서 문제를 사전에 찾고 패턴을 적용시킬 수 있는 정적 분석 툴
* package.json eslint 설정
```
//컴포넌트 script 라인에 주석 추가시 적용 X
/* eslint-disable */
```
* [lintOnSave](https://cli.vuejs.org/config/#lintonsave)
```
//vue.config.js
//주석 추가에 상관없이 eslint 미적용
module.exports = {
  lintOnSave: false
}
```
# 라우터 기본
>##### 라우터 설치
```
npm i vue-router --save

//package.json
//dependencies 웹을 실행시키는데 필요한 비지니스 혹은 라이브러리 (배포시 포함되야 하는 라이브러리)
"dependencies": {
  "core-js": "^3.4.4",
  "vue": "^2.6.10",
  "vue-router": "^3.1.3"
},
```
```
//app.vue
<router-view></router-view>
//router/index.js
export const router = new VueRouter({
  routes: [
    {
      // path: url 주소
      path: "/news",
      // componetn: url 주소로 갔을 때 표시될 컴포넌트
      component: NewsView
    },
    {
      path: "/ask",
      component: AskView
    },
    {
      path: "/jobs",
      component: JobsView
    }
  ]
});

```
>##### redirect && router-link
```
redirect
{
  path: '/',
  redirect: 'news',
},
```
```
//App.vue
import ToolBar from './components/ToolBar.vue';
// 1 - Strongly Recommended
<ToolBar></ToolBar>
// 2 - Essential
<tool-bar></tool-bar>
```
```
//router-link
<router-link to="/news">News</router-link>
<router-link to="/ask">Ask</router-link>
<router-link to="/jobs">Jobs</router-link>
```
>##### 라우터 폴더 작명 팁과 라우터 mode 
* router -> routes 폴더명 변경
```
//hash 값이 제거된 url
export const router = new VueRouter({
  mode: 'history',
  routes: [
  ]
});
```
* [케밥 케이스 컴포넌트 스타일 가이드 (Essential)](https://vuejs.org/v2/style-guide/#Multi-word-component-names-essential)
* [파스칼 케이스 컴포넌트 스타일 가이드 (Strongly Recommended)](https://vuejs.org/v2/style-guide/#Component-name-casing-in-templates-strongly-recommended)

>##### axios 설치
* vue 비동기 통신
```
npm i axios --save
```
```
//node_modules 폴더 axios 사용
import axios from 'axios'

axios.get(``)
  .then(response => {})
  .catch(error => {})
```
>###### es6 화살표 함수 this
```
//this works
fetchNewsList()
  .then(response => {
    this.users = response.data;
  })
  .catch(error => {
    console.log(error);
  });
```
```
//this not works
fetchNewsList()
  .then(function(response) => {
    this.users = response.data;
  })
  .catch(function(error) => {
    console.log(error);
  });
```
```
var vm = this;
fetchNewsList()
  .then(function(response) => {
    vm.users = response.data;
  })
  .catch(function(error) => {
    console.log(error);
  });
```
>##### js 비동기
* [비동기 처리와 콜백 함수](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)
* Promise 객체 뒤에만 then catch 사용 가능
* [Promise MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [프로미스 쉽게 이해하기 글 주소](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)
```
//promise
function callajax(){
  return new Promise(function(resolve, reject){
          $.ajax({
            url:'',
            success: function(data){
              resolve(data);
            },
          });
        });
}
callajax()
  .then(function(data){

  });
```
# vuex
>##### vuex 설치
```
npm i vuex
```
>##### vuex flow
```
callAPI -> Actions -> (commit) -> Mutations -> (Mutate) -> State -> (Reder) -> Vue Components
```
```
//actinos -> (commit)
//context 객체로 mutations 접근
actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then(response => {
          context.commit('SET_NEWS', response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  } 
```
```
//actinos -> (Mutate)
mutations: {
  SET_NEWS(state, data) {
    state.news = data;
  }
},
```

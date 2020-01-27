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
>##### mapState (Object Spread Operator)
```
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'fetchedAsk',
    ])
    // ...mapGetters({
    //   ask : 'fetchedAsk',
    // })
    // ...mapState({
    //   ask: state => state.ask
    // })
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
```
# 동적 라우트 매칭 원리 및 적용
* [Dynamic Route Matching 공식 문서](https://router.vuejs.org/guide/essentials/dynamic-matching.html)
* [해커 뉴스 API 문서 주소](https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md)
* [ES6 템플릿 리터럴 설명 글(e북)](https://joshua1988.github.io/es6-online-book/template-literal.html)
>##### routes/index.js
```
import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/user/:id',
      component: UserView
    }
  ]
});
```
>##### vue page anchor tag
```
<router-link v-bind:to="'/user' + item.user">{{ item.user }}</router-link>
<router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
```
>##### views/UserView.vue
```
export default {
    created() {
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName);
    }
}
```
>##### v-html
* [v-html API 문서](https://vuejs.org/v2/api/#v-html)
* [v-html과 데이터 바인딩 차이점 문서](https://vuejs.org/v2/guide/syntax.html#Raw-HTML)
* html 태그 그래도 적용 
```
<div v-html="fetchedItem.content"></div>
```

>##### router Transition
* [라우터 트랜지션 문서](https://router.vuejs.org/guide/advanced/transitions.html#per-route-transition)
* [뷰트랜지션 문서](https://vuejs.org/v2/guide/transitions.html)
```
<transition name="fade">
  <router-view></router-view>
</transition>
```
```
//style
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
```
>##### route name
```
//routes/index.js
{
  // path: url 주소
  path: '/news',
  name: 'news',
  // componetn: url 주소로 갔을 때 표시될 컴포넌트
  component: NewsView,
},
```
```
//components/ vue 파일
console.log(this.$route.name);
```

>##### slot
* 상위 컴포넌트에서 내용을 채움
```
//components/UserProfile.vue
<template>
  <div class="user-container">
    <div>
        <i class="fas fa-user"></i>
    </div>
    <div class="user-descrition">
      <slot name="username"></slot>            
      <div class="time">
        <slot name="time"></slot>
      </div>
      <slot name="karma"></slot>
    </div>
  </div>
</template>
```
```
//views/ItemView.vue
<template>
  <div>
    <section>
      <user-profile>
        <div slot="username">{{ fetchedItem.user }}</div>
        <template slot="time">{{ fetchedItem.time_ago }}</template>
      </user-profile> 
    </section>    
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(['fetchedItem']),    
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  },
}
</script>
```
```
//views/UserView.vue
<template>  
  <div>
    <user-profile>
      <div slot="username">{{ userInfo.id }}</div>
      <template slot="time">{{ userInfo.created }}</template>
      <div slot="karma">{{ userInfo.karma }}</div>
    </user-profile>
    <!-- <p>id : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p>
    <p>{{ userInfo.about }}</p> -->
  </div>  
</template>
<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  },
}
</script>
```
# 컴포넌트 재활용 
>##### mixin 
* 여러 컴포넌트 간에 공통으로 사용하고 있는 로직, 기능들을 재사용하는 방법
* 정의할 수 있는 재사용 로깆은 data, methods, created 등 컴포넌트 옵션
```
ex))
var newMixins = {
  //component options
};
new Vue({
  mxins: [newMixins]
});
```
>##### HOC
* 컴포넌트 코드 재사용
* 컴포넌트 깊이 깊어짐
* 같은 ui/ux 재사용
```
//views/createListView.js
import ListView from './ListView.vue';
import bus from "../utils/bus.js";

export default function createListView(name) {
  return {
    //재사용 인스턴스(컴포넌트) 옵션
    name: 'HOC Component',,,,,,,,,,,,,
    created() {
      bus.$emit("start:spinner");
      setTimeout(() => {
        this.$store
          .dispatch("FETCH_LIST", this.$route.name)
          .then(() => {
            bus.$emit("end:spinner");
          })
          .catch(error => {
            console.log(error);
          });
      }, 1000);
    },
    render(createElement) {
      return createElement(ListView);
    },
  }
}
```
```
//routes/index.js
import Vue from "vue";
import VueRouter from "vue-router";
import CreateListView from '../views/CreateListView.js';

Vue.use(VueRouter);

export const router = new VueRouter({
         mode: "history",
         routes: [
           {
             path: "/",
             redirect: "news"
           },
           {
             // path: url 주소
             path: "/news",
             name: "news",
             // componetn: url 주소로 갔을 때 표시될 컴포넌트
             //component: NewsView,
             component: CreateListView("NewsView")
           },
         ]
       });
```
```
//views/ListView.vue
<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
export default {
  components: {
    ListItem,
  }
}
</script>
```
# [데이터 호출 시점]
* 컴포넌트 라이프 사이클 훅
  ** create
# 라우터 네비게이션 가드
  * 특정 URL 접근전 동작을 정의
  * 특정 URL 접근시 해당 URL의 접근을 막는 방법
  * [네비게이션 블로그 글](https://joshua1988.github.io/web-development/vuejs/vue-router-navigation-guards/)
  * [네비게이션 가드 뷰 라어투 공식 문서](https://router.vuejs.org/guide/advanced/navigation-guards.html#global-guards)
```
export const router = new VueRouter({
         mode: "history",
         routes: [
           {
             // path: url 주소
             path: "/news",
             name: "news",
             component: NewsView,
             beforeEnter: (to, from, next) => {
               //to 이동할 URL의 라우팅 정보
               //from 현재 위치 URL
               //next function 호출 해당 url로 이동
               next();
             }
           },
         ]
       });
```       
```
const Login = {
  template: '<p>Login Component</p>',
  beforeRouteEnter (to, from, next) {
    // Login 컴포넌트가 화면에 표시되기 전에 수행될 로직
    // Login 컴포넌트는 아직 생성되지 않은 시점
  },
  beforeRouteUpdate (to, from, next) {
    // 화면에 표시된 컴포넌트가 변경될 때 수행될 로직
    // `this`로 Login 컴포넌트를 접근할 수 있음
  },
  beforeRouteLeave (to, from, next) {
    // Login 컴포넌트를 화면에 표시한 url 값이 변경되기 직전의 로직
    // `this`로 Login 컴포넌트를 접근할 수 있음
  }
}
```
# async & await
* 자바스크립트 비동기 처리 패턴
* 비동기 -> 동기식으로 프로그래밍할 수 있게
```
aync function fetch() {
  //Promise 객체를 반환하는 호출 함수 앞에 await
  var data = await getFetch();
  console.log(data);//[1, 2]
}
```
```
function getFetch(){
  return new Promise(function(resolve, reject){
    var data = ['1', '2'];
    resolve(data);
  });
}
```
```
FETCH_LIST({ commit }, pageName) {
  return fetchList(pageName)
    .then(response => {
      commit("SET_LIST", response.data);
      return response;
    })
    .catch(error => {
      console.log(error);
    });
}
```
```
async FETCH_LIST(context, pageName){
  const response = await fetchList(pageName);
  context.commit('SET_LIST', response.data);
  return response;//어떤것을 리턴해도 promise 객체 리턴
}
```
# 외부 라이브러리 모듈화
* Vue.js 관련 라이브러리 없을 때 일반 라이브러리 결합
* 차트, 데이트 피커, 테이블, 스피너 등등
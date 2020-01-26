import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
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
             component: CreateListView("NewsView")
           },
           {
             path: "/ask",
             name: "ask",
             component: CreateListView("AskView")
           },
           {
             path: "/jobs",
             name: "jobs",
             component: CreateListView("JobsView")
           },
           {
             path: "/user/:id",
             component: UserView
           },
           {
             path: "/item/:id",
             component: ItemView
           }
         ]
       });
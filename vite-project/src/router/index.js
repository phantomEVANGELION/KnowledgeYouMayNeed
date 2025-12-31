// router/index.js
// 功能：集中管理全站路由（首页 / 分类页 / 文章页）

import { createRouter, createWebHistory } from 'vue-router';

// ====================
// 页面组件
// ====================

// 基础页面
import Home from '../views/Home.vue';
import About from '../views/About.vue';

// 分类页面
import Animals from '../views/Animals.vue';
import Travel from '../views/Travel.vue';
import Cook from '../views/Cook.vue';
import Health from '../views/Health.vue';

// ====================
// 文章页面（动物）
// ====================
import Animal1 from '../article-contents/animals/animal-1.vue';
import Animal2 from '../article-contents/animals/animal-2.vue';
import Animal3 from '../article-contents/animals/animal-3.vue';

// ====================
// 文章页面（做菜）
// ====================
import Cook1 from '../article-contents/cook/cook-1.vue';
import Cook2 from '../article-contents/cook/cook-2.vue';
import Cook3 from '../article-contents/cook/cook-3.vue';

// ====================
// 文章页面（旅行）
// ====================
import Travel1 from '../article-contents/travel/travel-1.vue';
import Travel2 from '../article-contents/travel/travel-2.vue';
import Travel3 from '../article-contents/travel/travel-3.vue';

// ====================
// 文章页面（健康）
// ====================
import Health1 from '../article-contents/health/health-1.vue';
import Health2 from '../article-contents/health/health-2.vue';
import Health3 from '../article-contents/health/health-3.vue';

// ====================
// 路由表
// ====================

const routes = [
  // 首页 & 关于
  { path: '/', component: Home },
  { path: '/about', component: About },

  // 分类页
  { path: '/animals', component: Animals },
  { path: '/travel', component: Travel },
  { path: '/cook', component: Cook },
  { path: '/health', component: Health },

  // 动物文章
  { path: '/article/animal-1', component: Animal1 },
  { path: '/article/animal-2', component: Animal2 },
  { path: '/article/animal-3', component: Animal3 },

  // 做菜文章
  { path: '/article/cook-1', component: Cook1 },
  { path: '/article/cook-2', component: Cook2 },
  { path: '/article/cook-3', component: Cook3 },

  // 旅行文章
  { path: '/article/travel-1', component: Travel1 },
  { path: '/article/travel-2', component: Travel2 },
  { path: '/article/travel-3', component: Travel3 },

  // 健康文章
  { path: '/article/health-1', component: Health1 },
  { path: '/article/health-2', component: Health2 },
  { path: '/article/health-3', component: Health3 },
];

// ====================
// 创建路由实例
// ====================

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // 每次切换页面回到顶部
    return { top: 0 };
  },
});

export default router;

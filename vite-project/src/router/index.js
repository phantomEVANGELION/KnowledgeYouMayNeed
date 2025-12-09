// ==============================
// Vue Router 配置文件 (router/index.js)
// 功能：定义应用的所有路由规则和页面组件映射
// ==============================

// ==============================
// 1. 导入依赖
// ==============================

// 导入 Vue Router 核心函数
import { createRouter, createWebHistory } from 'vue-router';

// ==============================
// 2. 导入页面级组件
// ==============================

// 主页面组件
import Home from '../views/Home.vue';          // 首页
import About from '../views/About.vue';        // 关于页面

// 分类页面组件
import Animals from '../views/Animals.vue';    // 动物分类页
import Travel from '../views/Travel.vue';      // 旅行分类页
import Cook from '../views/Cook.vue';          // 料理分类页
import Health from '../views/Health.vue';      // 健康分类页

// ==============================
// 3. 导入文章详情组件
// ==============================

// 动物分类文章
import Animal1 from '../article-contents/animals/animal-1.vue';
import Animal2 from '../article-contents/animals/animal-2.vue';
import Animal3 from '../article-contents/animals/animal-3.vue';

// 料理分类文章
import Cook1 from '../article-contents/cook/cook-1.vue';
import Cook2 from '../article-contents/cook/cook-2.vue';
import Cook3 from '../article-contents/cook/cook-3.vue';

// 旅行分类文章
import Travel1 from '../article-contents/travel/travel-1.vue';
import Travel2 from '../article-contents/travel/travel-2.vue';
import Travel3 from '../article-contents/travel/travel-3.vue';

// 健康分类文章
import Health1 from '../article-contents/health/health-1.vue';
import Health2 from '../article-contents/health/health-2.vue';
import Health3 from '../article-contents/health/health-3.vue';

// ==============================
// 4. 路由配置数组
// ==============================

/**
 * 路由配置说明：
 * 1. 每个路由对象包含 path（路径）和 component（组件）
 * 2. 路径区分大小写
 * 3. 组件需要提前导入
 */

const routes = [
  // ====================
  // 主页面路由
  // ====================
  
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '首页' }
  },
  
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: '关于' }
  },
  
  // ====================
  // 分类页面路由
  // ====================
  
  {
    path: '/animals',
    name: 'Animals',
    component: Animals,
    meta: { title: '动物' }
  },
  
  {
    path: '/travel',
    name: 'Travel',
    component: Travel,
    meta: { title: '旅行' }
  },
  
  {
    path: '/cook',
    name: 'Cook',
    component: Cook,
    meta: { title: '料理' }
  },
  
  {
    path: '/health',
    name: 'Health',
    component: Health,
    meta: { title: '健康' }
  },
  
  // ====================
  // 文章详情页路由
  // ====================
  
  // 动物分类文章
  {
    path: '/article/animal-1',
    name: 'AnimalArticle1',
    component: Animal1,
    meta: { title: '动物文章1', category: 'animals' }
  },
  
  {
    path: '/article/animal-2',
    name: 'AnimalArticle2',
    component: Animal2,
    meta: { title: '动物文章2', category: 'animals' }
  },
  
  {
    path: '/article/animal-3',
    name: 'AnimalArticle3',
    component: Animal3,
    meta: { title: '动物文章3', category: 'animals' }
  },
  
  // 料理分类文章
  {
    path: '/article/cook-1',
    name: 'CookArticle1',
    component: Cook1,
    meta: { title: '料理文章1', category: 'cook' }
  },
  
  {
    path: '/article/cook-2',
    name: 'CookArticle2',
    component: Cook2,
    meta: { title: '料理文章2', category: 'cook' }
  },
  
  {
    path: '/article/cook-3',
    name: 'CookArticle3',
    component: Cook3,
    meta: { title: '料理文章3', category: 'cook' }
  },
  
  // 旅行分类文章
  {
    path: '/article/travel-1',
    name: 'TravelArticle1',
    component: Travel1,
    meta: { title: '旅行文章1', category: 'travel' }
  },
  
  {
    path: '/article/travel-2',
    name: 'TravelArticle2',
    component: Travel2,
    meta: { title: '旅行文章2', category: 'travel' }
  },
  
  {
    path: '/article/travel-3',
    name: 'TravelArticle3',
    component: Travel3,
    meta: { title: '旅行文章3', category: 'travel' }
  },
  
  // 健康分类文章
  {
    path: '/article/health-1',
    name: 'HealthArticle1',
    component: Health1,
    meta: { title: '健康文章1', category: 'health' }
  },
  
  {
    path: '/article/health-2',
    name: 'HealthArticle2',
    component: Health2,
    meta: { title: '健康文章2', category: 'health' }
  },
  
  {
    path: '/article/health-3',
    name: 'HealthArticle3',
    component: Health3,
    meta: { title: '健康文章3', category: 'health' }
  },
  
  // 注意：添加新路由时，请保持格式一致，不要忘记结尾的逗号
];

// ==============================
// 5. 创建路由实例
// ==============================

/**
 * 创建并配置 Vue Router 实例
 * @property {Object} history - 使用 HTML5 History 模式
 * @property {Array} routes - 路由配置数组
 */
const router = createRouter({
  // 使用 HTML5 History 模式（需要服务器配置支持）
  history: createWebHistory(),
  
  // 路由配置
  routes,
  
  // 可选的滚动行为配置
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的位置（浏览器前进/后退），则恢复到该位置
    if (savedPosition) {
      return savedPosition;
    }
    // 否则滚动到页面顶部
    return { top: 0 };
  }
});

// ==============================
// 6. 全局路由守卫（可选扩展）
// ==============================

/**
 * 全局前置守卫
 * 可用于：权限验证、页面标题设置等
 */
router.beforeEach((to, from, next) => {
  // 设置页面标题
  const pageTitle = to.meta?.title || '我的网站';
  document.title = `${pageTitle} - 我的博客`;
  
  // 继续路由导航
  next();
});

/**
 * 全局后置守卫
 * 可用于：页面访问统计等
 */
router.afterEach((to, from) => {
  // 可以在这里添加页面访问统计代码
  console.log(`导航完成：从 ${from.path} 到 ${to.path}`);
});

// ==============================
// 7. 导出路由实例
// ==============================

// 导出路由实例，供 main.js 使用
export default router;
})

// 导出路由实例（在main.js中使用）
export default router
// fix: trigger git update

// 导入Vue Router核心函数和组件
import { createRouter, createWebHistory } from 'vue-router'
// 导入页面组件
import Home from '../views/Home.vue'  // 首页
import Animals from '../views/Animals.vue'  // 动物分类页
import Travel from '../views/Travel.vue'  // 旅游分类页
import Cook from '../views/Cook.vue'  // 做菜分类页
import Health from '../views/Health.vue'  // 健康分类页
import About from '../views/About.vue'

// 导入文章详情页组件（按需导入）
import Animal1 from '../article-contents/animals/animal-1.vue'
import Animal2 from '../article-contents/animals/animal-2.vue'
import Animal3 from '../article-contents/animals/animal-3.vue'
import Cook1 from '../article-contents/cook/cook-1.vue'
import Cook2 from '../article-contents/cook/cook-2.vue'
import Cook3 from '../article-contents/cook/cook-3.vue'
import Travel2 from '../article-contents/travel/travel-2.vue'
import Travel3 from '../article-contents/travel/travel-3.vue'
import Travel4 from '../article-contents/travel/travel-4.vue'
import Travel1 from '../article-contents/travel/travel-1.vue'
import Health1 from '../article-contents/health/health-1.vue'
import Health2 from '../article-contents/health/health-2.vue'
import Health3 from '../article-contents/health/health-3.vue'



// 路由配置数组
const routes = [
  // 在routes数组中添加
  { path: '/', component: Home },  // 首页路由
  { path: '/about', component: About },
  { path: '/animals', component: Animals },
  { path: '/travel', component: Travel },
  { path: '/cook', component: Cook },
  { path: '/health', component: Health },

  // 路径对应文章id(就按照这个写法(如果要添加的话)，不要特立独行！！！)，组件对应具体详情页
  { path: '/article/animal-1', component: Animal1 },
  { path: '/article/animal-2', component: Animal2 },
  { path: '/article/animal-3', component: Animal3 },
  { path: '/article/cook-1', component: Cook1 },
  { path: '/article/cook-2', component: Cook2 },
  { path: '/article/cook-3', component: Cook3 },
  { path: '/article/travel-1', component: Travel1 },
  { path: '/article/travel-2', component: Travel2 },
  { path: '/article/travel-3', component: Travel3 },
  { path: '/article/travel-4', component: Travel4 },
<<<<<<< HEAD
  { path: '/article/health-1', component: Health1 },
  { path: '/article/health-2', component: Health2 },
  { path: '/article/health-3', component: Health3 },
=======
  { path: '/atricle/health-1', component: Health1 },
  { path: '/atricle/health-2', component: Health2 },
  { path: '/atricle/health-3', component: Health3 },
>>>>>>> 6fc6fc1e141455c14af0d004b0d937c274f90aa3
  // 这里可继续添加其他文章的路由配置，结尾不要忘了','
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),  // 使用HTML5
  routes  // 关联路由配置
})

// 导出路由实例（在main.js中使用）
export default router
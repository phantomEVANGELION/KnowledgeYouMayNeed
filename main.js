// ==============================
// Vue 应用入口文件 (main.js)
// ==============================

import { createApp } from 'vue';
import './style.css';          // 引入全局样式
import App from './App.vue';   // 引入根组件
import router from './router/index.js'; // 引入路由配置

/**
 * 创建并配置 Vue 应用实例
 * 步骤：
 * 1. 使用 createApp() 创建 Vue 应用实例，传入根组件 App
 * 2. 使用 .use() 方法安装路由插件
 * 3. 使用 .mount() 方法将应用挂载到指定的 DOM 元素
 */
const app = createApp(App);

// 安装路由插件
app.use(router);

// 将应用挂载到 id 为 "app" 的 DOM 元素
app.mount('#app');
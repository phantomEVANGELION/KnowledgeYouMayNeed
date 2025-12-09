<template>
  <!-- 顶部导航栏组件
       功能：提供网站主导航和主题切换功能
       特性：固定在顶部，支持亮色/暗色主题切换 -->
  <nav class="navbar" :class="theme">
    <!-- 导航栏内容容器，用于居中布局 -->
    <div class="navbar-inner">
      
      <!-- 主要导航链接区域（居中显示） -->
      <div class="nav-center">
        <RouterLink class="nav-link" to="/">
          首页
        </RouterLink>
        <RouterLink class="nav-link" to="/animals">
          动物
        </RouterLink>
        <RouterLink class="nav-link" to="/cook">
          料理
        </RouterLink>
        <RouterLink class="nav-link" to="/health">
          健康
        </RouterLink>
        <RouterLink class="nav-link" to="/travel">
          旅行
        </RouterLink>
      </div>

      <!-- 右侧功能区：主题切换按钮 -->
      <div class="nav-right">
        <ThemeButton />
      </div>

    </div>
  </nav>
</template>

<script setup>
// ==============================
// 组件导入和依赖注入
// ==============================

import ThemeButton from './ThemeButton.vue';
import { inject } from 'vue';

/**
 * 注入全局主题相关的状态和方法
 * @type {import('vue').InjectionKey} theme - 当前主题 ('light' 或 'dark')
 * @type {import('vue').InjectionKey} toggleTheme - 切换主题的函数
 */
const theme = inject('theme');
const toggleTheme = inject('toggleTheme');
</script>

<style scoped>
/* ==============================
   导航栏基础样式
   ============================== */

/* 固定定位的导航栏容器 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: var(--navbar-bg);
  z-index: 999;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  transition: 
    background 0.25s ease,
    color 0.25s ease;
}

/* ==============================
   主题相关样式
   ============================== */

/* 明亮主题样式 */
.navbar.light {
  --navbar-bg: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(8px);
  --nav-text: #1c1c1c;
}

/* 深色主题样式 */
.navbar.dark {
  --navbar-bg: #1c1f2b;    /* 深蓝灰色背景，视觉效果更佳 */
  --nav-text: #e2e8f0;
}

/* ==============================
   布局容器样式
   ============================== */

/* 导航栏内部容器：限制最大宽度并居中 */
.navbar-inner {
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* ==============================
   导航链接区域样式
   ============================== */

/* 居中导航链接容器 */
.nav-center {
  display: flex;
  gap: 2rem;
}

/* 导航链接基本样式 */
.nav-link {
  color: var(--nav-text);
  text-decoration: none;
  font-size: 1.05rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

/* 导航链接悬停效果 */
.nav-link:hover {
  opacity: 0.7;
}

/* ==============================
   右侧功能区样式
   ============================== */

/* 右侧按钮容器：绝对定位在右侧 */
.nav-right {
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
}
</style>

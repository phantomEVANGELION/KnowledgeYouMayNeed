<template>
  <!-- 应用根组件
       功能：提供全局布局结构和主题管理
       特性：包含导航栏、路由视图和主题切换逻辑 -->
  <div id="app-wrapper">
    <!-- 顶部导航栏 -->
    <Navbar />
    
    <!-- 路由视图容器：根据路由显示不同页面 -->
    <router-view />
  </div>
</template>

<script setup>
// ==============================
// 全局应用配置和状态管理
// ==============================

import Navbar from './components/Navbar.vue';
import { ref, provide, onMounted } from 'vue';

/**
 * 主题状态管理
 * 从 localStorage 读取用户上次选择的主题，默认为 'light'
 * @type {import('vue').Ref<'light'|'dark'>}
 */
const theme = ref(localStorage.getItem('theme') || 'light');

/**
 * 切换应用主题
 * 1. 切换主题状态
 * 2. 更新 HTML 根元素的 data-theme 属性
 * 3. 保存用户偏好到 localStorage
 */
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme.value);
  localStorage.setItem('theme', theme.value);
};

/**
 * 初始化主题设置
 * 确保应用启动时应用正确的主题
 */
const initializeTheme = () => {
  document.documentElement.setAttribute('data-theme', theme.value);
};

// 组件挂载时初始化主题
onMounted(() => {
  initializeTheme();
});

// ==============================
// 全局状态提供
// ==============================

/**
 * 向所有子组件提供主题相关状态和方法
 * @provide {Ref<'light'|'dark'>} theme - 当前主题状态
 * @provide {Function} toggleTheme - 切换主题的函数
 */
provide('theme', theme);
provide('toggleTheme', toggleTheme);
</script>

<style>
/* ==============================
   全局重置和基础样式
   ============================== */

/* 重置 body 和 html 的默认边距 */
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

/* 应用包装器样式 */
#app-wrapper {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh; /* 确保至少占满整个视口高度 */
  font-family: "Microsoft YaHei", sans-serif;
  background-color: var(--bg-color, #ffffff); /* 使用CSS变量，支持主题切换 */
  color: var(--text-color, #333333); /* 使用CSS变量，支持主题切换 */
}

/* ==============================
   布局调整样式
   ============================== */

/* 为固定导航栏预留空间 */
#app-wrapper {
  padding-top: 70px; /* 与导航栏高度保持一致 */
}

/* ==============================
   全局主题变量定义
   ============================== */

/* 明亮主题变量 */
[data-theme="light"] {
  --bg-color: #ffffff;
  --text-color: #333333;
  --card-bg: #f8f9fa;
  --border-color: #e0e0e0;
}

/* 深色主题变量 */
[data-theme="dark"] {
  --bg-color: #1a1a1a;
  --text-color: #e0e0e0;
  --card-bg: #2d2d2d;
  --border-color: #404040;
}
</style>

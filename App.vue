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
 * 3. 
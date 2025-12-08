<template>
  <div id="app-wrapper">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import { ref, provide } from 'vue'

const theme = ref(localStorage.getItem('theme') || 'light')

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem('theme', theme.value)
}

document.documentElement.setAttribute('data-theme', theme.value)

// 全局提供
provide('theme', theme)
provide('toggleTheme', toggleTheme)
</script>

<style>
body, html, #app-wrapper {
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  font-family: "Microsoft YaHei", sans-serif;
}

/* 让内容避开 70px 的导航栏 */
#app-wrapper {
  padding-top: 70px;
}
</style>


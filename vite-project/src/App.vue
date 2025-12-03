<template>
  <div id="app-wrapper">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
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


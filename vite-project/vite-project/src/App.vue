<template>
<<<<<<< HEAD
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

=======
    <router-view />
</template>
>>>>>>> 6fc6fc1e141455c14af0d004b0d937c274f90aa3

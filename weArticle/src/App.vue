<template>
  <div>
    <nav class="navbar">
      <router-link to="/">首页</router-link>
      <router-link to="/animals">动物世界</router-link>
      <router-link to="/travel">旅游推荐</router-link>
      <router-link to="/cook">做菜推荐</router-link>
      <router-link to="/health">健康科普</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
.navbar {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 15px;
  background-color: #333;
}
.navbar a {
  color: white;
  text-decoration: none;
}
.navbar a.router-link-active {
  font-weight: bold;
  color: #ffd700;
}
</style>

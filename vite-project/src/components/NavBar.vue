<template>
  <nav class="navbar">
    <div class="navbar-inner">

      <!-- 居中导航栏 -->
      <div class="nav-center">
        <RouterLink class="nav-link" to="/">首页</RouterLink>
        <RouterLink class="nav-link" to="/travel">旅行</RouterLink>
        <RouterLink class="nav-link" to="/cook">料理</RouterLink>
        <RouterLink class="nav-link" to="/health">健康</RouterLink>
        <RouterLink class="nav-link" to="/animals">动物</RouterLink>
      </div>

      <!-- 右侧按钮 -->
      <div class="nav-right">
        <ThemeButton />
      </div>

    </div>
  </nav>
</template>

<script setup>
import ThemeButton from './ThemeButton.vue'
</script>

<style scoped>
/* 固定导航栏 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 70px;          /* 导航栏统一高度 */
  background: white;

  z-index: 999;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}

/* 内部容器，让内容水平居中 */
.navbar-inner {
  width: 100%;
  max-width: 1200px;      /* 居中宽度 */
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center; /* ⭐ 关键，让 nav-center 真正居中 */
  position: relative;
}

/* 居中链接 */
.nav-center {
  display: flex;
  gap: 2rem;
}

/* 右侧按钮 */
.nav-right {
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
}

/* 链接样式 */
.nav-link {
  color: #222;
  text-decoration: none;
  font-size: 1.05rem;
  font-weight: 500;
}

.nav-link:hover {
  color: #666;
}
</style>

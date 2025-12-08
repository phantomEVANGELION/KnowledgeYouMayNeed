<template>
  <nav class="navbar" :class="theme">
    <div class="navbar-inner">

      <!-- 居中导航栏 -->
      <div class="nav-center">
        <RouterLink class="nav-link" to="/">首页</RouterLink>
         <RouterLink class="nav-link" to="/animals">动物</RouterLink>
         <RouterLink class="nav-link" to="/cook">料理</RouterLink>
         <RouterLink class="nav-link" to="/health">健康</RouterLink>
        <RouterLink class="nav-link" to="/travel">旅行</RouterLink>
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
import { inject } from 'vue'

// 注入全局主题
const theme = inject('theme')
const toggleTheme = inject('toggleTheme')
</script>

<style scoped>
/* 固定导航栏 */
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
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  transition: background 0.25s ease, color 0.25s ease;
}

/* 明亮模式导航栏 */
.navbar.light {
  --navbar-bg: rgba(255,255,255,0.86);
  backdrop-filter: blur(8px);
  --nav-text: #1c1c1c;
}

/* 黑夜模式导航栏 */
.navbar.dark {
  --navbar-bg: #1c1f2b;    /* 深蓝灰，比纯黑好看 100 倍 */
  --nav-text: #e2e8f0;
}


/* 内部容器 */
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
  color: var(--nav-text);
  text-decoration: none;
  font-size: 1.05rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-link:hover {
  opacity: 0.7;
}
</style>

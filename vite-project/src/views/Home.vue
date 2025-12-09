<template>
  <!-- 首页组件
       功能：展示网站欢迎信息和主要分类导航
       特性：包含欢迎标语、分类按钮和关于按钮 -->
  <div class="home">
    <!-- 内容覆盖层：显示在背景之上 -->
    <div class="overlay">
      <!-- 主标题 -->
      <h1 class="welcome-title">欢迎来到知识世界</h1>
      
      <!-- 副标题 -->
      <p class="welcome-subtitle">探索自然、旅游、美食与健康的奇妙旅程。</p>
      
      <!-- 关于按钮（来自 Uiverse.io 的设计） -->
      <button @click="navigateToAbout" class="learn-more">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">关于网页</span>
      </button>

      <!-- 分类导航按钮组 -->
      <div class="category-buttons">
        <router-link to="/animals" class="category-btn">
          动物世界
        </router-link>
        <router-link to="/cook" class="category-btn">
          做菜推荐
        </router-link>
        <router-link to="/health" class="category-btn">
          健康科普
        </router-link>
        <router-link to="/travel" class="category-btn">
          旅游攻略
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// ==============================
// 首页组件逻辑
// ==============================

import { useRouter } from 'vue-router';

// 获取路由实例
const router = useRouter();

/**
 * 导航到关于页面
 * 当用户点击"关于网页"按钮时触发
 */
const navigateToAbout = () => {
  router.push('/about');
};
</script>

<style scoped>
/* ==============================
   首页容器样式
   ============================== */

.home {
  height: 100vh; /* 占满整个视口高度 */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: 
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
    linear-gradient(135deg, #667eea 0%, #764ba2 100%); /* 渐变背景作为备用 */
}

/* 背景视频样式（如果后续添加视频背景） */
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

/* ==============================
   内容覆盖层样式
   ============================== */

.overlay {
  position: relative;
  z-index: 1;
  color: #ffffff;
  text-align: center;
  padding: 0 20px;
  max-width: 800px;
}

/* ==============================
   文字内容样式
   ============================== */

.welcome-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.welcome-subtitle {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
}

/* ==============================
   分类按钮组样式
   ============================== */

.category-buttons {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.category-btn {
  position: relative;
  font-size: 1.1rem;
  text-decoration: none;
  padding: 1em 2.5em;
  display: inline-block;
  cursor: pointer;
  border-radius: 6em;
  transition: all 0.3s ease;
  border: none;
  font-family: inherit;
  font-weight: 500;
  color: #333333;
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.5);
  overflow: hidden;
  backdrop-filter: blur(10px);
}

/* 深色模式下的分类按钮 */
.dark .category-btn {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* 分类按钮悬停效果 */
.category-btn:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 15px 30px rgba(0, 0, 0, 0.3),
    0 0 0 2px rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 1);
}

.dark .category-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

/* 分类按钮激活效果 */
.category-btn:active {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* 分类按钮动画伪元素 */
.category-btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s ease;
  background-color: #ffffff;
  opacity: 0.5;
}

.dark .category-btn::after {
  background-color: rgba(255, 255, 255, 0.1);
}

/* 悬停时伪元素动画 */
.category-btn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

/* ==============================
   "关于网页"按钮样式
   ============================== */

.learn-more {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  width: 12rem;
  height: auto;
  margin-bottom: 2rem;
}

/* 按钮圆形部分 */
.learn-more .circle {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0 auto;
  width: 3rem;
  height: 3rem;
  background: linear-gradient(45deg, #19925c, #1abc9c);
  border-radius: 1.625rem;
  box-shadow: 0 4px 15px rgba(25, 146, 92, 0.3);
}

/* 深色模式下的按钮圆形 */
.dark .learn-more .circle {
  background: linear-gradient(45deg, #ffffff, #e0e0e0);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
}

/* 按钮图标 */
.learn-more .circle .icon {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0.625rem;
  margin: auto;
  background: #ffffff;
  width: 1.125rem;
  height: 0.125rem;
}

/* 深色模式下的按钮图标 */
.dark .learn-more .circle .icon {
  background: #282936;
}

/* 箭头图标 */
.learn-more .circle .icon.arrow::before {
  position: absolute;
  content: "";
  top: -0.29rem;
  right: 0.0625rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid #ffffff;
  border-right: 0.125rem solid #ffffff;
  transform: rotate(45deg);
}

/* 深色模式下的箭头 */
.dark .learn-more .circle .icon.arrow::before {
  border-top: 0.125rem solid #282936;
  border-right: 0.125rem solid #282936;
}

/* 按钮文字 */
.learn-more .button-text {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: #19925c;
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* 深色模式下的按钮文字 */
.dark .learn-more .button-text {
  color: #ffffff;
}

/* 悬停效果 */
.learn-more:hover .circle {
  width: 100%;
  background: linear-gradient(45deg, #16a085, #1abc9c);
}

.dark .learn-more:hover .circle {
  background: linear-gradient(45deg, #282936, #3a3b4a);
}

.learn-more:hover .circle .icon.arrow {
  background: #ffffff;
  transform: translate(1rem, 0);
}

.dark .learn-more:hover .circle .icon.arrow {
  background: #ffffff;
}

.learn-more:hover .button-text {
  color: #ffffff;
}

.dark .learn-more:hover .button-text {
  color: #282936;
}

/* ==============================
   响应式设计
   ============================== */

@media (max-width: 768px) {
  .welcome-title {
    font-size: 2.5rem;
  }
  
  .welcome-subtitle {
    font-size: 1.2rem;
  }
  
  .category-buttons {
    gap: 15px;
  }
  
  .category-btn {
    padding: 0.8em 1.8em;
    font-size: 1rem;
  }
  
  .learn-more {
    width: 10rem;
  }
}

@media (max-width: 480px) {
  .welcome-title {
    font-size: 2rem;
  }
  
  .welcome-subtitle {
    font-size: 1rem;
  }
  
  .category-buttons {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  
  .category-btn {
    width: 80%;
    max-width: 250px;
  }
}
</style>

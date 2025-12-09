<template>
  <!-- 关于页面组件
       功能：展示网站的介绍信息和项目背景
       特性：包含项目说明、板块介绍和返回按钮 -->
  <div class="about-page">
    <!-- 页面主标题 -->
    <h1 class="page-title">关于知识世界</h1>

    <!-- 项目介绍段落 -->
    <div class="content-section">
      <p class="paragraph">
        此次项目旨在创建一个"新"文章资源分享网站雏形，设计思想为跳出传统电子书的限制，
        利用网页布局，给文章增添更多交互型动画、卡片、图片。受到平台阅读网站的启发，
        本网站采用两个主题模式以适配不同情况。
      </p>

      <p class="paragraph">
        目前此网站共有 4 个文章板块，分别是：
      </p>
      
      <!-- 板块列表 -->
      <ul class="category-list">
        <li class="category-item">
          <span class="category-number">1.</span>
          <span class="category-name">动物世界</span>
          <span class="category-desc">方便对自然世界感兴趣的青少年学习生态知识。</span>
        </li>
        <li class="category-item">
          <span class="category-number">2.</span>
          <span class="category-name">旅游攻略</span>
          <span class="category-desc">为想旅行的人提供路线与建议。</span>
        </li>
        <li class="category-item">
          <span class="category-number">3.</span>
          <span class="category-name">做菜推荐</span>
          <span class="category-desc">帮助年轻人学习健康食谱，提高生活品质。</span>
        </li>
        <li class="category-item">
          <span class="category-number">4.</span>
          <span class="category-name">健康科普</span>
          <span class="category-desc">帮助大学生养成良好习惯，维持良好体魄。</span>
        </li>
      </ul>
    </div>

    <!-- 返回按钮 -->
    <button @click="goBack" class="back-button" aria-label="返回首页">
      <svg class="svgIcon" viewBox="0 0 384 512" aria-hidden="true">
        <path
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        ></path>
      </svg>
      <span class="button-text">返回首页</span>
    </button>
  </div>
</template>

<script setup>
// ==============================
// 关于页面组件逻辑
// ==============================

import { useRouter } from 'vue-router';

const router = useRouter();

/**
 * 返回上一页或首页
 * 使用路由的 go(-1) 方法返回浏览历史中的上一页
 */
const goBack = () => {
  router.go(-1);
};
</script>

<style scoped>
/* ==============================
   页面容器样式
   ============================== */

.about-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 60px 20px;
  min-height: calc(100vh - 70px); /* 减去导航栏高度 */
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ==============================
   标题样式
   ============================== */

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 40px;
  color: var(--text-color);
  text-align: center;
  position: relative;
}

.page-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #1aa879, #1c6ea8);
  border-radius: 2px;
}

/* ==============================
   内容区域样式
   ============================== */

.content-section {
  width: 100%;
  margin-bottom: 40px;
}

/* 段落样式 */
.paragraph {
  text-align: left;
  line-height: 1.8;
  margin-bottom: 25px;
  font-size: 1.1rem;
  color: var(--text-color);
  opacity: 0.9;
}

/* ==============================
   分类列表样式
   ============================== */

.category-list {
  list-style: none;
  padding: 0;
  margin: 30px 0;
  width: 100%;
}

.category-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
  padding: 20px;
  background: var(--card-bg, rgba(255, 255, 255, 0.1));
  border-radius: 12px;
  border-left: 4px solid #1aa879;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.category-item:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-left-width: 6px;
}

.category-number {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1aa879;
  margin-right: 15px;
  min-width: 25px;
}

.category-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-color);
  margin-right: 15px;
  min-width: 100px;
}

.category-desc {
  font-size: 1rem;
  color: var(--text-color);
  opacity: 0.8;
  flex: 1;
  line-height: 1.6;
}

/* ==============================
   返回按钮样式
   ============================== */

.back-button {
  margin: 40px auto 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1aa879, #1c6ea8);
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 4px 15px rgba(26, 168, 121, 0.3),
    0 0 0 4px rgba(180, 160, 255, 0.15);
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  overflow: hidden;
  position: relative;
  color: white;
}

/* 按钮图标 */
.svgIcon {
  width: 18px;
  height: 18px;
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.svgIcon path {
  fill: currentColor;
}

/* 按钮文字（默认隐藏） */
.button-text {
  font-size: 0;
  opacity: 0;
  white-space: nowrap;
  transition: all 0.4s ease;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

/* 按钮悬停效果 */
.back-button:hover {
  width: 160px;
  border-radius: 50px;
  background: linear-gradient(135deg, #b5a0ff, #1aa879);
  box-shadow: 
    0 6px 20px rgba(181, 160, 255, 0.4),
    0 0 0 4px rgba(181, 160, 255, 0.2);
}

.back-button:hover .svgIcon {
  transform: translate(-50%, -200%);
  opacity: 0;
}

.back-button:hover .button-text {
  font-size: 16px;
  opacity: 1;
}

/* 按钮激活效果 */
.back-button:active {
  transform: scale(0.95);
  box-shadow: 
    0 2px 10px rgba(181, 160, 255, 0.4),
    0 0 0 4px rgba(181, 160, 255, 0.1);
}

/* ==============================
   深色模式适配
   ============================== */

/* 深色模式下的样式调整 */
[data-theme="dark"] .about-page {
  color: #e0e0e0;
}

[data-theme="dark"] .category-item {
  background: rgba(255, 255, 255, 0.05);
  border-left-color: #2ecc71;
}

[data-theme="dark"] .category-number {
  color: #2ecc71;
}

/* ==============================
   响应式设计
   ============================== */

@media (max-width: 768px) {
  .about-page {
    padding: 40px 15px;
  }
  
  .page-title {
    font-size: 2rem;
    margin-bottom: 30px;
  }
  
  .paragraph {
    font-size: 1rem;
  }
  
  .category-item {
    flex-direction: column;
    padding: 15px;
  }
  
  .category-name {
    margin-bottom: 5px;
    min-width: auto;
  }
  
  .back-button:hover {
    width: 140px;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 1.8rem;
  }
  
  .category-item {
    margin-bottom: 15px;
    padding: 12px;
  }
  
  .back-button {
    width: 45px;
    height: 45px;
  }
  
  .back-button:hover {
    width: 120px;
  }
  
  .back-button:hover .button-text {
    font-size: 14px;
  }
}
</style>

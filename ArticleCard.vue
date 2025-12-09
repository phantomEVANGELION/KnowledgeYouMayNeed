<template>
  <!-- 文章卡片组件
       功能：展示文章摘要信息，点击整张卡片可跳转到文章详情页
       交互：鼠标悬停时有多种视觉效果（卡片浮动、图片缩放、标签动画等） -->
  <div 
    class="article-card" 
    @click="handleCardClick"
  >
    <!-- 内层容器：用于实现双层渐变边框和悬停缩放效果 -->
    <div class="article-card-inner">
      <!-- 卡片内容区域 -->
      <div class="card-content">
        <!-- 文章封面图片 -->
        <div class="image-container">
          <img 
            :src="article.image" 
            :alt="article.title" 
            class="card-image"
          />
        </div>
        
        <!-- 文章标签列表 -->
        <div class="card-tags">
          <span 
            v-for="tag in article.tags" 
            :key="tag" 
            class="tag"
          >
            {{ tag }}
          </span>
        </div>
        
        <!-- 文章标题（最多显示2行，超出部分省略） -->
        <h3 class="card-title">{{ article.title }}</h3>
        
        <!-- 文章描述（最多显示2行，超出部分省略） -->
        <p class="card-desc">{{ article.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// ==============================
// 组件逻辑部分
// ==============================

import { useRouter } from 'vue-router';

// 初始化路由实例
const router = useRouter();

/**
 * 定义组件接收的属性（Props）
 * @property {Object} article - 文章数据对象
 * @property {string} article.id - 文章唯一标识（用于路由跳转）
 * @property {string} article.title - 文章标题
 * @property {string} article.image - 文章封面图URL
 * @property {Array<string>} article.tags - 文章标签数组
 * @property {string} article.description - 文章描述/摘要
 */
const props = defineProps({
  article: {
    type: Object,
    required: true,
    default: () => ({
      id: '',
      title: '',
      image: '',
      tags: [],
      description: '',
      // 如需添加更多字段，请在此处添加，并确保添加逗号分隔
    }),
  },
});

/**
 * 处理卡片点击事件
 * 跳转到对应的文章详情页面
 */
const handleCardClick = () => {
  router.push(`/article/${props.article.id}`);
};
</script>

<style scoped>
/* ==============================
   卡片整体样式
   ============================== */

/* 外层卡片容器：实现渐变边框效果 */
.article-card {
  box-sizing: border-box;
  max-width: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  background-image: linear-gradient(163deg, #ff1900 0%, #ffbc05 100%);
  border: 1px solid #f0f0f0;
}

/* 深色模式下的渐变边框 */
.dark .article-card {
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
}

/* 卡片悬停效果：上浮和阴影变化 */
.article-card:hover {
  transform: translateY(-6px);
  box-shadow: 0px 0px 30px 1px rgba(255, 123, 0, 0.3);
}

/* 深色模式下的悬停阴影 */
.dark .article-card:hover {
  box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
}

/* ==============================
   内层卡片样式
   ============================== */

/* 内层容器：白色背景，实现悬停缩放效果 */
.article-card-inner {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  transition: all 0.2s ease;
}

/* 深色模式下的内层背景 */
.dark .article-card-inner {
  background-color: #101620;
}

/* 内层悬停效果：轻微缩放和圆角变化 */
.article-card-inner:hover {
  transform: scale(0.98);
  border-radius: 10px;
}

/* ==============================
   图片区域样式
   ============================== */

/* 图片容器：添加边框和圆角 */
.image-container {
  border-radius: 3%;
  width: 100%;
  border: 1px solid #c5c2c2;
}

/* 文章封面图片样式 */
.card-image {
  display: block;
  margin: 6px auto;
  border-radius: 5%;
  width: 91%;
  height: 160px;
  object-fit: cover;
  transition: all 0.5s ease;
}

/* 卡片悬停时的图片缩放效果 */
.article-card:hover .card-image {
  transform: scale(1.1);
}

/* ==============================
   内容区域样式
   ============================== */

/* 卡片内容区域内边距 */
.card-content {
  padding: 16px;
}

/* ==============================
   标签样式
   ============================== */

/* 标签容器 */
.card-tags {
  margin-bottom: 0px;
  margin-top: 10px;
}

/* 单个标签样式 */
.tag {
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 6px;
  background-color: #e8f4fd;
  padding: 2px 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #2c9caf;
  transition: all 1000ms ease;
  font-size: 12px;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  outline: 1.5px solid #2c9caf;
}

/* 深色模式下的标签背景 */
.dark .tag {
  background-color: #7fd3e2;
}

/* 标签悬停效果 */
.tag:hover {
  color: #ffffff;
  transform: scale(1.1);
  outline: 2px solid #70bdca;
  box-shadow: 4px 5px 17px -4px #268391;
}

/* 深色模式下标签悬停时的伪元素背景 */
.dark .tag::before {
  background-color: #075376;
}

/* 标签动画伪元素：实现斜向填充效果 */
.tag::before {
  content: "";
  position: absolute;
  left: -50px;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #2c9caf;
  transform: skewX(45deg);
  z-index: -1;
  transition: width 1000ms ease;
}

/* 悬停时伪元素宽度变化，实现填充动画 */
.tag:hover::before {
  width: 250%;
}

/* ==============================
   标题样式
   ============================== */

/* 文章标题：限制2行显示，超出部分省略 */
.card-title {
  margin: 0 0 10px 0;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ==============================
   描述文本样式
   ============================== */

/* 文章描述：限制2行显示，超出部分省略 */
.card-desc {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
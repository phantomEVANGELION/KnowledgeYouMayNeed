<template>
  <!-- 文章卡片，点击跳转到对应文章详情页 -->
  <div class="article-card" @click="$router.push(`/article/${article.id}`)">
    <div class="article-card1">
      <div class="card-content">
        <!-- 图片 -->
        <div class="image-container">
          <img :src="article.image" :alt="article.title" class="card-image">
        </div>
        <!-- 标签列表 -->
        <div class="card-tags">
          <span v-for="tag in article.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <!-- 标题 -->
        <h3 class="card-title">{{ article.title }}</h3>
        <!-- 简述 -->
        <p class="card-desc">{{ article.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 定义组件接收的props：文章数据
defineProps({
  article: {
    type: Object,  // 类型为对象
    required: true,  // 必传参数
    default: () => ({  // 默认值（防止未传参时报错）
      id: '',  // 文章唯一标识（对应详情页路由）
      title: '',  // 文章标题
      image: '',  // 封面图路径
      tags: [],  // 标签数组
      description: ''  // 描述文本
      //如果还要添加就在这里写，不要忘了','
    })
  }
})
</script>

<style scoped>
/* 卡片容器样式*/
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
.dark .article-card1 {
  background-color: #101620;
}
.dark .article-card {
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
}
.article-card1 {
  width: 100%;
  height: 100%;

  background-color: #ffffff;
  transition: all .2s;
}
.article-card1:hover {
  transform: scale(0.98);
  border-radius: 10px;
}
/* 卡片鼠标悬停效果 */
.article-card:hover {
  transform: translateY(-6px); 
  box-shadow: 0px 0px 30px 1px rgba(255, 123, 0, 0.3);
}
.dark .article-card:hover {
  box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
}

/* 图片容器：增加顶部圆角和间距 */
.image-container {
  border-radius: 3%;
  width: 100%;
  border: 1px solid #c5c2c2;
}

/* 封面图样式 */
.card-image {
  display: block;
  margin: 6px auto;
  border-radius: 5%;
  width: 91%;
  height: 160px;
  object-fit: cover;
  transition: all 0.5s ease; 
}
.article-card:hover .card-image {
  transform: scale(1.1); /* 悬停时图片微缩放 */
}

/* 卡片容器 */
.card-content {
  padding: 16px;
}

/* 标签样式 */
.card-tags {
  margin-bottom: 0px;
  margin-top: 10px;
}
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
  transition: all 1000ms;
  font-size: 12px;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  outline: 1.5px solid #2c9caf;
}
.tag:hover {
  color: #ffffff;
  transform: scale(1.1);
  outline: 2px solid #70bdca;
  box-shadow: 4px 5px 17px -4px #268391;
}
.dark .tag {
  background-color: #7fd3e2;
}
.dark .tag:before {
  background-color: #075376;
}
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
  transition: width 1000ms;
}

.tag:hover::before {
  width: 250%;
}

/* 标题样式 */
.card-title {
  margin: 0 0 10px 0;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  display: -webkit-box; /* 标题超出2行省略 */
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 文本样式，超出2行的内容省略 */
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
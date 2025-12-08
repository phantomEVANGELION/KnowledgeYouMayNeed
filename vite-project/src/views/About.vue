<template>
  <div class="about-page">
    <h1>关于知识世界</h1>

    <p class="paragraph">
          此次项目旨在创建一个“新”文章资源分享网站雏形，设计思想为跳出传统电子书的限制，
      利用网页布局，给文章增添更多交互型动画、卡片、图片。受到平台阅读网站的启发，
      本网站采用两个主题模式以适配不同情况。
    </p>

    <p class="paragraph">
      目前此网站共有 4 个文章板块，分别是：
      <br>1. 动物世界：方便对自然世界感兴趣的青少年学习生态知识。</br>
      <br>2. 旅游攻略：为想旅行的人提供路线与建议。</br>
      <br>3. 做菜推荐：帮助年轻人学习健康食谱，提高生活品质。</br>
      <br>4. 健康科普：帮助大学生养成良好习惯，维持良好体魄。</br>
    </p>

    <button @click="$router.go(-1)" class="back-button">
      <svg class="svgIcon" viewBox="0 0 384 512">
        <path
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        ></path>
      </svg>
    </button>
  </div>
</template>

<style scoped>
.about-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  color: rgb(25, 104, 130);
}

/* 所有段落统一左对齐 + 合适间距 */
.paragraph {
  text-align: left;
  line-height: 1.8;
  margin-bottom: 20px;
  color: rgb(25, 104, 130);
}

/* 返回按钮 */
.back-button {
  margin: 40px auto 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(26, 176, 121);
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 0px 4px rgba(180, 160, 255, 0.253);
  cursor: pointer;
  transition-duration: 0.6s;
  overflow: hidden;
  position: relative;
}

.svgIcon {
  width: 12px;
  transition-duration: 0.6s;
}

.svgIcon path {
  fill: white;
}

.back-button:hover {
  width: 140px;
  border-radius: 50px;
  transition-duration: 0.6s;
  background-color: rgb(181, 160, 255);
}

.back-button:hover .svgIcon {
  transform: translateY(-200%);
}

.back-button::before {
  position: absolute;
  bottom: -20px;
  content: "Back homepage";
  color: white;
  font-size: 0px;
}

.back-button:hover::before {
  font-size: 13px;
  bottom: unset;
  transition-duration: 0.6s;
}
</style>

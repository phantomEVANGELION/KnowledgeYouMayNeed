<template>
  <div class="about-page">
    <h1>关于知识世界</h1>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此次项目旨在创建一个“新”文章资源分享网站雏形，设计思想为跳出传统电子书的限制，利用网页布局，给文章增添更多交互型动画、卡片、图片以及视频。受到许多平台阅读网站的启发，本网站采用两个主题模式以满足不同阅读喜好的人群。
    </p>
    <p class="main-1">
      目前此网站共有4个文章板块，分别是
      <br>&nbsp;&nbsp;1.动物世界。方便对于自然世界感兴趣的青少年学习探索生态知识。</br>
      <br>&nbsp;&nbsp;2.旅游攻略。为想去各个地方旅游的人提供方案，帮助他们获得更好的旅行体验。</br>
      <br>&nbsp;&nbsp;3.做菜推荐。帮助年轻人们学习健康食谱，提供更好的生活保障。</br>
      <br>&nbsp;&nbsp;4.健康科普。帮助大学生们养成良好的生活习惯，拥有健康强壮的体魄。</br>
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
  }
  .main-1 {
    margin: 20px auto;
    display: flex;
    justify-content: center;
    text-align: left;
  }
  /* 返回按钮 */
  .back-button {
    margin: auto;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(20, 20, 20);
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
    align-items: center;
  }

  .back-button:hover .svgIcon {
    transition-duration: 0.6s;
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
    opacity: 1;
    bottom: unset;
    transition-duration: 0.6s;
  }
</style>
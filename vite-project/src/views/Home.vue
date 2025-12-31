<template>
  <div class="home">
    <div class="overlay">
      <h1>欢迎来到知识世界</h1>
      <p>探索自然、旅游、美食与健康的奇妙旅程。</p>

      <!-- From Uiverse.io by cssbuttons-io -->
      <button class="learn-more" @click="handleClick">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">关于网页</span>
      </button>

      <div class="category-buttons">
        <router-link to="/animals" class="category-btn">动物世界</router-link>
        <router-link to="/cook" class="category-btn">做菜推荐</router-link>
        <router-link to="/health" class="category-btn">健康科普</router-link>
        <router-link to="/travel" class="category-btn">旅游攻略</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

// 创建路由实例
const router = useRouter()

// 跳转到关于页面
const handleClick = () => {
  router.push('/about')
}
</script>

<style scoped>
/* 页面主体 */
.home {
  height: 100vh;
  overflow: hidden;
}

/* 背景视频（预留） */
.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  box-sizing: border-box;
}

/* 覆盖层 */
.overlay {
  z-index: 1;
  color: rgb(159, 11, 11);
  text-align: center;
  padding: 0 20px;
}

/* 分类按钮区域 */
.category-buttons {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

/* 分类按钮 */
.category-btn {
  position: relative;
  display: inline-block;
  padding: 1em 2.5em;

  font-size: 17px;
  font-family: inherit;
  font-weight: 500;
  color: black;
  text-decoration: none;

  cursor: pointer;
  border-radius: 6em;
  border: 1px solid rgba(106, 105, 105, 0.3);
  background-color: rgba(255, 255, 255, 0.2);

  transition: all 0.2s;
}

.dark .category-btn {
  background-color: #686869;
}

.category-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.category-btn:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.category-btn::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;

  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  background-color: #fff;

  transition: all 0.4s;
}

.category-btn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

/* Learn More 按钮 */
.learn-more {
  position: relative;
  display: inline-block;
  width: 10rem;

  cursor: pointer;
  background: transparent;
  border: 0;
  padding: 0;

  font-size: inherit;
  font-family: inherit;
  text-decoration: none;
}

/* 圆形按钮主体 */
.learn-more .circle {
  position: relative;
  display: block;
  width: 3rem;
  height: 3rem;
  margin: 0;

  background: #19925c;
  border-radius: 1.625rem;
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
}

.dark .learn-more .circle {
  background-color: #fff;
}

/* 箭头 */
.learn-more .circle .icon {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
}

.dark .learn-more .circle .icon {
  background: #282936;
}

.learn-more .circle .icon.arrow {
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;
}

.learn-more .circle .icon.arrow::before {
  content: "";
  position: absolute;
  top: -0.29rem;
  right: 0.0625rem;

  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid #fff;
  border-right: 0.125rem solid #fff;

  transform: rotate(45deg);
}

.dark .learn-more .circle .icon.arrow::before {
  border-top: 0.125rem solid #282936;
  border-right: 0.125rem solid #282936;
}

/* 按钮文字 */
.learn-more .button-text {
  position: absolute;
  inset: 0;
  margin-left: 1.85rem;
  padding: 0.75rem 0;

  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
  color: #109a87;

  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
}

.dark .learn-more .button-text {
  color: aliceblue;
}

/* Hover 效果 */
.learn-more:hover .circle {
  width: 100%;
}

.learn-more:hover .circle .icon.arrow {
  transform: translate(1rem, 0);
  background: #fff;
}

.dark .learn-more:hover .circle .icon.arrow {
  background: #282936;
}

.learn-more:hover .button-text {
  color: #ffffff;
}

.dark .learn-more:hover .button-text {
  color: #282936;
}
</style>

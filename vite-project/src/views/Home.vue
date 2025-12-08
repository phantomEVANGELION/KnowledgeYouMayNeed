<template>
  <div class="home">
    
    <div class="overlay">
      <h1>欢迎来到知识世界</h1>
      <p>探索自然、旅游、美食与健康的奇妙旅程。</p>
      <!-- From Uiverse.io by cssbuttons-io --> 
      <button @click="handleClick" class="learn-more">
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

  // 定义跳转方法
  const handleClick = () => {
    router.push('/about')
  }
</script>
<style scoped>
.home {
  height: 100vh;
  overflow: hidden;
}

.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  height: 0;
}

.overlay {
  z-index: 1;
  color: rgb(159, 11, 11);
  text-align: center;
  padding: 0 20px;
}

.category-buttons {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.category-btn {
  position: relative;
  font-size: 17px;
  text-decoration: none;
  padding: 1em 2.5em;
  display: inline-block;
  cursor: pointer;
  border-radius: 6em;
  transition: all 0.2s;
  border: none;
  font-family: inherit;
  font-weight: 500;
  color: black;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(106, 105, 105, 0.3);
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
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}

.category-btn::after {
  background-color: #fff;
}

.category-btn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

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
  width: 10rem;
  height: auto;
}

.learn-more .circle {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: relative;
 display: block;
 margin: 0;
 width: 3rem;
 height: 3rem;
 background: #19925c;
 border-radius: 1.625rem;
}
.dark .learn-more .circle {
  background-color: #fff;
}

.learn-more .circle .icon {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 position: absolute;
 top: 0;
 bottom: 0;
 margin: auto;
 background: #fff;
}
.dark .learn-more .circle .icon {
  background: #282936;
}

.learn-more .circle .icon.arrow {
 transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
 left: 0.625rem;
 width: 1.125rem;
 height: 0.125rem;
 background: none;
}

.learn-more .circle .icon.arrow::before {
 position: absolute;
 content: "";
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

.learn-more .button-text {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: #109a87;
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
}
.dark .learn-more .button-text {
  color: aliceblue;
}

.learn-more:hover .circle {
 width: 100%;
}

.learn-more:hover .circle .icon.arrow {
 background: #fff;
 transform: translate(1rem, 0);
}
.dark .learn-more:hover .circle .icon.arrow {
 background: #282936;
 transform: translate(1rem, 0);
}

.learn-more:hover .button-text {
  color: #ffffff;
}
.dark .learn-more:hover .button-text {
  color: #282936;
}
</style>
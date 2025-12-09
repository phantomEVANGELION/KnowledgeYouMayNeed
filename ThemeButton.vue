<template>
  <!-- 主题切换按钮组件
       功能：提供太阳/月亮主题切换，带有丰富的动画效果
       特性：包含太阳光晕、月亮斑点、云朵浮动和星星闪烁动画 -->
  <label class="switch">
    <!-- 隐藏的复选框，用于切换状态 -->
    <input
      id="theme-toggle-input"
      type="checkbox"
      v-model="darkTheme"
    />
    
    <!-- 滑动开关主体 -->
    <div class="slider round">
      <!-- 太阳/月亮主体 -->
      <div class="sun-moon">
        <!-- 🌙 月亮斑点 -->
        <svg id="moon-dot-1" class="moon-dot" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        <svg id="moon-dot-2" class="moon-dot" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        <svg id="moon-dot-3" class="moon-dot" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        
        <!-- ☀ 太阳光晕效果 -->
        <svg id="light-ray-1" class="light-ray" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        <svg id="light-ray-2" class="light-ray" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        <svg id="light-ray-3" class="light-ray" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        
        <!-- ☁ 浮动云朵 -->
        <svg id="cloud-1" class="cloud-dark" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        <svg id="cloud-2" class="cloud-dark" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        <svg id="cloud-3" class="cloud-dark" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        <svg id="cloud-4" class="cloud-light" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        <svg id="cloud-5" class="cloud-light" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
        <svg id="cloud-6" class="cloud-light" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"></circle>
        </svg>
      </div>
      
      <!-- ⭐ 闪烁星星 -->
      <div class="stars">
        <svg id="star-1" class="star" viewBox="0 0 20 20">
          <path
            d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
          ></path>
        </svg>
        <svg id="star-2" class="star" viewBox="0 0 20 20">
          <path
            d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
          ></path>
        </svg>
        <svg id="star-3" class="star" viewBox="0 0 20 20">
          <path
            d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
          ></path>
        </svg>
        <svg id="star-4" class="star" viewBox="0 0 20 20">
          <path
            d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
          ></path>
        </svg>
      </div>
    </div>
  </label>
</template>

<script setup>
// ==============================
// 主题切换按钮逻辑
// ==============================

import { inject, computed } from 'vue';

// 注入全局主题状态和方法
const theme = inject('theme');
const toggleTheme = inject('toggleTheme');

/**
 * 计算属性：同步按钮状态与全局主题
 * get: 根据当前主题返回复选框状态
 * set: 切换主题时调用全局切换方法
 */
const darkTheme = computed({
  get: () => theme.value === 'dark',
  set: (val) => toggleTheme(),
});
</script>

<style scoped>
/* ==============================
   开关容器样式
   ============================== */

.switch {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}

/* 隐藏原始复选框 */
.switch #theme-toggle-input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* ==============================
   滑动轨道样式
   ============================== */

/* 滑动轨道 */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2196f3; /* 明亮模式背景色 */
  transition: 0.4s ease;
  z-index: 0;
  overflow: hidden;
}

/* 深色模式下的轨道背景 */
#theme-toggle-input:checked + .slider {
  background-color: black;
}

/* 圆角轨道 */
.slider.round {
  border-radius: 34px;
}

/* ==============================
   太阳/月亮主体样式
   ============================== */

/* 太阳/月亮圆形主体 */
.sun-moon {
  position: absolute;
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: yellow; /* 太阳颜色 */
  transition: 0.4s ease;
  border-radius: 50%;
  transform-origin: 22px center;
  animation: rotate-center-unchecked 0.6s ease-in-out both;
}

/* 深色模式下的月亮位置和颜色 */
#theme-toggle-input:checked + .slider .sun-moon {
  transform: translateX(26px);
  background-color: white; /* 月亮颜色 */
  animation: rotate-center 0.6s ease-in-out both;
}

/* 太阳旋转动画（明亮模式） */
@keyframes rotate-center-unchecked {
  0% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* 月亮旋转动画（深色模式） */
@keyframes rotate-center {
  0% {
    transform: rotate(180deg) translateX(26px);
  }
  100% {
    transform: rotate(360deg) translateX(26px);
  }
}

/* ==============================
   月亮斑点样式
   ============================== */

/* 月亮斑点通用样式 */
.moon-dot {
  opacity: 0;
  transition: 0.4s ease;
  fill: gray;
  position: absolute;
  z-index: 4;
}

/* 深色模式下显示月亮斑点 */
#theme-toggle-input:checked + .slider .sun-moon .moon-dot {
  opacity: 1;
}

/* 月亮斑点1：左上小点 */
#moon-dot-1 {
  left: 7px;
  top: 2px;
  width: 4px;
  height: 4px;
}

/* 月亮斑点2：左中较大点 */
#moon-dot-2 {
  left: 1px;
  top: 7px;
  width: 7px;
  height: 7px;
}

/* 月亮斑点3：右下小点 */
#moon-dot-3 {
  left: 11px;
  top: 13px;
  width: 2px;
  height: 2px;
}

/* ==============================
   太阳光晕样式
   ============================== */

/* 光晕通用样式 */
.light-ray {
  position: absolute;
  fill: white;
  opacity: 10%;
  z-index: -1;
}

/* 光晕1：内层光晕 */
#light-ray-1 {
  left: -6px;
  top: -6px;
  width: 30px;
  height: 30px;
}

/* 光晕2：中层光晕 */
#light-ray-2 {
  left: -35%;
  top: -35%;
  width: 38px;
  height: 38px;
}

/* 光晕3：外层光晕 */
#light-ray-3 {
  left: -13px;
  top: -13px;
  width: 42px;
  height: 42px;
}

/* ==============================
   云朵样式和动画
   ============================== */

/* 深色云朵 */
.cloud-dark {
  position: absolute;
  fill: #ccc;
  animation: cloud-move 6s infinite;
  animation-delay: 1s;
}

/* 浅色云朵 */
.cloud-light {
  position: absolute;
  fill: #eee;
  animation: cloud-move 6s infinite;
}

/* 云朵1 */
#cloud-1 {
  left: 20px;
  top: 10px;
  width: 28px;
}

/* 云朵2 */
#cloud-2 {
  left: 30px;
  top: 7px;
  width: 14px;
}

/* 云朵3 */
#cloud-3 {
  left: 12px;
  top: 17px;
  width: 21px;
}

/* 云朵4 */
#cloud-4 {
  left: 25px;
  top: 13px;
  width: 28px;
}

/* 云朵5 */
#cloud-5 {
  left: 33px;
  top: 10px;
  width: 14px;
}

/* 云朵6 */
#cloud-6 {
  left: 15px;
  top: 18px;
  width: 21px;
}

/* 云朵浮动动画 */
@keyframes cloud-move {
  0% {
    transform: translateX(0px);
  }
  40% {
    transform: translateX(4px);
  }
  80% {
    transform: translateX(-4px);
  }
  100% {
    transform: translateX(0px);
  }
}

/* ==============================
   星星样式和动画
   ============================== */

/* 星星容器 */
.stars {
  transform: translateY(-22px);
  transition: 0.4s ease;
  opacity: 0;
}

/* 深色模式下显示星星 */
#theme-toggle-input:checked + .slider .stars {
  transform: translateY(0);
  opacity: 1;
}

/* 单个星星样式 */
.star {
  fill: white;
  position: absolute;
  transition: 0.4s ease;
  animation: star-twinkle 2s infinite;
}

/* 星星1 */
#star-1 {
  width: 14px;
  top: 1px;
  left: 2px;
  animation-delay: 0.3s;
}

/* 星星2 */
#star-2 {
  width: 4px;
  top: 11px;
  left: 2px;
}

/* 星星3 */
#star-3 {
  width: 8px;
  top: 14px;
  left: 7px;
  animation-delay: 0.6s;
}

/* 星星4 */
#star-4 {
  width: 13px;
  top: 0px;
  left: 13px;
  animation-delay: 1.3s;
}

/* 星星闪烁动画 */
@keyframes star-twinkle {
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.2);
  }
  80% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}
</style>
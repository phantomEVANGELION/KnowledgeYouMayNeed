<template>
  <!-- 波浪动画搜索框组件
       功能：提供带有波浪动画标签的搜索输入框
       特性：输入时标签字符会依次浮动，支持亮色/暗色主题 -->
  <div class="wave-group">
    <!-- 搜索输入框 -->
    <input
      required
      type="text"
      class="input"
      v-model="searchQuery"
      @input="handleSearch"
      placeholder=""
    />
    
    <!-- 动态下划线（焦点时展开） -->
    <span class="bar"></span>
    
    <!-- 波浪动画标签："Search by keywords" 的每个字符独立动画 -->
    <label class="label">
      <!-- "Search" 单词 -->
      <span class="label-char" style="--index: 0">S</span>
      <span class="label-char" style="--index: 1">e</span>
      <span class="label-char" style="--index: 2">a</span>
      <span class="label-char" style="--index: 3">r</span>
      <span class="label-char" style="--index: 4">c</span>
      <span class="label-char" style="--index: 5">h</span>
      <span class="label-char" style="--index: 6">&nbsp;</span> <!-- 空格 -->
      
      <!-- "by" 单词 -->
      <span class="label-char" style="--index: 0">b</span>
      <span class="label-char" style="--index: 1">y</span>
      <span class="label-char" style="--index: 2">&nbsp;</span> <!-- 空格 -->
      
      <!-- "keywords" 单词 -->
      <span class="label-char" style="--index: 0">k</span>
      <span class="label-char" style="--index: 1">e</span>
      <span class="label-char" style="--index: 2">y</span>
      <span class="label-char" style="--index: 3">w</span>
      <span class="label-char" style="--index: 4">o</span>
      <span class="label-char" style="--index: 5">r</span>
      <span class="label-char" style="--index: 6">d</span>
      <span class="label-char" style="--index: 7">s</span>
    </label>
  </div>
</template>

<script setup>
// ==============================
// 搜索框组件逻辑
// ==============================

import { ref, defineEmits } from 'vue';

// 定义组件事件：当搜索内容变化时触发
const emit = defineEmits(['search']);

// 搜索关键词响应式变量
const searchQuery = ref('');

/**
 * 处理搜索输入事件
 * 当输入框内容变化时，将搜索关键词传递给父组件
 */
const handleSearch = () => {
  emit('search', searchQuery.value);
};
</script>

<style scoped>
/* ==============================
   搜索框容器样式
   ============================== */

.wave-group {
  box-sizing: border-box;
  margin: 20px auto;
  width: 400px;
  position: relative;
  transition: all 1000ms ease;
}

/* ==============================
   输入框基础样式
   ============================== */

/* 输入框通用样式 */
.wave-group .input {
  color: #101010;
  box-sizing: border-box;
  font-size: 16px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 400px;
  border: none;
  border-bottom: 1px solid #515151;
  background: transparent;
}

/* 深色模式下的输入框 */
.dark .wave-group .input {
  color: rgba(240, 248, 255, 0.667);
  border-bottom: 1px solid #f4f0f0;
}

/* 移除输入框焦点时的默认轮廓 */
.wave-group .input:focus {
  outline: none;
}

/* ==============================
   波浪动画标签样式
   ============================== */

/* 标签容器：绝对定位在输入框上方 */
.wave-group .label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none; /* 防止标签拦截点击事件 */
  left: 5px;
  top: 10px;
  display: flex;
}

/* 单个字符样式：支持延迟动画 */
.wave-group .label-char {
  transition: 0.2s ease all;
  transition-delay: calc(var(--index) * 0.05s); /* 根据索引延迟动画 */
}

/* 输入框聚焦或有内容时，标签字符上浮效果 */
.wave-group .input:focus ~ .label .label-char,
.wave-group .input:valid ~ .label .label-char {
  transform: translateY(-20px);
  font-size: 14px;
  color: #f68401;
}

/* 深色模式下的焦点标签颜色 */
.dark .wave-group .input:focus ~ .label .label-char,
.wave-group .input:valid ~ .label .label-char {
  color: #5264ae;
}

/* ==============================
   动态下划线样式
   ============================== */

/* 下划线容器 */
.wave-group .bar {
  position: relative;
  display: block;
  width: 400px;
}

/* 下划线前后伪元素：初始宽度为0 */
.wave-group .bar::before,
.wave-group .bar::after {
  content: '';
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #f68401;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

/* 深色模式下的下划线颜色 */
.dark .wave-group .bar::before,
.dark .wave-group .bar::after {
  background: #5264ae;
}

/* 左侧下划线：从中间向左展开 */
.wave-group .bar::before {
  left: 50%;
}

/* 右侧下划线：从中间向右展开 */
.wave-group .bar::after {
  right: 50%;
}

/* 输入框聚焦时，下划线向两侧展开至50%宽度 */
.wave-group .input:focus ~ .bar::before,
.wave-group .input:focus ~ .bar::after {
  width: 50%;
}
</style>
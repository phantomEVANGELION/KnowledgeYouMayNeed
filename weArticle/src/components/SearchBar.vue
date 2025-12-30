<template>
  <!-- 搜索框，通过关键字搜索文章卡片 -->
  <div class="wave-group">
    <!-- 输入框 -->
    <input required="" type="text" class="input" 
      v-model="searchQuery" 
      @input="handleSearch"
      placeholder=""
    >
    <!-- 搜索框的下划线 -->
    <span class="bar"></span>
    <!-- 起伏型标签列表 -->
    <label class="label">
      <span class="label-char" style="--index: 0">S</span>
      <span class="label-char" style="--index: 1">e</span>
      <span class="label-char" style="--index: 2">a</span>
      <span class="label-char" style="--index: 3">r</span>
      <span class="label-char" style="--index: 4">c</span>
      <span class="label-char" style="--index: 5">h</span>
      <span class="label-char" style="--index: 6">&nbsp;<!-- 这是空格 --></span>
      <span class="label-char" style="--index: 0">b</span>
      <span class="label-char" style="--index: 1">y</span>
      <span class="label-char" style="--index: 2">&nbsp;<!-- 这是也是空格 --></span>
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
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['search'])
const searchQuery = ref('')

const handleSearch = () => {
  emit('search', searchQuery.value)
}
</script>

<style scoped>
.wave-group {
  box-sizing: border-box;
  margin: 20px auto;
  width: 400px;
  position: relative;
  transition: all 1000ms ease;
}
/* 输入框样式 */
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
.dark .wave-group .input {
  color: rgba(240, 248, 255, 0.667);
  border-bottom: 1px solid #f4f0f0;
}
.wave-group .input:focus {
  outline: none;
}
/* 标签列表样式 */
.wave-group .label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  display: flex;
}
.wave-group .label-char {
  transition: 0.2s ease all;
  transition-delay: calc(var(--index) * .05s);
}
/* 后续的动态效果 */
.wave-group .input:focus ~ label .label-char,
.wave-group .input:valid ~ label .label-char {
  transform: translateY(-20px);
  font-size: 14px;
  color:#f68401;
}
.dark .wave-group .input:focus ~ label .label-char,
.wave-group .input:valid ~ label .label-char {
  color: #5264AE;
}

.wave-group .bar {
  position: relative;
  display: block;
  width: 400px;
}

.wave-group .bar:before,.wave-group .bar:after {
  content: '';
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
  background: #f68401;
}

.dark .wave-group .bar:before,.dark .wave-group .bar:after {
  background: #5264AE;
}

.wave-group .bar:before {
  left: 50%;
}

.wave-group .bar:after {
  right: 50%;
}

.wave-group .input:focus ~ .bar:before,
.wave-group .input:focus ~ .bar:after {
  width: 50%;
}
</style>
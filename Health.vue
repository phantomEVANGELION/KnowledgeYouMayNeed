<template>
  <div class="page-container">
    <h1>身体健康是最重要的</h1>

    <div class="cards">
      <!-- 健康 1 -->
      <RouterLink to="/article/health-1" class="card">
        <img src="/src/assets/image/card/xueya.png" alt="高血压">
        <h3>中老年高血压日常调理指南</h3>
        <p class="desc">
          针对中老年高血压患者的日常护理建议，包括饮食、运动和生活习惯调整。
        </p>
      </RouterLink>

      <!-- 健康 2 -->
      <RouterLink to="/article/health-2" class="card">
        <img src="/src/assets/image/card/winter.jpg" alt="冬季养生">
        <h3>冬季养生：提高免疫力的有效方法</h3>
        <p class="desc">
          冬季气温低，容易感冒，专家分享几个提高免疫力的实用方法，帮助平安过冬。
        </p>
      </RouterLink>

      <!-- 健康 3 -->
      <RouterLink to="/article/health-3" class="card">
        <img src="/src/assets/image/card/jinzhui.jpg" alt="颈椎保护">
        <h3>办公室人群颈椎保护指南</h3>
        <p class="desc">
          针对长期久坐办公的人群，提供简单有效的颈椎保护方法和缓解疲劳的技巧。
        </p>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
// 本页面保持结构一致，因此保留 script（但无需 JS）
</script>

<style scoped>
.page-container {
  max-width: 1000px;
  margin: auto;
}

.cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  width: 280px;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-decoration: none;
  color: #333;
  background: #fff;
  transition: 0.2s;
}

.card:hover {
  transform: translateY(-4px);
}

.card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
}

.desc {
  font-size: 14px;
  color: #666;
  margin-top: 6px;
}
</style>

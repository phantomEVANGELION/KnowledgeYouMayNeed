<template>
  <div class="page-container">
    <h1>做饭能让人开心</h1>

    <div class="cards">

      <!-- 菜谱 1 -->
      <RouterLink to="/article/cook-1" class="card">
        <img src="/src/assets/image/card/tusi.png" alt="牛油果烤面包">
        <h3>牛油果烤面包</h3>
        <p class="desc">
          一份简单又营养的早餐，用酥脆吐司搭配细腻的牛油果泥，让早晨更充满能量。
        </p>
      </RouterLink>

      <!-- 菜谱 2 -->
      <RouterLink to="/article/cook-2" class="card">
        <img src="/src/assets/image/card/rou.png" alt="红烧肉">
        <h3>红烧肉的做法篇</h3>
        <p class="desc">
          色泽红亮、入口即化的经典家常菜，从选材到火候，让红烧肉更上一层楼。
        </p>
      </RouterLink>

      <!-- 菜谱 3 -->
      <RouterLink to="/article/cook-3" class="card">
        <img src="/src/assets/image/card/salad.png" alt="地中海沙拉">
        <h3>地中海沙拉</h3>
        <p class="desc">
          清爽开胃的地中海风味，橄榄油、番茄与芝士的完美结合，轻负担又美味。
        </p>
      </RouterLink>

    </div>
  </div>
</template>

<script setup>
// 这个页面不需要 JS 内容
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

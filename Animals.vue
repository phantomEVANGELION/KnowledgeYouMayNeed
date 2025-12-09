<template>
  <div class="page-container">
    <h1>动物世界瑰丽无比</h1>

    <div class="cards">

      <!-- 动物 1 -->
      <RouterLink to="/article/animal-1" class="card">
        <img src="/src/assets/image/card/lion.png" alt="狮子">
        <h3>非洲草原上的狮子王国</h3>
        <p class="desc">
          探索非洲草原上狮子的社会结构和狩猎习性，了解顶级掠食者的生存智慧。
        </p>
      </RouterLink>

      <!-- 动物 2 -->
      <RouterLink to="/article/animal-2" class="card">
        <img src="/src/assets/image/card/parrot.png" alt="金刚鹦鹉">
        <h3>亚马逊雨林的神秘居民：金刚鹦鹉</h3>
        <p class="desc">
          揭秘金刚鹦鹉绚丽羽毛下的生存智慧，以及它们在雨林生态系统中的重要作用。
        </p>
      </RouterLink>

      <!-- 动物 3 -->
      <RouterLink to="/article/animal-3" class="card">
        <img src="/src/assets/image/card/fish.jpg" alt="斧头鱼">
        <h3>深海中的发光生物：斧头鱼</h3>
        <p class="desc">
          探索生活在 200–1000 米深海的斧头鱼，了解它们如何利用生物发光躲避天敌。
        </p>
      </RouterLink>

    </div>
  </div>
</template>

<script setup>
// 本页面不需要 JS，所以留空即可
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

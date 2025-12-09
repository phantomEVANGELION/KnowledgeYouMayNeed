<template>
  <div class="page-container">
    <h1>去看看外面的世界吧</h1>

    <div class="cards">

      <!-- 京都 -->
      <RouterLink to="/article/travel-1" class="card">
        <img src="../assets/image/card/jindu.png" alt="京都红叶">
        <h3>日本京都红叶季攻略</h3>
        <p class="desc">
          探索京都最美红叶观赏地，推荐最佳游览时间和交通方式，让秋季旅行更完美。
        </p>
      </RouterLink>

      <!-- 冰岛极光 -->
      <RouterLink to="/article/travel-2" class="card">
        <img src="../assets/image/card/ice1.png" alt="冰岛极光">
        <h3>冰岛极光摄影技巧</h3>
        <p class="desc">
          专业摄影师分享冰岛极光拍摄经验，从设备选择到构图技巧，拍出震撼照片。
        </p>
      </RouterLink>

      <!-- 威尼斯 -->
      <RouterLink to="/article/travel-3" class="card">
        <img src="../assets/image/card/vini.png" alt="威尼斯">
        <h3>威尼斯深度游指南</h3>
        <p class="desc">
          避开人潮的秘密路线，带你游览最美威尼斯。
        </p>
      </RouterLink>

    </div>
  </div>
</template>

<script setup>
// 不需要任何 JS 了
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

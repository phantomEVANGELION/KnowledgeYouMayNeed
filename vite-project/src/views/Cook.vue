<template>
  <div class="page-container">
    <h1>做饭能让人开心</h1>

    <div class="cards">
      <RouterLink v-for="item in articles" :key="item.id" :to="item.path" class="card">
        <img :src="item.img" />
        <h3>{{ item.title }}</h3>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
const articles = [
  { id: 1, path: '/article/cook-1', title: '红烧肉的正确做法', img: '/src/assets/cook/cook-1.png' },
  { id: 2, path: '/article/cook-2', title: '糖醋排骨入门篇', img: '/src/assets/cook/cook-2.png' },
  { id: 3, path: '/article/cook-3', title: '不失败煎牛排', img: '/src/assets/cook/cook-3.png' }
]
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
</style>

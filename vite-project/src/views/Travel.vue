<template>
  <div class="page-container">
    <h1>去看看外面的世界吧</h1>

    <div class="cards">
      <RouterLink
        v-for="item in articles"
        :key="item.id"
        :to="`/article/${item.id}`"
        class="card"
      >
        <img :src="item.image" />
        <h3>{{ item.title }}</h3>
        <p class="desc">{{ item.description }}</p>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
const articles = [
  {
    id: 'travel-1',
    title: '日本京都红叶季攻略',
    image: '/images/kyoto.jpg',
    description: '探索京都最美红叶观赏地，推荐最佳游览时间和交通方式，让秋季旅行更完美。',
  },
  {
    id: 'travel-2',
    title: '冰岛极光摄影技巧',
    image: '/images/iceland.jpg',
    description: '专业摄影师分享冰岛极光拍摄经验，从设备选择到构图技巧，拍出震撼照片。',
  },
  {
    id: 'travel-3',
    title: '威尼斯水平深度游指南',
    image: '/images/venice.jpg',
    description: '避开人潮的秘密路线，推荐6条本地人才知道的小巷和隐藏景点。',
  },
  {
    id: 'travel-4',
    title: '清迈泼水节全攻略',
    image: '/images/chiangmai.jpg',
    description: '详解清迈宋干节的历史渊源、狂欢路线、装备清单和安全须知。',
  }
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

.desc {
  font-size: 14px;
  color: #666;
  margin-top: 6px;
}
</style>

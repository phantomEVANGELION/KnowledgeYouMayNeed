<template>
<<<<<<< HEAD
  <div class="page-container">
    <h1>身体健康是最重要的</h1>

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
=======
  <div class="category-page">
    <h1>健康科普</h1>
    <p>帮助大学生养成健康的生活习惯。</p>
    
    <SearchBar @search="handleSearch" />
    
    <div class="articles-grid">
      <ArticleCard 
        v-for="article in filteredArticles" 
        :key="article.id" 
        :article="article" 
      />
      
      <div v-if="filteredArticles.length === 0" class="no-results">
        没有找到匹配的文章
      </div>
>>>>>>> 6fc6fc1e141455c14af0d004b0d937c274f90aa3
    </div>
  </div>
</template>

<script setup>
<<<<<<< HEAD
const articles = [
  {
    id: 'health-1',
    title: '中老年高血压日常调理指南',
    image: '/images/hypertension.jpg',
    description: '针对中老年高血压患者的日常护理建议，包括饮食、运动和生活习惯调整。',
  },
  {
    id: 'health-2',
    title: '冬季养生：提高免疫力的5个方法',
    image: '/images/winter-health.jpg',
    description: '冬季气温低，容易感冒，专家分享5个提高免疫力的实用方法，帮助平安过冬。',
  },
  {
    id: 'health-3',
    title: '办公室人群颈椎保护指南',
    image: '/images/neck-health.jpg',
    description: '针对长期久坐办公的人群，提供简单有效的颈椎保护方法和缓解疲劳的技巧。',
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
=======
import { ref, computed } from 'vue'
import ArticleCard from '../components/ArticleCard.vue'
import SearchBar from '../components/SearchBar.vue'
import healthArticles from '../card_data/health.js'

const searchQuery = ref('')
const articles = ref(healthArticles)

const filteredArticles = computed(() => {
  if (!searchQuery.value) return articles.value
  
  const query = searchQuery.value.toLowerCase()
  return articles.value.filter(article => 
    article.title.toLowerCase().includes(query) || 
    article.description.toLowerCase().includes(query) ||
    article.tags.some(tag => tag.toLowerCase().includes(query))
  )
})

const handleSearch = (query) => {
  searchQuery.value = query
}
</script>

<style scoped>
.category-page {
  max-width: 1200px;
  padding: 30px 20px;
  padding-top: 0px;
  margin-top: 0px;
}

h1 {
  text-align: center;
  margin-bottom: 10px;
}

.category-page p {
  text-align: center;
  margin-bottom: 30px;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
  gap: 24px; 
  padding: 0 16px;
  max-width: 624px;
  margin: 0 auto;
}

.no-results {
  grid-column: 1 / -1;
  text-align: center;
  padding: 50px 0;
  color: #666;
}
</style>
>>>>>>> 6fc6fc1e141455c14af0d004b0d937c274f90aa3

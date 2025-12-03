<template>
<<<<<<< HEAD
  <div class="page-container">
    <h1>做饭能让人开心</h1>

    <div class="cards">
      <RouterLink v-for="item in articles" :key="item.id" :to="item.path" class="card">
        <img :src="item.img" />
        <h3>{{ item.title }}</h3>
      </RouterLink>
=======
  <div class="category-page">
    <h1>做菜推荐</h1>
    <p>为年轻人推荐简单又美味的健康食谱。</p>
    
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
=======
import { ref, computed } from 'vue'
import ArticleCard from '../components/ArticleCard.vue'
import SearchBar from '../components/SearchBar.vue'
import cookArticles from '../card_data/cook.js'

const searchQuery = ref('')
const articles = ref(cookArticles)

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

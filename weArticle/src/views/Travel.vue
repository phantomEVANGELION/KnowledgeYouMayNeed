<template>
  <div class="category-page">
    <h1>旅游推荐</h1>
    <p>为大学生推荐值得一去的城市与风景。</p>
    
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
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ArticleCard from '../components/ArticleCard.vue'
import SearchBar from '../components/SearchBar.vue'
import travelArticles from '../card_data/travel.js'

const searchQuery = ref('')
const articles = ref(travelArticles)

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
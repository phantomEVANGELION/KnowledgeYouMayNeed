<template>
<<<<<<< HEAD
  <div class="page-container">
    <h1>动物世界瑰丽无比</h1>

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
    <!-- 页面标题和描述 -->
    <h1>动物世界</h1>
    <p>为青少年探索自然与动物的奇妙世界。</p>
    
    <!-- 搜索组件：通过@search事件接收搜索关键词 -->
    <SearchBar @search="handleSearch" />
    
    <!-- 文章卡片网格布局 -->
    <div class="articles-grid">
      <!-- 循环渲染文章卡片：使用过滤后的文章列表 -->
       <!-- 用文章id作为唯一标识，传递文章数据给卡片组件 -->
      <ArticleCard 
        v-for="article in filteredArticles" 
        :key="article.id"  
        :article="article"  
      />
      
      <!-- 无搜索结果时显示 -->
      <div v-if="filteredArticles.length === 0" class="no-results">
        目前没有找到匹配的文章
      </div>
>>>>>>> 6fc6fc1e141455c14af0d004b0d937c274f90aa3
    </div>
  </div>
</template>

<script setup>
<<<<<<< HEAD

const articles = [
  {
    id: 'animal-1',
    title: '非洲草原上的狮子王国',
    //image: lionCardImg,
    description: '探索非洲草原上狮子的社会结构和狩猎习性，了解顶级掠食者的生存智慧。',
  },
  {
    id: 'animal-2',
    title: '亚马逊雨林的神秘居民：金刚鹦鹉',
    image: '/images/macaw.jpg',
    description: '揭秘金刚鹦鹉绚丽羽毛下的生存智慧，以及它们在雨林生态系统中的重要作用。',
  },
  {
    id: 'animal-3',
    title: '深海中的发光生物：斧头鱼',
    image: '/images/hatchetfish.jpg',
    description: '探索生活在200-1000米深海的斧头鱼，了解它们如何利用生物发光躲避天敌。',
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
// 导入Vue响应式API和组件
import { ref, computed } from 'vue'  // ref用于创建响应式变量，computed用于计算属性
import ArticleCard from '../components/ArticleCard.vue'  // 文章卡片组件
import SearchBar from '../components/SearchBar.vue'  // 搜索框组件
import animalsArticles from '../card_data/animals.js'  // 动物分类的文章数据

// 响应式变量：存储搜索关键词
const searchQuery = ref('')
// 响应式变量：存储动物分类的所有文章
const articles = ref(animalsArticles)

// 计算属性：根据搜索关键词过滤文章
const filteredArticles = computed(() => {
  // 如果没有搜索关键词，返回所有文章
  if (!searchQuery.value) return articles.value
  
  // 将搜索关键词转为小写，统一匹配规则
  const query = searchQuery.value.toLowerCase()
  // 过滤逻辑：标题、描述、标签中包含关键词的文章
  return articles.value.filter(article => 
    article.title.toLowerCase().includes(query) ||  // 标题匹配
    article.description.toLowerCase().includes(query) ||  // 描述匹配
    article.tags.some(tag => tag.toLowerCase().includes(query))  // 标签匹配
  )
})

// 处理搜索事件：更新搜索关键词
const handleSearch = (query) => {
  searchQuery.value = query
}
</script>

<style scoped>

.category-page {
  max-width: 1200px;
  padding: 20px 30px;
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

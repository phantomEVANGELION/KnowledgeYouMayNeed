<template>
  <nav class="nav-container">
    <div class="nav-content">
      <div class="nav-title"><span class="main-text">CLASSIC</span><span class="sub-text">TASTE</span></div>
      <div class="nav-links">
          <RouterLink to="/" class="nav-link">首页</RouterLink>
        <a href="#home" class="nav-link">经典传承</a>
        <a href="#secret" class="nav-link">选材秘诀</a>
        <a href="#recipe" class="nav-link">烹饪关键</a>
      </div>
      <ThemeButton />
    </div>
  </nav>

  <div id="home" class="hero-section">
    <img src="../../assets/image/cook/cook-2/bg.png" alt="红烧肉背景" class="hero-bg">
    <div class="hero-text">
      <h1>家的味道</h1>
      <p>肥而不腻，入口即化。一碗红烧肉，是每个中国家庭餐桌上的温暖记忆。</p>
      <a href="#recipe" class="explore-btn">查看食谱</a>
    </div>
  </div>

  <div id="secret" class="desk">
    <p class="section-home-title">红烧肉的灵魂三要素</p>
    <div class="card-container">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="card-img-container"><img src="../../assets/image/cook/cook-2/pork.png" class="card-img"></div>
            <h3>五花三层</h3>
          </div>
          <div class="flip-card-back">
            <h3>选肉标准</h3>
            <p>必须选用带皮的五花肉，肥瘦相间至少三层。猪皮提供的胶质是汤汁浓稠的关键。</p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="card-img-container"><img src="../../assets/image/cook/cook-2/sugar.png" class="card-img"></div>
            <h3>冰糖炒色</h3>
          </div>
          <div class="flip-card-back">
            <h3>红亮的秘密</h3>
            <p>使用冰糖炒出的糖色，色泽红亮剔透，口感醇厚，能将肉汁牢牢锁住。</p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="card-img-container"><img src="../../assets/image/cook/cook-2/wine.png" class="card-img"></div>
            <h3>黄酒焖制</h3>
          </div>
          <div class="flip-card-back">
            <h3>去腥增香</h3>
            <p>传统做法不加水，全靠黄酒（或花雕酒）焖煮，酒气挥发后只留下浓郁的肉香。加水反而会让肉寡淡无味，难以软烂。</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <main class="content" id="recipe">
    <section class="chapter-section">
      <h3 class="chapter-title">一、炒糖色：红烧肉的灵魂色彩</h3>
      <div class="paragraph-group">
        <p class="custom-paragraph">
          炒糖色是红烧肉成功与否的关键步骤。它不仅赋予肉块诱人的红亮色泽，还能带来独特的焦糖香味。正确的做法是使用冰糖，小火慢炒。
        </p>
        <h4 class="subchapter-title">操作要点：</h4>
        <ul class="article-list">
          <li><strong>温度控制：</strong> 冷锅冷油或热锅冷油皆可，但火力必须保持在最小。</li>
          <li><strong>状态观察：</strong> 冰糖融化后会先冒大泡，随后大泡转为细腻的小泡沫。当泡沫颜色接近琥珀色，并散发出焦糖香时，立刻将肉倒入。</li>
          <li><strong>避免焦苦：</strong> 一旦糖色变成深褐色或冒黑烟，则意味着炒糊了，会带有苦味，必须重来。</li>
        </ul>
      </div>
    </section>

    <section class="chapter-section">
      <h3 class="chapter-title">二、炖煮：肥而不腻的秘诀</h3>
      <div class="paragraph-group">
        <p class="custom-paragraph">
          红烧肉的口感，重在“慢”字。煸炒出油脂后，需要足够长的时间将肉炖至软烂，让胶质析出，肥肉的口感才能达到“入口即化”的境界。
        </p>
        <h4 class="subchapter-title">去腥与增香：</h4>
        <p class="custom-paragraph">
          炖煮时，推荐使用黄酒（或花雕酒）取代水，可以深度去除猪肉的腥气，同时释放出独特的谷物醇香。此外，在炖煮初期加入适量的香料包一同炖煮，能使香味层次更加丰富。
        </p>
        <p class="custom-paragraph">
          <strong>时长建议：</strong> 小火慢炖至少60至90分钟。在出锅前的10分钟，可以打开锅盖转大火收汁，让汤汁与每一块肉完美融合。
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import ThemeButton from '../../components/ThemeButton.vue'
import { onMounted } from 'vue';

onMounted(() => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
</script>

<style scoped>
/* =========================================
   1. 定义 CSS 变量主题系统
   ========================================= */
:global(:root) {
    /* 亮色模式 (Light Mode) */
    --bg-body: #ffffff;
    --nav-bg: rgba(255, 255, 255, 0.9);
    --text-main: #333333;
    --text-sub: #555555;
    --text-light: #ffffff;
    --brand-brown: #8d6e63;
    --brand-red: #d84315;
    
    /* 区域背景 */
    --desk-bg: #fbe9e7; /* 浅肉色 */
    --card-bg-front: #ffffff;
    --card-bg-back: #d84315;
    
    /* 文字颜色 */
    --chapter-title: #3e2723;
    --nav-link-hover: #d84315;
    --shadow-color: rgba(0,0,0,0.1);
}

:global(html.dark) {
    /* 暗色模式 (Dark Mode) */
    --bg-body: #121212;
    --nav-bg: rgba(28, 28, 28, 0.9);
    --text-main: #e0e0e0;
    --text-sub: #b0b0b0;
    --text-light: #e0e0e0;
    
    --brand-brown: #a1887f; /* 稍微提亮一点以便在黑底上看清 */
    --brand-red: #ff7043;   /* 亮橙红色 */
    
    /* 区域背景 */
    --desk-bg: #2d2422;     /* 深咖色，保持红烧肉的暖调 */
    --card-bg-front: #1e1e1e;
    --card-bg-back: #be360c; /* 深一点的红，避免夜间刺眼 */
    
    --chapter-title: #ffab91;
    --nav-link-hover: #ff7043;
    --shadow-color: rgba(0,0,0,0.5);
}

/* 基础背景设置 */
.content, .desk, .nav-container {
    transition: background-color 0.3s, color 0.3s;
}
main {
    background-color: var(--bg-body);
}

/* =========================================
   2. 导航栏 (Navbar)
   ========================================= */
.nav-container { 
    position: fixed; 
    top: 0; 
    width: 100%; 
    background: var(--nav-bg); 
    z-index: 99; 
    display: flex; 
    justify-content: center; 
    backdrop-filter: blur(5px);
    border-bottom: 1px solid transparent;
}
:global(html.dark) .nav-container {
    border-bottom: 1px solid rgba(255,255,255,0.05);
}

.nav-content { width: 100%; max-width: 1200px; height: 60px; display: flex; justify-content: space-between; align-items: center; padding: 0 20px;}
.main-text { color: var(--brand-brown); font-weight: bold; font-size: 1.2rem; }
.sub-text { color: var(--brand-red); font-weight: bold; margin-left: 5px; font-size: 1.2rem; }
.nav-links { display: flex; gap: 20px; }
.nav-link { text-decoration: none; color: var(--text-main); transition: 0.3s; font-weight: 500;}
.nav-link:hover { color: var(--nav-link-hover); }

/* =========================================
   3. Hero Section (无需大改，背景是图片)
   ========================================= */
.hero-section { height: 80vh; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden;}
.hero-bg { position: absolute; width: 100%; height: 100%; object-fit: cover; filter: brightness(0.7); }
.hero-text { position: relative; color: white; text-align: center; }
.hero-text h1 { font-size: 3rem; margin-bottom: 10px; text-shadow: 0 2px 4px rgba(0,0,0,0.5);}
.explore-btn { padding: 10px 25px; background: var(--brand-red); color: white; text-decoration: none; border-radius: 4px; transition: background 0.3s;}
.explore-btn:hover { filter: brightness(1.1); }

/* =========================================
   4. Desk / Cards Section (翻转卡片)
   ========================================= */
.desk { background: var(--desk-bg); padding: 60px 20px; text-align: center; }
.section-home-title { color: var(--brand-brown); font-size: 1.8rem; margin-bottom: 40px; font-weight: bold; letter-spacing: 2px;}

.card-container { display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; }
.flip-card { width: 260px; height: 340px; perspective: 1000px; cursor: pointer; }
.flip-card-inner { 
    width: 100%; height: 100%; 
    transition: transform 0.6s; 
    transform-style: preserve-3d; 
    position: relative; 
    box-shadow: 0 10px 20px var(--shadow-color); 
    border-radius: 12px;
}
.flip-card:hover .flip-card-inner { transform: rotateY(180deg); }

.flip-card-front, .flip-card-back { 
    position: absolute; width: 100%; height: 100%; 
    backface-visibility: hidden; 
    border-radius: 12px; 
    padding: 25px; 
    box-sizing: border-box; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center;
}

/* 正面样式 */
.flip-card-front { 
    background: var(--card-bg-front); 
    color: var(--text-main);
}
.flip-card-front h3 { margin-top: 15px; color: var(--brand-brown); }

/* 背面样式 */
.flip-card-back { 
    background: var(--card-bg-back); 
    color: white; 
    transform: rotateY(180deg); 
    /* 关键改动：背面文字左对齐/两端对齐，提升阅读体验 */
    align-items: flex-start; 
    text-align: left; 
}
.flip-card-back h3 { 
    width: 100%;
    text-align: center; 
    margin-bottom: 15px; 
    border-bottom: 1px solid rgba(255,255,255,0.3);
    padding-bottom: 10px;
}
.flip-card-back p {
    font-size: 0.95rem;
    line-height: 1.6;
    text-align: justify; /* 两端对齐更整齐 */
}

.card-img-container {
    width: 120px; height: 120px; 
    display: flex; align-items: center; justify-content: center;
}
.card-img { width: 100%; height: 100%; object-fit: contain; }

/* =========================================
   5. Recipe Content (正文区域)
   ========================================= */
.content { max-width: 800px; margin: 0 auto; padding: 60px 20px; background-color: var(--bg-body);}

.chapter-section { margin-bottom: 50px; }

.chapter-title { 
    border-bottom: 2px solid var(--brand-red); 
    padding-bottom: 10px; 
    margin-bottom: 25px; 
    color: var(--chapter-title);
    font-size: 1.5rem;
}

.subchapter-title {
    margin-top: 20px;
    margin-bottom: 10px;
    color: var(--text-main);
    font-size: 1.1rem;
    /* 确保小标题也是左对齐 */
    text-align: left; 
}

/* 关键改动：文字排版优化 */
.paragraph-group {
    /* 确保所有内部文本左对齐 */
    text-align: left; 
}

.custom-paragraph {
    line-height: 1.8;
    color: var(--text-sub);
    margin-bottom: 15px;
    text-align: justify; /* 正文推荐两端对齐 */
    font-size: 1.05rem;
}

.article-list {
    line-height: 2;
    color: var(--text-sub);
    padding-left: 20px; /* 保留列表缩进 */
    text-align: left;
}
.article-list li {text-align: left;
    padding-left: 1.2rem;
    line-height: 1.8;
    margin-top: 10px;}
strong { color: var(--text-main); }
</style>
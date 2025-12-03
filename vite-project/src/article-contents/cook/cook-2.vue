<template>
  <nav class="nav-container">
    <div class="nav-content">
      <div class="nav-title"><span class="main-text">CLASSIC</span><span class="sub-text">TASTE</span></div>
      <div class="nav-links">
        <a href="#home" class="nav-link">经典传承</a>
        <a href="#secret" class="nav-link">选材秘诀</a>
        <a href="#recipe" class="nav-link">烹饪关键</a>
      </div>
      <ThemeButton />
    </div>
  </nav>

  <div id="home" class="hero-section">
    <img src="../../assets/image/cook/cook-2/pork_bg.jpg" alt="红烧肉背景" class="hero-bg">
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
            <p>传统做法不加水，全靠黄酒（或花雕酒）焖煮，酒气挥发后只留下浓郁的肉香。加水反而会让肉寡淡无味，难以软烂</p>
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
    // 平滑滚动到锚点
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
/* 精简版CSS，复用核心布局 */
.nav-container { position: fixed; top: 0; width: 100%; background: rgba(255,255,255,0.9); z-index: 99; display: flex; justify-content: center; backdrop-filter: blur(5px);}
.nav-content { width: 100%; max-width: 1200px; height: 60px; display: flex; justify-content: space-between; align-items: center; padding: 0 20px;}
.main-text { color: #8d6e63; font-weight: bold; font-size: 1.2rem; }
.sub-text { color: #d84315; font-weight: bold; margin-left: 5px; font-size: 1.2rem; }
.nav-links { display: flex; gap: 20px; }
.nav-link { text-decoration: none; color: #333; transition: 0.3s; }
.nav-link:hover { color: #d84315; }

.hero-section { height: 80vh; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden;}
.hero-bg { position: absolute; width: 100%; height: 100%; object-fit: cover; filter: brightness(0.7); }
.hero-text { position: relative; color: white; text-align: center; }
.hero-text h1 { font-size: 3rem; margin-bottom: 10px; }
.explore-btn { padding: 10px 25px; background: #d84315; color: white; text-decoration: none; border-radius: 4px; }

.desk { background: #fbe9e7; padding: 40px 20px; text-align: center; }
.section-home-title { color: #8d6e63; font-size: 1.8rem; margin-bottom: 30px; }
.card-container { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
.flip-card { width: 250px; height: 320px; perspective: 1000px; cursor: pointer; }
.flip-card-inner { width: 100%; height: 100%; transition: transform 0.6s; transform-style: preserve-3d; position: relative; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-radius: 10px;}
.flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
.flip-card-front, .flip-card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; background: white; border-radius: 10px; padding: 20px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: center;}
.flip-card-back { background: #d84315; color: white; transform: rotateY(180deg); }
.card-img { width: 100px; height: 100px; object-fit: contain; margin-bottom: 20px; }

.content { max-width: 800px; margin: 0 auto; padding: 40px 20px; }
.chapter-title { border-bottom: 2px solid #d84315; padding-bottom: 10px; margin-bottom: 20px; color: #3e2723;}
.step-list { line-height: 2; color: #555; }
</style>

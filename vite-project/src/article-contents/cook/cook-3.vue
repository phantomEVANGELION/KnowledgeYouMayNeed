<template>
  <nav class="nav-container">
    <div class="nav-content">
      <div class="nav-title"><span class="main-text">LIGHT</span><span class="sub-text">DIET</span></div>
      <div class="nav-links">
          <RouterLink to="/" class="nav-link">首页</RouterLink>
        <a href="#home" class="nav-link">轻食主义</a>
        <a href="#ingredients" class="nav-link">超级食物</a>
        <a href="#benefits" class="nav-link">健康益处</a>
      </div>
      <ThemeButton />
    </div>
  </nav>

  <div id="home" class="hero-section">
    <img src="../../assets/image/cook/cook-3/bg.png" alt="沙拉背景" class="hero-bg">
    <div class="hero-text">
      <h1>地中海的馈赠</h1>
      <p>藜麦与彩蔬的碰撞，不仅仅是一道沙拉，更是夏日减脂期的完美能量碗。</p>
    </div>
  </div>

  <div id="ingredients" class="desk">
    <p class="section-home-title">多彩食材</p>
    <div class="card-container">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h3>三色藜麦</h3>
            <p>谷物黄金</p>
          </div>
          <div class="flip-card-back">
            <p>富含完全蛋白和膳食纤维，煮15分钟至出小尾巴即可，口感Q弹。</p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h3>油醋汁</h3>
            <p>地中海灵魂</p>
          </div>
          <div class="flip-card-back">
            <p>特级初榨橄榄油 + 鲜柠檬汁 + 黑胡椒 + 海盐。拒绝高热量沙拉酱。</p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h3>菲达奶酪</h3>
            <p>风味点缀</p>
          </div>
          <div class="flip-card-back">
            <p>Feta Cheese 咸香独特的口感，能瞬间提升沙拉的层次感。</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <main class="content" id="benefits">
    <section class="chapter-section">
      <h3 class="chapter-title">为什么选择它？</h3>
      <div class="grid-layout">
        <div class="grid-item">
          <h4>低卡饱腹</h4>
          <p>优质的复合碳水（藜麦）提供持久能量，不易产生饥饿感。</p>
        </div>
        <div class="grid-item">
          <h4>抗氧化</h4>
          <p>番茄、黄瓜、洋葱等各色蔬菜提供丰富的维生素和抗氧化剂。</p>
        </div>
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
/* 风格：清新绿 */
.nav-container { position: fixed; top: 0; width: 100%; background: rgba(255,255,255,0.9); z-index: 99; display: flex; justify-content: center; backdrop-filter: blur(5px);}
.nav-content { width: 100%; max-width: 1200px; height: 60px; display: flex; justify-content: space-between; align-items: center; padding: 0 20px;}
.main-text { color: #689f38; font-weight: bold; font-size: 1.2rem; }
.sub-text { color: #fbc02d; font-weight: bold; margin-left: 5px; font-size: 1.2rem; }
.nav-link { text-decoration: none; color: #555; transition: 0.3s; margin-left: 20px;}
.nav-link:hover { color: #689f38; }

.hero-section { height: 70vh; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden;}
.hero-bg { position: absolute; width: 100%; height: 100%; object-fit: cover; filter: brightness(0.9); }
.hero-text { position: relative; color: white; text-align: center; text-shadow: 0 2px 5px rgba(0,0,0,0.3); }

.desk { background: #f1f8e9; padding: 40px 20px; text-align: center; }
.section-home-title { color: #33691e; font-size: 1.8rem; margin-bottom: 30px; }
.card-container { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
.flip-card { width: 220px; height: 280px; perspective: 1000px; cursor: pointer; }
.flip-card-inner { width: 100%; height: 100%; transition: transform 0.6s; transform-style: preserve-3d; position: relative; box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-radius: 15px;}
.flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
.flip-card-front, .flip-card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; background: white; border-radius: 15px; padding: 20px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: center;}
.flip-card-front { color: #558b2f; border: 2px solid #dcedc8; }
.flip-card-back { background: #8bc34a; color: white; transform: rotateY(180deg); }

.content { max-width: 800px; margin: 0 auto; padding: 40px 20px; }
.chapter-title { border-bottom: 2px solid #8bc34a; padding-bottom: 10px; margin-bottom: 20px; color: #33691e;}
.grid-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.grid-item h4 { color: #689f38; margin-bottom: 10px; }
</style>

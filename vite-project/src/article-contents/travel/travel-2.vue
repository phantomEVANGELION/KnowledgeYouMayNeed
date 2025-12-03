<template>
  <nav class="nav-container">
    <div class="nav-content">
      <div class="nav-title"><span class="main-text">AURORA</span><span class="sub-text">HUNT</span></div>
      <div class="nav-links">
        <a href="#home" class="nav-link">追光</a>
        <a href="#gear" class="nav-link">装备</a>
        <a href="#settings" class="nav-link">参数</a>
      </div>
      <ThemeButton />
    </div>
  </nav>

  <div id="home" class="hero-section">
    <img src="../../assets/image/travel/travel-2/aurora_bg.jpg" alt="极光背景" class="hero-bg">
    <div class="hero-text">
      <h1>上帝的烟火</h1>
      <p>在冰岛的黑夜里，捕捉那抹舞动的欧若拉。</p>
    </div>
  </div>

  <div id="gear" class="desk">
    <p class="section-home-title">摄影必备</p>
    <div class="card-container">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front"><h3>稳固三脚架</h3></div>
          <div class="flip-card-back"><p>长曝光的绝对核心。冰岛风大，建议挂载重物保持稳定。</p></div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front"><h3>大光圈广角</h3></div>
          <div class="flip-card-back"><p>推荐 f/2.8 或更大光圈，14-24mm 广角镜头，收入更多地景与星空。</p></div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front"><h3>备用电池</h3></div>
          <div class="flip-card-back"><p>极寒环境下电池掉电极快，务必贴身携带备用电池保温。</p></div>
        </div>
      </div>
    </div>
  </div>

  <main class="content" id="settings">
    <section class="chapter-section">
      <h3 class="chapter-title">参数设置指南</h3>
      <div class="param-box">
        <p><strong>对焦：</strong> 手动对焦（MF），对准无限远（∞），再往回拧一点点。</p>
        <p><strong>光圈：</strong> 最大光圈（如 f/2.8）。</p>
        <p><strong>ISO：</strong> 起步 1600-3200，根据噪点情况调整。</p>
        <p><strong>快门：</strong> 极光活跃时 2-5秒（定格形状）；极光微弱时 15-20秒（增加亮度）。</p>
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
      document.querySelector(this.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
</script>

<style scoped>
/* 风格：暗夜极光 */
.nav-container { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.8); z-index: 99; display: flex; justify-content: center; backdrop-filter: blur(5px); border-bottom: 1px solid #333;}
.nav-content { width: 100%; max-width: 1200px; height: 60px; display: flex; justify-content: space-between; align-items: center; padding: 0 20px;}
.main-text { color: #00e676; font-family: monospace; font-size: 1.2rem; }
.sub-text { color: #b388ff; font-family: monospace; margin-left: 5px; font-size: 1.2rem; }
.nav-link { text-decoration: none; color: #ccc; transition: 0.3s; margin-left: 20px;}
.nav-link:hover { color: #00e676; }

.hero-section { height: 80vh; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden; background: black;}
.hero-bg { position: absolute; width: 100%; height: 100%; object-fit: cover; opacity: 0.8; }
.hero-text { position: relative; color: white; text-align: center; }

.desk { background: linear-gradient(to bottom, #101010, #202020); padding: 40px 20px; text-align: center; }
.section-home-title { color: #00e676; font-size: 1.8rem; margin-bottom: 30px; text-shadow: 0 0 10px rgba(0,230,118,0.5);}
.card-container { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
.flip-card { width: 220px; height: 280px; perspective: 1000px; cursor: pointer; }
.flip-card-inner { width: 100%; height: 100%; transition: transform 0.6s; transform-style: preserve-3d; position: relative; border: 1px solid #333; border-radius: 8px;}
.flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
.flip-card-front, .flip-card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; background: #1a1a1a; color: #eee; border-radius: 8px; padding: 20px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: center;}
.flip-card-front h3 { color: #00e676; }
.flip-card-back { background: #000; color: #b388ff; transform: rotateY(180deg); border: 1px solid #b388ff; }

.content { max-width: 800px; margin: 0 auto; padding: 40px 20px; background: #000; color: #eee; min-height: 40vh;}
.chapter-title { border-bottom: 1px solid #00e676; padding-bottom: 10px; margin-bottom: 20px; color: #00e676;}
.param-box { background: #111; padding: 20px; border-left: 4px solid #b388ff; line-height: 2;}
</style>

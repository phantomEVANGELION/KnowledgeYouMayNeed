<<<<<<< HEAD
<template>
  <nav class="nav-container">
    <div class="nav-content">
      <div class="nav-title"><span class="main-text">VENEZIA</span><span class="sub-text">SECRET</span></div>
      <div class="nav-links">
        <a href="#home" class="nav-link">古城漫步</a>
        <a href="#guide" class="nav-link">秘密景点</a>
        <a href="#transport" class="nav-link">交通攻略</a>
      </div>
      <ThemeButton />
    </div>
  </nav>

  <div id="home" class="hero-section">
    <img src="../../assets/image/travel/travel-3/venice_bg.jpg" alt="威尼斯背景" class="hero-bg">
    <div class="hero-text">
      <h1>迷失在水城</h1>
      <p>避开圣马可广场的人潮，寻找面具背后的真实威尼斯。这里有本地人光顾的酒馆，以及只有迷路才能发现的绝美视角。</p>
      <a href="#guide" class="explore-btn">深入探索</a>
    </div>
  </div>

  <div id="guide" class="desk">
    <p class="section-home-title">本地人光顾的秘密角落</p>
    <div class="card-container">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front"><h3>彩色岛 Burano</h3></div>
          <div class="flip-card-back">
            <h3>五彩童话</h3>
            <p>远离主岛的喧嚣，这里有像打翻了调色盘一样的彩色房子，是摄影师的天堂。建议花半天时间在这里悠闲漫步。</p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front"><h3>沉船书店</h3></div>
          <div class="flip-card-back">
            <h3>奇幻书库</h3>
            <p>Libreria Acqua Alta，书籍堆在贡多拉和浴缸里，以防涨水，充满魔幻现实感。是威尼斯最独特的文艺打卡地之一。</p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front"><h3>Cannaregio区</h3></div>
          <div class="flip-card-back">
            <h3>本地生活</h3>
            <p>这是威尼斯人口最稠密的区域，游客较少。沿着 Fondamenta della Misericordia 一路走，品尝最地道的 Cicheti（威尼斯小吃）。</p>
          </div>
        </div>
      </div>
       <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front"><h3>Dorsoduro区</h3></div>
          <div class="flip-card-back">
            <h3>艺术气质</h3>
            <p>艺术氛围浓厚，著名的佩姬·古根海姆美术馆就位于此。同时，这里的傍晚景色非常宁静，适合闲逛。</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <main class="content" id="transport">
    <section class="chapter-section">
      <h3 class="chapter-title">一、水上交通：出行方式全解析</h3>
      <div class="paragraph-group">
        <p class="custom-paragraph">
          在威尼斯，主要的交通工具是双脚和水上巴士（Vaporetto）。如果不想被汹涌的人潮困在里亚尔托桥附近，合理规划水上交通至关重要。
        </p>
        <h4 class="subchapter-title">水上巴士 (Vaporetto)：城市动脉</h4>
        <ul class="article-list">
          <li><strong>票价：</strong> 单次票昂贵（约€9.5），建议购买1日/2日/3日通票（ACTV Pass），无限次乘坐，非常划算。</li>
          <li><strong>路线：</strong> 1号线和2号线贯穿大运河，是观光的主要路线。其他线路则连接主岛与外岛（如彩色岛）。</li>
        </ul>
        <h4 class="subchapter-title">贡多拉 vs. Traghetto：</h4>
        <p class="custom-paragraph">
          贡多拉体验浪漫但昂贵（白天约€80/船，晚上更贵）。如果只是想体验一下贡多拉的摇曳，可以选择乘坐 **Traghetto**。它是由两名船夫操作的公共贡多拉，用于短距离横渡大运河，每次只需€2左右，是本地人的日常交通方式。
        </p>
      </div>
    </section>

    <section class="chapter-section">
      <h3 class="chapter-title">二、美食体验：Cicheti与站立咖啡文化</h3>
      <div class="paragraph-group two-column-layout">
        <div class="column left-column">
          <h4 class="subchapter-title">巴卡罗（Bacaro）文化</h4>
          <p class="custom-paragraph">
            Bacaro 是威尼斯特有的小酒馆，通常提供当地葡萄酒和 Cicheti（发音：奇克蒂）。Cicheti 是威尼斯版的 Tapas，价格便宜（约€1-3/个），可以站着或坐在吧台边快速享用，是体验威尼斯夜生活的最佳方式。
          </p>
        </div>
        <div class="column right-column">
          <h4 class="subchapter-title">站立的意式浓缩</h4>
          <p class="custom-paragraph">
            在意大利，咖啡的消费方式非常讲究。在吧台站着喝一杯意式浓缩（Espresso）通常只需要1欧元多。如果选择坐在室外或室内的桌子旁，价格会翻倍甚至更多。入乡随俗，快速喝完，继续你的旅程。
          </p>
        </div>
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
/* 风格：复古红蓝 */
.nav-container { position: fixed; top: 0; width: 100%; background: rgba(255,255,255,0.95); z-index: 99; display: flex; justify-content: center; border-bottom: 1px solid #aaa;}
.nav-content { width: 100%; max-width: 1200px; height: 60px; display: flex; justify-content: space-between; align-items: center; padding: 0 20px;}
.main-text { color: #006064; font-family: serif; font-size: 1.2rem; letter-spacing: 2px;}
.sub-text { color: #b71c1c; font-family: serif; margin-left: 5px; font-size: 1.2rem; letter-spacing: 2px;}
.nav-link { color: #555; text-decoration: none; transition: 0.3s; margin-left: 20px;}
.nav-link:hover { color: #006064; }

.hero-section { height: 85vh; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden;}
.hero-bg { position: absolute; width: 100%; height: 100%; object-fit: cover; filter: sepia(0.3) brightness(0.9); }
.hero-text { position: relative; color: white; text-align: center; text-shadow: 2px 2px 4px black; background: rgba(0,0,0,0.3); padding: 30px; border-radius: 5px;}
.explore-btn { padding: 10px 25px; background: #b71c1c; color: white; text-decoration: none; border-radius: 4px; margin-top: 20px; display: inline-block;}

.desk { background: #e0f7fa; padding: 50px 20px; text-align: center; }
.section-home-title { color: #006064; font-size: 2rem; margin-bottom: 40px; font-family: serif;}
.card-container { display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; }
.flip-card { width: 240px; height: 300px; perspective: 1000px; cursor: pointer; }
.flip-card-inner { width: 100%; height: 100%; transition: transform 0.8s; transform-style: preserve-3d; position: relative; box-shadow: 5px 5px 15px rgba(0,0,0,0.2); border-radius: 4px;}
.flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
.flip-card-front { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; background: #fff; color: #b71c1c; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-family: serif; font-size: 1.2rem; border: 2px solid #b71c1c;}
.flip-card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; background: #006064; color: white; transform: rotateY(180deg); border-radius: 4px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; line-height: 1.5;}
.flip-card-back h3 { color: #ffeb3b; margin-bottom: 10px;}

.content { max-width: 900px; margin: 0 auto; padding: 60px 20px; }
.chapter-section { margin-bottom: 40px;}
.chapter-title { border-bottom: 2px solid #b71c1c; padding-bottom: 10px; margin-bottom: 30px; color: #006064; font-size: 1.8rem;}
.subchapter-title { color: #b71c1c; font-size: 1.3rem; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #006064; padding-left: 10px;}
.custom-paragraph { font-size: 1.05rem; line-height: 1.8; color: #4e342e; margin-bottom: 15px; text-align: justify; }
.article-list { list-style: disc; padding-left: 25px; line-height: 1.6; color: #555; }
.two-column-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
</style>
=======
<template>
    <div>这里空空如也</div>
</template>
>>>>>>> 6fc6fc1e141455c14af0d004b0d937c274f90aa3

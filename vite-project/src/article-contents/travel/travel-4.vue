<template>
  <nav class="nav-container">
    <div class="nav-content">
      <div class="nav-title"><span class="main-text">SONGKRAN</span></div>
      <div class="nav-links">
        <a href="#home" class="nav-link">狂欢简介</a>
        <a href="#culture" class="nav-link">文化内涵</a>
        <a href="#battle" class="nav-link">主战场</a>
      </div>
      <ThemeButton />
    </div>
  </nav>

  <div id="home" class="hero-section">
    <img src="../../assets/image/travel/travel-4/water_bg.jpg" alt="泼水节背景" class="hero-bg">
    <div class="hero-text">
      <h1>湿身狂欢：清迈宋干节</h1>
      <p>全球最大的水仗。在4月的清迈，以最清凉的方式迎接泰国新年的到来。这是一场充满活力和祝福的文化盛典。</p>
      <a href="#battle" class="explore-btn">加入战斗</a>
    </div>
  </div>

  <div id="battle" class="desk">
    <p class="section-home-title">清迈狂欢三大主战场</p>
    <div class="card-container">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front"><h3>塔佩门 Thapae Gate</h3></div>
          <div class="flip-card-back">
            <h3>活动中心</h3>
            <p>这里是泼水节官方活动的中心，通常有音乐舞台、DJ和泼水选美。是水仗最激烈、最人山人海的地方，适合硬核玩家。</p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front"><h3>护城河</h3></div>
          <div class="flip-card-back">
            <h3>水源供给</h3>
            <p>清迈古城周围的护城河成了天然的水源库。许多本地人会开着装满水的大皮卡车，沿着河边循环泼洒，是经典的水仗路线。</p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front"><h3>宁曼路 Nimman Road</h3></div>
          <div class="flip-card-back">
            <h3>时尚街区</h3>
            <p>相较于古城，宁曼路的战况稍缓和，但酒吧和咖啡馆前的街区气氛依然火热，适合在享受美食的同时参与泼水。</p>
          </div>
        </div>
      </div>
       <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front"><h3>瓦洛洛市场</h3></div>
          <div class="flip-card-back">
            <h3>传统习俗</h3>
            <p>虽然没有塔佩门激烈，但在节日期间仍能感受到浓厚的传统新年气氛，是购买泼水装备和节日小吃的好地方。</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <main class="content" id="culture">
    <section class="chapter-section">
      <h3 class="chapter-title">一、宋干节：祝福与净化的仪式</h3>
      <div class="paragraph-group">
        <p class="custom-paragraph">
          宋干节（Songkran）是泰国传统的佛历新年，通常在每年的4月13日至15日举行。泼水的习俗源于一种对长辈和佛像的传统仪式：用洒水的方式来表达敬意和洗去旧年的不吉利。
        </p>
        <h4 class="subchapter-title">清迈的独特习俗：</h4>
        <ul class="article-list">
          <li><strong>浴佛：</strong> 游客可以前往寺庙，参与“浴佛”仪式，用带有花瓣的清水轻轻淋浴佛像，以求新年的好运。</li>
          <li><strong>堆沙塔：</strong> 在清迈，人们会在寺庙中堆沙塔，并在上面插上彩旗和鲜花，象征将带走的沙土归还寺庙，是积累功德的一种方式。</li>
        </ul>
      </div>
    </section>

    <section class="chapter-section">
      <h3 class="chapter-title">二、装备与安全：狂欢前的准备清单</h3>
      <div class="paragraph-group two-column-layout">
        <div class="column left-column">
          <h4 class="subchapter-title">装备清单（必备）</h4>
          <ul class="article-list">
            <li><strong>水枪：</strong> 建议选择射程远、储水容量大的水枪。清迈街头随处可见售卖水枪的摊位。</li>
            <li><strong>防水袋：</strong> 必须是挂在脖子上或系在腰间的**双重密封**防水袋，用来保护手机、护照和现金。</li>
            <li><strong>护目镜：</strong> 强烈推荐！泼水战中可能会有脏水，保护眼睛至关重要。</li>
          </ul>
        </div>
        <div class="column right-column">
          <h4 class="subchapter-title">安全与礼仪提醒</h4>
          <p class="custom-paragraph">
            泼水节期间酒精和交通意外频发。请注意：请勿向僧侣、老人或正在骑摩托车的人泼水，这被视为不礼貌。穿着尽量简洁轻便，避免白色衣物。出门前，请在酒店做好防晒，并留下重要证件复印件。
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
/* 风格：活力蓝橙 */
.nav-container { position: fixed; top: 0; width: 100%; background: rgba(255,255,255,0.9); z-index: 99; display: flex; justify-content: center; border-bottom: 1px solid #ddd;}
.nav-content { width: 100%; max-width: 1200px; height: 60px; display: flex; justify-content: space-between; align-items: center; padding: 0 20px;}
.main-text { color: #0288d1; font-weight: 900; font-size: 1.5rem; text-transform: uppercase;}
.nav-link { color: #555; text-decoration: none; transition: 0.3s; margin-left: 20px;}
.nav-link:hover { color: #0288d1; }

.hero-section { height: 85vh; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden;}
.hero-bg { position: absolute; width: 100%; height: 100%; object-fit: cover; }
.hero-text { position: relative; color: white; text-align: center; text-shadow: 0 2px 10px rgba(0,0,0,0.5); background: rgba(2, 136, 209, 0.4); padding: 30px; border-radius: 10px;}
.explore-btn { padding: 10px 25px; background: #f57c00; color: white; text-decoration: none; border-radius: 4px; margin-top: 20px; display: inline-block;}

.desk { background: #fff3e0; padding: 50px 20px; text-align: center; }
.section-home-title { color: #f57c00; font-size: 2rem; margin-bottom: 40px; font-weight: bold;}
.card-container { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
.flip-card { width: 250px; height: 300px; perspective: 1000px; cursor: pointer; }
.flip-card-inner { width: 100%; height: 100%; transition: transform 0.5s; transform-style: preserve-3d; position: relative; box-shadow: 0 4px 10px rgba(0,0,0,0.1); border-radius: 20px;}
.flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
.flip-card-front { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; background: white; color: #0288d1; border-radius: 20px; display: flex; align-items: center; justify-content: center; border: 4px solid #b3e5fc;}
.flip-card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; background: #039be5; color: white; transform: rotateY(180deg); border-radius: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; line-height: 1.4;}
.flip-card-back h3 { color: #ffe0b2; margin-bottom: 10px;}

.content { max-width: 900px; margin: 0 auto; padding: 60px 20px; }
.chapter-section { margin-bottom: 40px;}
.chapter-title { border-bottom: 2px solid #0288d1; padding-bottom: 10px; margin-bottom: 30px; color: #f57c00; font-size: 1.8rem;}
.subchapter-title { color: #0288d1; font-size: 1.3rem; margin-top: 20px; margin-bottom: 10px; border-left: 4px solid #f57c00; padding-left: 10px;}
.custom-paragraph { font-size: 1.05rem; line-height: 1.8; color: #444; margin-bottom: 15px; text-align: justify; }
.article-list { list-style: disc; padding-left: 25px; line-height: 1.6; color: #555; }
.two-column-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
</style>

<template>
  <nav class="nav-container">
    <div class="nav-content">
      <div class="nav-title"><span class="main-text">CERVICAL</span><span class="sub-text">CARE</span></div>
      <div class="nav-links">
        <a href="#home" class="nav-link">问题成因</a>
        <a href="#ergonomics" class="nav-link">工学设置</a>
        <a href="#stretch" class="nav-link">每日放松</a>
      </div>
      <ThemeButton />
    </div>
  </nav>

  <div id="home" class="hero-section">
    <img src="../../assets/image/health/health-3/neck-health.jpg" alt="颈椎保护背景" class="hero-bg">
    <div class="hero-text">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <a href="#ergonomics" class="explore-btn">开始设置</a>
    </div>
  </div>

  <div id="ergonomics" class="desk">
    <p class="section-home-title">核心保护策略（Flip Cards）</p>
    <div class="card-container">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front"><h3>“耳朵-肩膀”对齐</h3></div>
          <div class="flip-card-back">
            <h3>标准坐姿</h3>
            <p>坐下时，耳朵应位于肩膀正上方。避免头部前倾，让颈椎承受额外压力。</p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front"><h3>20-20-20法则</h3></div>
          <div class="flip-card-back">
            <h3>眼睛与颈椎休息</h3>
            <p>每工作20分钟，休息20秒，看向20英尺（约6米）以外的物体。同时进行颈部活动。</p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front"><h3>显示器高度</h3></div>
          <div class="flip-card-back">
            <h3>视线水平</h3>
            <p>屏幕顶端或最上方一行字应与视线齐平，这样可以避免低头或仰头。</p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front"><h3>手臂支撑</h3></div>
          <div class="flip-card-back">
            <h3>减轻肩膀负担</h3>
            <p>键盘和鼠标应靠近身体，手肘以90度角自然放松，前臂得到桌面或扶手的充分支撑。</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <main class="content" id="stretch">
    <section class="chapter-section">
      <h3 class="chapter-title">一、颈椎病的成因与常见症状</h3>
      <div class="paragraph-group">
        <p class="custom-paragraph">
          办公室人群的颈椎问题，主要由长期**固定姿势**和**肌肉劳损**引起。长时间保持头部前倾的姿势（俗称“乌龟颈”）会导致颈椎前方的肌肉过度拉伸，而后方的肌肉过度紧张。
        </p>
        <h4 class="subchapter-title">常见症状自查：</h4>
        <ul class="article-list">
          <li><strong>颈肩僵硬：</strong> 感觉脖子像被锁住，转动受限，肩膀有沉重感。</li>
          <li><strong>放射性疼痛：</strong> 疼痛从颈部延伸到手臂，甚至手部麻木或无力（可能压迫神经）。</li>
          <li><strong>不明原因头痛：</strong> 紧张性头痛或偏头痛，通常从颈后根部向上扩散至头顶或太阳穴。</li>
        </ul>
      </div>
    </section>

    <section class="chapter-section">
      <h3 class="chapter-title">二、快速缓解与预防拉伸技巧</h3>
      <div class="paragraph-group two-column-layout">
        <div class="column left-column">
          <h4 class="subchapter-title">办公室简易拉伸</h4>
          <ol class="article-ordered-list">
            <li><strong>侧颈拉伸：</strong> 坐直，头向一侧倾斜，用同侧手轻压头部，感受对侧肌肉拉伸，保持15秒。</li>
            <li><strong>胸肌开合：</strong> 找一个门框，双手扶住，身体向前倾，打开胸腔，缓解圆肩带来的颈部压力。</li>
            <li><strong>下巴内收：</strong> 坐直，轻轻向后收下巴，保持目光水平，纠正头部前倾姿势。</li>
          </ol>
        </div>
        <div class="column right-column">
          <h4 class="subchapter-title">人体工学椅与辅助用品</h4>
          <p class="custom-paragraph">
            投资一张具有良好腰部支撑和可调节头枕的人体工学椅至关重要。头枕应在你后脑勺的位置，而非颈部。此外，可调节高度的电脑支架和外接键盘，能帮助你轻松实现显示器与视线齐平。
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import ThemeButton from '../../components/ThemeButton.vue'
import { onMounted } from 'vue';
const title = '办公室人群颈椎保护指南';
const description = '针对长期久坐办公的人群，提供简单有效的颈椎保护方法和缓解疲劳的技巧。';
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
/* 风格：柔和的蓝色和灰色，强调人体工学舒适度 */
.nav-container { position: fixed; top: 0; width: 100%; background: rgba(255,255,255,0.9); z-index: 99; display: flex; justify-content: center; border-bottom: 1px solid #e0e0e0;}
.nav-content { width: 100%; max-width: 1200px; height: 60px; display: flex; justify-content: space-between; align-items: center; padding: 0 20px;}
.main-text { color: #1565c0; font-weight: bold; font-size: 1.3rem;}
.sub-text { color: #64b5f6; margin-left: 5px; font-size: 1.3rem;}
.nav-link { color: #555; text-decoration: none; transition: 0.3s; margin-left: 20px;}
.nav-link:hover { color: #1565c0; }

.hero-section { height: 85vh; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden;}
.hero-bg { position: absolute; width: 100%; height: 100%; object-fit: cover; filter: brightness(0.6); }
.hero-text { position: relative; color: white; text-align: center; text-shadow: 0 2px 5px rgba(0,0,0,0.5); background: rgba(0,0,0,0.3); padding: 30px; border-radius: 5px;}
.explore-btn { padding: 10px 25px; background: #1565c0; color: white; text-decoration: none; border-radius: 20px; margin-top: 20px; display: inline-block; transition: background 0.3s;}

.desk { background: #f5f5f5; padding: 60px 20px; text-align: center; }
.section-home-title { color: #0d47a1; font-size: 2rem; margin-bottom: 40px; font-weight: 500;}
.card-container { display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; }
.flip-card { width: 220px; height: 300px; perspective: 1000px; cursor: pointer; }
.flip-card-inner { width: 100%; height: 100%; transition: transform 0.7s; transform-style: preserve-3d; position: relative; box-shadow: 0 5px 15px rgba(0,0,0,0.1); border-radius: 15px;}
.flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
.flip-card-front, .flip-card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; background: white; border-radius: 15px; padding: 20px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 2px solid #e0e0e0;}
.flip-card-front h3 { color: #1565c0; }
.flip-card-back { background: #42a5f5; color: white; transform: rotateY(180deg); }
.flip-card-back h3 { color: #fff;}

.content { max-width: 900px; margin: 0 auto; padding: 60px 20px; }
.chapter-section { margin-bottom: 50px;}
.chapter-title { border-bottom: 3px solid #1565c0; padding-bottom: 10px; margin-bottom: 30px; color: #0d47a1; font-size: 1.8rem; font-weight: 600;}
.subchapter-title { color: #1565c0; font-size: 1.3rem; margin-top: 20px; margin-bottom: 15px; border-left: 5px solid #64b5f6; padding-left: 15px;}
.custom-paragraph { font-size: 1.05rem; line-height: 1.8; color: #444; margin-bottom: 15px; text-align: justify; }
.article-list { list-style: disc; padding-left: 30px; line-height: 1.6; color: #555; }
.article-ordered-list { list-style: decimal; padding-left: 30px; line-height: 1.6; color: #555; }
.two-column-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
</style>

<<<<<<< HEAD
<template>
  <nav class="nav-container">
    <div class="nav-content">
      <div class="nav-title"><span class="main-text">WINTER</span><span class="sub-text">IMMUNITY</span></div>
      <div class="nav-links">
        <a href="#home" class="nav-link">养生指南</a>
        <a href="#diet" class="nav-link">饮食调理</a>
        <a href="#lifestyle" class="nav-link">生活习惯</a>
      </div>
      <ThemeButton />
    </div>
  </nav>

  <div id="home" class="hero-section">
    <img src="../../assets/image/health/health-2/winter-health.jpg" alt="冬季养生背景" class="hero-bg">
    <div class="hero-text">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <a href="#diet" class="explore-btn">查看专家建议</a>
    </div>
  </div>

  <div id="diet" class="desk">
    <p class="section-home-title">冬季养生五要素（Flip Cards）</p>
    <div class="card-container">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front"><h3>均衡营养</h3></div>
          <div class="flip-card-back">
            <h3>核心要素</h3>
            <p>保证维生素C、D以及锌的摄入，这是免疫细胞正常运作的基础。</p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front"><h3>充足睡眠</h3></div>
          <div class="flip-card-back">
            <h3>夜间修复</h3>
            <p>每晚保证7-9小时的高质量睡眠，让免疫系统在夜间完成细胞修复和记忆巩固。</p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front"><h3>适度运动</h3></div>
          <div class="flip-card-back">
            <h3>增强循环</h3>
            <p>在户外晒太阳或在温暖室内进行30分钟中等强度运动，加速淋巴循环。</p>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front"><h3>保暖防寒</h3></div>
          <div class="flip-card-back">
            <h3>避免着凉</h3>
            <p>重点保护颈部、腹部和脚部。体温下降会降低免疫细胞的活性和血液循环速度。</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <main class="content" id="lifestyle">
    <section class="chapter-section">
      <h3 class="chapter-title">一、饮食调理：肠道免疫是关键</h3>
      <div class="paragraph-group">
        <p class="custom-paragraph">
          人体70%的免疫细胞集中在肠道。冬季通过温补和均衡营养来保护肠道菌群健康，是提高整体免疫力的重要途径。
        </p>
        <h4 class="subchapter-title">冬季“超级食物”清单：</h4>
        <ul class="article-list">
          <li><strong>温性食物：</strong> 多吃根茎类蔬菜（如山药、芋头）和温性肉类（如羊肉），有助于身体产热和御寒。</li>
          <li><strong>发酵食品：</strong> 酸奶、泡菜等富含益生菌，能维持肠道菌群平衡，间接提高免疫力。</li>
          <li><strong>充足水分：</strong> 冬季空气干燥，饮用温水或姜茶，保持鼻腔和咽喉湿润，防止病毒附着。</li>
        </ul>
      </div>
    </section>

    <section class="chapter-section">
      <h3 class="chapter-title">二、生活习惯：抵抗力基石</h3>
      <div class="paragraph-group two-column-layout">
        <div class="column left-column">
          <h4 class="subchapter-title">阳光与维生素D</h4>
          <p class="custom-paragraph">
            冬季日照时间短，是维生素D缺乏的高发季节。维生素D对免疫系统的T细胞功能至关重要。建议在天气晴朗时多进行户外活动，或在医生指导下补充维生素D。
          </p>
        </div>
        <div class="column right-column">
          <h4 class="subchapter-title">管理压力与情绪</h4>
          <p class="custom-paragraph">
            长期的慢性压力会持续释放皮质醇，抑制免疫细胞活性。通过冥想、兴趣爱好或社交活动来放松身心，积极的情绪是免疫力的重要后盾。
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import ThemeButton from '../../components/ThemeButton.vue'
import { onMounted } from 'vue';
const title = '冬季养生：提高免疫力的5个方法';
const description = '冬季气温低，容易感冒，专家分享5个提高免疫力的实用方法，帮助平安过冬。';
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
/* 风格：温暖的橘色和白色，强调活力 */
.nav-container { position: fixed; top: 0; width: 100%; background: rgba(255,255,255,0.9); z-index: 99; display: flex; justify-content: center; border-bottom: 1px solid #ffccbc;}
.nav-content { width: 100%; max-width: 1200px; height: 60px; display: flex; justify-content: space-between; align-items: center; padding: 0 20px;}
.main-text { color: #e64a19; font-weight: bold; font-size: 1.3rem;}
.sub-text { color: #ffab91; margin-left: 5px; font-size: 1.3rem;}
.nav-link { color: #555; text-decoration: none; transition: 0.3s; margin-left: 20px;}
.nav-link:hover { color: #e64a19; }

.hero-section { height: 85vh; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden;}
.hero-bg { position: absolute; width: 100%; height: 100%; object-fit: cover; filter: brightness(0.7); }
.hero-text { position: relative; color: white; text-align: center; text-shadow: 0 2px 5px rgba(0,0,0,0.5); background: rgba(0,0,0,0.2); padding: 30px; border-radius: 5px;}
.explore-btn { padding: 10px 25px; background: #e64a19; color: white; text-decoration: none; border-radius: 20px; margin-top: 20px; display: inline-block; transition: background 0.3s;}

.desk { background: #fff3e0; padding: 60px 20px; text-align: center; }
.section-home-title { color: #bf360c; font-size: 2rem; margin-bottom: 40px; font-weight: 500;}
.card-container { display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; }
.flip-card { width: 220px; height: 300px; perspective: 1000px; cursor: pointer; }
.flip-card-inner { width: 100%; height: 100%; transition: transform 0.7s; transform-style: preserve-3d; position: relative; box-shadow: 0 5px 15px rgba(0,0,0,0.1); border-radius: 15px;}
.flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
.flip-card-front, .flip-card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; background: white; border-radius: 15px; padding: 20px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 2px solid #ffccbc;}
.flip-card-front h3 { color: #e64a19; }
.flip-card-back { background: #ff7043; color: white; transform: rotateY(180deg); }
.flip-card-back h3 { color: #fff;}

.content { max-width: 900px; margin: 0 auto; padding: 60px 20px; }
.chapter-section { margin-bottom: 50px;}
.chapter-title { border-bottom: 3px solid #e64a19; padding-bottom: 10px; margin-bottom: 30px; color: #bf360c; font-size: 1.8rem; font-weight: 600;}
.subchapter-title { color: #e64a19; font-size: 1.3rem; margin-top: 20px; margin-bottom: 15px; border-left: 5px solid #ffab91; padding-left: 15px;}
.custom-paragraph { font-size: 1.05rem; line-height: 1.8; color: #444; margin-bottom: 15px; text-align: justify; }
.article-list { list-style: disc; padding-left: 30px; line-height: 1.6; color: #555; }
.two-column-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
</style>
=======
<template>
    <div>这里空空如也</div>
</template>
>>>>>>> 6fc6fc1e141455c14af0d004b0d937c274f90aa3

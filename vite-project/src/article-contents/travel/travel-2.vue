<template>
  <nav class="nav-container">
    <div class="nav-content">
      <div class="nav-title">
        <span class="main-text">AURORA</span>
        <span class="sub-text">HUNT</span>
      </div>

      <div class="nav-links">
        <a href="#home" class="nav-link">追光</a>
        <a href="#gear" class="nav-link">装备</a>
        <a href="#settings" class="nav-link">参数</a>
        <a href="#composition" class="nav-link">构图</a>
      </div>

      <ThemeButton />
    </div>
  </nav>

  <div id="home" class="hero-section">
    <div class="overlay"></div>
    <img src="../../assets/image/travel/travel-2/aurora.png" alt="极光背景" class="hero-bg">
    <div class="hero-text">
      <h1 class="glow-text">上帝的烟火</h1>
      <p class="fade-in">在北纬66°的冰原之上，等待那抹舞动的欧若拉。</p>
      <p class="fade-in delay">这不是一次旅行，而是一次对光影的朝圣。</p>
    </div>
  </div>

  <div id="gear" class="desk">
    <p class="section-home-title glow-green">摄影必备装备</p>
    <div class="card-container">
      <div class="flip-card" v-for="(item, i) in cardData" :key="i">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div class="icon-box">{{ item.icon }}</div>
            <h3>{{ item.front }}</h3>
          </div>
          <div class="flip-card-back">
            <h3>{{ item.front }}</h3>
            <p>{{ item.back }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <main class="content">
    <section id="settings" class="chapter-section">
      <h3 class="chapter-title">参数设置指南</h3>
      <p class="intro-text">极光变幻莫测，没有万能的参数，但以下基准能让你不至于手忙脚乱。</p>
      
      <div class="grid-box">
        <div class="param-item">
          <span class="param-label">FOCUS</span>
          <div class="param-val">MF ∞</div>
          <p class="param-desc">手动对焦至无限远，回拧 2mm 刻度。</p>
        </div>
        <div class="param-item">
          <span class="param-label">APERTURE</span>
          <div class="param-val">f/2.8</div>
          <p class="param-desc">光圈全开，进光量是成像的关键。</p>
        </div>
        <div class="param-item">
          <span class="param-label">ISO</span>
          <div class="param-val">1600+</div>
          <p class="param-desc">根据环境光调整，勿超过相机噪点承受极限。</p>
        </div>
        <div class="param-item">
          <span class="param-label">SHUTTER</span>
          <div class="param-val">2s - 8s</div>
          <p class="param-desc">极光舞动快时缩短快门，避免糊成一片。</p>
        </div>
      </div>
    </section>

    <section id="composition" class="chapter-section">
      <h3 class="chapter-title" style="border-color: #b388ff; color: #b388ff;">构图美学：前景的艺术</h3>
      <div class="text-block">
        <p>拍摄极光最大的误区是<strong>“只拍天空”</strong>。</p>
        <p>一张优秀的极光作品，天空的极光决定了<strong>上限</strong>，而地面的前景决定了<strong>下限</strong>。</p>
        <ul class="neon-list">
          <li><strong>水面倒影：</strong> 寻找湖泊或未结冰的河流，结合倒影让画面更加美丽，如梦似幻。</li>
          <li><strong>冰雪纹理：</strong> 利用广角镜头的畸变，贴近地面的冰块或雪堆，突出前景的质感。</li>
          <li><strong>人造光源：</strong> 远处的小木屋灯光或帐篷微光，能为画面增添一丝温暖的故事感。</li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script setup>
import ThemeButton from '../../components/ThemeButton.vue'
import { onMounted, inject } from 'vue'

const theme = inject('theme')
const toggleTheme = inject('toggleTheme')

// 卡片数据增加 Icon 占位
const cardData = [
  { icon: '▲', front: '稳固三脚架', back: '长曝光的核心基石。冰岛风大，建议不要升起中轴，必要时挂载摄影包增加配重。' },
  { icon: '◎', front: '大光圈广角', back: '推荐 14-24mm F2.8 镜头。广角能容纳宏大的地景与漫天的极光，大光圈保证进光量。' },
  { icon: '⚡', front: '低温防护', back: '极寒下电池续航减半。务必贴身携带备用电池，并在镜头上使用加热带防止起雾。' }
]

onMounted(() => {
  // 强制进入沉浸式夜间模式
  if (theme && theme.value !== 'dark' && toggleTheme) {
    toggleTheme()
  }

  // 平滑滚动逻辑
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const targetId = this.getAttribute('href')
      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })
})
</script>

<style scoped>
/* ================= CSS 变量定义 ================= */
:root {
  --neon-green: #00e676;
  --neon-purple: #b388ff;
  --bg-dark: #050505;
  --bg-card: #121212;
  --text-main: #e0e0e0;
}

/* ================= 导航栏 ================= */
.nav-container {
  position: fixed; top: 0; width: 100%;
  background: rgba(5, 5, 5, 0.85); z-index: 99;
  display: flex; justify-content: center;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 230, 118, 0.2);
  box-shadow: 0 0 15px rgba(0, 230, 118, 0.1);
}
.nav-content { width: 100%; max-width: 1200px; height: 70px; display: flex; justify-content: space-between; align-items: center; padding: 0 20px;}
.main-text { 
  color: var(--neon-green); font-family: 'Courier New', monospace; font-weight: bold; font-size: 1.4rem; 
  text-shadow: 0 0 5px var(--neon-green);
}
.sub-text { 
  color: var(--neon-purple); margin-left: 5px; font-size: 1.4rem; font-weight: 300; letter-spacing: 2px;
  text-shadow: 0 0 5px var(--neon-purple);
}
.nav-links { display: flex; gap: 30px; }
.nav-link { text-decoration: none; color: #888; transition: 0.3s; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;}
.nav-link:hover { color: var(--neon-green); text-shadow: 0 0 8px var(--neon-green); }

/* ================= Hero 区域 ================= */
.hero-section { height: 90vh; position: relative; display: flex; align-items: center; justify-content: center; overflow: hidden; background: black;}
.hero-bg { position: absolute; width: 100%; height: 100%; object-fit: cover; }
.overlay { position: absolute; width: 100%; height: 100%; background: radial-gradient(circle, transparent 20%, #000 100%); z-index: 1; }
.hero-text { position: relative; color: white; text-align: center; z-index: 2; max-width: 600px;}
.hero-text h1 { 
  font-size: 4rem; margin-bottom: 20px; letter-spacing: 5px; 
  background: linear-gradient(to right, #fff, var(--neon-green)); 
  -webkit-background-clip: text; color: transparent;
  filter: drop-shadow(0 0 15px rgba(0, 230, 118, 0.6));
}
.hero-text p { font-size: 1.1rem; color: #ccc; line-height: 1.6; margin-bottom: 10px; }

/* 简单的淡入动画 */
.fade-in { opacity: 0; animation: fadeIn 1.5s forwards; }
.delay { animation-delay: 0.5s; }
@keyframes fadeIn { to { opacity: 1; } }

/* ================= 装备卡片 (Desk) ================= */
.desk { 
  background: radial-gradient(circle at center, #1a1a1a 0%, #000 100%); 
  padding: 80px 20px; text-align: center; 
  position: relative;
}
.section-home-title { 
  font-size: 2rem; margin-bottom: 50px; display: inline-block;
  color: var(--neon-green); text-transform: uppercase; letter-spacing: 3px;
}
.glow-green { text-shadow: 0 0 15px rgba(0, 230, 118, 0.4); }

.card-container { display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; perspective: 1200px; }
.flip-card { width: 260px; height: 340px; cursor: pointer; }
.flip-card-inner { 
  width: 100%; height: 100%; transition: transform 0.8s cubic-bezier(0.4, 0.2, 0.2, 1); 
  transform-style: preserve-3d; position: relative; 
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
  border-radius: 15px;
}
.flip-card:hover .flip-card-inner { transform: rotateY(180deg); box-shadow: 0 0 30px rgba(0, 230, 118, 0.2); }

.flip-card-front, .flip-card-back {
  position: absolute; width: 100%; height: 100%; backface-visibility: hidden;
  background: rgba(20, 20, 20, 0.95); 
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 15px; padding: 30px; box-sizing: border-box;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
}

/* 卡片正面 */
.flip-card-front { border-bottom: 2px solid var(--neon-green); }
.icon-box { font-size: 3rem; color: var(--neon-green); margin-bottom: 20px; filter: drop-shadow(0 0 5px var(--neon-green)); }
.flip-card-front h3 { color: #fff; font-size: 1.4rem; letter-spacing: 1px; }

/* 卡片背面 */
.flip-card-back { 
  background: linear-gradient(135deg, #1a1a1a, #050505); 
  transform: rotateY(180deg); 
  border: 1px solid var(--neon-purple);
  box-shadow: inset 0 0 20px rgba(179, 136, 255, 0.1);
}
.flip-card-back h3 { color: var(--neon-purple); margin-bottom: 15px; text-shadow: 0 0 5px var(--neon-purple); }
.flip-card-back p { color: #ccc; font-size: 0.95rem; line-height: 1.6; text-align: justify; }

/* ================= 内容区域 (Main) ================= */
.content { max-width: 900px; margin: 0 auto; padding: 80px 20px; background: #000; color: #eee; min-height: 50vh;}
.chapter-section { margin-bottom: 60px; }
.chapter-title { 
  border-left: 4px solid var(--neon-green); padding-left: 15px; margin-bottom: 30px; 
  color: #fff; font-size: 1.8rem; text-transform: uppercase; letter-spacing: 1px;
}
.intro-text { color: #888; margin-bottom: 30px; font-style: italic; }

/* 参数网格布局 */
.grid-box { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px; }
.param-item { 
  background: #0a0a0a; border: 1px solid #333; padding: 20px; border-radius: 8px; text-align: center;
  transition: 0.3s;
}
.param-item:hover { border-color: var(--neon-green); box-shadow: 0 0 15px rgba(0, 230, 118, 0.15); transform: translateY(-5px); }

.param-label { display: block; color: #666; font-size: 0.8rem; letter-spacing: 1px; margin-bottom: 5px; }
.param-val { 
  font-size: 1.8rem; color: var(--neon-green); font-family: 'Courier New', monospace; font-weight: bold; 
  text-shadow: 0 0 8px rgba(0, 230, 118, 0.4); margin-bottom: 10px;
}
.param-desc { font-size: 0.85rem; color: #aaa; line-height: 1.4; }

/* 构图列表 */
.text-block p { line-height: 1.8; color: #ccc; margin-bottom: 20px; font-size: 1.05rem; }
.neon-list { list-style: none; padding: 0; margin-top: 20px; }
.neon-list li { 
  margin-bottom: 15px; padding-left: 20px; position: relative; color: #bbb;
  border-left: 1px solid #333; transition: 0.3s; padding: 15px; background: rgba(255,255,255,0.02);
}
.neon-list li:hover { border-left: 3px solid var(--neon-purple); background: linear-gradient(90deg, rgba(179, 136, 255, 0.1), transparent); }
.neon-list strong { color: var(--neon-purple); margin-right: 5px; }
</style>
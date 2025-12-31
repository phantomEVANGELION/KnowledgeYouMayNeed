<template>
    <nav class="nav-container">
        <div class="nav-content">
        <div class="nav-title">
            <span class="main-text">ABYSS</span>
            <span class="sub-text">PHANTOM</span>
        </div>

        <div class="nav-links">
            <RouterLink to="/" class="nav-link">首页</RouterLink>
            <a href="#home" class="nav-link">深渊入口</a>
            <a href="#anatomy" class="nav-link">生理构造</a>
            <a href="#biolum" class="nav-link">光之伪装</a>
            <a href="#zone" class="nav-link">暮光带</a>
            <a href="#mystery" class="nav-link">未知探索</a>
        </div>

        <div class="nav-button-area">
            <ThemeButton></ThemeButton>
        </div>
        </div>
    </nav>

    <div id="home" class="hero-section">
    <img src="../../assets/image/animal/animal-3/cemian.png" alt="深海背景" class="hero-bg">
    
    <div class="hero-text">
        <h1>深海幽灵</h1>
        <p>黑暗中的微光，死神般的面孔。在200-1000米的深海暮光带，斧头鱼演绎着光与影的生存游戏。</p >
        <a href="#anatomy" class="explore-btn">潜入深渊</a>
    </div>
    </div>

    <div id="anatomy" class="desk">
        <p class="section-home-title">深海的生存装备</p>
        <div class="card-container">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                       
                        <h3 class="card-title">银色斧刃</h3>
                        <p class="card-desc">独特的 “压缩体型”</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 class="card-title">详细信息</h3>
                        <p class="card-desc">斧头鱼因其侧扁、像斧头一样的身体形状而得名。这种极薄的体型大大减少了自上而下的投影面积，使其很难被下方的掠食者发现。<br>
                            体表覆盖着银色的鳞片，能反射周围微弱的光线，进一步隐形于海水中。
                        </p>
                    </div>
                </div>
            </div>

            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        
                        <h3 class="card-title">管状巨眼</h3>
                        <p class="card-desc">向上凝视的 “微光雷达”</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 class="card-title">详细信息</h3>
                        <p class="card-desc">为了捕捉上方海面透下来的极其微弱的光线，斧头鱼演化出了巨大的管状眼睛，且永远向上方凝视。<br>
                            这使它们能通过“剪影”发现上方游过的猎物（如桡足类动物），即便在几乎完全黑暗的环境中也能精准锁定目标。
                        </p>
                    </div>
                </div>
            </div>

            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        
                        <h3 class="card-title">腹部光阵</h3>
                        <p class="card-desc">高科技的 “隐身斗篷”</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 class="card-title">详细信息</h3>
                        <p class="card-desc">斧头鱼腹部排列着复杂的发光器（Photophores）。它们能产生与上方透射下来的阳光强度和颜色完全一致的光。<br>
                            这种现象被称为“反荫蔽”（Counter-illumination），通过自己发光来消除身体挡住阳光造成的阴影，从而避开下方捕食者的视线。
                        </p>
                    </div>
                </div>
            </div>

             <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                       
                        <h3 class="card-title">垂直洄游</h3>
                        <p class="card-desc">追随黑夜的 “升降机”</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 class="card-title">详细信息</h3>
                        <p class="card-desc">像许多中层带鱼类一样，斧头鱼参与地球上最大规模的生物迁徙——垂直洄游。<br>
                            白天它们躲在较深、较暗的水域（400-1000米）躲避天敌，夜晚则上浮到较浅的水域觅食浮游生物，黎明前再次潜回深渊。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <main class="content">
      <section class="intro-section">
        <p class="intro-text">
          这里是地球的内太空，压力巨大，寒冷刺骨，漆黑一片。在这片被称为“暮光带”的水域，深海斧头鱼（Hatchetfish）展示了生命进化的极致——它们不仅适应了高压，更学会了控制光线，让自己成为深海中的隐形幽灵。
        </p>
      </section>

      <section id="zone" class="chapter-section">
        <h3 class="chapter-title">一、暮光带：光影交界处的战场</h3>
        
        <div class="paragraph-group left-offset">
          <p class="custom-paragraph">
            海洋中层（Mesopelagic Zone），深度在200至1000米之间，被称为“暮光带”。这里只有极少量的蓝光能穿透下来，植物无法进行光合作用。<br>
            在这个深度，生物面临着双重挑战：既要利用微弱的光线寻找食物，又要避免被其他掠食者发现。斧头鱼正是这一环境下的进化杰作。
          </p>
          
         
        </div>
      </section>

      <section id="biolum" class="chapter-section">
        <h3 class="chapter-title">二、生物发光：反荫蔽的艺术</h3>
        
        <div class="two-column-layout">
          <div class="column left-column">
            <h4 class="subchapter-title">消除阴影的魔法</h4>
            <p class="custom-paragraph">
              在海洋中，对于下方的捕食者来说，上方的猎物会像剪影一样暴露在微光背景中。斧头鱼通过调节腹部发光器的亮度，使其与背景光完美融合。如果有云遮住月光，它们会调暗灯光；如果是明亮的满月夜，它们则调亮灯光。
            </p>
          </div>
          
          <div class="column right-column">
            <h4 class="subchapter-title">化学冷光</h4>
            <p class="custom-paragraph">
              这种发光是通过化学反应产生的“冷光”，效率极高，几乎不产生热量（能量转化率近100%）。相比之下，人类的白炽灯只有10%的能量转化为光。斧头鱼还能利用特殊的滤光片调整光的颜色，以匹配海水的蓝色。
            </p>
          </div>
        </div>

        <div class="img-card full-width">
          <img src="../../assets/image/animal/animal-3/bg.jpg" alt="发光的斧头鱼" class="content-img">
          <p class="img-caption">自带“隐身护盾”的深海猎手</p>
        </div>
      </section>

      <section id="features" class="chapter-section">
        <h3 class="chapter-title">三、解剖特征：为恐惧而生</h3>
        <div class="paragraph-group right-offset">
          <p class="custom-paragraph">
            斧头鱼的外表常被形容为“噩梦般的”。它们面部表情狰狞，嘴角向下，眼神空洞。但这种外貌纯粹是功能性的：巨大的嘴巴可以吞下比自己体型还大的猎物——在食物稀缺的深海，不能浪费任何一次捕食机会。其身体极度侧扁，只有几毫米厚，但这并不妨碍它们拥有强壮的肌肉进行短距离冲刺。
          </p>
          <div class="img-card">
            <img src="../../assets/image/animal/animal-3/front.jpg" alt="斧头鱼面部特写" class="content-img" style="width:60%">
            <p class="img-caption">虽面目可憎，却是生存大师</p>
          </div>
        </div>
      </section>

      <section id="mystery" class="chapter-section">
        <h3 class="chapter-title">四、文化映射：深海的恐怖与惊奇</h3>
        
        <div class="paragraph-group left-offset">
          <p class="custom-paragraph">
            深海生物独特的造型常成为科幻电影和恐怖游戏的灵感来源。斧头鱼那标志性的“死人脸”和发光特性，启发了无数关于外星生物和深海怪兽的设计。例如在电影《寻找尼莫》中，深海生物的恐怖形象就借鉴了此类鱼类的特征。
          </p>
        </div>

        <div class="paragraph-group right-offset">
          <p class="custom-paragraph">
            然而，人类对深海的了解甚至少于月球表面。斧头鱼只是冰山一角。随着深潜技术的发展，我们意识到这些看似恐怖的生物，其实维系着海洋碳循环的重要平衡。它们每天的垂直迁徙，将海面的碳带入深海封存，是对抗全球变暖的隐形功臣。
          </p>
        </div>
      </section>
    </main>

    <a id="knowledge" href="https://ocean.si.edu/ocean-life/fish/hatchetfish" target="_blank" class="external-link primary-link">
      探索史密森尼海洋门户，潜入更深处 →
    </a>
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

.content-img {
  width: 85%;        /* 原来是100%，现在缩小一点 */
  max-width: 650px;  /* 给大屏上限，避免太宽 */
  display: block;
  margin: 0 auto;    /* 保持图片居中 */
  border-radius: 12px;
}

/* 图片下面的文字也顺便规范一下间距 */
.img-caption {
  text-align: center;
  font-size: 0.95rem;
  opacity: 0.8;
  margin-top: 6px;
}

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    /* 导航栏：深海蓝基调 */
    .nav-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: rgba(10, 25, 47, 0.85); /* 深蓝半透明 */
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px); 
        z-index: 999; 
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.5s ease;
    }
    .dark .nav-container {
        background-color: rgba(0, 0, 0, 0.9);
    }

    .nav-content {
        max-width: 1400px;
        margin: 0 auto;
        padding: 0 2rem;
        height: 4rem;
        display: flex;
        justify-content: space-between; 
        align-items: center;
        gap: 2rem;
    }

    .nav-title {
        margin-left: 30px;
        display: flex;
        gap: 10px;
        font-size: 1.9rem;
        font-weight: 700;
        font-family: 'Segoe UI', 'Inter', sans-serif;
    }
    
    .main-text {
        color: #e0f7fa; /* 浅青色 */
        transition: all 0.8s ease;
        text-shadow: 0 0 10px rgba(0, 229, 255, 0.5); /* 荧光效果 */
    }

    .sub-text {
        color: #00bcd4; /* 青色 */
        margin-left: 0.3rem;
        transition: all 1.0s ease;
    }

    .nav-links { display: flex; gap: 2.0rem; }

    .nav-link {
        color: #b2ebf2; /* 浅蓝白色 */
        text-decoration: none;
        font-size: 1rem;
        font-weight: 500;
        transition: color 0.5s ease;
        position: relative;
    }

    .nav-link:hover {
        color: #00e5ff; /* 亮青色 */
        text-shadow: 0 0 8px rgba(0, 229, 255, 0.8);
    }

    .nav-link::after {
        content: '';
        position: absolute;
        bottom: -0.3rem;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #00e5ff;
        box-shadow: 0 0 5px #00e5ff;
        transition: width 0.3s ease;
    }

    .nav-link:hover::after { width: 100%; }

    .nav-button-area { width: 6rem; }

    @media (max-width: 768px) {
        .nav-content { padding: 0 1rem; gap: 1rem; }
        .nav-links { gap: 1.5rem; }
        .nav-title { font-size: 1.2rem; }
        .nav-link { font-size: 0.9rem; }
    }

    /* Hero Section */
    .hero-section {
        position: relative;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        background: #000; /* 默认黑底，防止图片加载慢时白屏 */
    }

    .hero-bg {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
    }

    .hero-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #e0f7fa;
        text-align: center;
        max-width: 600px;
    }

    .hero-text h1 {
        font-size: clamp(2.5rem, 6vw, 4.5rem);
        margin-bottom: 1rem;
        text-shadow: 0 0 20px rgba(0, 229, 255, 0.6);
        letter-spacing: 5px;
    }

    .hero-text p {
        font-size: clamp(1rem, 2vw, 1.2rem);
        line-height: 1.6;
        margin-bottom: 2rem;
        color: #b2ebf2;
    }

    /* 按钮：荧光风格 */
    .explore-btn {
        padding: 0.8rem 2.5rem;
        background: transparent;
        border: 1px solid #00e5ff;
        color: #00e5ff;
        border-radius: 2px;
        cursor: pointer;
        font-size: 1rem;
        transition: all 0.3s;
        box-shadow: 0 0 10px rgba(0, 229, 255, 0.2);
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    .explore-btn:hover {
        background: rgba(0, 229, 255, 0.2);
        box-shadow: 0 0 20px rgba(0, 229, 255, 0.6);
        color: #fff;
    }

    /* 卡片区：深海背景 */
    .desk {
        width: 100%;
        background: radial-gradient(circle at center, #1a237e 0%, #000000 100%);
        border-radius: 20px;
        padding: 40px 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        border: 1px solid #0d47a1;
    }

    .section-home-title {
        margin: 0 0;
        display: block;
        font-size: 2rem;
        font-family: serif;
        font-weight: 600;
        color: #4fc3f7;
        margin-bottom: 2rem;
        text-shadow: 0 0 10px rgba(79, 195, 247, 0.5);
    }

    .card-container {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: center;
        max-width: 1300px;
        margin: 0 auto;
        padding-top: 30px;
    }

    .flip-card {
        width: 300px;
        height: 400px;
        perspective: 2000px;
        cursor: pointer;
    }
    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        border-radius: 16px;
        transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
        box-shadow: 0 0 15px rgba(0, 229, 255, 0.1);
    }
    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg) scale(1.1) translateY(-10px);
        box-shadow: 0 0 25px rgba(0, 229, 255, 0.3);
    }

    /* 正面：深蓝半透明 */
    .flip-card-front {
        background: rgba(13, 71, 161, 0.2);
        color: #e0f7fa;
        border: 1px solid #0277bd;
        backdrop-filter: blur(5px);
    }

    /* 背面：深海渐变 */
    .flip-card-back {
        background: linear-gradient(135deg, #01579b 0%, #000000 100%);
        color: #b2ebf2;
        transform: rotateY(180deg);
        border: 1px solid #00bcd4;
    }

    .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 16px;
        overflow: hidden;
        padding: 24px;
        display: flex;
        flex-direction: column;
    }
    
    .card-img-container {
        width: 100%;
        height: 50%;
        border-radius: 12px;
        overflow: hidden;
        margin-bottom: 20px;
        border: 1px solid rgba(0, 229, 255, 0.3);
    }
    .card-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.8s ease;
    }
    .flip-card:hover .card-img { transform: scale(1.05); }
    
    .card-title {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 12px;
        color: #4fc3f7;
    }
    .flip-card-back .card-title { color: #80deea; }

    .card-desc {
        font-size: 15px;
        line-height: 1.6;
        opacity: 0.9;
        flex: 1;
    }

    /* 内容区 */
    .content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 4rem 2rem;
    }

    .intro-text {
        font-size: 1.2rem;
        text-align: center;
        max-width: 900px;
        margin: 0 auto;
        color: #546e7a; /* 稍微深一点的灰蓝，保证阅读舒适 */
        line-height: 2;
    }
    .dark .intro-text { color: #b0bec5; }

    .chapter-section { margin-bottom: 6rem; }

    .chapter-title {
        font-size: 2rem;
        color: #01579b;
        margin-bottom: 2.5rem;
        padding-bottom: 1rem;
        border-bottom: 2px solid #00e5ff; /* 青色下划线 */
    }
    .dark .chapter-title { color: #81d4fa; }

    .chapter-title::first-letter {
        float: left;
        font-size: 4rem;
        line-height: 1;
        margin-right: 0.5rem;
        color: #0277bd;
        font-weight: 800;
        text-shadow: 0 0 5px rgba(2, 119, 189, 0.5);
    }

    .subchapter-title {
        font-size: 1.5rem;
        color: #0277bd;
        margin-bottom: 1.5rem;
        padding-left: 1rem;
        border-left: 4px solid #00e5ff;
    }
    .dark .subchapter-title { color: #4fc3f7; }

    .paragraph-group { margin-bottom: 2rem; }
    .left-offset { margin-left: 1rem; }
    .right-offset { margin-right: 1rem; }
    .two-column-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        margin-bottom: 3rem;
    }
    
    .custom-paragraph {
        font-size: 1.05rem;
        color: #455a64;
        margin-bottom: 1.5rem;
        text-align: justify;
    }
    .dark .custom-paragraph { color: #cfd8dc; }

    .custom-paragraph::first-letter {
        float: left;
        font-size: 2.5rem;
        line-height: 0.8;
        margin-right: 0.8rem;
        color: #00bcd4;
        font-weight: 700;
    }

    .img-card { margin: 2rem 0; text-align: center; }
    .content-img {
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        max-width: 100%;
        height: auto;
        transition: transform 0.3s ease;
    }
    .content-img:hover { transform: scale(1.02); }
    .img-caption {
        margin-top: 0.8rem;
        font-size: 0.9rem;
        color: #78909c;
        font-style: italic;
    }

    .external-link {
        display: inline-block;
        color: #0277bd;
        text-decoration: none;
        font-weight: 500;
        margin-top: 0.5rem;
        transition: all 0.3s ease;
    }
    .external-link:hover {
        color: #00e5ff;
        transform: translateX(5px);
    }
    .primary-link {
        background-color: #0277bd;
        color: white;
        padding: 0.8rem 1.5rem;
        border-radius: 4px;
        margin-top: 1rem;
        box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    }
    .primary-link:hover {
        background-color: #01579b;
        transform: translateX(0) scale(1.05);
        box-shadow: 0 0 15px rgba(0, 229, 255, 0.4);
    }
</style>
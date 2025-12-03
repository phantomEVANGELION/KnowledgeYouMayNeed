<<<<<<< HEAD
<template>
    <nav class="nav-container">
        <div class="nav-content">
        <div class="nav-title">
            <span class="main-text">ABYSS</span>
            <span class="sub-text">PHANTOM</span>
        </div>

        <div class="nav-links">
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
    <img src="../../assets/image/animal/animal-3/hatchetBegin.jpg" alt="深海背景" class="hero-bg">
    
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
                        <div class="card-img-container">
                            <img src="../../assets/image/animal/animal-3/body_shape.png" alt="斧状身躯" class="card-img">
                        </div>
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
                        <div class="card-img-container">
                            <img src="../../assets/image/animal/animal-3/eyes.png" alt="管状眼睛" class="card-img">
                        </div>
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
                        <div class="card-img-container">
                            <img src="../../assets/image/animal/animal-3/photophores.png" alt="发光器" class="card-img">
                        </div>
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
                        <div class="card-img-container">
                            <img src="../../assets/image/animal/animal-3/deep_sea.png" alt="垂直洄游" class="card-img">
                        </div>
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
          
          <div class="img-card">
            <img src="../../assets/image/animal/animal-3/twilight_zone.jpg" alt="深海分层图" class="content-img">
            <p class="img-caption">生活在黑暗边缘的生命</p>
          </div>
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
          <img src="../../assets/image/animal/animal-3/glowing.jpg" alt="发光的斧头鱼" class="content-img">
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
            <img src="../../assets/image/animal/animal-3/face.jpg" alt="斧头鱼面部特写" class="content-img" style="width:60%">
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
=======
<template>
  <div class="lion-culture-page">
    <!-- 顶部导航栏 -->
    <nav class="navbar">
      <div class="navbar-container">
        <h1 class="navbar-title">
          <span class="lion">Lion</span>
          <span class="culture">Culture</span>
        </h1>
        <div class="navbar-links">
          <a href="#film" class="nav-link">影视中的狮子</a>
          <a href="#literature" class="nav-link">文学中的狮子</a>
          <a href="#cross-culture" class="nav-link">跨文化象征</a>
          <a href="#significance" class="nav-link">现实意义</a>
        </div>
      </div>
    </nav>

    <!-- 英雄区域 -->
    <header class="hero">
      <div class="hero-overlay">
        <h2 class="hero-title">狮子：自然王者与文化符号</h2>
        <p class="hero-subtitle">跨越生态与文明的永恒象征</p>
      </div>
    </header>

    <!-- 核心内容区 -->
    <main class="content">
      <!-- 开篇引言 -->
      <section class="intro-section">
        <p class="intro-text">
          狮子不仅是生态系统中的顶级掠食者，更凭借其雄伟的外形、群居的社会性和 “王者” 气质，深入人类文化的各个领域，成为影视、文学作品中的经典形象，同时在不同文明中承载着丰富的象征意义。
        </p>
      </section>

      <!-- 一、影视中的狮子 -->
      <section id="film" class="chapter-section">
        <h3 class="chapter-title">一、影视中的狮子：艺术加工与现实科普的交织</h3>
        
        <div class="paragraph-group left-offset">
          <p class="custom-paragraph">
            提到以狮子为核心的影视作品，迪士尼的《狮子王》（1994 年动画版及 2019 年真人版）无疑是全球最具影响力的作品。影片以非洲草原为背景，讲述了小狮子辛巴从懵懂幼崽成长为狮群首领的故事，既展现了亲情、责任与勇气的主题，也在艺术化表达中隐含了狮子的自然习性 —— 比如影片中狮群的等级秩序、领地争夺、幼崽抚育等情节，与现实中狮群的 “首领雄狮守护领地”“雌狮集体抚育幼崽” 等习性形成呼应。不过，影片也进行了艺术加工：现实中雄狮并不会像辛巴的父亲木法沙那样直接参与捕猎，而 “流浪雄狮结盟挑战首领” 的情节，则真实还原了亚成年雄狮的生存轨迹。
          </p>
          
          <div class="img-card">
            <img src="https://picsum.photos/id/237/800/450" alt="狮子王场景还原" class="content-img">
            <p class="img-caption">《狮子王》的艺术表达与现实狮群习性的呼应</p>
          </div>
        </div>

        <div class="paragraph-group right-offset">
          <p class="custom-paragraph">
            除了《狮子王》，纪录片领域也有大量聚焦狮子的作品。例如 BBC 的《非洲》《王朝》等纪录片，通过高清镜头记录了狮子的捕猎过程、狮群内部的协作与冲突、幼崽的成长困境等真实场景，不仅展现了狮子的野性之美，更向观众普及了 “捕猎成功率低”“栖息地缩减” 等科学知识，成为科普狮子的重要载体。这些影视作品既满足了人们对狮子的好奇心，也间接推动了公众对狮子保护的关注。
          </p>
          <a href="https://www.bbc.co.uk/programmes/b00r9zv7" target="_blank" class="external-link">
            查看BBC《非洲》纪录片中狮子的精彩片段 →
          </a>
        </div>
      </section>

      <!-- 二、文学与读物中的狮子 -->
      <section id="literature" class="chapter-section">
        <h3 class="chapter-title">二、文学与读物中的狮子：从科普到精神象征</h3>
        
        <div class="paragraph-group left-offset">
          <p class="custom-paragraph">
            在文学和科普读物中，狮子的形象呈现出 “科学写实” 与 “精神象征” 两大维度。
          </p>
          <p class="custom-paragraph">
            科普读物中，狮子是动物学研究的重要对象。《动物世界全集》《猫科动物图鉴》等书籍会详细解析狮子的分类地位、解剖结构、生存策略等专业知识，与本文的科普内容相辅相成，帮助读者构建系统的动物学认知；而面向青少年的科普读物（如《狮子的秘密生活》）则会以更生动的叙事，结合狮群的真实故事，讲解 “鬃毛的作用”“狮群分工” 等知识点，让科学知识更易理解。
          </p>
        </div>

        <div class="paragraph-group right-offset">
          <p class="custom-paragraph">
            在文学作品中，狮子常被赋予 “勇气、力量、正义” 的象征意义。例如《纳尼亚传奇》中，雄狮阿斯兰是正义与神圣的化身，其形象融合了狮子的王者气质与人类的道德理想，成为推动剧情的核心力量；中国古典文学中，狮子虽非本土物种，但通过丝绸之路传入后，成为 “百兽之王” 的代名词，出现在《西游记》等作品中，象征着威严与守护。这些文学形象既源于狮子的自然属性，又被赋予了人类的精神寄托，成为跨越年龄的经典符号。
          </p>
          
          <div class="img-card">
            <img src="https://picsum.photos/id/1074/800/450" alt="文学作品中的狮子形象" class="content-img">
            <p class="img-caption">文学作品中狮子的精神象征意义</p>
          </div>
          <a href="https://book.douban.com/subject/1071421/" target="_blank" class="external-link">
            了解《纳尼亚传奇》中阿斯兰的文化内涵 →
          </a>
        </div>
      </section>

      <!-- 三、跨文化中的狮子 -->
      <section id="cross-culture" class="chapter-section">
        <h3 class="chapter-title">三、跨文化中的狮子：不同文明的共同信仰</h3>
        
        <p class="chapter-intro">
          尽管狮子的原生栖息地集中在非洲和亚洲少数地区，但它的形象却跨越地域，成为不同文明的共同文化符号，承载着多样的象征意义。
        </p>

        <div class="subchapter">
          <h4 class="subchapter-title">1. 西方文化：王权与力量的象征</h4>
          <div class="paragraph-group left-offset">
            <p class="custom-paragraph">
              在欧洲文化中，狮子长期与王权、贵族精神绑定。例如英国国徽上绘有三只狮子，象征着王权的威严与力量；中世纪的欧洲贵族常将狮子图案印在徽章、旗帜上，代表勇气与统治力。这种象征意义的起源，与狮子 “首领守护领地”“群体协作” 的习性相关 —— 人们将狮群的秩序与王权的统治类比，赋予狮子 “尊贵、不可侵犯” 的内涵。此外，在基督教文化中，狮子被视为 “百兽之王”，与福音书的传播相关联，成为神圣与力量的象征。
            </p>
          </div>
        </div>

        <div class="subchapter">
          <h4 class="subchapter-title">2. 东方文化：吉祥与守护的化身</h4>
          <div class="paragraph-group right-offset">
            <p class="custom-paragraph">
              中国文化中的狮子形象，虽多源于外来传入（如汉代通过丝绸之路引入的狮子雕像），却逐渐发展出独特的文化内涵。最具代表性的便是 “舞狮” 习俗，每逢春节、庆典，人们通过舞狮祈求吉祥、驱邪避灾，此时的狮子成为 “吉祥瑞兽”；而宫殿、寺庙前的石狮子，则以威严的姿态守护着建筑，象征着守护与庄重。此外，佛教文化中，狮子是佛陀的坐骑 “狮子座”，代表着智慧与威严，进一步丰富了狮子在东方文化中的精神意义。
            </p>
            <div class="img-card">
              <img src="https://picsum.photos/id/1059/800/450" alt="东方文化中的石狮子" class="content-img">
              <p class="img-caption">中国传统石狮子的守护象征</p>
            </div>
          </div>
        </div>

        <div class="subchapter">
          <h4 class="subchapter-title">3. 现代文化：全球共识的 “保护符号”</h4>
          <div class="paragraph-group left-offset">
            <p class="custom-paragraph">
              进入现代社会，狮子的文化意义逐渐与生态保护结合。由于狮子数量持续减少，它成为全球野生动物保护的核心符号之一：世界自然基金会（WWF）的宣传海报中常出现狮子形象，呼吁人们保护其栖息地；“世界狮子日”（8 月 10 日）的设立，也借助狮子的文化影响力，推动公众关注濒危物种保护。此时的狮子，不仅是文化中的 “王者”，更成为生态平衡的 “代言人”，连接着人类与自然的关系。
            </p>
            <a href="https://wwf.panda.org/our_work/wildlife/profiles/mammals/lion/" target="_blank" class="external-link">
              访问WWF狮子保护项目，了解更多保护行动 →
            </a>
          </div>
        </div>
      </section>

      <!-- 四、文化与自然的共鸣 -->
      <section id="significance" class="chapter-section">
        <h3 class="chapter-title">四、文化与自然的共鸣：狮子形象的现实意义</h3>
        
        <div class="paragraph-group right-offset">
          <p class="custom-paragraph">
            狮子的文化形象之所以能跨越千年、遍及全球，本质上源于它的自然属性 —— 雄伟的外形、群居的智慧、顽强的生存意志，恰好契合了人类对 “力量、秩序、勇气” 的追求。而影视、文学作品对狮子的呈现，又反过来影响着人们对狮子的认知：一方面，艺术化的形象让更多人关注狮子；另一方面，科学科普则帮助人们区分 “艺术加工” 与 “现实习性”，避免对狮子产生误解（如认为雄狮主导捕猎、狮子天生 “凶猛好斗” 等）。
          </p>
        </div>

        <div class="paragraph-group left-offset">
          <p class="custom-paragraph">
            如今，随着狮子生存状况的恶化，其文化影响力更成为推动保护行动的重要力量。当我们在影视、文学中看到狮子的身影时，不仅能感受到其 “王者” 气质，更应联想到它们在自然界中的真实困境 —— 栖息地破坏、偷猎威胁等。这种文化与自然的共鸣，让狮子的形象超越了 “动物” 本身，成为人类与自然和谐共生的重要象征。
          </p>
          
          <div class="img-card full-width">
            <img src="https://picsum.photos/id/1018/1200/500" alt="狮子保护公益宣传" class="content-img">
            <p class="img-caption">狮子保护：连接文化与自然的重要使命</p>
          </div>
          <a href="https://www.worldlionday.org/" target="_blank" class="external-link primary-link">
            了解世界狮子日，参与狮子保护行动 →
          </a>
        </div>
      </section>
    </main>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="footer-container">
        <p>© 2025 狮子文化科普 | 内容仅供学习交流使用</p>
        <p>图片来源：公共素材库 | 科普参考：WWF、BBC自然纪录片</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// 可添加滚动监听，实现导航栏样式变化/锚点平滑滚动等交互
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
/* 全局基础样式 */
.lion-culture-page {
  font-family: "Inter", "Microsoft YaHei", sans-serif;
  line-height: 1.8;
  color: #333;
  background-color: #f9f7f4;
  min-height: 100vh;
}

/* 导航栏样式 - 毛玻璃固定顶部 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 999;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-title {
  font-size: 1.8rem;
  font-weight: 700;
}

.lion {
  color: #2c3e50;
}

.culture {
  color: #d48806;
  margin-left: 0.3rem;
}

.navbar-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #d48806;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #d48806;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* 英雄区样式 */
.hero {
  height: 50vh;
  background: url('https://picsum.photos/id/1015/1920/1080') center/cover no-repeat;
  position: relative;
  margin-top: 70px; /* 避开导航栏 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: 1.2rem;
  max-width: 800px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

/* 内容区通用样式 */
.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

/* 开篇引言 */
.intro-section {
  margin-bottom: 5rem;
}

.intro-text {
  font-size: 1.2rem;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  color: #4a5568;
  line-height: 2;
}

/* 章节样式 */
.chapter-section {
  margin-bottom: 6rem;
  position: relative;
}

.chapter-title {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 2.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #d48806;
  position: relative;
}

/* 章节标题首字放大核心样式 - 占两行 */
.chapter-title::first-letter {
  float: left;
  font-size: 4rem;
  line-height: 1;
  margin-right: 0.5rem;
  color: #d48806;
  font-weight: 800;
}

.chapter-intro {
  font-size: 1.1rem;
  color: #4a5568;
  margin-bottom: 2rem;
  text-align: center;
}

/* 子章节样式 */
.subchapter {
  margin-bottom: 3rem;
}

.subchapter-title {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 4px solid #d48806;
}

/* 段落组布局 - 错落效果 */
.paragraph-group {
  margin-bottom: 2rem;
}

.left-offset {
  margin-left: 1rem;
}

.right-offset {
  margin-right: 1rem;
}

/* 自定义段落样式 - 首字放大（普通段落） */
.custom-paragraph {
  font-size: 1.05rem;
  color: #4a5568;
  margin-bottom: 1.5rem;
  text-align: justify;
}

.custom-paragraph::first-letter {
  float: left;
  font-size: 2.5rem;
  line-height: 0.8;
  margin-right: 0.8rem;
  color: #d48806;
  font-weight: 700;
  padding-top: 0.2rem;
}

/* 图片卡片样式 */
.img-card {
  margin: 2rem 0;
  text-align: center;
}

.img-card.full-width {
  max-width: 100%;
  margin-left: -1rem;
  margin-right: -1rem;
}

.content-img {
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.content-img:hover {
  transform: scale(1.02);
}

.img-caption {
  margin-top: 0.8rem;
  font-size: 0.9rem;
  color: #718096;
  font-style: italic;
}

/* 外部链接样式 */
.external-link {
  display: inline-block;
  color: #d48806;
  text-decoration: none;
  font-weight: 500;
  margin-top: 0.5rem;
  transition: all 0.3s ease;
}

.external-link:hover {
  color: #b77204;
  transform: translateX(5px);
}

.primary-link {
  background-color: #d48806;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  margin-top: 1rem;
}

.primary-link:hover {
  background-color: #b77204;
  transform: translateX(0) scale(1.05);
}

/* 页脚样式 */
.footer {
  background-color: #2c3e50;
  color: white;
  padding: 2rem 0;
  margin-top: 4rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.footer p {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.8;
}

/* 响应式适配 */
@media (max-width: 768px) {
  .navbar-container {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .navbar-links {
    gap: 1.5rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .content {
    padding: 2rem 1rem;
  }

  .chapter-title {
    font-size: 1.8rem;
  }

  .chapter-title::first-letter {
    font-size: 3rem;
  }

  .left-offset, .right-offset {
    margin-left: 0;
    margin-right: 0;
  }

  .img-card.full-width {
    margin-left: 0;
    margin-right: 0;
  }
}
>>>>>>> 6fc6fc1e141455c14af0d004b0d937c274f90aa3
</style>
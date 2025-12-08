<template>
    <nav class="nav-container">
        <div class="nav-content">
            <div class="nav-title">
                <span class="main-text">FRESH</span>
                <span class="sub-text">MORNING</span>
            </div>
            <div class="nav-links">
                  <RouterLink to="/" class="nav-link">首页</RouterLink>
                <a href="#home" class="nav-link">早餐简介</a>
                <a href="#ingredients" class="nav-link">所需食材</a>
                <a href="#steps" class="nav-link">制作步骤</a>
                <a href="#nutrition" class="nav-link">营养价值</a>
            </div>
            <div class="nav-button-area">
                <ThemeButton></ThemeButton>
            </div>
        </div>
    </nav>

    <div id="home" class="hero-section">
        <img src="../../assets/image/cook/cook-1/bg.png" alt="牛油果吐司背景" class="hero-bg">
        <div class="hero-text">
            <h1>唤醒清晨</h1>
            <p>我们享用的不仅仅是早餐，更是一种生活态度。5分钟，用绵密的口感与丰富的营养，开启元气满满的一天。</p >
        </div>
    </div>

    <div id="ingredients" class="desk">
        <p class="section-home-title">核心食材准备</p>
        <div class="card-container">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="card-img-container">
                            <img src="../../assets/image/cook/cook-1/veg.png" alt="成熟牛油果" class="card-img">
                        </div>
                        <h3 class="card-title">哈斯牛油果</h3>
                        <p class="card-desc">森林奶油，口感绵密</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 class="card-title">选购技巧</h3>
                        <p class="card-desc">选择表皮接近黑色、手指轻按有微微软度的牛油果最佳。这样的果肉呈乳酪状，易于涂抹。<br>生硬的牛油果口感生涩，过于软塌的则可能内部氧化。</p>
                    </div>
                </div>
            </div>

            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="card-img-container">
                            <img src="../../assets/image/cook/cook-1/bread.png" alt="欧包/吐司" class="card-img">
                        </div>
                        <h3 class="card-title">酸种欧包</h3>
                        <p class="card-desc">酥脆外壳，麦香浓郁</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 class="card-title">处理建议</h3>
                        <p class="card-desc">推荐使用酸种面包（Sourdough）或全麦切片。复烤是关键：平底锅无油煎至两面金黄，或放入多士炉，要的就是那一口“咔嚓”声。</p>
                    </div>
                </div>
            </div>

            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="card-img-container">
                            <img src="../../assets/image/cook/cook-1/egg.jpg" alt="无菌蛋" class="card-img">
                        </div>
                        <h3 class="card-title">流心水波蛋</h3>
                        <p class="card-desc">注入灵魂的金色瀑布</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 class="card-title">烹饪秘籍</h3>
                        <p class="card-desc">选用可生食无菌蛋。水开后关火，打入鸡蛋焖3-4分钟，蛋白凝固而蛋黄呈液态。划开瞬间，蛋液包裹牛油果，口感层次瞬间升华。</p>
                    </div>
                </div>
            </div>
             <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="card-img-container">
                            <img src="../../assets/image/cook/cook-1/pep.png" alt="调味" class="card-img">
                        </div>
                        <h3 class="card-title">点睛调味</h3>
                        <p class="card-desc">简单调味，还原本身</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 class="card-title">详细信息</h3>
                        <p class="card-desc">只需三样：现磨黑胡椒提供辛香，海盐激发出甜味，最后挤上几滴柠檬汁防止氧化并解腻。进阶版可撒上红椒粉或坚果碎。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <main class="content">
        <section id="steps" class="chapter-section">
            <h3 class="chapter-title">一、制作步骤：5分钟的魔法</h3>
            <div class="paragraph-group left-offset">
                <p class="custom-paragraph">
                    <strong>Step 1 烤面包：</strong>将面包片放入吐司炉或平底锅干煎，直至表面呈现诱人的焦糖色，质地酥脆。<br>
                    <strong>Step 2 处理果肉：</strong>牛油果对半切开，去核，挖出果肉。用叉子粗略压成泥（保留部分颗粒感口感更好），拌入少许柠檬汁、盐和黑胡椒。<br>
                    <strong>Step 3 组装：</strong>将牛油果泥厚厚地涂抹在热面包上。放上煮好的水波蛋或煎蛋。<br>
                    <strong>Step 4 装饰：</strong>撒上欧芹碎、辣椒面或奇亚籽，即可享用。
                </p>
                <div class="img-card full-width">
                    <p class="img-caption">简单四步，还原咖啡馆级早午餐</p>
                </div>
            </div>
        </section>

        <section id="nutrition" class="chapter-section">
            <h3 class="chapter-title">二、为什么它是“超级早餐”？</h3>
            <div class="two-column-layout">
                <div class="column left-column">
                    <h4 class="subchapter-title">优质脂肪的力量</h4>
                    <p class="custom-paragraph">
                        牛油果富含单不饱和脂肪酸，这是一种对心脏有益的健康脂肪。它能提供持久的饱腹感，让你一整个上午都精力充沛。
                    </p>
                </div>
                <div class="column right-column">
                    <h4 class="subchapter-title">膳食纤维与微量元素</h4>
                    <p class="custom-paragraph">
                        搭配全麦面包，这顿早餐提供了丰富的膳食纤维。此外，牛油果还含有丰富的钾元素,以及维生素E，有抗氧化的效果。
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
/* 基础样式复用 animal-1，仅修改配色 */
body { margin: 0; padding: 0; box-sizing: border-box; }

.nav-container {
    position: fixed; top: 0; left: 0; width: 100%;
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(8px);
    z-index: 999; border-bottom: 1px solid #eee;
}
.dark .nav-container {
        background-color: rgba(62, 60, 60, 0.7); /* 黑色透明 */
    }

.nav-content {
    max-width: 1400px; margin: 0 auto; padding: 0 2rem; height: 4rem;
    display: flex; justify-content: space-between; align-items: center;
}

/* 标题配色：绿+棕 */
.main-text { font-weight: 700; font-size: 1.5rem; color: #558b2f; }
.sub-text { font-weight: 700; font-size: 1.5rem; color: #795548; margin-left: 5px;}

.nav-links { display: flex; gap: 2rem; }
.nav-link { 
    text-decoration: none; color: #333; font-weight: 500; position: relative; transition: color 0.3s;
}
.nav-link:hover { color: #558b2f; }
.nav-link::after {
    content: ''; position: absolute; bottom: -5px; left: 0; width: 0; height: 2px;
    background-color: #558b2f; transition: width 0.3s;
}
.nav-link:hover::after { width: 100%; }

.hero-section { position: relative; width: 100vw; height: 90vh; overflow: hidden; }
.hero-bg { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.85); }
.hero-text {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    text-align: center; color: rgb(79, 171, 86);
}
.hero-text h1 { font-size: 3.5rem; margin-bottom: 1rem; text-shadow: 0 2px 10px rgba(0,0,0,0.3); }

/* 按钮样式 */
.explore-btn {
    padding: 10px 30px; border: 2px solid #fff; border-radius: 25px;
    color: #fff; text-decoration: none; transition: all 0.3s;
    background: rgba(124, 179, 66, 0.4);
}
.explore-btn:hover { background: #7cb342; border-color: #7cb342; }

/* 卡片区域背景 */
.desk {
    background-color: #f1f8e9; /* 浅绿背景 */
    padding: 50px 20px;
    display: flex; flex-direction: column; align-items: center;
}
.section-home-title { font-size: 2rem; color: #33691e; margin-bottom: 30px; font-weight: bold; }

.card-container { display: flex; flex-wrap: wrap; gap: 30px; justify-content: center; }
.flip-card { width: 280px; height: 380px; perspective: 1000px; cursor: pointer;}
.flip-card-inner {
    position: relative; width: 100%; height: 100%; text-align: center;
    transition: transform 0.8s; transform-style: preserve-3d;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1); border-radius: 15px;
}
.flip-card:hover .flip-card-inner { transform: rotateY(180deg); }

.flip-card-front, .flip-card-back {
    position: absolute; width: 100%; height: 100%;
    backface-visibility: hidden; border-radius: 15px;
    padding: 20px; box-sizing: border-box; display: flex; flex-direction: column;
}

.flip-card-front { background-color: #fff; color: black; align-items: center; }
.card-img-container { width: 100%; height: 160px; overflow: hidden; border-radius: 10px; margin-bottom: 15px; }
.card-img { width: 100%; height: 100%; object-fit: cover; }
.card-title { font-size: 1.2rem; margin: 10px 0; color: #33691e; }

.flip-card-back {
    background: linear-gradient(135deg, #dcedc8, #aed581);
    color: #3e2723; transform: rotateY(180deg);
    justify-content: center; align-items: center;
}

/* 内容区 */
.content { max-width: 1000px; margin: 0 auto; padding: 60px 20px; }
.chapter-title {
    font-size: 1.8rem; border-bottom: 3px solid #81c784; padding-bottom: 10px; margin-bottom: 30px; color: #2e7d32;
}
.custom-paragraph {  line-height: 2;
    color: var(--text-sub);
    padding-left: 20px; /* 保留列表缩进 */
    text-align: left; }
.subchapter-title { color: #558b2f; font-size: 1.3rem; margin-bottom: 15px; border-left: 4px solid #8d6e63; padding-left: 10px; }
.two-column-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 30px; }
.img-card { margin-top: 20px; }
.content-img { width: 100%; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
.img-caption { text-align: center; color: #888; margin-top: 10px; font-size: 0.9rem; }
</style>

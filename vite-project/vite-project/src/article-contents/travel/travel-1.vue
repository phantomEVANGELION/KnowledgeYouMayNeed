<<<<<<< HEAD
<template>
    <nav class="nav-container">
        <div class="nav-content">
            <div class="nav-title">
                <span class="main-text">KYOTO</span>
                <span class="sub-text">AUTUMN</span>
            </div>
            <div class="nav-links">
                <a href="#home" class="nav-link">古都之秋</a>
                <a href="#spots" class="nav-link">赏枫名所</a>
                <a href="#guide" class="nav-link">游玩攻略</a>
                <a href="#culture" class="nav-link">文化体验</a>
            </div>
            <div class="nav-button-area">
                <ThemeButton></ThemeButton>
            </div>
        </div>
    </nav>

    <div id="home" class="hero-section">
        <img src="../../assets/image/travel/travel-1/kyoto_red.jpg" alt="京都红叶" class="hero-bg">
        <div class="hero-text">
            <h1>千年一瞬，满城绯红</h1>
            <p>当秋风吹过鸭川，古老的寺庙被层林尽染。来京都，赴一场关于红叶的浪漫之约。</p >
            <a href="#spots" class="explore-btn">开启旅程</a>
        </div>
    </div>

    <div id="spots" class="desk">
        <p class="section-home-title">京都四大赏枫名所</p>
        <div class="card-container">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="card-img-container">
                            <img src="../../assets/image/travel/travel-1/kiyomizu.jpg" alt="清水寺" class="card-img">
                        </div>
                        <h3 class="card-title">清水寺</h3>
                        <p class="card-desc">悬空舞台，红海云端</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 class="card-title">游览重点</h3>
                        <p class="card-desc">世界文化遗产。著名的“清水舞台”在红叶季被千本红枫簇拥，仿佛漂浮在红色的云海之上。推荐参加“夜间特别拜观”，灯光下的红叶更具神秘感。</p>
                    </div>
                </div>
            </div>

            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="card-img-container">
                            <img src="../../assets/image/travel/travel-1/arashiyama.jpg" alt="岚山" class="card-img">
                        </div>
                        <h3 class="card-title">岚山</h3>
                        <p class="card-desc">坐小火车穿梭彩林</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 class="card-title">游览重点</h3>
                        <p class="card-desc">位于京都西郊。乘坐嵯峨野复古小火车，沿着保津川溪谷行驶，满山遍野的红黄渐变色尽收眼底。渡月桥周边的倒影也是绝佳摄影点。</p>
                    </div>
                </div>
            </div>

            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="card-img-container">
                            <img src="../../assets/image/travel/travel-1/tofukuji.jpg" alt="东福寺" class="card-img">
                        </div>
                        <h3 class="card-title">东福寺</h3>
                        <p class="card-desc">通天桥上，红叶如洗</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 class="card-title">游览重点</h3>
                        <p class="card-desc">拥有京都最大规模的红叶林。站在通天桥俯瞰“洗玉涧”，2000多株枫树形成的红叶海浪极其震撼。建议清晨第一时间前往以避开人潮。</p>
                    </div>
                </div>
            </div>

            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="card-img-container">
                            <img src="../../assets/image/travel/travel-1/eikando.jpg" alt="永观堂" class="card-img">
                        </div>
                        <h3 class="card-title">永观堂</h3>
                        <p class="card-desc">红叶的永恒代名词</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 class="card-title">游览重点</h3>
                        <p class="card-desc">古语有云“红叶的永观堂”。这里的枫叶色彩最红、密度最高。园林布局精致，红叶倒映在放生池中，与多宝塔交相辉映，是典型的日式庭院美学。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <main class="content">
        <section id="guide" class="chapter-section">
            <h3 class="chapter-title">一、最佳旅行时间</h3>
            <div class="paragraph-group left-offset">
                <p class="custom-paragraph">
                    京都的红叶季通常从 **11月中旬持续到12月上旬**。
                </p>
                <ul class="travel-list">
                    <li><strong>11月中旬：</strong> 高雄神护寺、大原三千院（山区较冷，红得早）。</li>
                    <li><strong>11月下旬：</strong> 清水寺、东福寺、岚山（市区全面见顷，最美时刻）。</li>
                    <li><strong>12月上旬：</strong> 下鸭神社（最后的红叶狩）。</li>
                </ul>
                <div class="img-card full-width">
                    <img src="../../assets/image/travel/travel-1/maple_guide.jpg" alt="京都地图" class="content-img">
                    <p class="img-caption">提前关注“红叶最前线”预测网站，灵活调整行程</p>
                </div>
            </div>
        </section>

        <section id="culture" class="chapter-section">
            <h3 class="chapter-title">二、旅行贴士：做个优雅的旅人</h3>
            <div class="two-column-layout">
                <div class="column left-column">
                    <h4 class="subchapter-title">交通建议</h4>
                    <p class="custom-paragraph">
                        红叶季京都交通极度拥堵，**尽量避免乘坐巴士**。首选地铁和私铁（如京阪电车、阪急电铁）。如果必须坐车，建议早起（早晨7点前出发）。
                    </p>
                </div>
                <div class="column right-column">
                    <h4 class="subchapter-title">礼仪须知</h4>
                    <p class="custom-paragraph">
                        许多寺庙（如琉璃光院）严禁使用三脚架和自拍杆。部分庭院需要脱鞋参观，建议穿着方便穿脱的鞋子和厚袜子（秋季木地板很凉）。
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
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) { targetElement.scrollIntoView({ behavior: 'smooth' }); }
        });
    });
});
</script>

<style scoped>
body { margin: 0; padding: 0; }

.nav-container {
    position: fixed; top: 0; width: 100%;
    background-color: rgba(255, 243, 224, 0.9); /* 浅米色 */
    backdrop-filter: blur(10px);
    z-index: 999; border-bottom: 1px solid #d7ccc8;
}
.nav-content {
    max-width: 1400px; margin: 0 auto; padding: 0 2rem; height: 4rem;
    display: flex; justify-content: space-between; align-items: center;
}

/* 京都风配色 */
.main-text { color: #3e2723; font-family: serif; letter-spacing: 2px; font-weight: bold; font-size: 1.5rem;}
.sub-text { color: #b71c1c; font-family: serif; letter-spacing: 2px; font-weight: bold; font-size: 1.5rem; margin-left: 5px;}

.nav-link { color: #5d4037; text-decoration: none; transition: color 0.3s; position: relative; font-weight: 500;}
.nav-link:hover { color: #b71c1c; }
.nav-link::after {
    content: ''; position: absolute; bottom: -5px; left: 0; width: 0; height: 2px; background: #b71c1c; transition: width 0.3s;
}
.nav-link:hover::after { width: 100%; }

.hero-section { position: relative; width: 100vw; height: 100vh; overflow: hidden; }
.hero-bg { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.8) contrast(1.1); }
.hero-text {
    position: absolute; top: 40%; left: 50%; transform: translateX(-50%);
    text-align: center; color: white; text-shadow: 0 2px 10px black;
}
.hero-text h1 { font-family: 'Times New Roman', serif; font-size: 3.5rem; letter-spacing: 5px; margin-bottom: 20px;}

.explore-btn {
    padding: 12px 35px; border: 1px solid #fff; background: rgba(183, 28, 28, 0.6);
    color: white; font-family: serif; letter-spacing: 2px; text-decoration: none;
    transition: background 0.3s;
}
.explore-btn:hover { background: #b71c1c; }

/* 桌面/卡片背景 */
.desk { background-color: #efebe9; padding: 60px 20px; text-align: center; } /* 纸色背景 */
.section-home-title { font-family: serif; color: #b71c1c; font-size: 2.2rem; margin-bottom: 40px; }

.card-container { display: flex; flex-wrap: wrap; gap: 30px; justify-content: center; }
.flip-card { width: 280px; height: 400px; perspective: 1000px; cursor: pointer; }
.flip-card-inner {
    width: 100%; height: 100%; transition: transform 1s; transform-style: preserve-3d;
    box-shadow: 0 10px 20px rgba(0,0,0,0.15); border-radius: 4px; /* 直角更符合日式风格 */
}
.flip-card:hover .flip-card-inner { transform: rotateY(-180deg); }

.flip-card-front { background: #fff; position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 4px; padding: 15px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center;}
.card-img-container { width: 100%; height: 60%; margin-bottom: 15px; }
.card-img { width: 100%; height: 100%; object-fit: cover; border-bottom: 3px solid #b71c1c;}
.card-title { font-family: serif; font-size: 1.4rem; color: #3e2723; margin: 10px 0; }
.card-desc { font-family: sans-serif; font-size: 0.9rem; color: #555; line-height: 1.6; }

.flip-card-back {
    background: linear-gradient(to bottom, #b71c1c, #880e4f);
    color: #ffecb3; transform: rotateY(-180deg);
    position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 4px;
    padding: 30px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;
}
.flip-card-back .card-title { color: #ffca28; border-bottom: 1px solid #ffca28; padding-bottom: 10px; margin-bottom: 20px;}
.flip-card-back .card-desc { color: #fff; }

.content { max-width: 900px; margin: 0 auto; padding: 60px 20px; }
.chapter-title {
    font-family: serif; font-size: 2rem; color: #b71c1c; border-bottom: 2px solid #3e2723; padding-bottom: 15px; margin-bottom: 30px;
}
.subchapter-title { font-size: 1.3rem; color: #5d4037; border-left: 5px solid #ffb300; padding-left: 15px; margin-bottom: 15px;}
.travel-list { list-style: circle; padding-left: 20px; color: #5d4037; line-height: 2; font-size: 1.1rem;}
.custom-paragraph { font-size: 1.1rem; line-height: 1.8; color: #4e342e; text-align: justify; margin-bottom: 20px;}
.two-column-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
.content-img { width: 100%; border-radius: 2px; box-shadow: 5px 5px 15px rgba(0,0,0,0.2); }
</style>
=======
<template>
    <div>这里空空如也</div>
</template>
>>>>>>> 6fc6fc1e141455c14af0d004b0d937c274f90aa3

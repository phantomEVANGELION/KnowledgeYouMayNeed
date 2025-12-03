<template>
    <nav class="nav-container">
        <div class="nav-content">
            <div class="nav-title">
                <span class="main-text">HEALTH</span>
                <span class="sub-text">CARE</span>
            </div>
            <div class="nav-links">
                <a href="#home" class="nav-link">指南首页</a>
                <a href="#pillars" class="nav-link">四大基石</a>
                <a href="#diet" class="nav-link">饮食建议</a>
                <a href="#exercise" class="nav-link">运动调理</a>
            </div>
            <div class="nav-button-area">
                <ThemeButton></ThemeButton>
            </div>
        </div>
    </nav>

    <div id="home" class="hero-section">
        <img src="../../assets/image/health/health-1/hero_medical.jpg" alt="健康生活" class="hero-bg">
        <div class="hero-text">
            <h1>稳住血压，守护健康</h1>
            <p>高血压被称为“无声的杀手”。科学的日常管理，是中老年人长寿安康的关键。让关爱从每一顿饭、每一步路开始。</p >
            <a href="#diet" class="explore-btn">阅读指南</a>
        </div>
    </div>

    <div id="pillars" class="desk">
        <p class="section-home-title">高血压管理的四大基石</p>
        <div class="card-container">
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="card-img-container">
                            <img src="../../assets/image/health/health-1/low_salt.png" alt="低盐饮食" class="card-img">
                        </div>
                        <h3 class="card-title">低盐饮食</h3>
                        <p class="card-desc">控制钠摄入是第一要务</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 class="card-title">执行标准</h3>
                        <p class="card-desc">每人每天食盐摄入量不超过5克（约一啤酒盖）。警惕隐形盐：酱油、咸菜、加工肉类。多吃富含钾的食物（如香蕉、菠菜）有助于钠的排出。</p>
                    </div>
                </div>
            </div>

            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="card-img-container">
                            <img src="../../assets/image/health/health-1/monitor.png" alt="规律监测" class="card-img">
                        </div>
                        <h3 class="card-title">规律监测</h3>
                        <p class="card-desc">知己知彼，记录变化</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 class="card-title">正确测法</h3>
                        <p class="card-desc">建议使用上臂式电子血压计。早晨起床后、晚上睡觉前各测一次。测量前静坐5分钟，袖带与心脏同高。记录数值，就医时供医生参考。</p>
                    </div>
                </div>
            </div>

            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="card-img-container">
                            <img src="../../assets/image/health/health-1/medication.png" alt="遵医嘱服药" class="card-img">
                        </div>
                        <h3 class="card-title">规范用药</h3>
                        <p class="card-desc">不随意停药，不乱吃偏方</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 class="card-title">重要提示</h3>
                        <p class="card-desc">降压药需要长期服用，切忌“血压正常就停药，高了再吃”。平稳降压才是保护心脑血管的关键。任何药物调整请务必咨询医生。</p>
                    </div>
                </div>
            </div>
             <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="card-img-container">
                            <img src="../../assets/image/health/health-1/exercise.png" alt="有氧运动" class="card-img">
                        </div>
                        <h3 class="card-title">适度运动</h3>
                        <p class="card-desc">最好的天然降压药</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 class="card-title">运动建议</h3>
                        <p class="card-desc">推荐快走、慢跑、太极拳等有氧运动。每周至少150分钟。避免清晨气温过低时剧烈运动，以免血管骤缩引发意外。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <main class="content">
        <section id="diet" class="chapter-section">
            <h3 class="chapter-title">一、饮食革命：DASH饮食法</h3>
            <div class="paragraph-group left-offset">
                <p class="custom-paragraph">
                    DASH（得舒）饮食是全球医学界公认的降压饮食模式。其核心原则不仅仅是“少吃盐”，更在于“吃对食物”。
                </p>
                <div class="two-column-layout">
                    <div class="column left-column">
                        <h4 class="subchapter-title">推荐多吃</h4>
                        <ul class="health-list">
                            <li>全谷物：糙米、燕麦（富含纤维）</li>
                            <li>新鲜蔬果：芹菜、西兰花、香蕉（富含钾镁）</li>
                            <li>低脂乳制品：补充钙质</li>
                            <li>坚果与豆类：优质植物蛋白</li>
                        </ul>
                    </div>
                    <div class="column right-column">
                        <h4 class="subchapter-title">严格限制</h4>
                        <ul class="health-list">
                            <li>高钠调料：味精、豆瓣酱、腐乳</li>
                            <li>含糖饮料：虽然不咸，但糖分会加重代谢负担</li>
                            <li>红肉与肥肉：猪牛羊肉应适量，多选鱼虾鸡肉</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section id="exercise" class="chapter-section">
            <h3 class="chapter-title">二、生活细节：注意这三个“慢”</h3>
            <div class="paragraph-group right-offset">
                <p class="custom-paragraph">
                    <strong>1. 起床慢：</strong>早晨是血压高峰期。醒来后不要猛然坐起，在床上平躺或静坐2分钟再下床，防止体位性低血压或脑缺血。<br>
                    <strong>2. 排便慢：</strong>用力排便会导致腹压升高，进而使血压飙升。老年人应多吃纤维，保持大便通畅，切忌用力过猛。<br>
                    <strong>3. 吃饭慢：</strong>狼吞虎咽会增加心脏负担。细嚼慢咽有助于产生饱腹感，控制体重，这对控制血压同样重要。
                </p>
                <div class="img-card">
                    <img src="../../assets/image/health/health-1/calm.jpg" alt="平和心态" class="content-img">
                    <p class="img-caption">平和的心态与规律的作息是最好的良药</p>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import ThemeButton from '../../components/ThemeButton.vue'
import { onMounted } from 'vue';

onMounted(() => {
    // 锚点平滑滚动逻辑
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
/* 结构复用，修改配色为医疗蓝/红 */
body { margin: 0; padding: 0; box-sizing: border-box; }

.nav-container {
    position: fixed; top: 0; width: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    z-index: 999; border-bottom: 1px solid #e0e0e0;
}
.nav-content {
    max-width: 1400px; margin: 0 auto; padding: 0 2rem; height: 4rem;
    display: flex; justify-content: space-between; align-items: center;
}

.main-text { color: #1565c0; font-weight: 700; font-size: 1.6rem; } /* 医疗蓝 */
.sub-text { color: #e53935; font-weight: 700; margin-left: 5px; font-size: 1.6rem;} /* 爱心红 */

.nav-link { text-decoration: none; color: #424242; font-weight: 500; transition: all 0.3s; position: relative;}
.nav-link:hover { color: #1565c0; }
.nav-link::after {
    content: ''; position: absolute; bottom: -5px; left: 0; width: 0; height: 2px; background: #1565c0; transition: width 0.3s;
}
.nav-link:hover::after { width: 100%; }

.hero-section { position: relative; width: 100vw; height: 85vh; overflow: hidden; }
.hero-bg { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.9); }
.hero-text {
    position: absolute; top: 50%; left: 10%; transform: translateY(-50%);
    max-width: 500px; color: #0d47a1;
}
.hero-text h1 { font-size: 3rem; margin-bottom: 1rem; color: #0d47a1; }
.hero-text p { font-size: 1.2rem; line-height: 1.6; color: #37474f; margin-bottom: 2rem;}

.explore-btn {
    padding: 10px 30px; background: #1565c0; color: white; border-radius: 5px;
    text-decoration: none; transition: background 0.3s;
}
.explore-btn:hover { background: #0d47a1; }

.desk { background: #e3f2fd; padding: 50px 20px; text-align: center; } /* 浅蓝背景 */
.section-home-title { color: #1565c0; font-size: 2rem; font-weight: bold; margin-bottom: 30px; }

.card-container { display: flex; flex-wrap: wrap; gap: 30px; justify-content: center; }
.flip-card { width: 280px; height: 380px; perspective: 1000px; cursor: pointer; }
.flip-card-inner {
    width: 100%; height: 100%; transition: transform 0.8s; transform-style: preserve-3d;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1); border-radius: 12px; position: relative;
}
.flip-card:hover .flip-card-inner { transform: rotateY(180deg); }

.flip-card-front { background: white; color: #333; position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 12px; padding: 20px; box-sizing: border-box; display:flex; flex-direction:column; align-items:center;}
.card-img-container { width: 100%; height: 150px; overflow: hidden; margin-bottom: 15px; }
.card-img { width: 100%; height: 100%; object-fit: contain; } /* 图标类适合contain */
.card-title { font-size: 1.3rem; margin: 10px 0; color: #1565c0; }

.flip-card-back {
    background: linear-gradient(135deg, #42a5f5, #1976d2);
    color: white; transform: rotateY(180deg);
    position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 12px;
    padding: 20px; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center;
}

.content { max-width: 1000px; margin: 0 auto; padding: 60px 20px; }
.chapter-title {
    font-size: 1.8rem; color: #333; border-bottom: 3px solid #e53935; padding-bottom: 10px; margin-bottom: 30px;
}
.subchapter-title { font-size: 1.4rem; color: #1565c0; margin-bottom: 15px; }
.health-list { list-style: none; padding: 0; }
.health-list li {
    padding: 10px 0; border-bottom: 1px dashed #ccc; color: #555; position: relative; padding-left: 20px;
}
.health-list li::before {
    content: '✔'; color: #4caf50; position: absolute; left: 0;
}
.custom-paragraph { font-size: 1.1rem; line-height: 1.8; color: #424242; margin-bottom: 20px; text-align: justify; }
.two-column-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
.img-card { margin-top: 30px; text-align: center; }
.content-img { max-width: 100%; border-radius: 8px; }
.img-caption { color: #888; font-size: 0.9rem; margin-top: 8px; }
</style>

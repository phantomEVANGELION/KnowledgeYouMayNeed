<template>
    <!-- 导航栏：固定顶部 + 毛玻璃效果 -->
    <nav class="nav-container">
        <div class="nav-content">
        <!-- 第一块：标题 -->
        <div class="nav-title">
            <span class="lion-text">LION</span>
            <span class="kingdom-text">KINGDOM</span>
        </div>

        <!-- 第二块：导航链接 -->
       <div class="nav-links">
    <RouterLink to="/" class="nav-link">首页</RouterLink>
    <a href="#home" class="nav-link">主页</a>
    <a href="#pride" class="nav-link">狮群介绍</a>
    <a href="#behavior" class="nav-link">生活习性</a>
    <a href="#influence" class="nav-link">文化影响</a>
    <a href="#knowledge" class="nav-link">更多知识</a>
</div>


        <!-- 第三块：按钮预留区域 -->
        <div class="nav-button-area">
            <!-- 预留按钮位置，后续可插入你的按钮组件 -->
            <ThemeButton></ThemeButton>
        </div>
        </div>
    </nav>
    <!-- 网页开头的图片文字区域 -->
    <div id="home" class="hero-section">
    <!-- 背景图片 -->
    <img src="../../assets/image/animal/animal-1/lionBegin.avif" alt="背景图" class="hero-bg">
    
    <!-- 文字内容（易修改） -->
    <div class="hero-text">
        <h1>草原之王</h1>
        <p>力量、优雅与野性的完美结合。探索狮子——古老的非洲大陆上最令人敬畏的捕食者。</p >
        <a href="#pride" class="explore-btn">探索族群</a>
    </div>
    </div>
    <!-- 桌面容器 -->
    <div id="pride" class="desk">
        <p class="lionhome">狮子的家族成员</p>
        <!-- 弹性卡片容器（直接在里面添加.flip-card即可增加卡片） -->
        <div class="card-container">
            <!-- 卡片1 -->
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="card-img-container">
                            <img src="../../assets/image/animal/animal-1/male lion.png" alt="雄狮（The King）" class="card-img">
                        </div>
                        <h3 class="card-title">雄狮（The King）</h3>
                        <p class="card-desc">种群的 “守护者与繁衍核心”</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 class="card-title">详细信息</h3>
                        <p class="card-desc">雄狮头部至肩部覆盖浓密鬃毛，颜色从浅金到深黑不等，鬃毛越浓密发黑，肌肉线条发达，肩部高度可达110cm，全长2.6-3.3米。
                            与母狮形成 “生殖权与生存权” 的合作关系。参与捕猎比例仅 15%，仅在围捕水牛等大型猎物时协助堵截，其余时间专注领地巡视，因需应对更危险的同类冲突，能量消耗方式与母狮不同。
                        </p>
                    </div>
                </div>
            </div>

            <!-- 卡片2 -->
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="card-img-container">
                            <img src="../../assets/image/animal/animal-1/female lion.png" alt="母狮（The Hunter）" class="card-img">
                        </div>
                        <h3 class="card-title">母狮（The Hunter）</h3>
                        <p class="card-desc">狮群的 “永恒核心” 与生存支柱</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 class="card-title">详细信息</h3>
                        <p class="card-desc">狮群的实际掌权者、主要捕猎者与幼崽抚育者，构成狮群稳定的母系联盟。
                            终身留守原狮群（特殊情况除外），同一狮群的母狮多为姐妹或母女，形成连续十七代的血脉网络，协作长达 20 年以上。
                            拥有交配选择权，可集体抵制孱弱狮王的繁殖请求，甚至联合驱逐无效狮王。
                            终身留守狮群是为了维持血缘联盟与捕猎协作体系，而雄狮的高流动性则避免了近亲繁殖。
                        </p>
                    </div>
                </div>
            </div>

            <!-- 卡片3 -->
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="card-img-container">
                            <img src="../../assets/image/animal/animal-1/lion club.png" alt="幼狮（The Future）" class="card-img">
                        </div>
                        <h3 class="card-title">幼狮（The Future）</h3>
                        <p class="card-desc">族群的 “未来希望” 与脆弱群体</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 class="card-title">详细信息</h3>
                        <p class="card-desc">狮群的繁衍后代，需经历集体抚育与生存历练，雄性幼狮未来将成为流浪雄狮，雌性则留守族群。
                            仅得到本群狮王的保护，若狮王更替，面临被新狮王屠杀的风险（幼狮死亡率约 90%，雄性存活率仅 10%）。
                            通过互相追逐、摔跤、撕咬游戏，锻炼捕猎与搏斗技能，建立群体社交认知。
                        </p>
                    </div>
                </div>
            </div>
            <!-- 卡片4 -->
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="card-img-container">
                            <img src="../../assets/image/animal/animal-1/Sub-adult male lion.png" alt="亚成年雄狮（The Vagrant）" class="card-img">
                        </div>
                        <h3 class="card-title">亚成年雄狮（The Vagrant）</h3>
                        <p class="card-desc">族群的 “边缘行者” 与未来挑战者</p>
                    </div>
                    <div class="flip-card-back">
                        <h3 class="card-title">详细信息</h3>
                        <p class="card-desc">逐渐成熟的雄狮开始对狮王地位构成威胁，被强制驱逐出群，结束被抚育状态；
                            处于 “挑战准备期”，会试探性入侵其他狮群的领地，积累打斗经验，为未来争夺狮王地位做准备。
                            是唯一 “无固定族群” 的群体，被原生狮群驱逐后尚未建立自己的领地，
                            这种边缘状态是狮群避免近亲繁殖的自然机制，同时筛选出最强壮的雄狮延续基因。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 核心内容区 -->
    <main class="content">
      <!-- 开篇引言 -->
      <section class="intro-section">
        <p class="intro-text">
          狮子是唯一真正群居的猫科动物，其复杂的社会结构和生存策略使其成为非洲草原上最成功的掠食者之一。一个狮群不仅是简单的群体，更是分工明确、协作紧密的"草原家族"，每一位成员都承担着独特的生存使命。
        </p>
      </section>

      <!-- 一、狮群的组成结构 -->
      <section id="structure" class="chapter-section">
        <h3 class="chapter-title">一、狮群的组成结构：草原上的家族体系</h3>
        
        <div class="paragraph-group left-offset">
          <p class="custom-paragraph">
            典型的狮群由3-30名成员组成，核心是有血缘关系的雌狮群体，辅以1-2只成年雄狮和若干幼崽、亚成年狮子。这种结构并非固定不变：当狮群规模过大时，年轻雌狮可能分裂形成新群体；而雄狮则会在性成熟后离开原生群体，通过挑战其他狮群的首领寻求繁殖机会。
          </p>
          
          <div class="img-card">
            <img src="../../assets/image/animal/animal-1/lions.jpg" alt="狮群全家福" class="content-img">
            <p class="img-caption">典型狮群的成员构成：雌狮群、雄狮首领与幼狮</p>
          </div>
        </div>

        <div class="paragraph-group right-offset">
          <p class="custom-paragraph">
            狮群的规模与栖息地质量直接相关：在猎物丰富的东非塞伦盖蒂草原，狮群可达20-30只；而在纳米布沙漠等资源匮乏地区，群体通常仅5-10只。这种弹性结构使狮子能适应不同的生态环境，最大化生存几率。
          </p>
        </div>
      </section>

      <!-- 二、社会分工：各司其职的生存智慧 -->
      <section id="division" class="chapter-section">
        <h3 class="chapter-title">二、社会分工：雄狮守护与雌狮捕猎</h3>
        
        <div class="two-column-layout">
          <div class="column left-column">
            <h4 class="subchapter-title">雄狮：领地的守护者</h4>
            <p class="custom-paragraph">
              成年雄狮主要负责保卫领地和狮群安全。它们通过气味标记（尿液、粪便）和咆哮宣示主权，每天巡逻领地边界，驱逐流浪雄狮和其他竞争者。雄狮的鬃毛不仅是雄性魅力的象征，更是战斗中的保护装甲——浓密的鬃毛能有效减少颈部受伤风险。
            </p>
            <p class="custom-paragraph">
              尽管雄狮不参与日常捕猎，但在对抗大型猎物（如水牛、长颈鹿）或保卫狮群免受鬣狗群攻击时，它们的力量至关重要。
            </p>
          </div>
          
          <div class="column right-column">
            <h4 class="subchapter-title">雌狮：狩猎的主力军</h4>
            <p class="custom-paragraph">
              雌狮是狮群的主要狩猎者，它们体型更小、更敏捷，且擅长团队协作。雌狮通常在黄昏或黎明集体捕猎，采用"包围战术"：部分成员潜伏接近，部分从侧翼包抄，最终由1-2名成员发起致命攻击。
            </p>
            <p class="custom-paragraph">
              雌狮的狩猎成功率约20-30%，远高于独居猫科动物。捕获猎物后，狮群按等级分配：雄狮优先进食，其次是成年雌狮，最后是幼狮——这种"强者优先"的策略确保群体中核心繁殖成员的生存。
            </p>
          </div>
        </div>

        <div class="img-card full-width">
          <img src="../../assets/image/animal/animal-1/catch and hunt.jpg" alt="雌狮协作捕猎" class="content-img">
          <p class="img-caption">雌狮的团队协作捕猎：草原上最高效的掠食战术</p>
        </div>
      </section>

      <!-- 三、捕猎策略：草原顶级掠食者的战术 -->
      <section id="behavior" class="chapter-section">
        <h3 class="chapter-title">三、捕猎策略：机会主义的伏击大师</h3>
        
        <div class="paragraph-group right-offset">
          <p class="custom-paragraph">
            狮子是典型的伏击型掠食者，而非追逐型。它们通常选择体型中等的有蹄类动物（斑马、角马、羚羊）作为主要猎物，偶尔也会攻击水牛、长颈鹿甚至河马等大型动物。捕猎时，狮子依赖隐蔽物（草丛、土坡）接近至30米内才发起攻击，利用短距离冲刺（时速可达50-60公里）捕获猎物。
          </p>
        </div>

        <div class="paragraph-group left-offset">
          <p class="custom-paragraph">
            有趣的是，狮子会根据猎物类型调整战术：捕猎斑马时攻击腿部使其摔倒，捕猎角马时直接锁喉，而对付水牛则瞄准口鼻使其窒息。这种灵活性体现了狮子的高智商——它们能识别不同猎物的弱点，最大化捕猎效率。
          </p>
          <div class="img-card">
            <img src="../../assets/image/animal/animal-1/ambush.jpg" alt="狮子捕猎的伏击策略" class="content-img">
            <p class="img-caption">狮子的伏击战术：利用环境隐蔽接近猎物</p>
          </div>
        </div>
      </section>

      <!-- 四、领地行为：气味与声音的边界宣告 -->
      <section id="territory" class="chapter-section">
        <h3 class="chapter-title">四、领地行为：草原王者的势力范围</h3>
        <div class="paragraph-group left-offset">
          <p class="custom-paragraph">
            狮群的领地面积从20到400平方公里不等，取决于猎物密度。雄狮通过三种方式标记领地：一是尿液标记（每天标记约50处），二是咆哮（黎明和黄昏的吼声可传播8公里），三是刮擦树木留下视觉标记。这些信号不仅警告其他狮群，也向雌狮展示雄性的力量。
          </p>
        </div>

        <div class="paragraph-group right-offset">
          <p class="custom-paragraph">
            领地冲突是狮子死亡的主要原因之一。年轻雄狮挑战领地首领时，往往爆发激烈战斗，失败者要么死亡，要么成为流浪雄狮，终生无法繁殖。而领地的胜利者将接管狮群，杀死前任雄狮的幼崽——这种"杀婴行为"能促使雌狮快速进入发情期，确保新首领的基因传递。
          </p>
          
          <div class="img-card">
            <img src="../../assets/image/animal/animal-1/patrol and marking.jpg" alt="雄狮标记领地" class="content-img">
            <p class="img-caption">雄狮通过巡逻与标记宣示领地主权</p>
          </div>
        </div>
      </section>

      <!-- 五、繁殖与成长：狮群的未来延续 -->
      <section id="growth" class="chapter-section">
        <h3 class="chapter-title">五、繁殖与成长：幼狮的生存挑战</h3>
        
        <div class="paragraph-group left-offset">
          <p class="custom-paragraph">
            雌狮的妊娠期约110天，每胎产2-4只幼崽。幼狮出生时体重仅1-2公斤，身上带有斑点（伪装色），完全依赖母亲的保护。前两个月，幼狮藏在巢穴中；两个月后开始跟随雌狮活动，六个月大时参与捕猎练习。
          </p>
          <p class="custom-paragraph">
            幼狮的死亡率高达50%，主要威胁包括鬣狗捕食、食物短缺和雄狮杀婴。能存活到两岁的幼狮，将逐渐融入狮群的社会结构：雌狮留在原生群体，雄狮则在2-3岁时被驱逐，开始流浪生活。
          </p>
        </div>

        <div class="paragraph-group right-offset">
          <p class="custom-paragraph">
            流浪雄狮通常结成"兄弟联盟"，共同挑战其他狮群的领地。这种联盟大幅提升了成功几率——单独雄狮的领地夺取率仅10%，而联盟可达40%。一旦成功夺权，雄狮的统治期约2-3年，之后便会被更年轻的雄狮取代。
          </p>
          
          <div class="img-card">
            <img src="../../assets/image/animal/animal-1/playing.jpg" alt="幼狮成长" class="content-img">
            <p class="img-caption">幼狮通过玩耍学习捕猎和社交技能</p>
          </div>
        </div>
      </section>

      <!-- 生存挑战与保护 -->
      <section class="chapter-section">
        <h3 class="chapter-title">六、生存挑战：草原之王的危机</h3>
        
        <div class="paragraph-group left-offset">
          <p class="custom-paragraph">
            尽管狮子是草原顶级掠食者，但它们正面临严峻的生存危机：过去50年，非洲狮子数量从20万只锐减至约2万只，栖息地丧失、人兽冲突和非法狩猎是主要威胁。幸运的是，全球多地已启动保护项目，如肯尼亚的"狮子守护者"计划，通过社区合作减少人兽冲突，为狮子创造安全的生存空间。
          </p>
        </div>
      </section>
      <section id="influence" class="intro-section">
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
            <img src="../../assets/image/animal/animal-1/lion king.png" alt="狮子王场景还原" class="content-img" style="width: 65%;">
            <p class="img-caption">《狮子王》的艺术表达</p>
          </div>
        </div>

        <div class="paragraph-group right-offset">
          <p class="custom-paragraph">
            除了《狮子王》，纪录片领域也有大量聚焦狮子的作品。例如 BBC 的《非洲》《王朝》等纪录片，通过高清镜头记录了狮子的捕猎过程、狮群内部的协作与冲突、幼崽的成长困境等真实场景，不仅展现了狮子的野性之美，更向观众普及了 “捕猎成功率低”“栖息地缩减” 等科学知识，成为科普狮子的重要载体。这些影视作品既满足了人们对狮子的好奇心，也间接推动了公众对狮子保护的关注。
          </p>
          <a href="https://www.bilibili.com/video/BV12t411q7Zz/" target="_blank" class="external-link">
            观看相关纪录片——狮王之路的精彩片段 →
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
            <img src="../../assets/image/animal/animal-1/lion in literature.jpg" alt="文学作品中的狮子形象" class="content-img">
            <p class="img-caption">文学作品中狮子的精神象征意义</p>
          </div>
          <a href="https://www.163.com/dy/article/I4CBOUJO055634V4.html" target="_blank" class="external-link">
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
              <img src="../../assets/image/animal/animal-1/stone lion.jpg" alt="东方文化中的石狮子" class="content-img">
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
            <img src="../../assets/image/animal/animal-1/beautiful lion.jpg" alt="狮子与自然" class="content-img">
            <p class="img-caption">狮子保护：连接文化与自然的重要使命</p>
          </div>
        </div>
    </section>
</main>
<a id="knowledge" href="https://planethealthcheck.com/zh/events/%E4%B8%96%E7%95%8C%E7%8B%AE%E5%AD%90%E6%97%A5/" target="_blank" class="external-link primary-link">
  了解世界狮子日，参与狮子保护行动 →
</a>
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
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    /* 导航栏容器：固定顶部 + 毛玻璃效果 */
   .nav-container {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.15);   /* 透明白磨砂 */
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(255,255,255,0.25);
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}

    .dark .nav-container {
        background-color: rgba(62, 60, 60, 0.7); /* 黑色透明 */
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

    /* 第一块：标题样式 */
    .nav-title {
        margin-left: 30px;
        display: flex;
        gap: 10px;
        font-size: 1.9rem;
        font-weight: 700;
        font-family: 'Segoe UI', 'Inter', sans-serif;
    }
    
    .lion-text {
        color: #2c2c2c; 
        transition: all 0.8s ease;
        
    }
    .dark .lion-text {
        color: #e7e5e5;
    }

    .kingdom-text {
        color: #d4965c; /* Kingdom：棕黄色/金色 */
        margin-left: 0.3rem;
        transition: all 1.0s ease;
    }
    .dark .kingdom-text {
        color: #5482f4;
    }

    /* 第二块：导航链接样式 */
    .nav-links {
        display: flex;
        gap: 2.0rem; /* 链接之间的间距 */
    }

    .nav-link {
        color: #1a1a1a; /* 链接默认黑色 */
        text-decoration: none; /* 去掉下划线 */
        font-size: 1rem;
        font-weight: 500;
        font-family: 'Segoe UI', 'Inter', sans-serif;
        transition: color 0.5s ease; /* 平滑过渡 */
        position: relative;
    }
    .dark .nav-link {
        color: #e1e0e0; /* 链接默认黑色 */
    }

    /* 链接hover效果：棕黄色 + 底部短线动画 */
    .nav-link:hover {
        color: #c07f4a; /* 棕黄色 */
    }
    .dark .nav-link:hover {
        color: #4a58c0;
    }

    .nav-link::after {
    content: '';
    position: absolute;
    bottom: -0.3rem;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #c07f4a;
    transition: width 0.3s ease;
    }
    .dark .nav-link::after {
        background-color: #4a58c0;
    }

    .nav-link:hover::after {
        width: 100%; /* hover时显示底部短线 */
    }

    /* 第三块：按钮预留区域 */
    .nav-button-area {
        width: 6rem; /* 预留宽度，可根据按钮调整 */
    /* 后续添加按钮时可直接放入此区域 */
    }

    /* 响应式适配：小屏幕下链接换行 */
    @media (max-width: 768px) {
    .nav-content {
        padding: 0 1rem;
        gap: 1rem;
    }

    .nav-links {
        gap: 1.5rem;
    }

    .nav-title {
        font-size: 1.2rem;
    }

    .nav-link {
        font-size: 0.9rem;
    }
    }
    /* 容器：占满视口，相对定位（作为文字的定位参考） */
    .hero-section {
        position: relative;
        width: 100vw;
        height: 100vh; /* 占满整个屏幕高度 */
        overflow: hidden; /* 防止图片溢出 */
    }

    /* 背景图片：覆盖容器，保持比例 */
    .hero-bg {
        display: block;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        object-fit: cover; /* 保持图片比例，填满容器 */
        filter: brightness(0.7); /* 降低亮度，让文字更清晰 */
    }

    /* 文字区域：绝对定位在图片上方 */
    .hero-text {
        position: absolute;
        top: 30%;
        right: 50%;
        transform: translateY(-50%);
        transform: translateX(50%);
        color: white; /* 文字白色 */
        text-align: center;
        max-width: 400px; /* 限制文字宽度，避免太宽 */
    }

    /* 标题样式 */
    .hero-text h1 {
        font-size: clamp(2rem, 5vw, 3.5rem); /* 响应式字体大小 */
        margin-bottom: 1rem;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.8); /* 文字阴影，增强可读性 */
    }

    /* 描述文字 */
    .hero-text p {
        font-size: clamp(1rem, 2vw, 1.2rem);
        line-height: 1.5;
        margin-bottom: 2rem;
        text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
    }
    .lionhome {
        margin: 0 0;
        display: block;
        font-size: 2rem;
        font-family: serif;
        font-weight: 600;
        color: #ba7b3b;
        margin-bottom: 2rem;
        text-shadow: 1px 1px 3px rgba(206, 148, 81, 0.7);
    }

    /* 按钮样式 */
    .explore-btn {
    padding: 0.8rem 2rem;
    background: rgba(255,255,255,0.2); /* 半透明白色背景 */
    border: 1px solid white;
    color: white;
    border-radius: 2rem;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s;
    }

    .explore-btn:hover {
    background: rgba(255,255,255,0.4);
    }
    /* 弹性盒子容器（核心：支持任意数量卡片排列） */
    .card-container {
        display: flex;
        flex-wrap: wrap; /* 自动换行 */
        gap: 30px; /* 卡片间距（水平+垂直） */
        justify-content: center; /* 水平居中排列 */
        max-width: 1300px; /* 最大宽度，避免过宽 */
        margin: 0 auto; /* 页面居中 */
        padding-top: 30px;
    }
            /* 桌面背景（适配多卡片，宽度自适应） */
    .desk {
        width: 100%;
        background-color: #e0d8c7;
        border-radius: 20px;
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.08);
        padding: 40px 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start; /* 顶部对齐，避免卡片高度不一致问题 */
    }
    .dark .desk {
        background-color: #3e1b03;
    }
    /* 卡片样式（保持原有物理翻转效果） */
    .flip-card {
        box-sizing: border-box;
        width: 300px; /* 固定卡片宽度，也可改为 25% 等百分比适配 */
        height: 400px; /* 严格3:4比例 */
        perspective: 2000px;
        cursor: pointer;
    }
    .flip-card-inner {
        box-sizing: border-box;
        position: relative;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        border-radius: 16px;
        transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
        box-shadow: 0 6px 12px rgba(0,0,0,0.08);
    }
    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg) scale(1.1) translateY(-10px);
        box-shadow: 0 20px 30px rgba(0,0,0,0.15);
    }
    .dark .flip-card:hover .flip-card-inner {
        transform: rotateY(-180deg) scale(1.1) translateY(-10px);
    }
    .flip-card-front {
        box-sizing: border-box;
        background: #ffffff;
        color: #2d3748;
        border: 1px solid #f5f5f5;
    }
    .dark .flip-card-front {
        background: #3d3e4268;
        color: #78b5d1;
        border: 1px solid #0f0f0f;
    }

    .flip-card-back {
        box-sizing: border-box;
        background: linear-gradient(135deg, #f7e9c8 0%, #e9d6a9 100%);
        color: #5d4037;
        transform: rotateY(180deg);
        border: 1px solid #e6d5b8;
    }
    .dark .flip-card-back {
        background: linear-gradient(135deg, #e6ad3244 0%, #34280e 100%);
        color: #9c8882;

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
    }
    .card-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.8s ease;
    }
    .flip-card:hover .card-img {
        transform: scale(1.05);
    }
    .card-title {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 12px;
        line-height: 1.3;
    }
    .card-desc {
        font-size: 15px;
        line-height: 1.6;
        opacity: 0.9;
        flex: 1;
    }
    .flip-card-back .card-title {
        color: #4a3228;
        font-weight: 700;
    }
    .flip-card-back .card-desc {
        opacity: 0.95;
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
  border-bottom: 2px solid #e67e22;
  position: relative;
}

/* 章节标题首字放大核心样式 - 占两行 */
.chapter-title::first-letter {
  float: left;
  font-size: 4rem;
  line-height: 1;
  margin-right: 0.5rem;
  color: #e67e22;
  font-weight: 800;
}

/* 子章节样式 */
.subchapter-title {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 4px solid #e67e22;
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

/* 双列布局 */
.two-column-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.left-column {
  margin-right: 1rem;
}

.right-column {
  margin-left: 1rem;
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
  color: #e67e22;
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
  color: #e67e22;
  text-decoration: none;
  font-weight: 500;
  margin-top: 0.5rem;
  transition: all 0.3s ease;
}

.external-link:hover {
  color: #d35400;
  transform: translateX(5px);
}

.primary-link {
  background-color: #e67e22;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  margin-top: 1rem;
}

.primary-link:hover {
  background-color: #d35400;
  transform: translateX(0) scale(1.05);
}
</style>
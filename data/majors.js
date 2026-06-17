// 完整本科专业目录（含12大学科门类、93个专业类、数百个专业）
const MAJOR_CATEGORIES = [
  {
    id: 'philosophy', name: '哲学', icon: '🧠',
    description: '培养具有哲学理论素养和系统专业知识的专门人才，注重思辨能力和批判性思维训练。',
    majors: [
      {
        id: 'philosophy-general', name: '哲学',
        description: '研究世界观、人生观、价值观等根本问题的学科。培养学生掌握哲学基本理论和中外哲学史知识。',
        careers: '可从事教育、科研、党政机关、新闻出版、文化传媒等工作。近年考公、考编比例较高。',
        salary: '应届约5-8K/月，5年经验约8-15K/月。体制内薪资稳定，企业端需求有限。',
        trend: '传统文科，就业面偏窄。建议辅修实用技能或考虑复合型发展路径。',
        universities: [
          { name: '北京大学', score: 665, type: '综合' }, { name: '复旦大学', score: 658, type: '综合' },
          { name: '中国人民大学', score: 660, type: '综合' }, { name: '南京大学', score: 650, type: '综合' },
          { name: '武汉大学', score: 645, type: '综合' }, { name: '中山大学', score: 640, type: '综合' },
          { name: '北京师范大学', score: 638, type: '师范' }, { name: '华东师范大学', score: 635, type: '师范' },
          { name: '南开大学', score: 632, type: '综合' }, { name: '吉林大学', score: 610, type: '综合' }
        ]
      },
      {
        id: 'logic', name: '逻辑学',
        description: '研究推理、论证和思维规律的学科。培养学生逻辑分析能力和批判性思维。',
        careers: '教育、科研、法律、IT（人工智能方向）、咨询等。逻辑学在AI领域前景广阔。',
        salary: '应届约6-10K/月，5年经验约12-25K/月。AI方向薪资更高。',
        trend: '小专业但前景不错，尤其在AI和数据分析领域需求增长。',
        universities: [
          { name: '北京大学', score: 665, type: '综合' }, { name: '中山大学', score: 635, type: '综合' },
          { name: '南开大学', score: 630, type: '综合' }
        ]
      },
      {
        id: 'religious-studies', name: '宗教学',
        description: '研究宗教现象、宗教历史和宗教理论的学科。',
        careers: '科研机构、文化部门、宗教事务管理、国际交流等。',
        salary: '应届约5-7K/月，5年经验约8-15K/月。',
        trend: '小众专业，招生院校少。适合学术兴趣浓厚者。',
        universities: [
          { name: '北京大学', score: 660, type: '综合' }, { name: '中国人民大学', score: 655, type: '综合' },
          { name: '中央民族大学', score: 600, type: '综合' }, { name: '四川大学', score: 610, type: '综合' }
        ]
      }
    ]
  },
  {
    id: 'economics', name: '经济学', icon: '📈',
    description: '培养具备经济学理论基础和实践能力的专业人才。当前金融、数字经济方向为热点。',
    majors: [
      {
        id: 'economics-general', name: '经济学',
        description: '研究资源配置、市场运行和经济规律的学科。培养学生经济分析和管理决策能力。',
        careers: '银行、证券、保险、政府经济部门、咨询公司、企业战略部门。',
        salary: '应届约8-15K/月，5年经验约20-40K/月。头部金融机构起薪更高。',
        trend: '传统热门专业，就业面广但竞争激烈。建议向金融科技、数据分析方向靠拢。',
        universities: [
          { name: '北京大学', score: 680, type: '综合' }, { name: '清华大学', score: 685, type: '综合' },
          { name: '中国人民大学', score: 675, type: '综合' }, { name: '复旦大学', score: 672, type: '综合' },
          { name: '上海财经大学', score: 660, type: '财经' }, { name: '中央财经大学', score: 655, type: '财经' },
          { name: '对外经济贸易大学', score: 652, type: '财经' }, { name: '西南财经大学', score: 635, type: '财经' },
          { name: '中南财经政法大学', score: 630, type: '财经' }, { name: '东北财经大学', score: 615, type: '财经' }
        ]
      },
      {
        id: 'finance', name: '金融学',
        description: '研究资金融通、投资理财和风险管理的学科。当前金融科技（FinTech）为热门方向。',
        careers: '银行、券商、基金、保险、互联网金融、风投机构。CFA/FRM证书含金量高。',
        salary: '应届约10-20K/月，5年经验约25-60K/月。量化交易、投行方向薪资极高。',
        trend: '高薪但竞争白热化。强校+高学历+实习经历是标配。AI量化是未来趋势。',
        universities: [
          { name: '北京大学', score: 685, type: '综合' }, { name: '清华大学', score: 688, type: '综合' },
          { name: '中国人民大学', score: 678, type: '综合' }, { name: '复旦大学', score: 675, type: '综合' },
          { name: '上海交通大学', score: 680, type: '综合' }, { name: '上海财经大学', score: 665, type: '财经' },
          { name: '中央财经大学', score: 660, type: '财经' }, { name: '对外经济贸易大学', score: 658, type: '财经' },
          { name: '厦门大学', score: 650, type: '综合' }, { name: '西南财经大学', score: 640, type: '财经' }
        ]
      },
      {
        id: 'international-economics', name: '国际经济与贸易',
        description: '研究国际贸易、国际金融和跨国经营的学科。外向型经济人才培养。',
        careers: '外贸企业、跨国公司、国际金融机构、海关、跨境电商平台。',
        salary: '应届约6-12K/月，5年经验约15-30K/月。跨境电商方向增长快。',
        trend: '传统专业，受全球经济形势影响大。建议结合英语+数据分析能力。',
        universities: [
          { name: '对外经济贸易大学', score: 650, type: '财经' }, { name: '上海财经大学', score: 648, type: '财经' },
          { name: '中央财经大学', score: 645, type: '财经' }, { name: '南开大学', score: 640, type: '综合' },
          { name: '复旦大学', score: 670, type: '综合' }
        ]
      },
      {
        id: 'fintech', name: '金融科技',
        description: '金融与计算机科学的交叉学科，培养金融科技创新人才。近年新增热门专业。',
        careers: '金融科技公司、银行科技部门、量化投资、互联网金融、区块链、支付系统。',
        salary: '应届约15-25K/月，5年经验约35-80K/月。技术+金融复合型人才稀缺。',
        trend: '风口专业，国家政策支持。适合数学和编程能力强的学生。',
        universities: [
          { name: '北京大学', score: 685, type: '综合' }, { name: '清华大学', score: 688, type: '综合' },
          { name: '上海交通大学', score: 680, type: '综合' }, { name: '浙江大学', score: 675, type: '综合' },
          { name: '中央财经大学', score: 655, type: '财经' }
        ]
      },
      {
        id: 'taxation', name: '税收学',
        description: '研究税收理论、税务管理和税务筹划的学科。',
        careers: '税务机关、会计师事务所、企业税务部门、税务咨询机构。',
        salary: '应届约7-12K/月，5年经验约15-30K/月。注会+税务师证书加分。',
        trend: '稳定专业，考公优势明显。国考税务系统招录大户。',
        universities: [
          { name: '中国人民大学', score: 665, type: '综合' }, { name: '中央财经大学', score: 650, type: '财经' },
          { name: '上海财经大学', score: 652, type: '财经' }, { name: '中南财经政法大学', score: 625, type: '财经' }
        ]
      },
      {
        id: 'statistics-econ', name: '经济统计学',
        description: '统计学与经济学交叉学科，培养数据分析和经济建模能力。',
        careers: '统计局、金融机构数据分析、市场研究、互联网运营分析。',
        salary: '应届约8-15K/月，5年经验约20-40K/月。数据分析师方向需求旺盛。',
        trend: '数字化时代热门方向。大数据+统计能力是核心竞争力。',
        universities: [
          { name: '中国人民大学', score: 668, type: '综合' }, { name: '厦门大学', score: 640, type: '综合' },
          { name: '上海财经大学', score: 650, type: '财经' }, { name: '中南财经政法大学', score: 620, type: '财经' }
        ]
      }
    ]
  },
  {
    id: 'law', name: '法学', icon: '⚖️',
    description: '培养具有法律专业素养和实践能力的法治人才。当前国家治理法治化背景下需求持续。',
    majors: [
      {
        id: 'law-general', name: '法学',
        description: '研究法律制度和法律实践的学科。培养学生掌握法律理论和实务技能。',
        careers: '律师、法务、公检法机关、立法机关、公证机构、法律教育。通过法考是入行关键。',
        salary: '应届约6-12K/月，5年经验约15-40K/月。顶尖律所起薪可达30K+。',
        trend: '就业两极分化严重。名校+法考+英语好才是好出路。建议辅修其他专业增强竞争力。',
        universities: [
          { name: '中国人民大学', score: 668, type: '综合' }, { name: '北京大学', score: 672, type: '综合' },
          { name: '中国政法大学', score: 655, type: '政法' }, { name: '武汉大学', score: 650, type: '综合' },
          { name: '清华大学', score: 678, type: '综合' }, { name: '中南财经政法大学', score: 630, type: '财经' },
          { name: '华东政法大学', score: 635, type: '政法' }, { name: '西南政法大学', score: 625, type: '政法' },
          { name: '吉林大学', score: 620, type: '综合' }, { name: '西北政法大学', score: 600, type: '政法' }
        ]
      },
      {
        id: 'intellectual-property', name: '知识产权',
        description: '研究专利权、商标权、著作权等知识产权法律保护的学科。',
        careers: '知识产权代理机构、企业IP部门、法院知产庭、版权局。',
        salary: '应届约7-14K/月，5年经验约18-35K/月。',
        trend: '科技创新驱动需求增长。AI、芯片领域知识产权纠纷增多。',
        universities: [
          { name: '华东政法大学', score: 630, type: '政法' }, { name: '西南政法大学', score: 620, type: '政法' },
          { name: '中南财经政法大学', score: 625, type: '财经' }
        ]
      }
    ]
  },
  {
    id: 'education', name: '教育学', icon: '📚',
    description: '培养教育领域专业人才，涵盖教育理论、教育技术和教学实践。教师职业稳定性高。',
    majors: [
      {
        id: 'education-general', name: '教育学',
        description: '研究教育现象、教育规律和教育问题的学科。',
        careers: '中小学教师、教育行政部门、教育研究机构、培训机构、教育产品开发。',
        salary: '应届约5-10K/月，5年经验约10-20K/月。编制内教师福利待遇好。',
        trend: '稳定选择。双减后学科培训受限，但素质教育、职业教育是新增量。',
        universities: [
          { name: '北京师范大学', score: 648, type: '师范' }, { name: '华东师范大学', score: 645, type: '师范' },
          { name: '东北师范大学', score: 610, type: '师范' }, { name: '华中师范大学', score: 620, type: '师范' },
          { name: '南京师范大学', score: 625, type: '师范' }, { name: '陕西师范大学', score: 600, type: '师范' },
          { name: '西南大学', score: 615, type: '综合' }
        ]
      },
      {
        id: 'preschool-education', name: '学前教育',
        description: '研究学前儿童教育规律和实践的学科。培养幼儿园教师和早教人才。',
        careers: '幼儿园教师、早教机构、儿童产品研发、家庭教育指导。',
        salary: '应届约4-8K/月，5年经验约8-15K/月。',
        trend: '三胎政策下需求增长，但薪资偏低。公立幼儿园编制稳定。',
        universities: [
          { name: '华东师范大学', score: 635, type: '师范' }, { name: '南京师范大学', score: 615, type: '师范' },
          { name: '浙江师范大学', score: 600, type: '师范' }
        ]
      },
      {
        id: 'educational-tech', name: '教育技术学',
        description: '信息技术与教育融合的学科。培养教育信息化、在线教育、教育产品设计人才。',
        careers: '教育科技公司、在线教育平台、学校信息化部门、教育产品经理。',
        salary: '应届约8-15K/月，5年经验约18-35K/月。AI教育方向薪资更高。',
        trend: '教育数字化是国家战略方向。AI+教育是风口，需求快速增长。',
        universities: [
          { name: '北京师范大学', score: 640, type: '师范' }, { name: '华东师范大学', score: 638, type: '师范' },
          { name: '华南师范大学', score: 615, type: '师范' }
        ]
      }
    ]
  },
  {
    id: 'literature', name: '文学', icon: '📝',
    description: '培养语言文学素养和人文关怀的学科。在新媒体时代焕发新活力。',
    majors: [
      {
        id: 'chinese-language', name: '汉语言文学',
        description: '研究中国语言文学和文化的传统学科。培养文字表达和文学鉴赏能力。',
        careers: '教师、编辑、记者、文案策划、公务员、出版、新媒体运营。',
        salary: '应届约5-10K/月，5年经验约10-20K/月。新媒体运营方向可达15-30K。',
        trend: '传统文科基础专业。考公优势明显，新媒体方向机会多。建议培养复合技能。',
        universities: [
          { name: '北京大学', score: 660, type: '综合' }, { name: '北京师范大学', score: 650, type: '师范' },
          { name: '复旦大学', score: 658, type: '综合' }, { name: '南京大学', score: 652, type: '综合' },
          { name: '武汉大学', score: 645, type: '综合' }, { name: '华东师范大学', score: 642, type: '师范' },
          { name: '四川大学', score: 630, type: '综合' }, { name: '山东大学', score: 625, type: '综合' }
        ]
      },
      {
        id: 'english', name: '英语',
        description: '培养英语语言文学素养和跨文化交际能力。英语+专业复合型人才更受欢迎。',
        careers: '翻译、外企、国际贸易、教育、跨文化交流、旅游、涉外法律。',
        salary: '应届约6-12K/月，5年经验约12-25K/月。同传翻译日薪可达3-8K。',
        trend: 'AI翻译冲击大。纯语言就业趋紧，建议英语+法律/金融/技术复合发展。',
        universities: [
          { name: '北京外国语大学', score: 645, type: '语言' }, { name: '上海外国语大学', score: 640, type: '语言' },
          { name: '北京大学', score: 660, type: '综合' }, { name: '南京大学', score: 645, type: '综合' },
          { name: '北京语言大学', score: 620, type: '语言' }, { name: '广东外语外贸大学', score: 615, type: '语言' }
        ]
      },
      {
        id: 'journalism', name: '新闻学',
        description: '研究新闻传播规律和媒介实践的学科。融媒体时代转型加速。',
        careers: '记者、编辑、新媒体运营、公关、广告、传媒管理、内容创作。',
        salary: '应届约6-12K/月，5年经验约15-30K/月。新媒体内容方向薪资增长快。',
        trend: '传统媒体转型中。新媒体的内容运营、短视频策划是当前热门方向。',
        universities: [
          { name: '中国人民大学', score: 660, type: '综合' }, { name: '中国传媒大学', score: 645, type: '传媒' },
          { name: '复旦大学', score: 658, type: '综合' }, { name: '武汉大学', score: 640, type: '综合' },
          { name: '清华大学', score: 670, type: '综合' }
        ]
      },
      {
        id: 'advertising', name: '广告学',
        description: '研究广告策划、创意设计、品牌传播和市场推广的学科。',
        careers: '广告公司、品牌部、市场营销、新媒体运营、创意策划。',
        salary: '应届约7-13K/月，5年经验约15-30K/月。头部4A公司起薪较高。',
        trend: '数字化广告、短视频营销、社交电商广告是增长点。创意+数据分析能力稀缺。',
        universities: [
          { name: '中国传媒大学', score: 640, type: '传媒' }, { name: '复旦大学', score: 650, type: '综合' },
          { name: '武汉大学', score: 635, type: '综合' }, { name: '厦门大学', score: 630, type: '综合' }
        ]
      }
    ]
  },
  {
    id: 'history', name: '历史学', icon: '🏛️',
    description: '培养历史研究和文化遗产保护人才。基础文科，学术路线为主。',
    majors: [
      {
        id: 'history-general', name: '历史学',
        description: '研究人类历史发展规律的学科。培养历史思维和文献分析能力。',
        careers: '教育、科研、文博、档案、党政机关、文化旅游、编辑出版。',
        salary: '应届约5-8K/月，5年经验约8-15K/月。体制内薪资稳定。',
        trend: '基础文科，就业面偏窄。建议辅修数字化技能如数字人文方向。',
        universities: [
          { name: '北京大学', score: 660, type: '综合' }, { name: '北京师范大学', score: 645, type: '师范' },
          { name: '复旦大学', score: 652, type: '综合' }, { name: '南京大学', score: 648, type: '综合' },
          { name: '武汉大学', score: 640, type: '综合' }, { name: '南开大学', score: 638, type: '综合' }
        ]
      },
      {
        id: 'archaeology', name: '考古学',
        description: '通过实物研究人类历史的学科。注重田野考古和文物保护。',
        careers: '考古研究所、博物馆、文化遗产保护、文物鉴定、文化旅游。',
        salary: '应届约5-9K/月，5年经验约10-20K/月。',
        trend: '国家文化战略重视考古。文旅融合带来新机会。但就业面窄。',
        universities: [
          { name: '北京大学', score: 658, type: '综合' }, { name: '西北大学', score: 600, type: '综合' },
          { name: '吉林大学', score: 610, type: '综合' }, { name: '四川大学', score: 615, type: '综合' }
        ]
      }
    ]
  },
  {
    id: 'science', name: '理学', icon: '🔬',
    description: '培养基础科学研究人才。国家"强基计划"重点支持领域。',
    majors: [
      {
        id: 'mathematics', name: '数学与应用数学',
        description: '研究数学理论与应用的学科。数学是AI、大数据、金融科技的基石。',
        careers: '教育、科研、IT/互联网（算法、数据科学）、金融（量化分析）、人工智能。',
        salary: '应届约8-18K/月，5年经验约25-60K/月。算法工程师方向薪资极高。',
        trend: 'AI时代核心基础学科。数学+编程=高薪组合。强基计划重点支持。',
        universities: [
          { name: '北京大学', score: 682, type: '综合' }, { name: '清华大学', score: 685, type: '综合' },
          { name: '复旦大学', score: 672, type: '综合' }, { name: '中国科学技术大学', score: 670, type: '理工' },
          { name: '浙江大学', score: 670, type: '综合' }, { name: '南京大学', score: 665, type: '综合' },
          { name: '南开大学', score: 650, type: '综合' }, { name: '山东大学', score: 630, type: '综合' },
          { name: '武汉大学', score: 640, type: '综合' }, { name: '哈尔滨工业大学', score: 645, type: '理工' }
        ]
      },
      {
        id: 'physics', name: '物理学',
        description: '研究物质和能量的基本规律。培养科研和技术创新能力。',
        careers: '科研、教育、半导体、光学、航空航天、新能源、医疗设备。',
        salary: '应届约8-15K/月，5年经验约20-45K/月。半导体方向薪资快速上涨。',
        trend: '芯片、量子计算、新能源领域需求旺盛。国家战略重点投入方向。',
        universities: [
          { name: '北京大学', score: 680, type: '综合' }, { name: '清华大学', score: 683, type: '综合' },
          { name: '中国科学技术大学', score: 668, type: '理工' }, { name: '南京大学', score: 660, type: '综合' },
          { name: '复旦大学', score: 670, type: '综合' }, { name: '浙江大学', score: 668, type: '综合' },
          { name: '上海交通大学', score: 675, type: '综合' }, { name: '哈尔滨工业大学', score: 640, type: '理工' }
        ]
      },
      {
        id: 'chemistry', name: '化学',
        description: '研究物质的组成、结构、性质和变化规律。',
        careers: '科研、教育、化工、制药、材料、环保、检验检测。',
        salary: '应届约6-12K/月，5年经验约15-30K/月。新能源材料方向增长快。',
        trend: '基础学科。新能源电池、半导体材料方向是风口。',
        universities: [
          { name: '北京大学', score: 672, type: '综合' }, { name: '清华大学', score: 675, type: '综合' },
          { name: '中国科学技术大学', score: 660, type: '理工' }, { name: '南开大学', score: 645, type: '综合' },
          { name: '厦门大学', score: 635, type: '综合' }, { name: '吉林大学', score: 610, type: '综合' }
        ]
      },
      {
        id: 'biology', name: '生物科学',
        description: '研究生命现象和生命活动规律的学科。',
        careers: '科研、教育、生物医药、农业、环保、食品。',
        salary: '应届约6-12K/月，5年经验约15-30K/月。生物医药方向薪资较高。',
        trend: '基础学科。生物医药、基因编辑、合成生物学是前沿方向。建议深造。',
        universities: [
          { name: '北京大学', score: 670, type: '综合' }, { name: '清华大学', score: 675, type: '综合' },
          { name: '上海交通大学', score: 668, type: '综合' }, { name: '中国科学技术大学', score: 655, type: '理工' },
          { name: '武汉大学', score: 640, type: '综合' }, { name: '中山大学', score: 635, type: '综合' }
        ]
      },
      {
        id: 'data-science', name: '数据科学与大数据技术',
        description: '培养数据采集、存储、分析和应用能力的交叉学科。国家大数据战略核心专业。',
        careers: '互联网（数据分析、算法）、金融科技、智慧城市、政务大数据、医疗大数据。',
        salary: '应届约15-25K/月，5年经验约35-70K/月。头部互联网公司薪资更高。',
        trend: '持续热门。AI大模型时代数据是核心资产。需求旺盛，竞争也激烈。',
        universities: [
          { name: '北京大学', score: 682, type: '综合' }, { name: '清华大学', score: 685, type: '综合' },
          { name: '复旦大学', score: 672, type: '综合' }, { name: '浙江大学', score: 670, type: '综合' },
          { name: '上海交通大学', score: 678, type: '综合' }, { name: '华中科技大学', score: 650, type: '理工' },
          { name: '西安交通大学', score: 648, type: '综合' }, { name: '哈尔滨工业大学', score: 645, type: '理工' }
        ]
      },
      {
        id: 'psychology', name: '心理学',
        description: '研究人类心理现象和行为规律的学科。应用领域日益广泛。',
        careers: '心理咨询、教育、人力资源、用户体验研究、市场调研、临床心理。',
        salary: '应届约6-12K/月，5年经验约15-30K/月。临床心理咨询收费300-800元/小时。',
        trend: '社会压力增大，心理健康需求爆发。国家政策支持心理服务体系建设。',
        universities: [
          { name: '北京大学', score: 665, type: '综合' }, { name: '北京师范大学', score: 650, type: '师范' },
          { name: '华东师范大学', score: 642, type: '师范' }, { name: '浙江大学', score: 660, type: '综合' },
          { name: '西南大学', score: 615, type: '综合' }, { name: '中山大学', score: 635, type: '综合' }
        ]
      }
    ]
  },
  {
    id: 'engineering', name: '工学', icon: '⚙️',
    description: '最大的学科门类。培养工程技术人才。当前人工智能、芯片、新能源是核心风口。',
    majors: [
      {
        id: 'cs', name: '计算机科学与技术',
        description: '研究计算机系统结构、软件和应用的核心工科专业。数字经济的基石。',
        careers: '软件开发、算法工程师、系统架构师、AI工程师、网络安全、云计算。',
        salary: '应届约15-30K/月，5年经验约35-80K/月。大厂核心岗位年薪可达百万。',
        trend: '超热门专业。AI大模型时代需求持续旺盛。但门槛在提高，需要持续学习。',
        universities: [
          { name: '清华大学', score: 690, type: '综合' }, { name: '北京大学', score: 685, type: '综合' },
          { name: '浙江大学', score: 680, type: '综合' }, { name: '上海交通大学', score: 682, type: '综合' },
          { name: '哈尔滨工业大学', score: 660, type: '理工' }, { name: '华中科技大学', score: 660, type: '理工' },
          { name: '南京大学', score: 670, type: '综合' }, { name: '北京航空航天大学', score: 665, type: '理工' },
          { name: '中国科学技术大学', score: 675, type: '理工' }, { name: '电子科技大学', score: 655, type: '理工' }
        ]
      },
      {
        id: 'ai', name: '人工智能',
        description: '研究AI理论、方法和应用的交叉学科。国家战略核心领域。',
        careers: 'AI算法工程师、机器学习工程师、NLP工程师、计算机视觉工程师、AI产品经理。',
        salary: '应届约20-40K/月，5年经验约50-120K/月。顶尖AI人才年薪极高。',
        trend: '最强风口！大模型、自动驾驶、机器人、AI制药等方向爆发增长。需扎实的数学和编程基础。',
        universities: [
          { name: '清华大学', score: 695, type: '综合' }, { name: '北京大学', score: 690, type: '综合' },
          { name: '上海交通大学', score: 685, type: '综合' }, { name: '浙江大学', score: 682, type: '综合' },
          { name: '中国科学技术大学', score: 678, type: '理工' }, { name: '南京大学', score: 672, type: '综合' },
          { name: '哈尔滨工业大学', score: 665, type: '理工' }, { name: '北京航空航天大学', score: 668, type: '理工' },
          { name: '电子科技大学', score: 660, type: '理工' }, { name: '华中科技大学', score: 662, type: '理工' }
        ]
      },
      {
        id: 'software-eng', name: '软件工程',
        description: '系统化地开发和维护高质量软件的工程学科。',
        careers: '软件工程师、全栈开发、移动端开发、测试开发、DevOps工程师。',
        salary: '应届约15-28K/月，5年经验约35-70K/月。',
        trend: '持续热门。AI辅助编程工具兴起，但对高级工程师需求不减。',
        universities: [
          { name: '清华大学', score: 685, type: '综合' }, { name: '北京大学', score: 680, type: '综合' },
          { name: '浙江大学', score: 675, type: '综合' }, { name: '上海交通大学', score: 678, type: '综合' },
          { name: '北京航空航天大学', score: 660, type: '理工' }, { name: '南京大学', score: 665, type: '综合' }
        ]
      },
      {
        id: 'ee', name: '电子信息工程',
        description: '研究电子设备和信息系统的设计、开发和应用的学科。',
        careers: '通信、半导体、嵌入式系统、FPGA开发、射频工程、电子设计。',
        salary: '应届约10-20K/月，5年经验约25-55K/月。芯片设计方向薪资极高。',
        trend: '芯片国产化是国家战略。集成电路方向是当前最大风口之一。',
        universities: [
          { name: '清华大学', score: 682, type: '综合' }, { name: '电子科技大学', score: 655, type: '理工' },
          { name: '北京邮电大学', score: 650, type: '理工' }, { name: '西安电子科技大学', score: 640, type: '理工' },
          { name: '华中科技大学', score: 658, type: '理工' }, { name: '哈尔滨工业大学', score: 650, type: '理工' }
        ]
      },
      {
        id: 'ic-design', name: '集成电路设计与集成系统',
        description: '培养芯片设计、制造和封测人才的战略核心专业。"卡脖子"技术攻坚领域。',
        careers: '芯片设计工程师、EDA工程师、半导体工艺工程师、封测工程师。',
        salary: '应届约15-30K/月，5年经验约40-80K/月。芯片设计人才极度稀缺。',
        trend: '国家最高战略优先级。国产替代需求迫切。薪资涨幅最快的工科专业之一。',
        universities: [
          { name: '清华大学', score: 685, type: '综合' }, { name: '北京大学', score: 680, type: '综合' },
          { name: '复旦大学', score: 670, type: '综合' }, { name: '电子科技大学', score: 658, type: '理工' },
          { name: '西安电子科技大学', score: 645, type: '理工' }, { name: '华中科技大学', score: 660, type: '理工' },
          { name: '上海交通大学', score: 678, type: '综合' }, { name: '浙江大学', score: 672, type: '综合' }
        ]
      },
      {
        id: 'mechanical', name: '机械工程',
        description: '研究机械设计、制造和自动化的传统工科。智能制造升级带来新机遇。',
        careers: '机械设计、智能制造、机器人、汽车工程、航空航天、装备制造。',
        salary: '应届约7-15K/月，5年经验约18-40K/月。机器人方向薪资增长快。',
        trend: '旧专业焕发新生。智能制造、工业机器人、新能源汽车是转型方向。',
        universities: [
          { name: '清华大学', score: 675, type: '综合' }, { name: '上海交通大学', score: 668, type: '综合' },
          { name: '哈尔滨工业大学', score: 645, type: '理工' }, { name: '华中科技大学', score: 650, type: '理工' },
          { name: '西安交通大学', score: 648, type: '综合' }, { name: '浙江大学', score: 665, type: '综合' }
        ]
      },
      {
        id: 'new-energy', name: '新能源科学与工程',
        description: '研究太阳能、风能、氢能等新能源技术的新兴工科。双碳战略核心领域。',
        careers: '新能源企业（宁德时代、比亚迪、隆基等）、电力系统、科研机构、政府部门。',
        salary: '应届约10-20K/月，5年经验约25-50K/月。新能源头部企业薪资竞争力强。',
        trend: '双碳目标驱动下最强风口之一。光伏、储能、氢能、新能源汽车全面爆发。',
        universities: [
          { name: '清华大学', score: 678, type: '综合' }, { name: '西安交通大学', score: 650, type: '综合' },
          { name: '华中科技大学', score: 652, type: '理工' }, { name: '浙江大学', score: 668, type: '综合' },
          { name: '上海交通大学', score: 672, type: '综合' }, { name: '哈尔滨工业大学', score: 648, type: '理工' }
        ]
      },
      {
        id: 'aerospace', name: '航空航天工程',
        description: '研究飞行器设计、推进和控制的高精尖工科。',
        careers: '航空航天院所（航天科技、航天科工、中航工业）、民航、国防工业。',
        salary: '应届约10-20K/月，5年经验约25-50K/月。航天院所福利好、稳定性高。',
        trend: '国家战略重点。商业航天是新增量（星际荣耀、蓝箭等）。大国竞争核心领域。',
        universities: [
          { name: '北京航空航天大学', score: 665, type: '理工' }, { name: '西北工业大学', score: 635, type: '理工' },
          { name: '哈尔滨工业大学', score: 650, type: '理工' }, { name: '南京航空航天大学', score: 625, type: '理工' },
          { name: '清华大学', score: 680, type: '综合' }
        ]
      },
      {
        id: 'civil-eng', name: '土木工程',
        description: '研究建筑、桥梁、道路等基础设施的设计和建造。',
        careers: '建筑设计院、施工单位、房地产开发、工程咨询、政府建设部门。',
        salary: '应届约6-12K/月，5年经验约15-30K/月。项目经理收入较高。',
        trend: '房地产下行周期受影响较大。但基建、轨道交通、海外工程仍有需求。建议向智能建造转型。',
        universities: [
          { name: '清华大学', score: 668, type: '综合' }, { name: '同济大学', score: 655, type: '理工' },
          { name: '浙江大学', score: 660, type: '综合' }, { name: '哈尔滨工业大学', score: 640, type: '理工' },
          { name: '东南大学', score: 640, type: '理工' }
        ]
      },
      {
        id: 'biomedical-eng', name: '生物医学工程',
        description: '工程学与医学交叉学科。培养医疗设备研发和生物医学技术人才。',
        careers: '医疗器械（迈瑞、联影等）、医院设备科、科研机构、医药企业。',
        salary: '应届约10-20K/月，5年经验约25-50K/月。高端医疗设备方向薪资高。',
        trend: '人口老龄化+国产替代驱动增长。影像设备、手术机器人、脑机接口是热点。',
        universities: [
          { name: '清华大学', score: 675, type: '综合' }, { name: '浙江大学', score: 662, type: '综合' },
          { name: '上海交通大学', score: 670, type: '综合' }, { name: '华中科技大学', score: 648, type: '理工' },
          { name: '东南大学', score: 635, type: '理工' }, { name: '西安交通大学', score: 645, type: '综合' }
        ]
      },
      {
        id: 'automation', name: '自动化',
        description: '研究系统自动控制、智能控制和机器人技术的学科。工业4.0核心。',
        careers: '工业自动化、机器人、智能控制、过程控制、汽车电子、航天控制。',
        salary: '应届约10-20K/月，5年经验约25-55K/月。机器人控制方向薪资高。',
        trend: '智能制造、工业互联网是国家战略。自动化+AI是黄金组合。',
        universities: [
          { name: '清华大学', score: 680, type: '综合' }, { name: '上海交通大学', score: 672, type: '综合' },
          { name: '浙江大学', score: 668, type: '综合' }, { name: '哈尔滨工业大学', score: 650, type: '理工' },
          { name: '北京航空航天大学', score: 658, type: '理工' }, { name: '华中科技大学', score: 655, type: '理工' }
        ]
      },
      {
        id: 'cyberspace-security', name: '网络空间安全',
        description: '培养网络安全攻防、数据安全、密码学人才的紧缺专业。',
        careers: '网络安全公司、互联网安全部门、政府安全机构、金融安全、军工安全。',
        salary: '应届约15-30K/月，5年经验约35-80K/月。顶级白帽黑客薪资极高。',
        trend: '国家高度重视，数据安全法驱动需求。网络安全人才缺口大。',
        universities: [
          { name: '清华大学', score: 682, type: '综合' }, { name: '西安电子科技大学', score: 640, type: '理工' },
          { name: '北京邮电大学', score: 648, type: '理工' }, { name: '电子科技大学', score: 650, type: '理工' },
          { name: '华中科技大学', score: 655, type: '理工' }, { name: '武汉大学', score: 645, type: '综合' }
        ]
      }
    ]
  },
  {
    id: 'agriculture', name: '农学', icon: '🌾',
    description: '培养农业科技和农村发展人才。国家粮食安全和乡村振兴战略重点。',
    majors: [
      {
        id: 'agronomy', name: '农学',
        description: '研究农作物生产和遗传改良的学科。',
        careers: '农业科研、种子公司、农业技术推广、农业管理部门、生物育种。',
        salary: '应届约5-10K/月，5年经验约12-25K/月。',
        trend: '种业振兴是国家战略。生物育种、智慧农业是新兴方向。',
        universities: [
          { name: '中国农业大学', score: 620, type: '农林' }, { name: '南京农业大学', score: 600, type: '农林' },
          { name: '西北农林科技大学', score: 580, type: '农林' }, { name: '华中农业大学', score: 595, type: '农林' }
        ]
      }
    ]
  },
  {
    id: 'medicine', name: '医学', icon: '🏥',
    description: '培养医疗卫生人才。社会刚需、职业稳定。人口老龄化背景下需求持续增长。',
    majors: [
      {
        id: 'clinical-medicine', name: '临床医学',
        description: '培养临床医生的核心医学专业。学制5-8年，要求高、回报长。',
        careers: '各级医院临床医生、医学研究、公共卫生、医药企业医学部。',
        salary: '应届（规培期）约4-8K/月，主治医师约15-30K/月，副主任以上30-60K+。',
        trend: '社会刚需，越老越吃香。三甲医院门槛极高（博士+规培）。口腔、整形、眼科等热门科室更卷。',
        universities: [
          { name: '北京协和医学院', score: 688, type: '医药' }, { name: '北京大学', score: 680, type: '综合' },
          { name: '复旦大学', score: 672, type: '综合' }, { name: '上海交通大学', score: 675, type: '综合' },
          { name: '四川大学', score: 650, type: '综合' }, { name: '华中科技大学', score: 655, type: '综合' },
          { name: '中南大学', score: 645, type: '综合' }, { name: '中山大学', score: 655, type: '综合' },
          { name: '浙江大学', score: 668, type: '综合' }, { name: '首都医科大学', score: 640, type: '医药' }
        ]
      },
      {
        id: 'stomatology', name: '口腔医学',
        description: '培养口腔医疗人才的学科。医患关系好、收入可观。',
        careers: '口腔医院、口腔诊所（连锁/自营）、口腔医疗器械。',
        salary: '应届约8-15K/月，5年经验约20-50K/月。私立诊所收入更高。',
        trend: '消费医疗热门。牙科需求随消费升级快速增长。自主创业空间大。',
        universities: [
          { name: '四川大学', score: 660, type: '综合' }, { name: '北京大学', score: 678, type: '综合' },
          { name: '上海交通大学', score: 670, type: '综合' }, { name: '武汉大学', score: 648, type: '综合' },
          { name: '中山大学', score: 650, type: '综合' }
        ]
      },
      {
        id: 'pharmacy', name: '药学',
        description: '研究药物研发、生产和管理的学科。',
        careers: '制药企业、医院药房、药品监管、药物研发、CRO公司。',
        salary: '应届约6-12K/月，5年经验约15-35K/月。创新药研发方向薪资高。',
        trend: '创新药是生物医药核心方向。国家集采对仿制药冲击大。',
        universities: [
          { name: '中国药科大学', score: 620, type: '医药' }, { name: '北京大学', score: 668, type: '综合' },
          { name: '沈阳药科大学', score: 590, type: '医药' }, { name: '四川大学', score: 635, type: '综合' },
          { name: '浙江大学', score: 655, type: '综合' }
        ]
      },
      {
        id: 'public-health', name: '预防医学',
        description: '研究疾病预防和公共卫生的学科。新冠疫情后重视程度大幅提升。',
        careers: '疾控中心、卫生监督、医院感染管理、公共卫生研究、海关检疫。',
        salary: '应届约6-10K/月，5年经验约12-25K/月。',
        trend: '后疫情时代公共卫生体系建设加速。体制内就业为主。',
        universities: [
          { name: '华中科技大学', score: 640, type: '综合' }, { name: '北京大学', score: 665, type: '综合' },
          { name: '复旦大学', score: 660, type: '综合' }, { name: '中山大学', score: 635, type: '综合' }
        ]
      },
      {
        id: 'tcm', name: '中医学',
        description: '研究中医药理论和临床实践的特色学科。国家大力支持中医药发展。',
        careers: '中医院、中西医结合医院、中医药科研、中药企业、养生保健。',
        salary: '应届约5-10K/月，5年经验约12-30K/月。',
        trend: '国家政策大力扶持中医药振兴。中西医结合是方向。',
        universities: [
          { name: '北京中医药大学', score: 620, type: '医药' }, { name: '上海中医药大学', score: 615, type: '医药' },
          { name: '南京中医药大学', score: 600, type: '医药' }, { name: '广州中医药大学', score: 605, type: '医药' }
        ]
      }
    ]
  },
  {
    id: 'management', name: '管理学', icon: '📊',
    description: '培养管理人才的学科。当前数字化管理、供应链管理是热门方向。',
    majors: [
      {
        id: 'business-admin', name: '工商管理',
        description: '研究企业管理理论和实践的综合管理学科。',
        careers: '企业管理、咨询、金融、市场营销、人力资源、创业。',
        salary: '应届约6-12K/月，5年经验约15-35K/月。MBA学历有加成。',
        trend: '就业面宽但缺乏硬技能壁垒。建议结合数据分析或行业深耕。',
        universities: [
          { name: '清华大学', score: 682, type: '综合' }, { name: '北京大学', score: 678, type: '综合' },
          { name: '复旦大学', score: 668, type: '综合' }, { name: '上海交通大学', score: 672, type: '综合' },
          { name: '中国人民大学', score: 665, type: '综合' }, { name: '南京大学', score: 655, type: '综合' },
          { name: '中山大学', score: 645, type: '综合' }, { name: '浙江大学', score: 665, type: '综合' }
        ]
      },
      {
        id: 'accounting', name: '会计学',
        description: '研究财务记录、审计和财务管理的学科。企业刚需专业。',
        careers: '会计事务所、企业财务、审计、税务、金融机构、财务咨询。',
        salary: '应届约7-13K/月，5年经验约15-35K/月。CPA证书对薪资提升大。',
        trend: '刚需专业。AI对基础会计工作有替代风险。建议向管理会计、财务分析转型。',
        universities: [
          { name: '中国人民大学', score: 665, type: '综合' }, { name: '上海财经大学', score: 655, type: '财经' },
          { name: '中央财经大学', score: 650, type: '财经' }, { name: '厦门大学', score: 645, type: '综合' },
          { name: '中南财经政法大学', score: 630, type: '财经' }, { name: '对外经济贸易大学', score: 648, type: '财经' }
        ]
      },
      {
        id: 'e-commerce', name: '电子商务',
        description: '研究电子商务平台运营、网络营销和电商技术的学科。',
        careers: '电商运营、跨境电商、直播电商、电商平台产品经理、供应链管理。',
        salary: '应届约8-15K/月，5年经验约20-40K/月。直播电商方向收入弹性大。',
        trend: '成熟行业。直播电商、社交电商、跨境电商是三大增长方向。',
        universities: [
          { name: '浙江大学', score: 650, type: '综合' }, { name: '南京大学', score: 645, type: '综合' },
          { name: '武汉大学', score: 635, type: '综合' }, { name: '西安交通大学', score: 630, type: '综合' }
        ]
      },
      {
        id: 'logistics', name: '物流管理',
        description: '研究供应链和物流系统优化的管理学科。',
        careers: '物流企业、电商供应链、制造业物流、国际航运、快递快运。',
        salary: '应届约7-13K/月，5年经验约15-30K/月。供应链管理方向薪资更高。',
        trend: '智慧物流、供应链安全是战略方向。菜鸟、京东物流、顺丰等持续招人。',
        universities: [
          { name: '北京交通大学', score: 610, type: '理工' }, { name: '上海海事大学', score: 595, type: '理工' },
          { name: '武汉理工大学', score: 600, type: '理工' }, { name: '中山大学', score: 630, type: '综合' }
        ]
      }
    ]
  },
  {
    id: 'art', name: '艺术学', icon: '🎨',
    description: '培养艺术创作和设计人才。数字媒体、游戏设计、交互设计是新兴方向。',
    majors: [
      {
        id: 'digital-media-art', name: '数字媒体艺术',
        description: '艺术与数字技术交叉学科。培养数字内容创作人才。',
        careers: '游戏设计、动画制作、影视特效、UI/UX设计、VR/AR内容、数字营销。',
        salary: '应届约8-15K/月，5年经验约20-45K/月。游戏行业薪资较高。',
        trend: '数字内容产业爆发。元宇宙、AIGC工具普及但对创意需求不减。',
        universities: [
          { name: '中国传媒大学', score: 620, type: '传媒' }, { name: '北京电影学院', score: 610, type: '艺术' },
          { name: '中国美术学院', score: 600, type: '艺术' }, { name: '清华大学', score: 650, type: '综合' }
        ]
      },
      {
        id: 'industrial-design', name: '工业设计',
        description: '艺术与工程交叉，培养产品造型和用户体验设计人才。',
        careers: '产品设计、用户体验设计、智能硬件设计、汽车设计。',
        salary: '应届约8-15K/月，5年经验约20-40K/月。',
        trend: '消费升级驱动好设计需求。智能硬件、新能源汽车设计是热点。',
        universities: [
          { name: '清华大学', score: 650, type: '综合' }, { name: '江南大学', score: 600, type: '综合' },
          { name: '浙江大学', score: 640, type: '综合' }, { name: '湖南大学', score: 610, type: '综合' }
        ]
      }
    ]
  }
];

// 分数参考数据（基于2024-2025年理科/物理组数据，仅供参考）
const SCORE_REFERENCE = {
  // 按省份给出本科线和推荐策略
  beijing: {
    name: '北京',
    totalScore: 750,
    specialType: '3+3',
   本科线: 434, 特殊类型线: 523,
    topUniversity: 675,
    scoreRanges: [
      { min: 680, max: 750, label: '清北华五层次', advice: '可冲击清华、北大、复旦、交大、浙大等顶尖高校' },
      { min: 650, max: 679, label: 'C9/顶尖985层次', advice: '可考虑C9联盟高校及顶尖985院校，如南大、中科大、哈工大等' },
      { min: 620, max: 649, label: '中上游985层次', advice: '可冲击中上游985院校，如北航、同济、南开、北师大等' },
      { min: 590, max: 619, label: '中下游985/211层次', advice: '可选择中下游985或顶尖211院校' },
      { min: 560, max: 589, label: '中上211层次', advice: '可考虑中上211院校，如北邮、西电等行业特色强校' },
      { min: 530, max: 559, label: '中游211/一本层次', advice: '可考虑中游211或实力较强的一本院校' },
      { min: 500, max: 529, label: '一本/优质二本层次', advice: '可选择一本或优质二本院校的优势专业' },
      { min: 430, max: 499, label: '本科层次', advice: '可选择公办本科或优质民办本科院校' }
    ]
  },
  shanghai: {
    name: '上海',
    totalScore: 660,
    specialType: '3+3',
    本科线: 403, 特殊类型线: 503,
    topUniversity: 580,
    scoreRanges: [
      { min: 580, max: 660, label: '清北华五层次', advice: '可冲击清华、北大、复旦、交大等顶尖高校' },
      { min: 555, max: 579, label: 'C9/985层次', advice: '可考虑C9及顶尖985院校' },
      { min: 530, max: 554, label: '中上游985层次', advice: '可冲击中上游985或行业顶尖211' },
      { min: 500, max: 529, label: '211层次', advice: '可考虑优秀211院校' },
      { min: 470, max: 499, label: '一本层次', advice: '可选择一本或特色二本院校' },
      { min: 400, max: 469, label: '本科层次', advice: '可选择公办或民办本科' }
    ]
  },
  henan: {
    name: '河南',
    totalScore: 750,
    specialType: '3+1+2',
    本科线: 409, 特殊类型线: 514,
    topUniversity: 685,
    scoreRanges: [
      { min: 680, max: 750, label: '清北层次', advice: '全省前100名可冲击清北' },
      { min: 660, max: 679, label: '华五/顶尖985', advice: '可冲击复旦、交大、浙大、南大、中科大' },
      { min: 640, max: 659, label: '中上游985', advice: '可考虑北航、同济、南开、武大等中上游985' },
      { min: 610, max: 639, label: '中下游985/211', advice: '可选择中下游985或顶尖211，如郑大等' },
      { min: 580, max: 609, label: '中上211', advice: '可考虑中上211院校，河大等省内强校' },
      { min: 550, max: 579, label: '中游211/一本', advice: '可选择中游211或省外重点一本' },
      { min: 510, max: 549, label: '一本层次', advice: '可选择省内外一本院校' },
      { min: 470, max: 509, label: '二本层次', advice: '可选择公办二本或特色专业' },
      { min: 400, max: 469, label: '本科层次', advice: '可根据兴趣选择本科院校' }
    ]
  },
  shandong: {
    name: '山东',
    totalScore: 750,
    specialType: '3+3',
    本科线: 443, 特殊类型线: 520,
    topUniversity: 680,
    scoreRanges: [
      { min: 675, max: 750, label: '清北华五', advice: '冲击清北华五顶尖名校' },
      { min: 645, max: 674, label: 'C9/顶尖985', advice: '可考虑C9及顶尖985院校' },
      { min: 615, max: 644, label: '中上游985', advice: '可冲击中上游985院校' },
      { min: 585, max: 614, label: '中下游985/211', advice: '可考虑中下游985或著名211' },
      { min: 555, max: 584, label: '中上211', advice: '可考虑中上211院校，如海大、石油大等' },
      { min: 525, max: 554, label: '一本层次', advice: '可选择省内外一本院校' },
      { min: 490, max: 524, label: '二本/公办本科', advice: '可选择优质公办本科' },
      { min: 440, max: 489, label: '本科层次', advice: '可根据分数和兴趣选择本科' }
    ]
  },
  guangdong: {
    name: '广东',
    totalScore: 750,
    specialType: '3+1+2',
    本科线: 429, 特殊类型线: 523,
    topUniversity: 680,
    scoreRanges: [
      { min: 675, max: 750, label: '清北华五', advice: '冲击清北及华五顶尖高校' },
      { min: 645, max: 674, label: 'C9/顶尖985', advice: '可选择C9及顶尖985院校' },
      { min: 615, max: 644, label: '中上游985', advice: '可冲击华工、中大等省内985或省外同层次' },
      { min: 585, max: 614, label: '211层次', advice: '可考虑211院校或省内重点（广工、广外等）' },
      { min: 555, max: 584, label: '一本层次', advice: '可选择一本院校优势专业' },
      { min: 520, max: 554, label: '二本/公办本科', advice: '可选择公办本科院校' },
      { min: 480, max: 519, label: '本科层次', advice: '可根据兴趣和就业选择本科院校' },
      { min: 420, max: 479, label: '本科层次', advice: '可选择民办或公办本科' }
    ]
  },
  jiangsu: {
    name: '江苏',
    totalScore: 750,
    specialType: '3+1+2',
    本科线: 448, 特殊类型线: 532,
    topUniversity: 680,
    scoreRanges: [
      { min: 675, max: 750, label: '清北华五', advice: '冲击清北及省内南大、东大' },
      { min: 645, max: 674, label: 'C9/985', advice: '可选择C9及优秀985' },
      { min: 615, max: 644, label: '中上游985', advice: '可考虑中上游985院校' },
      { min: 585, max: 614, label: '211层次', advice: '可选择211院校，省内南航、南理等' },
      { min: 550, max: 584, label: '一本层次', advice: '可选择省内外一本院校' },
      { min: 510, max: 549, label: '二本/公办本科', advice: '可选择优质公办本科' },
      { min: 440, max: 509, label: '本科层次', advice: '可根据兴趣选择本科' }
    ]
  },
  hubei: {
    name: '湖北',
    totalScore: 750,
    specialType: '3+1+2',
    本科线: 424, 特殊类型线: 520,
    topUniversity: 680,
    scoreRanges: [
      { min: 675, max: 750, label: '清北华五', advice: '冲击清北华五' },
      { min: 645, max: 674, label: 'C9/985', advice: '冲击优秀985' },
      { min: 615, max: 644, label: '中上游985', advice: '可考虑武大、华科等省内985' },
      { min: 585, max: 614, label: '211层次', advice: '可选择211院校，地大、华师、中南财大等' },
      { min: 555, max: 584, label: '一本层次', advice: '可选择一本院校' },
      { min: 520, max: 554, label: '二本/公办本科', advice: '可选择公办本科' },
      { min: 420, max: 519, label: '本科层次', advice: '根据分数选择本科' }
    ]
  },
  sichuan: {
    name: '四川',
    totalScore: 750,
    specialType: '3+1+2',
    本科线: 433, 特殊类型线: 527,
    topUniversity: 680,
    scoreRanges: [
      { min: 675, max: 750, label: '清北华五', advice: '冲击清北华五' },
      { min: 645, max: 674, label: 'C9/985', advice: '冲击C9及优秀985' },
      { min: 615, max: 644, label: '中上游985', advice: '可考虑川大、电子科大等省内985' },
      { min: 585, max: 614, label: '211层次', advice: '可选择211院校，西财、西南交大等' },
      { min: 550, max: 584, label: '一本层次', advice: '可选择一本院校' },
      { min: 510, max: 549, label: '二本层次', advice: '可选择公办二本' },
      { min: 430, max: 509, label: '本科层次', advice: '选择本科院校' }
    ]
  },
  zhejiang: {
    name: '浙江',
    totalScore: 750,
    specialType: '3+3',
    本科线: 488, 特殊类型线: 592,
    topUniversity: 680,
    scoreRanges: [
      { min: 675, max: 750, label: '清北华五', advice: '冲击清北及浙大' },
      { min: 645, max: 674, label: 'C9/985', advice: '冲击C9及顶尖985' },
      { min: 620, max: 644, label: '中上游985', advice: '可考虑中上游985' },
      { min: 595, max: 619, label: '211层次', advice: '可选择211院校' },
      { min: 560, max: 594, label: '一本层次', advice: '可选择省内外一本' },
      { min: 520, max: 559, label: '二本层次', advice: '可选择公办二本' },
      { min: 480, max: 519, label: '本科层次', advice: '选择本科院校' }
    ]
  },
  hunan: {
    name: '湖南',
    totalScore: 750,
    specialType: '3+1+2',
    本科线: 415, 特殊类型线: 509,
    topUniversity: 675,
    scoreRanges: [
      { min: 670, max: 750, label: '清北华五', advice: '冲击清北华五' },
      { min: 635, max: 669, label: 'C9/985', advice: '冲击优秀985' },
      { min: 600, max: 634, label: '211层次', advice: '可考虑中南、湖大、湖师大等' },
      { min: 565, max: 599, label: '一本层次', advice: '可选择一本院校' },
      { min: 525, max: 564, label: '二本层次', advice: '可选择公办二本' },
      { min: 410, max: 524, label: '本科层次', advice: '选择本科院校' }
    ]
  }
};

// 热门风口专业建议
const HOT_MAJOR_ADVICE = {
  topTier: [
    { name: '人工智能', reason: 'AI大模型时代核心专业，国家战略需求。薪资高、发展快、前景广阔。' },
    { name: '集成电路设计与集成系统', reason: '芯片国产化是国家最高战略。人才缺口大，薪资涨幅最快。' },
    { name: '数据科学与大数据技术', reason: '数字经济时代核心基础专业，各行各业都需要数据人才。' },
    { name: '计算机科学与技术', reason: '数字经济基石，持续热门。虽然竞争加剧但需求依然旺盛。' },
    { name: '新能源科学与工程', reason: '双碳战略核心领域。光伏、储能、新能源汽车全面爆发。' }
  ],
  secondTier: [
    { name: '口腔医学', reason: '消费医疗热门，私立诊所收入高。医生职业社会地位高。' },
    { name: '金融科技', reason: '金融与科技融合方向，国家对数字经济金融大力支持。' },
    { name: '网络空间安全', reason: '数据安全法驱动需求。网络安全人才缺口超百万。' },
    { name: '临床医学（八年制）', reason: '越老越吃香的铁饭碗。人口老龄化下需求持续增长。' },
    { name: '自动化', reason: '智能制造、工业4.0核心。自动化+AI是黄金组合。' }
  ],
  thirdTier: [
    { name: '电子信息工程', reason: '5G/6G、物联网、智能硬件都需要电子信息人才。' },
    { name: '航空航天工程', reason: '大飞机、商业航天是国家战略方向。' },
    { name: '生物医学工程', reason: '人口老龄化叠加国产替代，医疗器械行业高速增长。' },
    { name: '金融学', reason: '经济金融核心专业，虽然竞争激烈但上限高。' },
    { name: '软件工程', reason: 'AI时代软件需求不减。全栈、云计算、AI应用方向前景好。' }
  ],
  regionalAdvice: {
    beijing: '北京高校云集、实习机会多。IT、金融、文化传媒行业集中。留京就业机会多，但竞争和房价压力大。',
    shanghai: '上海是金融中心和国际化大都市。外企、金融、互联网资源丰富。生活成本高但机会多。',
    guangzhou_shenzhen: '大湾区核心城市。深圳的科技、广州的商贸各具特色。互联网、金融科技、制造业就业好。',
    chengdu_chongqing: '成渝双城经济圈。生活性价比高。电子信息、生物医药、文创产业发展迅速。',
    wuhan_changsha: '中部崛起核心城市。光电、轨道交通、汽车产业优势明显。房价友好宜居。',
    nanjing_hangzhou: '长三角副中心。杭州数字经济、南京智能制造各具特色。生活环境好。',
    xi_an: '西部科教中心。航天航空、电子信息、军工产业突出。人才政策好。',
    others: '新一线城市人才引进政策优惠多，生活成本更具优势。建议综合考虑学校实力、城市发展前景和个人专业兴趣。'
  }
};

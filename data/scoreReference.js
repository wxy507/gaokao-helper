// 各省分数线参考数据（基于2024-2025年理科/物理组，采用省份ID索引）
const SCORE_REFERENCE = {
  // ===== A组：竞争激烈大省（750分制） =====
  // 河南、河北、山东、广东、四川、安徽、山西、湖南
  ha: { name:'河南', total:750, 本科线:409, 特殊类型线:514,
    scoreRanges:[
      {min:680,max:750,label:'清北层次',advice:'全省前100名可冲击清北'},
      {min:660,max:679,label:'华五/顶尖985',advice:'可冲击复旦、交大、浙大、南大、中科大等顶尖名校'},
      {min:640,max:659,label:'中上游985',advice:'可考虑武大、华科、北航、同济等中上游985'},
      {min:610,max:639,label:'中下游985/211',advice:'可选择中下游985或郑大等顶尖211'},
      {min:580,max:609,label:'中上211',advice:'可考虑中上211及行业特色强校'},
      {min:550,max:579,label:'中游211/一本',advice:'可选择中游211或省外重点一本'},
      {min:510,max:549,label:'一本层次',advice:'可选择省内外一本院校优势专业'},
      {min:470,max:509,label:'二本层次',advice:'可选择公办二本或特色专业'},
      {min:400,max:469,label:'本科层次',advice:'可根据兴趣选择本科院校'}
    ]},
  sd: { name:'山东', total:750, 本科线:443, 特殊类型线:520,
    scoreRanges:[
      {min:675,max:750,label:'清北华五',advice:'冲击清北华五顶尖名校'},
      {min:645,max:674,label:'C9/顶尖985',advice:'可考虑C9及顶尖985院校'},
      {min:615,max:644,label:'中上游985',advice:'可冲击中上游985院校'},
      {min:585,max:614,label:'中下游985/211',advice:'可考虑中下游985或著名211'},
      {min:555,max:584,label:'中上211',advice:'可考虑中上211院校及海大、石油大等'},
      {min:525,max:554,label:'一本层次',advice:'可选择省内外一本院校'},
      {min:490,max:524,label:'二本层次',advice:'可选择优质公办本科'},
      {min:440,max:489,label:'本科层次',advice:'可根据分数和兴趣选择本科'}
    ]},
  gd: { name:'广东', total:750, 本科线:429, 特殊类型线:523,
    scoreRanges:[
      {min:675,max:750,label:'清北华五',advice:'冲击清北及华五顶尖高校'},
      {min:645,max:674,label:'C9/顶尖985',advice:'可选择C9及顶尖985院校'},
      {min:615,max:644,label:'中上游985',advice:'可冲击华工、中大等省内985'},
      {min:585,max:614,label:'211层次',advice:'可考虑211院校或广工、广外等省内强校'},
      {min:555,max:584,label:'一本层次',advice:'可选择一本院校优势专业'},
      {min:520,max:554,label:'二本/公办本科',advice:'可选择公办本科院校'},
      {min:480,max:519,label:'本科层次',advice:'根据兴趣和就业选择本科'},
      {min:420,max:479,label:'本科层次',advice:'可选择民办或公办本科'}
    ]},
  sc: { name:'四川', total:750, 本科线:433, 特殊类型线:527,
    scoreRanges:[
      {min:675,max:750,label:'清北华五',advice:'冲击清北华五'},
      {min:645,max:674,label:'C9/985',advice:'冲击C9及优秀985'},
      {min:615,max:644,label:'中上游985',advice:'可考虑川大、电子科大等省内985'},
      {min:585,max:614,label:'211层次',advice:'可选择211院校，西南财大、西南交大等'},
      {min:550,max:584,label:'一本层次',advice:'可选择一本院校'},
      {min:510,max:549,label:'二本层次',advice:'可选择公办二本'},
      {min:430,max:509,label:'本科层次',advice:'选择本科院校'}
    ]},
  // 河北、山西、安徽 参考河南
  he: { name:'河北', total:750, 本科线:439, 特殊类型线:498,
    scoreRanges:[
      {min:675,max:750,label:'清北华五',advice:'冲击清北华五'},
      {min:645,max:674,label:'C9/985',advice:'冲击优秀985'},
      {min:610,max:644,label:'中上游985',advice:'可考虑中上游985'},
      {min:575,max:609,label:'211层次',advice:'可选择211院校'},
      {min:540,max:574,label:'一本层次',advice:'可选择一本院校'},
      {min:500,max:539,label:'二本层次',advice:'可选择公办二本'},
      {min:430,max:499,label:'本科层次',advice:'选择本科院校'}
    ]},
  sx: { name:'山西', total:750, 本科线:396, 特殊类型线:506,
    scoreRanges:[
      {min:670,max:750,label:'清北华五',advice:'冲击清北华五'},
      {min:635,max:669,label:'C9/985',advice:'冲击优秀985'},
      {min:600,max:634,label:'211层次',advice:'可考虑211院校'},
      {min:565,max:599,label:'一本层次',advice:'可选择一本院校'},
      {min:530,max:564,label:'二本层次',advice:'可选择公办二本'},
      {min:490,max:529,label:'本科层次',advice:'选择本科院校'},
      {min:390,max:489,label:'本科层次',advice:'选择本科院校'}
    ]},
  ah: { name:'安徽', total:750, 本科线:427, 特殊类型线:514,
    scoreRanges:[
      {min:675,max:750,label:'清北华五',advice:'冲击清北华五'},
      {min:640,max:674,label:'C9/985',advice:'冲击优秀985'},
      {min:605,max:639,label:'211层次',advice:'可考虑中科大、合工大等'},
      {min:570,max:604,label:'一本层次',advice:'可选择一本院校'},
      {min:535,max:569,label:'二本层次',advice:'可选择公办二本'},
      {min:490,max:534,label:'本科层次',advice:'选择本科院校'},
      {min:420,max:489,label:'本科层次',advice:'选择本科院校'}
    ]},
  hn: { name:'湖南', total:750, 本科线:415, 特殊类型线:509,
    scoreRanges:[
      {min:670,max:750,label:'清北华五',advice:'冲击清北华五'},
      {min:635,max:669,label:'C9/985',advice:'冲击优秀985'},
      {min:600,max:634,label:'211层次',advice:'可考虑中南、湖大、湖师大等'},
      {min:565,max:599,label:'一本层次',advice:'可选择一本院校'},
      {min:525,max:564,label:'二本层次',advice:'可选择公办二本'},
      {min:480,max:524,label:'本科层次',advice:'选择本科院校'},
      {min:410,max:479,label:'本科层次',advice:'选择本科院校'}
    ]},

  // ===== B组：中等竞争省份（750分制） =====
  hb: { name:'湖北', total:750, 本科线:424, 特殊类型线:520,
    scoreRanges:[
      {min:675,max:750,label:'清北华五',advice:'冲击清北华五'},
      {min:645,max:674,label:'C9/985',advice:'冲击优秀985'},
      {min:615,max:644,label:'中上游985',advice:'可考虑武大、华科等省内985'},
      {min:585,max:614,label:'211层次',advice:'可选择211，地大、华师、中南财大等'},
      {min:555,max:584,label:'一本层次',advice:'可选择一本院校'},
      {min:520,max:554,label:'二本/公办本科',advice:'可选择公办本科'},
      {min:420,max:519,label:'本科层次',advice:'根据分数选择本科'}
    ]},
  fj: { name:'福建', total:750, 本科线:428, 特殊类型线:518,
    scoreRanges:[
      {min:670,max:750,label:'清北华五',advice:'冲击清北华五'},
      {min:640,max:669,label:'C9/985',advice:'冲击优秀985'},
      {min:605,max:639,label:'211层次',advice:'可考虑厦大、福大等'},
      {min:570,max:604,label:'一本层次',advice:'可选择一本院校'},
      {min:535,max:569,label:'二本层次',advice:'可选择公办二本'},
      {min:490,max:534,label:'本科层次',advice:'选择本科院校'},
      {min:420,max:489,label:'本科层次',advice:'选择本科院校'}
    ]},
  jx: { name:'江西', total:750, 本科线:445, 特殊类型线:520,
    scoreRanges:[
      {min:670,max:750,label:'清北华五',advice:'冲击清北华五'},
      {min:635,max:669,label:'C9/985',advice:'冲击优秀985'},
      {min:600,max:634,label:'211层次',advice:'可考虑南昌大学等'},
      {min:565,max:599,label:'一本层次',advice:'可选择一本院校'},
      {min:525,max:564,label:'二本层次',advice:'可选择公办二本'},
      {min:480,max:524,label:'本科层次',advice:'选择本科院校'},
      {min:440,max:479,label:'本科层次',advice:'选择本科院校'}
    ]},
  cq: { name:'重庆', total:750, 本科线:406, 特殊类型线:499,
    scoreRanges:[
      {min:670,max:750,label:'清北华五',advice:'冲击清北华五'},
      {min:640,max:669,label:'C9/985',advice:'冲击优秀985'},
      {min:605,max:639,label:'211层次',advice:'可考虑重大、西南大学等'},
      {min:570,max:604,label:'一本层次',advice:'可选择一本院校'},
      {min:535,max:569,label:'二本层次',advice:'可选择公办二本'},
      {min:490,max:534,label:'本科层次',advice:'选择本科院校'},
      {min:400,max:489,label:'本科层次',advice:'选择本科院校'}
    ]},
  ln: { name:'辽宁', total:750, 本科线:362, 特殊类型线:500,
    scoreRanges:[
      {min:670,max:750,label:'清北华五',advice:'冲击清北华五'},
      {min:640,max:669,label:'C9/985',advice:'冲击优秀985'},
      {min:605,max:639,label:'211层次',advice:'可考虑大连理工、东北大学等'},
      {min:570,max:604,label:'一本层次',advice:'可选择一本院校'},
      {min:530,max:569,label:'二本层次',advice:'可选择公办二本'},
      {min:480,max:529,label:'本科层次',advice:'选择本科院校'},
      {min:360,max:479,label:'本科层次',advice:'选择本科院校'}
    ]},
  jl: { name:'吉林', total:750, 本科线:345, 特殊类型线:480,
    scoreRanges:[
      {min:665,max:750,label:'清北华五',advice:'冲击清北华五'},
      {min:630,max:664,label:'C9/985',advice:'冲击优秀985'},
      {min:595,max:629,label:'211层次',advice:'可考虑吉大、东北师大等'},
      {min:555,max:594,label:'一本层次',advice:'可选择一本院校'},
      {min:515,max:554,label:'二本层次',advice:'可选择公办二本'},
      {min:470,max:514,label:'本科层次',advice:'选择本科院校'},
      {min:340,max:469,label:'本科层次',advice:'选择本科院校'}
    ]},
  hlj: { name:'黑龙江', total:750, 本科线:360, 特殊类型线:483,
    scoreRanges:[
      {min:665,max:750,label:'清北华五',advice:'冲击清北华五'},
      {min:630,max:664,label:'C9/985',advice:'冲击优秀985'},
      {min:595,max:629,label:'211层次',advice:'可考虑哈工大、哈工程等'},
      {min:555,max:594,label:'一本层次',advice:'可选择一本院校'},
      {min:515,max:554,label:'二本层次',advice:'可选择公办二本'},
      {min:470,max:514,label:'本科层次',advice:'选择本科院校'},
      {min:350,max:469,label:'本科层次',advice:'选择本科院校'}
    ]},
  sx2: { name:'陕西', total:750, 本科线:397, 特殊类型线:475,
    scoreRanges:[
      {min:670,max:750,label:'清北华五',advice:'冲击清北华五'},
      {min:640,max:669,label:'C9/985',advice:'冲击优秀985'},
      {min:605,max:639,label:'211层次',advice:'可考虑西交大、西工大等'},
      {min:565,max:604,label:'一本层次',advice:'可选择一本院校'},
      {min:525,max:564,label:'二本层次',advice:'可选择公办二本'},
      {min:475,max:524,label:'本科层次',advice:'选择本科院校'},
      {min:390,max:474,label:'本科层次',advice:'选择本科院校'}
    ]},

  // ===== C组：相对容易/自主命题（上海660分制，其他750） =====
  bj: { name:'北京', total:750, 本科线:434, 特殊类型线:523,
    scoreRanges:[
      {min:680,max:750,label:'清北华五',advice:'可冲击清华、北大、复旦、交大等顶尖高校'},
      {min:650,max:679,label:'C9/顶尖985',advice:'可考虑C9联盟高校及顶尖985'},
      {min:620,max:649,label:'中上游985',advice:'可冲击北航、同济、北师大等'},
      {min:590,max:619,label:'中下游985/211',advice:'可选择中下游985或顶尖211'},
      {min:560,max:589,label:'中上211',advice:'可考虑北邮、西电等行业特色强校'},
      {min:530,max:559,label:'中游211/一本',advice:'可考虑中游211或较强一本'},
      {min:500,max:529,label:'一本层次',advice:'可选择一本或优质二本优势专业'},
      {min:430,max:499,label:'本科层次',advice:'可选择公办或优质民办本科'}
    ]},
  sh: { name:'上海', total:660, 本科线:403, 特殊类型线:503,
    scoreRanges:[
      {min:580,max:660,label:'清北华五',advice:'冲击清北、复旦、交大等'},
      {min:555,max:579,label:'C9/985',advice:'可考虑C9及顶尖985'},
      {min:530,max:554,label:'中上游985',advice:'可冲击中上游985'},
      {min:500,max:529,label:'211层次',advice:'可考虑优秀211'},
      {min:470,max:499,label:'一本层次',advice:'可选择一本或特色二本'},
      {min:400,max:469,label:'本科层次',advice:'可选择公办或民办本科'}
    ]},
  tj: { name:'天津', total:750, 本科线:472, 特殊类型线:563,
    scoreRanges:[
      {min:680,max:750,label:'清北华五',advice:'冲击清北华五'},
      {min:650,max:679,label:'C9/985',advice:'冲击优秀985'},
      {min:620,max:649,label:'中上游985',advice:'可考虑南开、天大等'},
      {min:590,max:619,label:'211层次',advice:'可考虑211院校'},
      {min:560,max:589,label:'一本层次',advice:'可选择一本院校'},
      {min:520,max:559,label:'二本层次',advice:'可选择公办二本'},
      {min:470,max:519,label:'本科层次',advice:'选择本科院校'}
    ]},
  zj: { name:'浙江', total:750, 本科线:488, 特殊类型线:592,
    scoreRanges:[
      {min:675,max:750,label:'清北华五',advice:'冲击清北及浙大'},
      {min:645,max:674,label:'C9/985',advice:'冲击C9及顶尖985'},
      {min:620,max:644,label:'中上游985',advice:'可考虑中上游985'},
      {min:595,max:619,label:'211层次',advice:'可选择211院校'},
      {min:560,max:594,label:'一本层次',advice:'可选择省内外一本'},
      {min:520,max:559,label:'二本层次',advice:'可选择公办二本'},
      {min:480,max:519,label:'本科层次',advice:'选择本科院校'}
    ]},
  js: { name:'江苏', total:750, 本科线:448, 特殊类型线:532,
    scoreRanges:[
      {min:675,max:750,label:'清北华五',advice:'冲击清北及省内南大、东大'},
      {min:645,max:674,label:'C9/985',advice:'可选择C9及优秀985'},
      {min:615,max:644,label:'中上游985',advice:'可考虑中上游985'},
      {min:585,max:614,label:'211层次',advice:'可选择211，南航、南理等'},
      {min:550,max:584,label:'一本层次',advice:'可选择省内外一本'},
      {min:510,max:549,label:'二本/公办本科',advice:'可选择优质公办本科'},
      {min:440,max:509,label:'本科层次',advice:'根据兴趣选择本科'}
    ]},
  hi: { name:'海南', total:750, 本科线:483, 特殊类型线:569,
    scoreRanges:[
      {min:690,max:750,label:'清北华五',advice:'冲击清北华五'},
      {min:650,max:689,label:'C9/985',advice:'冲击优秀985'},
      {min:615,max:649,label:'211层次',advice:'可考虑211院校'},
      {min:580,max:614,label:'一本层次',advice:'可选择一本院校'},
      {min:540,max:579,label:'二本层次',advice:'可选择公办二本'},
      {min:480,max:539,label:'本科层次',advice:'选择本科院校'}
    ]},

  // ===== D组：偏远/中西部省份（750分制） =====
  nm: { name:'内蒙古', total:750, 本科线:360, 特殊类型线:468,
    scoreRanges:[
      {min:660,max:750,label:'清北华五',advice:'冲击清北华五'},
      {min:620,max:659,label:'C9/985',advice:'冲击优秀985'},
      {min:580,max:619,label:'211层次',advice:'可考虑211院校'},
      {min:535,max:579,label:'一本层次',advice:'可选择一本院校'},
      {min:490,max:534,label:'二本层次',advice:'可选择公办二本'},
      {min:440,max:489,label:'本科层次',advice:'选择本科院校'},
      {min:355,max:439,label:'本科层次',advice:'选择本科院校'}
    ]},
  gx: { name:'广西', total:750, 本科线:371, 特殊类型线:475,
    scoreRanges:[
      {min:665,max:750,label:'清北华五',advice:'冲击清北华五'},
      {min:625,max:664,label:'C9/985',advice:'冲击优秀985'},
      {min:585,max:624,label:'211层次',advice:'可考虑211院校'},
      {min:540,max:584,label:'一本层次',advice:'可选择一本院校'},
      {min:495,max:539,label:'二本层次',advice:'可选择公办二本'},
      {min:445,max:494,label:'本科层次',advice:'选择本科院校'},
      {min:365,max:444,label:'本科层次',advice:'选择本科院校'}
    ]},
  gz: { name:'贵州', total:750, 本科线:380, 特殊类型线:482,
    scoreRanges:[
      {min:665,max:750,label:'清北华五',advice:'冲击清北华五'},
      {min:625,max:664,label:'C9/985',advice:'冲击优秀985'},
      {min:585,max:624,label:'211层次',advice:'可考虑211院校'},
      {min:540,max:584,label:'一本层次',advice:'可选择一本院校'},
      {min:495,max:539,label:'二本层次',advice:'可选择公办二本'},
      {min:445,max:494,label:'本科层次',advice:'选择本科院校'},
      {min:375,max:444,label:'本科层次',advice:'选择本科院校'}
    ]},
  yn: { name:'云南', total:750, 本科线:405, 特殊类型线:505,
    scoreRanges:[
      {min:670,max:750,label:'清北华五',advice:'冲击清北华五'},
      {min:630,max:669,label:'C9/985',advice:'冲击优秀985'},
      {min:590,max:629,label:'211层次',advice:'可考虑211院校'},
      {min:550,max:589,label:'一本层次',advice:'可选择一本院校'},
      {min:505,max:549,label:'二本层次',advice:'可选择公办二本'},
      {min:455,max:504,label:'本科层次',advice:'选择本科院校'},
      {min:400,max:454,label:'本科层次',advice:'选择本科院校'}
    ]},
  gs: { name:'甘肃', total:750, 本科线:370, 特殊类型线:470,
    scoreRanges:[
      {min:660,max:750,label:'清北华五',advice:'冲击清北华五'},
      {min:620,max:659,label:'C9/985',advice:'冲击优秀985'},
      {min:580,max:619,label:'211层次',advice:'可考虑211院校'},
      {min:535,max:579,label:'一本层次',advice:'可选择一本院校'},
      {min:490,max:534,label:'二本层次',advice:'可选择公办二本'},
      {min:440,max:489,label:'本科层次',advice:'选择本科院校'},
      {min:365,max:439,label:'本科层次',advice:'选择本科院校'}
    ]},
  xz: { name:'西藏', total:750, 本科线:300, 特殊类型线:400,
    scoreRanges:[
      {min:640,max:750,label:'清北华五',advice:'冲击清北华五'},
      {min:595,max:639,label:'C9/985',advice:'冲击优秀985'},
      {min:550,max:594,label:'211层次',advice:'可考虑211院校'},
      {min:500,max:549,label:'一本层次',advice:'可选择一本院校'},
      {min:450,max:499,label:'二本层次',advice:'可选择公办二本'},
      {min:395,max:449,label:'本科层次',advice:'选择本科院校'},
      {min:295,max:394,label:'本科层次',advice:'选择本科院校'}
    ]},
  xj: { name:'新疆', total:750, 本科线:350, 特殊类型线:455,
    scoreRanges:[
      {min:655,max:750,label:'清北华五',advice:'冲击清北华五'},
      {min:615,max:654,label:'C9/985',advice:'冲击优秀985'},
      {min:575,max:614,label:'211层次',advice:'可考虑211院校'},
      {min:530,max:574,label:'一本层次',advice:'可选择一本院校'},
      {min:485,max:529,label:'二本层次',advice:'可选择公办二本'},
      {min:435,max:484,label:'本科层次',advice:'选择本科院校'},
      {min:345,max:434,label:'本科层次',advice:'选择本科院校'}
    ]},
  qh: { name:'青海', total:750, 本科线:330, 特殊类型线:430,
    scoreRanges:[
      {min:640,max:750,label:'清北华五',advice:'冲击清北华五'},
      {min:600,max:639,label:'C9/985',advice:'冲击优秀985'},
      {min:560,max:599,label:'211层次',advice:'可考虑211院校'},
      {min:515,max:559,label:'一本层次',advice:'可选择一本院校'},
      {min:470,max:514,label:'二本层次',advice:'可选择公办二本'},
      {min:420,max:469,label:'本科层次',advice:'选择本科院校'},
      {min:325,max:419,label:'本科层次',advice:'选择本科院校'}
    ]},
  nx: { name:'宁夏', total:750, 本科线:340, 特殊类型线:460,
    scoreRanges:[
      {min:645,max:750,label:'清北华五',advice:'冲击清北华五'},
      {min:605,max:644,label:'C9/985',advice:'冲击优秀985'},
      {min:565,max:604,label:'211层次',advice:'可考虑211院校'},
      {min:520,max:564,label:'一本层次',advice:'可选择一本院校'},
      {min:475,max:519,label:'二本层次',advice:'可选择公办二本'},
      {min:425,max:474,label:'本科层次',advice:'选择本科院校'},
      {min:335,max:424,label:'本科层次',advice:'选择本科院校'}
    ]}
};

// 热门风口专业建议
const HOT_MAJOR_ADVICE = {
  topTier: [
    { name:'人工智能', reason:'AI大模型时代核心专业，国家战略需求。薪资高、发展快、前景广阔。' },
    { name:'集成电路设计与集成系统', reason:'芯片国产化是国家最高战略。人才缺口大，薪资涨幅最快。' },
    { name:'数据科学与大数据技术', reason:'数字经济时代核心基础专业，各行各业都需要数据人才。' },
    { name:'计算机科学与技术', reason:'数字经济基石，持续热门。虽然竞争加剧但需求依然旺盛。' },
    { name:'新能源科学与工程', reason:'双碳战略核心领域。光伏、储能、新能源汽车全面爆发。' }
  ],
  secondTier: [
    { name:'口腔医学', reason:'消费医疗热门，私立诊所收入高。医生职业社会地位高。' },
    { name:'金融科技', reason:'金融与科技融合方向，国家对数字经济金融大力支持。' },
    { name:'网络空间安全', reason:'数据安全法驱动需求。网络安全人才缺口超百万。' },
    { name:'自动化', reason:'智能制造、工业4.0核心。自动化+AI是黄金组合。' },
    { name:'生物医学工程', reason:'人口老龄化叠加国产替代，医疗器械行业高速增长。' }
  ],
  regionalAdvice: {
    beijing:'北京高校云集、实习机会多。IT、金融、文化传媒行业集中。留京就业机会多，但竞争和房价压力大。',
    shanghai:'上海是金融中心和国际化大都市。外企、金融、互联网资源丰富。生活成本高但机会多。',
    guangzhou_shenzhen:'大湾区核心城市。深圳的科技、广州的商贸各具特色。互联网、金融科技、制造业就业好。',
    chengdu_chongqing:'成渝双城经济圈。生活性价比高。电子信息、生物医药、文创产业发展迅速。',
    wuhan_changsha:'中部崛起核心城市。光电、轨道交通、汽车产业优势明显。房价友好宜居。',
    nanjing_hangzhou:'长三角副中心。杭州数字经济、南京智能制造各具特色。生活环境好。',
    xi_an:'西部科教中心。航天航空、电子信息、军工产业突出。人才政策好。',
    others:'新一线城市人才引进政策优惠多，生活成本更具优势。'
  }
};

// 中国高校数据（含排名、介绍、校园链接、毕业去向）
const UNIVERSITIES = [
  {
    id: 'tsinghua', name: '清华大学', rank: 1, type: '综合', location: '北京',
    tags: ['985', '211', '双一流', 'C9', '顶尖'],
    description: '清华大学是中国最顶尖的高等学府之一，工科实力全国第一。在计算机、人工智能、集成电路、航空航天等领域处于世界领先水平。校园占地约460公顷，被誉为"清华园"。校友遍布全球各行各业。',
    website: 'https://www.tsinghua.edu.cn',
    campusLink: 'https://www.tsinghua.edu.cn/zjqh/xytd.htm',
    socialLinks: { wechat: '清华大学' },
    graduateOutcomes: {
      employmentRate: '98.5%',
      furtherStudy: '国内深造约45%，国外深造约20%',
      topEmployers: ['华为', '腾讯', '阿里巴巴', '字节跳动', '国家电网', '中科院'],
      averageSalary: '应届本科约25-35万/年，硕士约35-50万/年',
      destinations: '主要就业城市：北京、上海、深圳、杭州。行业分布：IT/互联网约40%，金融约15%，科研教育约15%，制造业约10%'
    },
    majors: ['计算机科学与技术', '人工智能', '软件工程', '集成电路设计与集成系统', '自动化', '金融学'],
    stats: { undergraduateCount: 16000, graduateCount: 23000, internationalCount: 3800 }
  },
  {
    id: 'pku', name: '北京大学', rank: 2, type: '综合', location: '北京',
    tags: ['985', '211', '双一流', 'C9', '顶尖'],
    description: '北京大学是中国第一所国立综合性大学，人文社科和理学实力全国领先。医学部实力雄厚。北大以"思想自由、兼容并包"为传统，培养了众多学术大师和各界领袖。',
    website: 'https://www.pku.edu.cn',
    campusLink: 'https://www.pku.edu.cn/about/faculty.html',
    socialLinks: { wechat: '北京大学' },
    graduateOutcomes: {
      employmentRate: '98.3%',
      furtherStudy: '国内深造约40%，国外深造约25%',
      topEmployers: ['华为', '腾讯', '中科院', '阿里巴巴', '国家部委', '高校'],
      averageSalary: '应届本科约20-35万/年，硕士约30-50万/年',
      destinations: '主要就业城市：北京、上海、深圳、广州。行业分布：IT/互联网约35%，教育科研约20%，金融约15%，公务员约10%'
    },
    majors: ['经济学', '计算机科学与技术', '法学', '临床医学', '数学与应用数学', '中国语言文学'],
    stats: { undergraduateCount: 15000, graduateCount: 28000, internationalCount: 4000 }
  },
  {
    id: 'zju', name: '浙江大学', rank: 3, type: '综合', location: '杭州',
    tags: ['985', '211', '双一流', 'C9', '顶尖'],
    description: '浙江大学是综合性研究型大学，学科门类齐全，工科、农学、医学实力突出。位于杭州，校园环境优美。近年来综合实力稳居全国前三。在计算机、光学工程、控制科学等领域表现卓越。',
    website: 'https://www.zju.edu.cn',
    campusLink: 'https://www.zju.edu.cn/xywz/list.htm',
    socialLinks: { wechat: '浙江大学' },
    graduateOutcomes: {
      employmentRate: '98.2%',
      furtherStudy: '国内深造约42%，国外深造约18%',
      topEmployers: ['阿里巴巴', '华为', '网易', '海康威视', '蚂蚁集团', '浙江省选调'],
      averageSalary: '应届本科约18-30万/年，硕士约30-45万/年',
      destinations: '主要就业城市：杭州、上海、深圳、北京。行业分布：IT/互联网约45%，制造业约15%，金融约10%'
    },
    majors: ['计算机科学与技术', '人工智能', '软件工程', '临床医学', '数据科学与大数据技术', '光学工程'],
    stats: { undergraduateCount: 25000, graduateCount: 28000, internationalCount: 4500 }
  },
  {
    id: 'sjtu', name: '上海交通大学', rank: 4, type: '综合', location: '上海',
    tags: ['985', '211', '双一流', 'C9', '顶尖'],
    description: '上海交通大学是中国历史最悠久的高等学府之一，工科和医学实力强劲。位于上海，与上海经济发展紧密结合。在船舶、机械、电子信息、医学等领域享有盛誉。',
    website: 'https://www.sjtu.edu.cn',
    campusLink: 'https://www.sjtu.edu.cn/jdgk/xywz.htm',
    socialLinks: { wechat: '上海交通大学' },
    graduateOutcomes: {
      employmentRate: '98.4%',
      furtherStudy: '国内深造约40%，国外深造约20%',
      topEmployers: ['华为', '腾讯', '上汽集团', '中国商飞', '阿里巴巴', '上海证券交易所'],
      averageSalary: '应届本科约20-35万/年，硕士约30-50万/年',
      destinations: '主要就业城市：上海、杭州、深圳、北京。行业分布：IT/互联网约38%，金融约12%，制造业约18%'
    },
    majors: ['计算机科学与技术', '人工智能', '临床医学', '机械工程', '电子信息工程', '金融学'],
    stats: { undergraduateCount: 17000, graduateCount: 25000, internationalCount: 3500 }
  },
  {
    id: 'fudan', name: '复旦大学', rank: 5, type: '综合', location: '上海',
    tags: ['985', '211', '双一流', 'C9', '顶尖'],
    description: '复旦大学是中国顶尖综合性研究型大学，人文社科和医学实力突出。地处上海，学术氛围开放活跃。新闻学、经济学、临床医学等专业全国领先。',
    website: 'https://www.fudan.edu.cn',
    campusLink: 'https://www.fudan.edu.cn/148/list.htm',
    socialLinks: { wechat: '复旦大学' },
    graduateOutcomes: {
      employmentRate: '98.1%',
      furtherStudy: '国内深造约35%，国外深造约25%',
      topEmployers: ['华为', '腾讯', '阿里巴巴', '上海金融机构', '外资企业', '高校和科研院所'],
      averageSalary: '应届本科约18-30万/年，硕士约28-45万/年',
      destinations: '主要就业城市：上海、北京、深圳、杭州。行业分布：IT/互联网约30%，金融约20%，教育科研约15%'
    },
    majors: ['金融学', '经济学', '临床医学', '新闻学', '哲学', '法学'],
    stats: { undergraduateCount: 14000, graduateCount: 22000, internationalCount: 3200 }
  },
  {
    id: 'nju', name: '南京大学', rank: 6, type: '综合', location: '南京',
    tags: ['985', '211', '双一流', 'C9'],
    description: '南京大学是一所历史悠久、声誉卓著的综合性大学。文理工医协调发展，天文学、地质学、中文等学科具有传统优势。学风踏实，基础研究实力强。',
    website: 'https://www.nju.edu.cn',
    campusLink: 'https://www.nju.edu.cn/xywz/list.htm',
    socialLinks: { wechat: '南京大学' },
    graduateOutcomes: {
      employmentRate: '97.8%',
      furtherStudy: '国内深造约38%，国外深造约20%',
      topEmployers: ['华为', '腾讯', '阿里巴巴', '字节跳动', '江苏省选调', '科研院所'],
      averageSalary: '应届本科约16-28万/年，硕士约25-42万/年',
      destinations: '主要就业城市：南京、上海、杭州、北京、深圳'
    },
    majors: ['计算机科学与技术', '数学与应用数学', '物理学', '经济学', '天文学', '中国语言文学'],
    stats: { undergraduateCount: 14000, graduateCount: 20000, internationalCount: 2800 }
  },
  {
    id: 'ustc', name: '中国科学技术大学', rank: 7, type: '理工', location: '合肥',
    tags: ['985', '211', '双一流', 'C9'],
    description: '中科大是国内顶尖的理工科大学，以"小而精"著称。理科基础研究实力全国领先，物理、化学、地球科学等学科极强。培养了大批科学家和高科技人才。',
    website: 'https://www.ustc.edu.cn',
    campusLink: 'https://www.ustc.edu.cn/xywz/list.htm',
    socialLinks: { wechat: '中国科学技术大学' },
    graduateOutcomes: {
      employmentRate: '98.0%',
      furtherStudy: '国内深造约48%，国外深造约22%',
      topEmployers: ['华为', '中科院', '腾讯', '阿里巴巴', '科大讯飞', '国家实验室'],
      averageSalary: '应届本科约18-32万/年，硕士约28-50万/年',
      destinations: '主要就业城市：合肥、上海、北京、深圳、杭州'
    },
    majors: ['物理学', '化学', '数学与应用数学', '计算机科学与技术', '人工智能', '材料科学与工程'],
    stats: { undergraduateCount: 8000, graduateCount: 16000, internationalCount: 1500 }
  },
  {
    id: 'hust', name: '华中科技大学', rank: 8, type: '理工', location: '武汉',
    tags: ['985', '211', '双一流'],
    description: '华中科技大学是工科和医学实力突出的综合性大学。机械、光电、预防医学等专业全国领先。被誉为"南方清华"。校园环境优美，拥有著名的"梧桐雨"景观。',
    website: 'https://www.hust.edu.cn',
    campusLink: 'https://www.hust.edu.cn/xywz/list.htm',
    socialLinks: { wechat: '华中科技大学' },
    graduateOutcomes: {
      employmentRate: '97.5%',
      furtherStudy: '国内深造约35%，国外深造约12%',
      topEmployers: ['华为', '腾讯', '字节跳动', '小米', '中兴通讯', '武汉光电国家研究中心'],
      averageSalary: '应届本科约15-25万/年，硕士约25-40万/年',
      destinations: '主要就业城市：武汉、深圳、上海、北京、杭州'
    },
    majors: ['机械工程', '光电信息科学与工程', '计算机科学与技术', '预防医学', '自动化', '电气工程'],
    stats: { undergraduateCount: 28000, graduateCount: 25000, internationalCount: 3000 }
  },
  {
    id: 'buaa', name: '北京航空航天大学', rank: 9, type: '理工', location: '北京',
    tags: ['985', '211', '双一流'],
    description: '北航是中国航空航天领域的顶级学府。航空宇航科学、计算机、材料等实力突出。国防七子之一，为国家航天事业培养了大量核心人才。',
    website: 'https://www.buaa.edu.cn',
    campusLink: 'https://www.buaa.edu.cn/xywz/list.htm',
    socialLinks: { wechat: '北京航空航天大学' },
    graduateOutcomes: {
      employmentRate: '98.0%',
      furtherStudy: '国内深造约45%，国外深造约15%',
      topEmployers: ['中国航天科技集团', '中国航天科工集团', '中航工业', '华为', '字节跳动', '中国商飞'],
      averageSalary: '应届本科约16-30万/年，硕士约26-45万/年',
      destinations: '主要就业城市：北京、上海、西安、成都、深圳'
    },
    majors: ['航空航天工程', '计算机科学与技术', '人工智能', '软件工程', '自动化', '材料科学与工程'],
    stats: { undergraduateCount: 15000, graduateCount: 20000, internationalCount: 1800 }
  },
  {
    id: 'ruc', name: '中国人民大学', rank: 10, type: '综合', location: '北京',
    tags: ['985', '211', '双一流'],
    description: '中国人民大学是中国人文社会科学领域的最高学府。经济学、法学、社会学、新闻学等学科全国领先。被誉为"中国人文社会科学的一面旗帜"。',
    website: 'https://www.ruc.edu.cn',
    campusLink: 'https://www.ruc.edu.cn/xywz/list.htm',
    socialLinks: { wechat: '中国人民大学' },
    graduateOutcomes: {
      employmentRate: '97.8%',
      furtherStudy: '国内深造约35%，国外深造约22%',
      topEmployers: ['国家部委', '中央金融机构', '大型国企', '腾讯', '阿里巴巴', '高校和科研院所'],
      averageSalary: '应届本科约16-28万/年，硕士约25-45万/年',
      destinations: '主要就业城市：北京、上海、深圳、杭州。行业分布：金融约25%，公务员约20%，IT/互联网约20%'
    },
    majors: ['经济学', '金融学', '法学', '会计学', '新闻学', '社会学'],
    stats: { undergraduateCount: 12000, graduateCount: 20000, internationalCount: 2500 }
  },
  {
    id: 'xjt', name: '西安交通大学', rank: 11, type: '综合', location: '西安',
    tags: ['985', '211', '双一流', 'C9'],
    description: '西安交大是C9联盟成员，工科和管理学科实力突出。电气、能动、机械等传统工科优势明显。位于古都西安，是西部高等教育的旗帜。',
    website: 'https://www.xjtu.edu.cn',
    campusLink: 'https://www.xjtu.edu.cn/xywz/list.htm',
    socialLinks: { wechat: '西安交通大学' },
    graduateOutcomes: {
      employmentRate: '97.5%',
      furtherStudy: '国内深造约40%，国外深造约15%',
      topEmployers: ['华为', '国家电网', '中航工业', '中国西电集团', '比亚迪', '中兴通讯'],
      averageSalary: '应届本科约14-25万/年，硕士约22-38万/年',
      destinations: '主要就业城市：西安、深圳、上海、北京、成都'
    },
    majors: ['电气工程', '能源与动力工程', '机械工程', '人工智能', '计算机科学与技术', '工商管理'],
    stats: { undergraduateCount: 20000, graduateCount: 22000, internationalCount: 2000 }
  },
  {
    id: 'hit', name: '哈尔滨工业大学', rank: 12, type: '理工', location: '哈尔滨',
    tags: ['985', '211', '双一流', 'C9'],
    description: '哈工大是C9联盟成员，航天和工科强校。在航天工程、机器人、焊接技术等领域全国领先。拥有哈尔滨、威海、深圳三个校区。被誉为"工程师的摇篮"。',
    website: 'https://www.hit.edu.cn',
    campusLink: 'https://www.hit.edu.cn/xywz/list.htm',
    socialLinks: { wechat: '哈尔滨工业大学' },
    graduateOutcomes: {
      employmentRate: '97.3%',
      furtherStudy: '国内深造约42%，国外深造约12%',
      topEmployers: ['中国航天科技集团', '华为', '中兴通讯', '中国商飞', '一汽集团', '上汽集团'],
      averageSalary: '应届本科约14-24万/年，硕士约22-36万/年',
      destinations: '主要就业城市：深圳、北京、哈尔滨、上海、成都'
    },
    majors: ['航空航天工程', '计算机科学与技术', '机械工程', '自动化', '焊接技术与工程', '材料科学与工程'],
    stats: { undergraduateCount: 25000, graduateCount: 22000, internationalCount: 2200 }
  },
  {
    id: 'tongji', name: '同济大学', rank: 14, type: '理工', location: '上海',
    tags: ['985', '211', '双一流'],
    description: '同济大学以土木建筑学科闻名全国。在土木工程、建筑学、城乡规划、交通运输等领域具有绝对优势。地处上海，综合实力稳步上升。',
    website: 'https://www.tongji.edu.cn',
    campusLink: 'https://www.tongji.edu.cn/xywz/list.htm',
    socialLinks: { wechat: '同济大学' },
    graduateOutcomes: {
      employmentRate: '97.6%',
      furtherStudy: '国内深造约35%，国外深造约18%',
      topEmployers: ['上海建工集团', '中国建筑集团', '华东建筑设计院', '华为', '上汽集团', '上海市政工程设计院'],
      averageSalary: '应届本科约15-28万/年，硕士约24-40万/年',
      destinations: '主要就业城市：上海、杭州、深圳、北京、苏州'
    },
    majors: ['土木工程', '建筑学', '城乡规划', '交通运输', '计算机科学与技术', '机械工程'],
    stats: { undergraduateCount: 18000, graduateCount: 20000, internationalCount: 3000 }
  },
  {
    id: 'wuhan', name: '武汉大学', rank: 15, type: '综合', location: '武汉',
    tags: ['985', '211', '双一流'],
    description: '武汉大学是综合性研究型大学，人文社科和理学实力突出。校园被誉为"中国最美大学"之一。法学、新闻学、测绘科学、生命科学等领域领先。',
    website: 'https://www.whu.edu.cn',
    campusLink: 'https://www.whu.edu.cn/xywz/list.htm',
    socialLinks: { wechat: '武汉大学' },
    graduateOutcomes: {
      employmentRate: '97.2%',
      furtherStudy: '国内深造约35%，国外深造约15%',
      topEmployers: ['华为', '腾讯', '字节跳动', '阿里巴巴', '湖北省选调', '中科院'],
      averageSalary: '应届本科约14-25万/年，硕士约22-38万/年',
      destinations: '主要就业城市：武汉、深圳、北京、上海、杭州'
    },
    majors: ['法学', '新闻学', '测绘工程', '计算机科学与技术', '经济学', '生物学'],
    stats: { undergraduateCount: 29000, graduateCount: 25000, internationalCount: 2800 }
  },
  {
    id: 'nankai', name: '南开大学', rank: 16, type: '综合', location: '天津',
    tags: ['985', '211', '双一流'],
    description: '南开大学是周恩来总理的母校，文理并重的综合性大学。化学、数学、历史学、经济学等基础学科实力深厚。学风严谨，学术传统优良。',
    website: 'https://www.nankai.edu.cn',
    campusLink: 'https://www.nankai.edu.cn/xywz/list.htm',
    socialLinks: { wechat: '南开大学' },
    graduateOutcomes: {
      employmentRate: '97.0%',
      furtherStudy: '国内深造约38%，国外深造约20%',
      topEmployers: ['华为', '腾讯', '阿里巴巴', '中科院', '天津市选调', '金融机构'],
      averageSalary: '应届本科约14-26万/年，硕士约22-38万/年',
      destinations: '主要就业城市：天津、北京、上海、深圳、杭州'
    },
    majors: ['化学', '数学与应用数学', '经济学', '金融学', '历史学', '工商管理'],
    stats: { undergraduateCount: 16000, graduateCount: 18000, internationalCount: 2000 }
  },
  { id: 'uestc', name: '电子科技大学', rank: 20, type: '理工', location: '成都', tags: ['985', '211', '双一流'], description: '电子科技大学是中国电子信息技术领域的顶尖高校。电子科学与技术、信息与通信工程排名全国前列。地处成都，就业前景好。毕业生在华为等企业极受欢迎。', website: 'https://www.uestc.edu.cn', campusLink: 'https://www.uestc.edu.cn/xywz/list.htm', socialLinks: { wechat: '电子科技大学' }, graduateOutcomes: { employmentRate: '97.8%', furtherStudy: '国内深造约38%，国外深造约12%', topEmployers: ['华为', '中兴通讯', '腾讯', '阿里巴巴', '中国电子科技集团', '字节跳动'], averageSalary: '应届本科约16-28万/年，硕士约25-42万/年', destinations: '主要就业城市：成都、深圳、北京、上海、杭州' }, majors: ['电子信息工程', '计算机科学与技术', '集成电路设计与集成系统', '网络空间安全', '人工智能', '通信工程'], stats: { undergraduateCount: 20000, graduateCount: 15000, internationalCount: 1200 } },
  {
    id: 'scu', name: '四川大学', rank: 22, type: '综合', location: '成都',
    tags: ['985', '211', '双一流'],
    description: '四川大学是西南地区综合实力最强的高校。华西医学中心（原华西医科大学）的口腔医学全国第一。文理工医全面发展，在西南地区影响力巨大。',
    website: 'https://www.scu.edu.cn',
    campusLink: 'https://www.scu.edu.cn/xywz/list.htm',
    socialLinks: { wechat: '四川大学' },
    graduateOutcomes: {
      employmentRate: '96.8%',
      furtherStudy: '国内深造约32%，国外深造约12%',
      topEmployers: ['华西医院', '华为', '四川大学华西医学中心', '腾讯', '国家电网', '四川省选调'],
      averageSalary: '应届本科约12-22万/年，硕士约20-35万/年',
      destinations: '主要就业城市：成都、重庆、深圳、北京、上海'
    },
    majors: ['口腔医学', '临床医学', '中国语言文学', '法学', '计算机科学与技术', '轻化工程'],
    stats: { undergraduateCount: 35000, graduateCount: 28000, internationalCount: 3000 }
  },
  {
    id: 'seu', name: '东南大学', rank: 23, type: '理工', location: '南京',
    tags: ['985', '211', '双一流'],
    description: '东南大学以工科为主，建筑、土木、电子、生医工程等学科实力突出。是"建筑老八校"之一，建筑学和土木工程全国领先。',
    website: 'https://www.seu.edu.cn',
    campusLink: 'https://www.seu.edu.cn/xywz/list.htm',
    socialLinks: { wechat: '东南大学' },
    graduateOutcomes: {
      employmentRate: '97.5%',
      furtherStudy: '国内深造约36%，国外深造约14%',
      topEmployers: ['华为', '中兴通讯', '中国建筑集团', '东南大学附属医院', '国家电网'],
      averageSalary: '应届本科约14-25万/年，硕士约23-38万/年'
    },
    majors: ['建筑学', '土木工程', '电子科学与技术', '生物医学工程', '计算机科学与技术', '交通运输'],
    stats: { undergraduateCount: 17000, graduateCount: 18000, internationalCount: 1500 }
  },
  {
    id: 'bnu', name: '北京师范大学', rank: 24, type: '师范', location: '北京',
    tags: ['985', '211', '双一流'],
    description: '北京师范大学是中国师范类大学的最高学府。教育学、心理学、地理学等学科全国领先。以培养教师和科研人才为己任，被誉为"人民教师的摇篮"。',
    website: 'https://www.bnu.edu.cn',
    campusLink: 'https://www.bnu.edu.cn/xywz/list.htm',
    socialLinks: { wechat: '北京师范大学' },
    graduateOutcomes: {
      employmentRate: '97.0%',
      furtherStudy: '国内深造约40%，国外深造约18%',
      topEmployers: ['北京市中小学', '高校和科研院所', '教育部', '腾讯', '华为'],
      averageSalary: '应届本科约12-20万/年，硕士约18-30万/年'
    },
    majors: ['教育学', '心理学', '地理科学', '中国语言文学', '数学与应用数学', '历史学'],
    stats: { undergraduateCount: 14000, graduateCount: 18000, internationalCount: 2000 }
  },
  {
    id: 'ecnu', name: '华东师范大学', rank: 28, type: '师范', location: '上海',
    tags: ['985', '211', '双一流'],
    description: '华东师范大学是上海地区的顶尖师范类大学，教育学、地理学、软件工程等学科实力强。地处上海，享有地理优势。',
    website: 'https://www.ecnu.edu.cn',
    campusLink: 'https://www.ecnu.edu.cn/xywz/list.htm',
    socialLinks: { wechat: '华东师范大学' },
    graduateOutcomes: {
      employmentRate: '97.2%',
      furtherStudy: '国内深造约35%，国外深造约16%',
      topEmployers: ['上海市中小学', '腾讯', '华为', '上海市选调', '高校和科研院所'],
      averageSalary: '应届本科约12-22万/年，硕士约18-32万/年'
    },
    majors: ['教育学', '心理学', '软件工程', '地理信息科学', '统计学', '中国语言文学'],
    stats: { undergraduateCount: 14000, graduateCount: 17000, internationalCount: 1800 }
  },
  {
    id: 'sufe', name: '上海财经大学', rank: 30, type: '财经', location: '上海',
    tags: ['211', '双一流'],
    description: '上海财经大学是中国财经类高校的翘楚。会计、金融、经济等专业就业极佳。地处上海金融中心，实习和就业资源丰富。',
    website: 'https://www.sufe.edu.cn',
    campusLink: 'https://www.sufe.edu.cn/xywz/list.htm',
    socialLinks: { wechat: '上海财经大学' },
    graduateOutcomes: {
      employmentRate: '97.8%',
      furtherStudy: '国内深造约30%，国外深造约22%',
      topEmployers: ['四大会计师事务所', '各大银行', '券商基金', '腾讯', '阿里巴巴', '上海市属企业'],
      averageSalary: '应届本科约16-28万/年，硕士约25-45万/年',
      destinations: '主要就业城市：上海、北京、深圳、杭州'
    },
    majors: ['会计学', '金融学', '经济学', '统计学', '财务管理', '国际经济与贸易'],
    stats: { undergraduateCount: 10000, graduateCount: 10000, internationalCount: 1200 }
  },
  {
    id: 'cufe', name: '中央财经大学', rank: 32, type: '财经', location: '北京',
    tags: ['211', '双一流'],
    description: '中央财经大学是财经类顶尖高校，有"中国财经管理专家的摇篮"之称。金融、会计、保险等专业实力强劲，校友在金融界影响力显著。',
    website: 'https://www.cufe.edu.cn',
    campusLink: 'https://www.cufe.edu.cn/xywz/list.htm',
    socialLinks: { wechat: '中央财经大学' },
    graduateOutcomes: {
      employmentRate: '97.5%',
      furtherStudy: '国内深造约30%，国外深造约20%',
      topEmployers: ['各大银行总行', '四大会计师事务所', '国家部委', '大型国企', '证券基金公司'],
      averageSalary: '应届本科约16-28万/年，硕士约24-42万/年'
    },
    majors: ['金融学', '会计学', '经济学', '保险学', '税收学', '工商管理'],
    stats: { undergraduateCount: 10000, graduateCount: 10000, internationalCount: 1000 }
  },
  {
    id: 'bupt', name: '北京邮电大学', rank: 35, type: '理工', location: '北京',
    tags: ['211', '双一流'],
    description: '北邮是中国信息通信领域的顶级学府。通信工程、计算机、网络安全等专业实力极强。毕业生在IT和通信行业备受青睐，被誉为"信息黄埔"。',
    website: 'https://www.bupt.edu.cn',
    campusLink: 'https://www.bupt.edu.cn/xywz/list.htm',
    socialLinks: { wechat: '北京邮电大学' },
    graduateOutcomes: {
      employmentRate: '98.0%',
      furtherStudy: '国内深造约35%，国外深造约15%',
      topEmployers: ['华为', '中国移动', '中国电信', '阿里巴巴', '腾讯', '字节跳动'],
      averageSalary: '应届本科约16-30万/年，硕士约25-45万/年'
    },
    majors: ['通信工程', '计算机科学与技术', '网络空间安全', '电子信息工程', '人工智能', '软件工程'],
    stats: { undergraduateCount: 14000, graduateCount: 12000, internationalCount: 1200 }
  },
  {
    id: 'xidian', name: '西安电子科技大学', rank: 40, type: '理工', location: '西安',
    tags: ['211', '双一流'],
    description: '西电是中国电子信息领域的重要基地。通信、雷达、密码学等国防特色学科强。在电子信息领域有"西军电"之称。',
    website: 'https://www.xidian.edu.cn',
    campusLink: 'https://www.xidian.edu.cn/xywz/list.htm',
    socialLinks: { wechat: '西安电子科技大学' },
    graduateOutcomes: {
      employmentRate: '97.5%',
      furtherStudy: '国内深造约32%，国外深造约8%',
      topEmployers: ['华为', '中兴通讯', '中国电子科技集团', '腾讯', '字节跳动', '中国航天科技集团'],
      averageSalary: '应届本科约14-25万/年，硕士约22-38万/年'
    },
    majors: ['通信工程', '集成电路设计与集成系统', '网络空间安全', '计算机科学与技术', '电子科学与技术', '人工智能'],
    stats: { undergraduateCount: 20000, graduateCount: 15000, internationalCount: 1000 }
  },
  {
    id: 'nwpu', name: '西北工业大学', rank: 42, type: '理工', location: '西安',
    tags: ['985', '211', '双一流'],
    description: '西工大是中国唯一同时发展航空、航天、航海工程教育和科研的大学。国防特色鲜明，在无人机、航空航天领域享有盛誉。',
    website: 'https://www.nwpu.edu.cn',
    campusLink: 'https://www.nwpu.edu.cn/xywz/list.htm',
    socialLinks: { wechat: '西北工业大学' },
    graduateOutcomes: {
      employmentRate: '97.0%',
      furtherStudy: '国内深造约40%，国外深造约10%',
      topEmployers: ['中国航空工业集团', '中国航天科技集团', '中国船舶集团', '华为', '中兴通讯'],
      averageSalary: '应届本科约13-23万/年，硕士约20-35万/年'
    },
    majors: ['航空航天工程', '材料科学与工程', '计算机科学与技术', '船舶与海洋工程', '自动化', '机械工程'],
    stats: { undergraduateCount: 18000, graduateCount: 18000, internationalCount: 1500 }
  },
  {
    id: 'cau', name: '中国农业大学', rank: 45, type: '农林', location: '北京',
    tags: ['985', '211', '双一流'],
    description: '中国农大是中国农业高等教育的最高学府。农学、生物学、食品科学等学科领先。为国家粮食安全和乡村振兴培养核心人才。',
    website: 'https://www.cau.edu.cn',
    campusLink: 'https://www.cau.edu.cn/xywz/list.htm',
    socialLinks: { wechat: '中国农业大学' },
    graduateOutcomes: {
      employmentRate: '96.5%',
      furtherStudy: '国内深造约40%，国外深造约12%',
      topEmployers: ['中科院', '农业农村部', '中粮集团', '先正达', '新希望集团', '北大荒集团'],
      averageSalary: '应届本科约10-18万/年，硕士约16-28万/年'
    },
    majors: ['农学', '动物医学', '食品科学与工程', '生物科学', '动物科学', '植物保护'],
    stats: { undergraduateCount: 15000, graduateCount: 16000, internationalCount: 1000 }
  },
  {
    id: 'cpu', name: '中国药科大学', rank: 48, type: '医药', location: '南京',
    tags: ['211', '双一流'],
    description: '中国药科大学是中国药学教育的最高学府。药学、中药学等专业全国领先。地处南京，是我国药学研究和人才培养的重要基地。',
    website: 'https://www.cpu.edu.cn',
    campusLink: 'https://www.cpu.edu.cn/xywz/list.htm',
    socialLinks: { wechat: '中国药科大学' },
    graduateOutcomes: {
      employmentRate: '96.8%',
      furtherStudy: '国内深造约35%，国外深造约12%',
      topEmployers: ['恒瑞医药', '药明康德', '复星医药', '正大天晴', '江苏省药监局', '中科院上海药物所'],
      averageSalary: '应届本科约10-20万/年，硕士约18-32万/年'
    },
    majors: ['药学', '中药学', '制药工程', '临床药学', '生物制药', '海洋药学'],
    stats: { undergraduateCount: 10000, graduateCount: 8000, internationalCount: 600 }
  },
  {
    id: 'bjut', name: '北京工业大学', rank: 55, type: '理工', location: '北京',
    tags: ['211', '双一流'],
    description: '北京工业大学是北京市属重点大学，工科实力均衡。土木、机械、材料等学科在北京市属高校中领先。',
    website: 'https://www.bjut.edu.cn',
    campusLink: 'https://www.bjut.edu.cn/xywz/list.htm',
    socialLinks: { wechat: '北京工业大学' },
    graduateOutcomes: {
      employmentRate: '96.5%',
      furtherStudy: '国内深造约30%',
      topEmployers: ['北京市属国企', '华为', '中国建筑集团', '北京奔驰'],
      averageSalary: '应届本科约10-18万/年，硕士约16-28万/年'
    },
    majors: ['机械工程', '土木工程', '计算机科学与技术', '材料科学与工程', '环境工程'],
    stats: { undergraduateCount: 14000, graduateCount: 10000, internationalCount: 800 }
  },
  {
    id: 'sustech', name: '南方科技大学', rank: 50, type: '综合', location: '深圳',
    tags: ['双一流'],
    description: '南方科技大学是深圳举全市之力创办的新型研究型大学。以理、工、医为主，快速崛起。国际化程度高，科研产出突出。',
    website: 'https://www.sustech.edu.cn',
    campusLink: 'https://www.sustech.edu.cn/xywz/list.htm',
    socialLinks: { wechat: '南方科技大学' },
    graduateOutcomes: {
      employmentRate: '97.0%',
      furtherStudy: '国内深造约35%，国外深造约25%',
      topEmployers: ['华为', '腾讯', '大疆', '中兴通讯', '深圳证券交易所', '中科院'],
      averageSalary: '应届本科约15-28万/年，硕士约25-40万/年'
    },
    majors: ['物理学', '化学', '生物科学', '计算机科学与技术', '材料科学与工程', '金融学'],
    stats: { undergraduateCount: 5000, graduateCount: 4000, internationalCount: 600 }
  },
  {
    id: 'szu', name: '深圳大学', rank: 56, type: '综合', location: '深圳',
    tags: ['双非'],
    description: '深圳大学伴随深圳经济特区成长，综合实力快速提升。计算机、电子信息、建筑学等专业发展迅猛。地处南山科技园核心区，就业资源优势明显。',
    website: 'https://www.szu.edu.cn',
    campusLink: 'https://www.szu.edu.cn/xywz/list.htm',
    socialLinks: { wechat: '深圳大学' },
    graduateOutcomes: {
      employmentRate: '96.0%',
      furtherStudy: '国内深造约20%，国外深造约10%',
      topEmployers: ['腾讯', '华为', '比亚迪', '中兴通讯', '深圳各区政府', '大疆'],
      averageSalary: '应届本科约12-22万/年，硕士约20-35万/年'
    },
    majors: ['计算机科学与技术', '电子信息工程', '建筑学', '经济学', '金融学', '法学'],
    stats: { undergraduateCount: 26000, graduateCount: 13000, internationalCount: 1500 }
  }
];

// 按排名排序
UNIVERSITIES.sort((a, b) => a.rank - b.rank);

var indexArrar = [
  {
    title: "仕馨月子会所（云山店）",
    text: "广州市白云区永平街丛云路382号（武警一中队旁）",
    show: true,
  },
  {
    title: "仕馨月子会所（越秀店）",
    text: "广州市越秀区人民中路408号大晟华厦（市妇婴医院旁)",
    show: false
  },
  {
    title: "仕馨月子会所（西关店）",
    text: "广州荔湾区龙津西路280号龙津华府E座",
    show: false
  },
  {
    title: "仕馨月子会所（萝岗店-子品牌犹若家）",
    text: "广州市罗岗区万达广场C1座11、15、20楼",
    show: false
  },
  {
    title: "仕馨月子会所（东莞店）",
    text: "广州市东莞市莞城区创业新村15座（老客运站对面）",
    show: false
  },
  {
    title: "仕馨月子会所（普宁店）",
    text: "普宁市普宁大道多年山路段新二中校区旁",
    show: false
  },
];

var deitel=[
  {
    title: "仕馨月子会所（云山店）",
    city: "广州市白云区",
    dz: "广州市白云区永平街丛云路382号",
    time: "8:00-23:00",
    tel: "4001801833"
  },
  {
    title: "仕馨月子会所（越秀店）",
    city: "广州市越秀区",
    dz: "广州市越秀区人民中路408号大晟华厦",
    time: "8:00-23:00",
    tel: "4001801833"
  },
  {
    title: "仕馨月子会所（西关店）",
    city: "广州市荔湾区",
    dz: "广州市荔湾区龙津西路280号龙津华府E座",
    time: "8:00-23:00",
    tel: "4001801833"
  },
  {
    title: "仕馨月子会所（萝岗店-子品牌犹若家）",
    city: "广州市罗岗区",
    dz: "广州市罗岗区万达广场C1座11、15、20楼",
    time: "8:00-23:00",
    tel: "4001801833"
  },
  {
    title: "仕馨月子会所（东莞店）",
    city: "东莞市莞城区",
    dz: "广州市东莞市莞城区创业新村15座（老客运站对面",
    time: "8:00-23:00",
    tel: "4001801833"
  },
  {
    title: "仕馨月子会所（普宁店）",
    city: "普宁市普宁大道",
    dz: "普宁市普宁大道多年山路段新二中校区旁",
    time: "8:00-23:00",
    tel: "4001801833"
  }
]
/*
var add=[
  {
    latitude: 23.220613,
    longitude: 113.301637,
    scale: 18,
    name: "广州市白云区永平街丛云路",
    address: "广州市白云区永平街丛云路"
  },
  {
    latitude: 23.220613,
    longitude: 113.301637,
    scale: 18,
    name: "广州市白云区永平街丛云路",
    address: "广州市白云区永平街丛云路"
  },
  {
    latitude: 23.220613,
    longitude: 113.301637,
    scale: 18,
    name: "广州市白云区永平街丛云路",
    address: "广州市白云区永平街丛云路"
  },
  {
    latitude: 23.220613,
    longitude: 113.301637,
    scale: 18,
    name: "广州市白云区永平街丛云路",
    address: "广州市白云区永平街丛云路"
  },
  {
    latitude: 23.220613,
    longitude: 113.301637,
    scale: 18,
    name: "广州市白云区永平街丛云路",
    address: "广州市白云区永平街丛云路"
  },
  {
    latitude: 23.220613,
    longitude: 113.301637,
    scale: 18,
    name: "广州市白云区永平街丛云路",
    address: "广州市白云区永平街丛云路"
  } 
]
*/
var detailed = [{
  title: "仕馨月子会所（云山店）",
  text: "广州市白云区",
  addr: "广州市白云区永平街丛云路382号",
  clock: "8:00-23:00",
  tel: "4001801833",
  latitude: 23.218927,
  longitude: 113.302066
}, {
  title: "仕馨月子会所（越秀店）",
  text: "广州市越秀区",
  addr: "广州市越秀区人民中路408号大晟华厦",
  clock: "8:00-23:00",
  tel: "4001801833",
  latitude: 23.124360,
  longitude: 113.254570
}, {
  title: "仕馨月子会所（西关店）",
  text: "广州市荔湾区",
  addr: "广州市荔湾区龙津西路280号龙津华府E座",
  clock: "8:00-23:00",
  tel: "4001801833",
  latitude: 23.123630,
  longitude: 113.240580
}, {
  title: "仕馨月子会所（萝岗店-子品牌优若家）",
  text: "广州市萝岗区",
  addr: "广州市萝岗区万达广场C1座",
  clock: "8:00-23:00",
  tel: "4001801833",
  latitude: 23.166600,
  longitude: 113.466630
}, {
  title: "仕馨月子会所（东莞店）",
  text: "东莞市莞城区",
  addr: "东莞市莞城区创业路15号",
  clock: "8:00-23:00",
  tel: "4001801833",
  latitude: 23.032742,
  longitude: 113.745060
}, {
  title: "仕馨月子会所（普宁店）",
  text: "普宁市普宁大道",
  addr: "普宁市普宁大道多年山路段",
  clock: "8:00-23:00",
  tel: "4001801833",
  latitude: 23.388270,
  longitude: 116.415613
  }
]

var imgSrc =
  [
    {
      prevview: [ //预览图 云山店 big图
        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_01.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_02.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_03.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_04.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_05.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_06.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_07.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_08.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/big/ys_09.jpg"
      ],
      imgPath: [ //samll图
        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_01.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_02.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_03.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_04.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_05.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_06.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_07.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_08.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/ysd/small/ys_09.jpg",
      ]
    },
    {
      prevview: [ //预览图 越秀店 big图
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_01.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_02.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_03.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_04.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_05.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_06.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_07.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_08.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/big/yuexiu_09.jpg"

      ],
      imgPath: [ //samll图
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_01.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_02.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_03.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_04.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_05.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_06.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_07.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_08.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/yuexiu/samll/yuexiu_09.jpg"
      ]
    },
    {
      prevview: [ //预览图 西关 big图
        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_01.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_02.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_03.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_04.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_05.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_06.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_07.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_08.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/big/xg_09.jpg"


      ],
      imgPath: [ //samll图
        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_01.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_02.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_03.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_04.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_05.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_06.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_07.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_08.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/xg/samll/xg_09.jpg"

      ]
    },
    {
      prevview: [ //预览图 萝岗店 big图
        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_01.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_02.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_03.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_04.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_05.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_06.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_07.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_08.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/big/lg_09.jpg"



      ],
      imgPath: [ //samll图
        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_01.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_02.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_03.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_04.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_05.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_06.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_07.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_08.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/lg/samll/lg_09.jpg",

      ]
    },
    {
      prevview: [ //预览图 东莞店 big图
        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_01.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_02.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_03.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_04.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_05.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_06.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_07.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_08.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/big/dg_09.jpg",



      ],
      imgPath: [ //samll图
        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_01.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_02.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_03.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_04.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_05.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_06.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_07.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_08.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/dg/samll/dg_09.jpg"
      ]
    },
    {
      prevview: [ //预览图 普宁店 big图
        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_01.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_02.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_03.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_04.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_05.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_06.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_07.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_08.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/big/pl_09.jpg"

      ],
      imgPath: [ //samll图
        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_01.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_02.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_03.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_04.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_05.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_06.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_07.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_08.jpg",
        "http://www.shixinyuezi.com/tg/yzImg/pl/samll/pl_09.jpg",
      ]
    }

  ]
module.exports={
  indexArrar: indexArrar,
  deitel: deitel,
  imgSrc:imgSrc,
  detailed: detailed   
}
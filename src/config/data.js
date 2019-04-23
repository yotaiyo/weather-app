const INPUT_DATA = [
  {
    'city_name': '稚内',
    'id': '011000'
  },
  {
    'city_name': '旭川',
    'id': '012010'
  },
  {
    'city_name': '留萌',
    'id': '012020'
  },
  {
    'city_name': '網走',
    'id': '013010'
  },
  {
    'city_name': '北見',
    'id': '013020'
  },
  {
    'city_name': '紋別',
    'id': '013030'
  },
  {
    'city_name': '根室',
    'id': '014010'
  },
  {
    'city_name': '釧路',
    'id': '014020'
  },
  {
    'city_name': '帯広',
    'id': '014030'
  },
  {
    'city_name': '室蘭',
    'id': '015010'
  },
  {
    'city_name': '浦河',
    'id': '015020'
  },
  {
    'city_name': '札幌',
    'id': '016010'
  },
  {
    'city_name': '岩見沢',
    'id': '016020'
  },
  {
    'city_name': '倶知安',
    'id': '016030'
  },
  {
    'city_name': '函館',
    'id': '017010'
  },
  {
    'city_name': '江差',
    'id': '017020'
  },
  {
    'city_name': '青森',
    'id': '020010'
  },
  {
    'city_name': 'むつ',
    'id': '020020'
  },
  {
    'city_name': '八戸',
    'id': '020030'
  },
  {
    'city_name': '盛岡',
    'id': '030010'
  },
  {
    'city_name': '宮古',
    'id': '030020'
  },
  {
    'city_name': '大船渡',
    'id': '030030'
  },
  {
    'city_name': '仙台',
    'id': '040010'
  },
  {
    'city_name': '白石',
    'id': '040020'
  },
  {
    'city_name': '秋田',
    'id': '050010'
  },
  {
    'city_name': '横手',
    'id': '050020'
  },
  {
    'city_name': '山形',
    'id': '060010'
  },
  {
    'city_name': '米沢',
    'id': '060020'
  },
  {
    'city_name': '酒田',
    'id': '060030'
  },
  {
    'city_name': '新庄',
    'id': '060040'
  },
  {
    'city_name': '福島',
    'id': '070010'
  },
  {
    'city_name': '小名浜',
    'id': '070020'
  },
  {
    'city_name': '若松',
    'id': '070030'
  },
  {
    'city_name': '水戸',
    'id': '080010'
  },
  {
    'city_name': '土浦',
    'id': '080020'
  },
  {
    'city_name': '宇都宮',
    'id': '090010'
  },
  {
    'city_name': '大田原',
    'id': '090020'
  },
  {
    'city_name': '前橋',
    'id': '100010'
  },
  {
    'city_name': 'みなかみ',
    'id': '100020'
  },
  {
    'city_name': 'さいたま',
    'id': '110010'
  },
  {
    'city_name': '熊谷',
    'id': '110020'
  },
  {
    'city_name': '秩父',
    'id': '110030'
  },
  {
    'city_name': '千葉',
    'id': '120010'
  },
  {
    'city_name': '銚子',
    'id': '120020'
  },
  {
    'city_name': '館山',
    'id': '120030'
  },
  {
    'city_name': '東京',
    'id': '130010'
  },
  {
    'city_name': '大島',
    'id': '130020'
  },
  {
    'city_name': '八丈島',
    'id': '130030'
  },
  {
    'city_name': '父島',
    'id': '130040'
  },
  {
    'city_name': '横浜',
    'id': '140010'
  },
  {
    'city_name': '小田原',
    'id': '140020'
  },
  {
    'city_name': '新潟',
    'id': '150010'
  },
  {
    'city_name': '長岡',
    'id': '150020'
  },
  {
    'city_name': '高田',
    'id': '150030'
  },
  {
    'city_name': '相川',
    'id': '150040'
  },
  {
    'city_name': '富山',
    'id': '160010'
  },
  {
    'city_name': '伏木',
    'id': '160020'
  },
  {
    'city_name': '金沢',
    'id': '170010'
  },
  {
    'city_name': '輪島',
    'id': '170020'
  },
  {
    'city_name': '福井',
    'id': '180010'
  },
  {
    'city_name': '敦賀',
    'id': '180020'
  },
  {
    'city_name': '甲府',
    'id': '190010'
  },
  {
    'city_name': '河口湖',
    'id': '190020'
  },
  {
    'city_name': '長野',
    'id': '200010'
  },
  {
    'city_name': '松本',
    'id': '200020'
  },
  {
    'city_name': '飯田',
    'id': '200030'
  },
  {
    'city_name': '岐阜',
    'id': '210010'
  },
  {
    'city_name': '高山',
    'id': '210020'
  },
  {
    'city_name': '静岡',
    'id': '220010'
  },
  {
    'city_name': '網代',
    'id': '220020'
  },
  {
    'city_name': '三島',
    'id': '220030'
  },
  {
    'city_name': '浜松',
    'id': '220040'
  },
  {
    'city_name': '名古屋',
    'id': '230010'
  },
  {
    'city_name': '豊橋',
    'id': '230020'
  },
  {
    'city_name': '津',
    'id': '240010'
  },
  {
    'city_name': '尾鷲',
    'id': '240020'
  },
  {
    'city_name': '大津',
    'id': '250010'
  },
  {
    'city_name': '彦根',
    'id': '250020'
  },
  {
    'city_name': '京都',
    'id': '260010'
  },
  {
    'city_name': '舞鶴',
    'id': '260020'
  },
  {
    'city_name': '大阪',
    'id': '270000'
  },
  {
    'city_name': '神戸',
    'id': '280010'
  },
  {
    'city_name': '豊岡',
    'id': '280020'
  },
  {
    'city_name': '奈良',
    'id': '290010'
  },
  {
    'city_name': '風屋',
    'id': '290020'
  },
  {
    'city_name': '和歌山',
    'id': '300010'
  },
  {
    'city_name': '潮岬',
    'id': '300020'
  },
  {
    'city_name': '鳥取',
    'id': '310010'
  },
  {
    'city_name': '米子',
    'id': '310020'
  },
  {
    'city_name': '松江',
    'id': '320010'
  },
  {
    'city_name': '浜田',
    'id': '320020'
  },
  {
    'city_name': '西郷',
    'id': '320030'
  },
  {
    'city_name': '岡山',
    'id': '330010'
  },
  {
    'city_name': '津山',
    'id': '330020'
  },
  {
    'city_name': '広島',
    'id': '340010'
  },
  {
    'city_name': '庄原',
    'id': '340020'
  },
  {
    'city_name': '下関',
    'id': '350010'
  },
  {
    'city_name': '山口',
    'id': '350020'
  },
  {
    'city_name': '柳井',
    'id': '350030'
  },
  {
    'city_name': '萩',
    'id': '350040'
  },
  {
    'city_name': '徳島',
    'id': '360010'
  },
  {
    'city_name': '日和佐',
    'id': '360020'
  },
  {
    'city_name': '高松',
    'id': '370000'
  },
  {
    'city_name': '松山',
    'id': '380010'
  },
  {
    'city_name': '新居浜',
    'id': '380020'
  },
  {
    'city_name': '宇和島',
    'id': '380030'
  },
  {
    'city_name': '高知',
    'id': '390010'
  },
  {
    'city_name': '室戸岬',
    'id': '390020'
  },
  {
    'city_name': '清水',
    'id': '390030'
  },
  {
    'city_name': '福岡',
    'id': '400010'
  },
  {
    'city_name': '八幡',
    'id': '400020'
  },
  {
    'city_name': '飯塚',
    'id': '400030'
  },
  {
    'city_name': '久留米',
    'id': '400040'
  },
  {
    'city_name': '佐賀',
    'id': '410010'
  },
  {
    'city_name': '伊万里',
    'id': '410020'
  },
  {
    'city_name': '長崎',
    'id': '420010'
  },
  {
    'city_name': '佐世保',
    'id': '420020'
  },
  {
    'city_name': '厳原',
    'id': '420030'
  },
  {
    'city_name': '福江',
    'id': '420040'
  },
  {
    'city_name': '熊本',
    'id': '430010'
  },
  {
    'city_name': '阿蘇乙姫',
    'id': '430020'
  },
  {
    'city_name': '牛深',
    'id': '430030'
  },
  {
    'city_name': '人吉',
    'id': '430040'
  },
  {
    'city_name': '大分',
    'id': '440010'
  },
  {
    'city_name': '中津',
    'id': '440020'
  },
  {
    'city_name': '日田',
    'id': '440030'
  },
  {
    'city_name': '佐伯',
    'id': '440040'
  },
  {
    'city_name': '宮崎',
    'id': '450010'
  },
  {
    'city_name': '延岡',
    'id': '450020'
  },
  {
    'city_name': '都城',
    'id': '450030'
  },
  {
    'city_name': '高千穂',
    'id': '450040'
  },
  {
    'city_name': '鹿児島',
    'id': '460010'
  },
  {
    'city_name': '鹿屋',
    'id': '460020'
  },
  {
    'city_name': '種子島',
    'id': '460030'
  },
  {
    'city_name': '名瀬',
    'id': '460040'
  },
  {
    'city_name': '那覇',
    'id': '471010'
  },
  {
    'city_name': '名護',
    'id': '471020'
  },
  {
    'city_name': '久米島',
    'id': '471030'
  },
  {
    'city_name': '南大東',
    'id': '472000'
  },
  {
    'city_name': '宮古島',
    'id': '473000'
  },
  {
    'city_name': '石垣島',
    'id': '474010'
  },
  {
    'city_name': '与那国島',
    'id': '474020'
  }
];
export default INPUT_DATA;
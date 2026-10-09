/*
  サッカースクールあきた｜クラスの空き状況（このファイルだけを書き換えれば、PCの表とスマホのカードの両方が変わります）

  status の書き方
    "ok"   … ○ 受付中
    "few"  … △ 残り◯名（left に人数を書く）
    "full" … × キャンセル待ち
  asof   … 最後に空き枠を更新した日（記録用。2026-10-09〜ページには見ている日の日付を表示するため、表示には使わない）
*/
window.SSA_CLASSES = {
  asof: "2026-10-07",
  venues: [
    {
      name: "秋田市会場",
      note: "主な会場：新屋運動広場・県営トレーニングセンター・シルバーエリア ほか",
      classes: [
        { name: "U10", target: "小2〜4", capacity: 14, slots: [
          { day: "水", time: "17:10–18:10", status: "ok" },
          { day: "木", time: "18:25–19:25", status: "full" },
          { day: "金", time: "17:10–18:10", status: "few", left: 1 }
        ]},
        { name: "U12", target: "小5・6", capacity: 16, slots: [
          { day: "水", time: "18:20–19:25", status: "full" },
          { day: "木", time: "19:40–20:45", status: "full" },
          { day: "金", time: "18:20–19:25", status: "few", left: 3 }
        ]},
        { name: "U15", target: "中1〜3", capacity: 18, slots: [
          { day: "水", time: "19:40–20:50", status: "full" },
          { day: "金", time: "19:40–20:50", status: "few", left: 2, note: "空き枠は中1・2のみ" }
        ]}
      ]
    },
    {
      name: "大仙市会場",
      note: "主な会場：ソラーレ・嶽ドーム・神岡体育館",
      classes: [
        { name: "U12", target: "小4〜6", capacity: 18, slots: [
          { day: "月", time: "18:15–19:25", status: "full" }
        ]},
        { name: "U15", target: "中1〜3", capacity: 18, slots: [
          { day: "月", time: "19:40–20:50", status: "full" }
        ]}
      ]
    }
  ]
};

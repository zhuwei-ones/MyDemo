const global = {
  punctuation: { period: "。" },
  error: {
    not_found: {
      msg1: "申し訳ございません。",
      msg2: "お探しのページが見つかりません。",
      button_text: "ONES について",
    },
    server_error: {
      msg1: "申し訳ございません。",
      msg2: "サーバー側に発生した問題によって、リクエストが処理されませんでした。",
      description:
        "ページを更新するか、ONES ホームページに戻ってもう一度お試しください。同じエラーが続く場合は、お気軽にお問い合わせください。",
      button_text: "ホームページへ戻る",
      link_text: "お問い合わせ",
    },
  },
  possible_destination: {
    title: "おすすめページ:",
    docs: { headtitle: "お役立ち資料", description: "ガイドブックを見る" },
    blog: { headtitle: "ブログ", description: "最新情報を確認" },
    pricing: { headtitle: "料金プラン", description: "料金について" },
    contact_us: { headtitle: "お問い合わせ", description: "相談はこちら" },
  },
  banner: { title: "ONESのパートナーになりましょう" },
  input: { placeholder: "メールアドレスを入力" },
  emailInput: { button: { text: "スタート" } },
  nav: {
    right: { demo: "デモを申し込む", login: "ログイン", start: "スタート" },
    productsText: "製品",
    priceText: "料金プラン",
    docText: "お役立ち資料",
    featuresText: "機能",
    comparisonText: "比較",
    contactUsText: "お問い合わせ",
    companyText: "企業情報",
    company: {
      about: { title: "ONES について" },
      partnerPrograms: { title: "パートナープログラム" },
      termsService: { title: "利用規約" },
      privacyPolicy: { title: "プライバシーポリシー" },
    },
    product: {
      ul: {
        project: {
          title: "ONES Project",
          des: "アジャイルチーム向けのプロジェクト管理プラットフォーム",
        },
        wiki: { title: "ONES Wiki", des: "ボーダレスにつながる" },
        testCase: {
          title: "ONES TestCase",
          des: "QAチームがより製品を出せるように",
        },
      },
    },
    resources: {
      docs: { title: "お役立ち資料", desc: "製品ガイド" },
      blog: {
        title: "ブログ",
        desc: "生産性向上、製品ヒント、アップデートなどの最新情報をご紹介します",
      },
    },
    features: {
      gantt: {
        title: "ガントチャート",
        desc: "ガントチャートで作業を計画・可視化",
      },
      worklogs: { title: "工数", desc: "工数管理で「人」と「作業」を見える化" },
      reporting: {
        title: "レポート",
        desc: "実用的な洞察によってより良い意思決定を行う",
      },
      automations: {
        title: "自動化",
        desc: "プロセスを加速化し、重複作業を避ける",
      },
    },
    comparison: { jira: { title: "vs Jira" }, monday: { title: "vs Monday" } },
  },
  footer: {
    name: "ONES",
    product: {
      title: "製品",
      project: "ONES Project",
      wiki: "ONES Wiki",
      testCase: "ONES TestCase",
    },
    resource: {
      title: "リソース",
      pricing: "料金プラン",
      docs: "お役立ち資料",
      blog: "ブログ",
      requestDemo: "デモを申し込む",
    },
    company: {
      title: "企業情報",
      aboutUs: "ONES について",
      partner: "パートナープログラム",
      service: "利用規約",
      privacy: "プライバシーポリシー",
    },
    features: {
      title: "機能",
      gantt: "ガントチャート",
      worklogs: "工数",
      reporting: "レポート",
      automations: "自動化",
    },
    comparison: { title: "比較", jira: "vs Jira", monday: "vs Monday" },
    copyright: { text: "© 2023 ONES. All rights reserved." },
  },
  journey: {
    prefixTitle: "ONES でプロダクトジャーニーを",
    suffixTitle: "スタートしましょう",
  },
  netError: { title: "何らかのエラーが発生しました。もう一度お試しください。" },
  text: { month: "month", months: "months" },
};

export default global;

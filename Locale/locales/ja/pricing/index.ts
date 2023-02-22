const pricing = {
  common: {
    bundle: { title: "バンドル" },
    products: { title: "製品" },
    title: "料金プラン",
    monthly: "月額",
    annually: "年額",
    button: { contact_us: "お問い合わせ", try_for_free: "無料トライアル" },
    text: {
      contact_us: "お問い合わせ",
      quote: "価格についてはお問い合わせください。",
    },
    billed_annually: "年額契約",
    billed_monthly: "月額契約",
    perMonth: "1 ユーザー/月",
    usd: "USD",
    popular_features: "人気の機能：",
    features: "機能：",
    structured_test_case: "構造化されたテストケース",
    test_plan: "テスト計画",
    test_executions: "テスト実行とトレーサビリティ",
    bulk_import: "テストケースの一括インポート＆エクスポート",
    filter: "フィルター",
    create_bugs_to_project: "プロジェクトにバグを報告",
    linked_project_sprint_version:
      " プロジェクト、スプリント、バージョンを関連付ける",
    structured_page_tree: "構造化されたページツリー",
    version_history: "バージョン履歴",
    permission: "ページとスペースの権限",
    template_library: "ライブラリーテンプレート",
    collaboration_page: "リアルタイムのコラボページ",
    share_n_lock_page: "ページの共有と非公開",
    import_n_export: "インポート/エクスポート",
    enterprise_scale_api: "エンタープライズ規模の API",
    enterprise_grade_plugins: "エンタープライズグレードのプラグイン",
    high_availability: "高可用性",
    dedicated_success_manager: "専任のサクセスマネージャー",
    multiple_teams: "複数チーム",
    audit_log: "監査ログ",
    enterprise_grade_security: "エンタープライズグレードのセキュリティ",
    add_on_professional_services: "プロフェッショナルサービス",
    cloud: "クラウド版",
    ones_project: "ONES Project",
    ones_wiki: "ONES Wiki",
    ones_testcase: "ONES TestCase",
    ones_suite: "ONES Suite",
    gantt: "ガントチャート",
    work_log: "ワークログ",
    table: {
      features: "機能",
      support: "サポート",
      admin: "管理とセキュリティ",
    },
    card: { features: "機能" },
    reporting: "レポーティング",
    automation: "自動化",
  },
  enterpriseBlock: {
    title: "企業向けプラン",
    desc: "プライベートクラウドに稼働します。高度なセキュリティ、コントロール、サポートが必要なグローバル企業に最適です。",
    plan: {
      server: { title: "オンプレミス版" },
      email: { desc1: "50 名のユーザーから利用可", desc2: "年間契約" },
      feature: { hide: "機能リストを縮小", show: "機能リストを展開" },
      feature_content: {
        projects: "プロジェクト",
        sprints: "スプリント",
        issues: "課題",
        bug_tracking: "バグ追跡",
        scrum_boards: "スクラムボード",
        views: "ボード&リスト&テーブルビュー",
        milestone: "マイルストーンと成果物",
        notification: "通知とリマインダーをカスタマイズ",
        download: "ファイルを一括ダウンロード",
        workflow: "カスタマイズ可能なワークフロー",
        dependency: "依存関係の管理",
        max1G: "最大 100 個、1G まで",
        max3G: "最大 100 個、3G まで",
      },
    },
  },
  bundle: {
    users: "ユーザー",
    feature_list: {
      project_sprints_issues: "プロジェクト、スプリント、課題",
      scrum_kanban_boards: "スクラムボードとカンバン",
      traceability: "テスト実行と追跡可能",
    },
  },
  doubt: {
    title: "よくあるご質問",
    question: {
      accept: "対応している支払い方法を教えてください。",
      member: "メンバーの追加や削除はどのように行われるのですか？",
      unsubscribe:
        "有料プランを解約するとどうなりますか？サブスクリプションを解約する方法は？",
      trial: "無料トライアルが終了するとどうなりますか？",
      refund: "返金ポリシーを教えてください。",
      remaining_license:
        " ライセンス数が不足している場合：年額契約のお客様は、私たちにお問い合わせください。",
      remaining_license_part2:
        " 追加購入サービスをご提供いたします。月額契約のお客様は、ライセンスを割り当てることができます。翌月の請求書に差額分をご請求いたします。",
      successor:
        "次回の請求サイクルのサブスクリプションを解約するか、請求日の前にサブスクリプションを再アクティブ化することができます。ご不明な点やご意見がございましたら、 <targetLink>お問い合わせ<targetLink> ください。",
      comments: " ください。",
      persistence:
        "サブスクリプションをキャンセルすると、次回の請求日以降、チームはデータの編集や追加ができなくなりますが、既存のデータを参照することができます。",
      please:
        "返金をご希望される場合は、<targetLink>お問い合わせ<targetLink> ください。",
      afterSales:
        "返金をご希望される場合は、<targetLink>お問い合わせ<targetLink> ください。",
    },
    answer: {
      accept:
        "お支払い方法は、クレジットカードがご利用いただけます。（MasterCard、Visa、American Express）",
      member:
        "各ユーザーの製品へのアクセス権を管理できます。未使用のライセンスがある場合、メンバーの追加やアクセス権の付与は、料金が発生しません。製品アクセス権を削除すると、次回の請求サイクルまでにライセンスアクセスは未使用のままとなります。",
      unsubscribe:
        "次回の請求サイクルのサブスクリプションを解約するか、請求日の前にサブスクリプションを再アクティブ化することができます。ご不明な点やご意見がございましたら、お問い合わせください。",
      trial:
        "無料トライアルが終了したら、データの編集や追加はできなくなりますが、既存のデータを参照することができます。",
      remaining_license:
        "ライセンス数の残りが不足している場合は弊社まで <targetLink>お問い合わせ<targetLink> ください。追加のライセンス購入を手配させていただきます。月額契約のお客様は、ライセンス数が不足していてもアクセス権を付与することはできます。その場合、翌月のお支払いに対して課金させていただきます。",
      remaining_license_part1: "弊社",
      remaining_license_part2:
        "までご連絡ください。追加のライセンス購入を手配させていただきます。月額契約のお客様は、ライセンス数が不足していてもアクセス権を付与することはできます。その場合、翌月のお支払いに対して課金させていただきます。",
    },
  },
};

export default pricing;

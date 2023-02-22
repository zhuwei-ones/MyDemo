const sign = {
  data: { error: { unknown: "データ送信失敗" } },
  title: "スタート",
  email: {
    label: "ビジネス用のEメールアドレス",
    placeholder: "name@company.com",
    errorTip: "有効なメールアドレスを入力してください。",
    noneErrorTip: "メールアドレスは必須です。",
    isExistErrorTip:
      "このメールアドレスで登録されたアカウントが存在します。ログインしてください。",
  },
  password: { label: "パスワード", placeholder: "8〜32文字" },
  name: {
    label: "氏名",
    errorTip: "名前は必須です。",
    placeholder: "佐藤 太郎",
  },
  signUp: {
    button: { label: "続く" },
    tip1: "サインアップにより、ONESの",
    tip2: "利用規約",
    tip3: "と",
    tip4: "プライバシーポリシー",
    tip5: "に同意します",
    belowText1: "すでにアカウントをお持ちですか？",
    belowText2: "ログイン",
    step2: {
      title: "メールをご確認ください",
      subTitle1: "6 桁の認証コードを",
      "subTitle1.suffix": " に送信しました",
      subTitle2: "15 分以内に入力してください。",
      inputLabel: "認証コード",
      inputPlaceholder: "6 桁の認証コードを入力してください",
      resendTip: "メールを受信していませんか？",
      resendText: "コードを再送信",
      resendIn: "再送信",
      withoutReceiveLabel: "メールが届かない場合は、",
      errorTip1:
        "認証コードの試行回数が上限に達しました。10分後にもう一度お試しください。",
      errorTip2:
        "認証コードの試行回数が上限に達しました。60秒後にもう一度お試しください。",
      contactUs: "<targetLink>お問い合わせ<targetLink>ください",
      submitLabel: "認証",
      codeTip1: "認証コードは必須です。",
      codeTip2: "6 桁の認証コードを入力してください。",
      codeTip3: "コードが無効です。確認してから、もう一度お試しください。",
      emailExpiredCodeTip:
        "コードの有効期限が切れました。新しいコードをリクエストしてください。",
      mobileSuccess: {
        title: "ONESアカウントが作成されました",
        des: "モバイルブラウザには対応していません。 パソコンでお試しください。",
      },
    },
  },
  loginMobile: {
    title: "モバイルブラウザには対応していません。 パソコンでお試しください。",
  },
};

export default sign;

const sign = {
  data: { error: { unknown: "data submission failed" } },
  title: "Get started",
  email: {
    label: "Work email",
    placeholder: "name@company.com",
    errorTip: "Please enter a valid email address.",
    noneErrorTip: "Work email required!",
    isExistErrorTip: "Email already taken, please log in to continue.",
  },
  password: { label: "Password", placeholder: "8-32 characters" },
  name: { label: "Name", errorTip: "Name required!", placeholder: "Alex Doe" },
  signUp: {
    button: { label: "Continue" },
    tip1: "By signing up, I agree to the ONES",
    tip2: "Terms of Service",
    tip3: "and",
    tip4: "Privacy Policy",
    tip5: "",
    belowText1: "Already have an account?",
    belowText2: "Log in",
    step2: {
      title: "Check your email",
      subTitle1: "A 6-digit code was sent to",
      subTitle2: "Enter it within 15 minutes.",
      inputLabel: "Verification code",
      inputPlaceholder: "Enter the 6-digit code",
      resendTip: "Not seeing the email?",
      resendText: "Resend code",
      resendIn: "Resend in",
      withoutReceiveLabel: "If you still haven’t received the email, please",
      errorTip1:
        "Too many attempts to generate an email verification code. Please wait 10 minutes.",
      errorTip2:
        "Too many attempts to generate an email verification code. Please wait 60 seconds.",
      contactUs: "<targetLink>contact us<targetLink>",
      submitLabel: "Verify",
      codeTip1: "Verification code required!",
      codeTip2: "The verification code should be 6 digits.",
      codeTip3: "Invalid code. Please check the code and try again.",
      emailExpiredCodeTip:
        "This code has expired. Please request another code.",
      mobileSuccess: {
        title: "ONES account created",
        des: "Mobile browser is not supported.  Please try ONES on your PC.",
      },
    },
  },
  loginMobile: {
    title: "Mobile browser is not supported. Please try ONES on your PC.",
  },
};

export default sign;

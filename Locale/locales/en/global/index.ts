const global = {
  punctuation: { period: "." },
  error: {
    not_found: {
      msg1: "Whoops,",
      msg2: "we couldn't find what you are looking for.",
      button_text: "Learn about ONES",
    },
    server_error: {
      msg1: "Whoops,",
      msg2: "looks like server failed to load your request.",
      description:
        "Try refreshing the page, or going ONES homepage and attempting the action again. If this continous happening, please contact us for help.",
      button_text: "Back to homepage",
      link_text: "Contact us",
    },
  },
  possible_destination: {
    title: "Or you may have been looking for the following:",
    docs: { headtitle: "Docs", description: "Get help with guides" },
    blog: { headtitle: "Blog", description: "Learn about our thoughts" },
    pricing: { headtitle: "Pricing", description: "Explore pricing plans" },
    contact_us: { headtitle: "Contact us", description: "Ask a question" },
  },
  banner: { title: "Partner with ONES" },
  input: { placeholder: "Enter your work email" },
  emailInput: { button: { text: "Get started" } },
  nav: {
    right: { demo: "Request demo", login: "Log in", start: "Get started" },
    productsText: "Products",
    priceText: "Pricing",
    docText: "Docs",
    featuresText: "Features",
    comparisonText: "Comparison",
    contactUsText: "Contact us",
    companyText: "Company",
    company: {
      about: { title: "About us" },
      partnerPrograms: { title: "Partner programs" },
      termsService: { title: "Terms of Service" },
      privacyPolicy: { title: "Privacy Policy" },
    },
    product: {
      ul: {
        project: {
          title: "ONES Project",
          des: "A project platform built for agile teams",
        },
        wiki: { title: "ONES Wiki", des: "Connect without silos" },
        testCase: {
          title: "ONES TestCase",
          des: "Enable QA teams to deliver better products",
        },
      },
    },
    resources: {
      docs: { title: "Docs", desc: "Guides to all products" },
      blog: {
        title: "Blog",
        desc: "Explore the latest on productivity, product tips, updates, and more",
      },
    },
    features: {
      gantt: {
        title: "Gantt",
        desc: "Plan and visualize all the work on Gantt",
      },
      worklogs: {
        title: "Worklogs",
        desc: "Time management across people and work",
      },
      reporting: {
        title: "Reporting",
        desc: "Get actionable insights and make better decisions",
      },
      automations: {
        title: "Automations",
        desc: "Speed up work process and leave repetitive work behind",
      },
    },
    comparison: { jira: { title: "vs Jira" }, monday: { title: "vs Monday" } },
  },
  footer: {
    name: "ONES",
    product: {
      title: "Products",
      project: "ONES Project",
      wiki: "ONES Wiki",
      testCase: "ONES TestCase",
    },
    resource: {
      title: "Resources",
      pricing: "Pricing",
      docs: "Docs",
      blog: "Blog",
      requestDemo: "Request demo",
    },
    company: {
      title: "Company",
      aboutUs: "About us",
      partner: "Partner programs",
      service: "Terms of Service",
      privacy: "Privacy Policy",
    },
    features: {
      title: "Features",
      gantt: "Gantt",
      worklogs: "Worklogs",
      reporting: "Reporting",
      automations: "Automations",
    },
    comparison: { title: "Comparison", jira: "vs Jira", monday: "vs Monday" },
    copyright: { text: "© 2023 ONES. All rights reserved." },
  },
  journey: {
    prefixTitle: "Start your product",
    suffixTitle: "journey at ONES",
  },
  netError: { title: "Something went wrong. Please try again." },
  text: { month: "month", months: "months" },
};

export default global;

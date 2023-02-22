import baseComponent from "./baseComponent";
import global from "./global";
import head from "./head";
import home from "./home";
import pricing from "./pricing";
import priceStage from "./priceStage";
import project from "./products/project";
import testCase from "./products/testCase";
import wiki from "./products/wiki";
import sign from "./sign";
import testCase from "./testCase";
import wiki from "./wiki";
import common from "./company/common";
import partner from "./company/partner";
import about from "./company/about";
import gantt from "./features/gantt";
import worklogs from "./features/worklogs";
import reporting from "./features/reporting";
import automations from "./features/automations";
import jira from "./landingPage/jira";
import compareWithMonday from "./compare/compareWithMonday";
import compareWithJira from "./compare/compareWithJira";

const localeData = {
  baseComponent: baseComponent,
  global: global,
  head: head,
  home: home,
  pricing: pricing,
  priceStage: priceStage,
  project: project,
  testCase: testCase,
  wiki: wiki,
  sign: sign,
  testCase: testCase,
  wiki: wiki,
  common: common,
  partner: partner,
  about: about,
  gantt: gantt,
  worklogs: worklogs,
  reporting: reporting,
  automations: automations,
  jira: jira,
  compareWithMonday: compareWithMonday,
  compareWithJira: compareWithJira,
};

export default localeData;

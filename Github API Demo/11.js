/**
 * ./routes_mapping.json 由 main-build 动态生成, 在该文件被调用之前
 *
 */

const routesMapping = require('./routes_mapping');
const HOST = 'https://dev.myones.net';

const { LOGIN_ROOT, PROJECT_ROOT, WIKI_ROOT, OFFICIAL_ROOT, MOBILE_ROOT } = routesMapping;

module.exports = {
  initEnv: {
    defaultValue: {
      LOGIN_ROOT,
      PROJECT_ROOT,
      WIKI_ROOT,
      OFFICIAL_ROOT,
      MOBILE_ROOT: 'https://dev.myones.net/mobile/P6869',
      PURCHASE_ROOT: 'https://purchasedev.myones.net/master',
      needLoopActions: 'all',
      openPlan: 'true',
      enableCustomApiSync: 'false', // 开启API
      disableStatsCollect: 'true', // 禁用第三方数据收集，如神策、udesk
      // googleAccountSuppprt: 'private',
      // googleClientId: '1062585556333-l7ru5inu03tsvcb1k97v5rqlkjhplf31.apps.googleusercontent.com',
      // googleApiSrc: 'https://apis.google.com/js/platform.js?onload=init',
      hideInviteMember: 'false',
      hideHelpDocUrl: 'true', // 私有部署想要隐藏所有跳转外链的节点
      addMultiAccountsSupport: 'false',
      ENABLE_CHANGELOG_PROMPT: 'false',
      ES_REFRESH_INTERVAL: 2000, // milliseconds
      ENFORCE_STRONG_PASSWORD_POLICY: 'false', //禁用强密码
      // ENABLE_CHANGELOG_PROMPT: 'ENABLE_CHANGELOG_PROMPT',// changelog 弹窗
      CHANGELOG_EXPIRATION_TIME: '2019-12-23', //changelog 弹窗过期时间'
      ENABLE_PLUGIN: 'true',
      ENABLE_AUDIT_LOG: 'true',
      ENABLE_LOGIN_NOTICE: 'true',
      LEFT_NAV_UPDATED_TIPS_EXPIRATION_TIME: '2019-12-25', // 侧栏更新提示过期时间

      ONES_MINI_APP_AUTH_ADDRESS:
        'https://wechat-mini.myones.net/api/authorization/get_auth_login_page',
      // ONES_V2_ADDRESS: 'https://dev.ones.team/project/F1119O',
      // ONES_V3_ADDRESS: 'https://dev.ones.team/project/F1119',

      // hideInviteMember: 'true',
      // googleAccountSuppprt: 'public',
      // googleClientId: '1062585556333-l7ru5inu03tsvcb1k97v5rqlkjhplf31.apps.googleusercontent.com',
      // googleApiSrc: 'https://apis.google.com/js/platform.js?onload=init',

      // turn on dev sentry report
      // 关闭dev环境的sentry的上报渠道
      // LOGGER_URL: 'https://78a87b107abd47f0a88f9545c5046e24@sentry.io/1370766',
      // SENTRY_URL_PROJECT: 'https://78a87b107abd47f0a88f9545c5046e24@sentry.io/1370766',
      // SENTRY_URL_WIKI: 'https://78a87b107abd47f0a88f9545c5046e24@sentry.io/1370766',
      // SENTRY_URL_TESTCASE: 'https://78a87b107abd47f0a88f9545c5046e24@sentry.io/1370766',
      // SENTRY_URL_PIPELINE: 'https://78a87b107abd47f0a88f9545c5046e24@sentry.io/1370766',
      // SENTRY_URL_PLAN: 'https://78a87b107abd47f0a88f9545c5046e24@sentry.io/1370766',
      // SENTRY_URL_RICH_EDITOR: 'https://78a87b107abd47f0a88f9545c5046e24@sentry.io/1370766',
      SENTRY_REPORT_DEV: '', // '' or 'true'

      // value for oauth of gitlab and github
      gitlab_client_id: '8351463ebcc0cb7d7447bc846898216f4ba1ed2705dcc2cc067b753597b449db',
      github_client_id: '385a15378a83264b3aa7',
      scm_call_back_url: 'https://dev.myones.net/project/P3006',

      CHANGELOG_EXPIRATION_TIME: '2020-12-23', //ChangeLog弹窗过期时间
      ENABLE_CHANGELOG_PROMPT: 'false', // 开启ChangeLog弹窗

      confluence_backup_max_size: 1073741824, // confluence导入页面组，单个文件大小限制（默认1G=1073741824）
      jira_backup_max_size: 1073741824, // jira导入
      attachment_max_size: 1073741824, // 附件上传，单个文件大小限制（默认1G=1073741824）
      skipSentry: true,
      // 数据隔离开关，如果关闭则不在redux中存相关context数据
      ENABLE_DATA_ISOLATION_CONTEXT: 'false',
      // 根据context与此开关2重判断是否要隐藏部门与用户组
      HIDE_USER_GROUP_AND_DEPT_WITH_CONTEXT: 'false',
      // 通知是否显示「工单相关」tab
      // todo: 上车前改为false
      ENABLE_WORKOREDER_FORM_NOTICE: 'false',
      // 自动工作流开关
      enable_automation: 'true',
      enable_automation_free_tag: 'true',
      operatingRegion: 'cn', //登录前运营标识, 登录后会被EnvConfig.setGlobalEnv('operatingRegion',xxx)覆写
      ENABLE_NPS_COLLECT: 'false',
    },

    validKeys: {
      // ENFORCE_STRONG_PASSWORD_POLICY: 'ENFORCE_STRONG_PASSWORD_POLICY',
      // googleAccountSuppprt: 'googleAccountSuppprt',
      // googleClientId: 'googleClientId',
      // googleApiSrc: 'google  ApiSrc',
      // hideInviteMember: 'hideInviteMember',
      // addMultiAccountsSupport: 'addMultiAccountsSupport',

      ONES_MINI_APP_AUTH_ADDRESS: 'ONES_MINI_APP_AUTH_ADDRESS',

      enableCustomApiSync: 'enableCustomApiSync',

      ckeditorVersion: 'ckeditorVersion',
      googleAccountSuppprt: 'googleAccountSuppprt',
      googleClientId: 'googleClientId',
      googleApiSrc: 'googleApiSrc',
      hideInviteMember: 'hideInviteMember',
      hideHelpDocUrl: 'hideHelpDocUrl', // 私有部署想要隐藏所有跳转外链的节点
      addMultiAccountsSupport: 'addMultiAccountsSupport',
      ES_REFRESH_INTERVAL: 'ES_REFRESH_INTERVAL', // es refresh interval (milliseconds)
      openPlan: 'openPlan',
      ENFORCE_STRONG_PASSWORD_POLICY: 'ENFORCE_STRONG_PASSWORD_POLICY',
      ENABLE_CHANGELOG_PROMPT: 'ENABLE_CHANGELOG_PROMPT',
      CHANGELOG_EXPIRATION_TIME: 'CHANGELOG_EXPIRATION_TIME',
      LEFT_NAV_UPDATED_TIPS_EXPIRATION_TIME: 'LEFT_NAV_UPDATED_TIPS_EXPIRATION_TIME',
      ENABLE_PLUGIN: 'ENABLE_PLUGIN',
      ENABLE_AUDIT_LOG: 'ENABLE_AUDIT_LOG',
      ENABLE_LOGIN_NOTICE: 'ENABLE_LOGIN_NOTICE',

      //  oauth for devops github and gitlab
      gitlab_client_id: 'gitlab_client_id',
      github_client_id: 'github_client_id',
      scm_call_back_url: 'scm_call_back_url',

      confluence_backup_max_size: 'confluence_backup_max_size', // confluence导入页面组，单个文件大小限制
      jira_backup_max_size: 'jira_backup_max_size', // jira导入单个文件大小限制
      attachment_max_size: 'attachment_max_size',
      ENABLE_DATA_ISOLATION_CONTEXT: 'ENABLE_DATA_ISOLATION_CONTEXT',
      HIDE_USER_GROUP_AND_DEPT_WITH_CONTEXT: 'HIDE_USER_GROUP_AND_DEPT_WITH_CONTEXT',
      ENABLE_WORKOREDER_FORM_NOTICE: 'ENABLE_WORKOREDER_FORM_NOTICE',
      enable_automation: 'enable_automation',
      enable_automation_free_tag: 'enable_automation_free_tag',
      operatingRegion: 'operatingRegion',
      ENABLE_NPS_COLLECT: 'ENABLE_NPS_COLLECT',
    },
  },

  copy: {
    'dest/lib/ckeditor': 'node_modules/@ones-ai/ckeditor-dev/dist/ckeditor',
  },

  sentry: {
    urlPrefix: `${HOST}${PROJECT_ROOT}scripts`,
    skipSentry: true,
  },
};

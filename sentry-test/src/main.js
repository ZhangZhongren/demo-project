import Vue from 'vue'
import App from './App.vue'


import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// Sentry.init({
//   Vue,
//   release: '2.0',
//   dsn: "http://7ab8678dea304273a29870a56c8da654@localhost:9000/4",
//   autoSessionTracking: true,
//   integrations: [
//     new Integrations.BrowserTracing(),
//   ],
//   // beforeSend(event) {
//   //   // Check if it is an exception, if so, show the report dialog
//   //   if (event.exception) {
//   //     Sentry.showReportDialog();
//   //   }
//   //   return event;
//   // },
//   tracesSampleRate: 2.0,
// });


// console.log(aaa)
new Vue({
  render: h => h(App),
}).$mount('#app')

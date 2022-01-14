import Vue from 'vue'
import App from './App.vue'


import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

function throttle(func, limit = 500) {
  let inThrottle; // 开关
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => {
        // 定时器用来进行保证在一定时间内开关的状态
        inThrottle = false;
      }, limit);
    }
  };
}
import { Message } from "element-ui";
console.log(Vue.prototype)
const myMessage = throttle(Message)
myMessage.error = throttle(Message.error)
myMessage.close = Message.close
myMessage.closeAll = Message.closeAll
myMessage.info = Message.info
myMessage.success = Message.success
myMessage.warning = Message.warning
Vue.prototype.$message = myMessage
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

import { Message } from "element-ui";


export const _err = (call, timeout = 500) => {
  let time = 0
  let isTip = false
  const clear = () => {
    clearInterval(time)
  }
  time = setInterval(() => {
    const dom = document.querySelector('.el-message--error')
    if (dom) {
      clear()
      isTip = true
    }
  }, 50)
  setTimeout(() => {
    clear()
    !isTip && call && call()
  }, timeout)
}
/**
 * 函数防抖
 * @param delay 节流秒 默认300毫秒
 * @returns 函数体
 */
export const debounce = (delay = 300) => {
  let timer: number | null = null

  return (cb: () => void) => {
    timer && window.clearTimeout(timer)
    timer = window.setTimeout(() => cb(), delay)
  }
}

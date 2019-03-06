export default function debounced(delay, func) {
  let timerId
  return function(...args) {
    if (timerId) {
      clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
      func(...args)
      timerId = null
    }, delay)
  }
}

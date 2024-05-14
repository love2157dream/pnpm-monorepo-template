// 弹窗提示
export const tips = (message, title = "提示") => {
  window.alert(`${title}: ${message}`)
}

// 加运算
export const addOperation = (a, b) => {
  window.alert(`1加2的结果是${a + b}`);
}

// 格式化金额
export const formatMoney = (money, symbol = "", decimals = 2) => {
  return (Math.round((parseFloat(money) + Number.EPSILON) * Math.pow(10, decimals)) / Math.pow(10, decimals)).toFixed(
    decimals
  )
  .replace(/\B(?=(\d{3})+\b)/g, ",")
  .replace(/^/, `${symbol}`)
};
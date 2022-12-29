/**
 * 生成随机字符串
 */
const randomString = () => {
    return Math.random().toString(36).slice(2)
}

/**
 * 生成随机颜色
 */
const randomColor = () => {
    return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')
}
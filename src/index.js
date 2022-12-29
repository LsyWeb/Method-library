/**
 * 生成随机字符串
 */
const randomString = () => {
    return Math.random().toString(36).slice(2)
}
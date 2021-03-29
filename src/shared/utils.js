export const debounce = (func, wait) => {
    let timeout

    return function execute() {
        const later = () => {
            clearTimeout(timeout)
            func()
        }

        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
    }
}

export const getDeviceType = () => {
    const ua = navigator.userAgent
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return true // 'tablet'
    }
    if (
        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
            ua
        )
    ) {
        return true // 'mobile'
    }
    return false // 'desktop'
}

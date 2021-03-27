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

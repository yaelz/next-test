export default {
    parseRuntime: movieRuntime => {
        const array = movieRuntime.split('h')
        const hours = array[0] + 'h';
        const minutes = array[1] + 'in';
        return `${hours} ${minutes}`
    }
}
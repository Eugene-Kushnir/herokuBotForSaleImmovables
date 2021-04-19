module.exports = {
    logStart() {
        console.log('bot has been starteed')
    },

    getItemID(source){
        return source.substr(2, source.length)
    }
}
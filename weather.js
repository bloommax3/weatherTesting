const { DARKSKY_KEY, DARKSKY_URL } = process.env
const rp = require('request-promise')

module.exports.getWeather = async (lat, long) => {
    const url = `${DARKSKY_URL}/${DARKSKY_KEY}`
    return await rp(`${url}/${lat},${long}`)
}
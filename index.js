const postcss = require('postcss')
const fs = require('fs')
const functions = require('postcss-functions')
const path = require('path')

const IMAGESDIR = path.resolve(`${__dirname}/images`)

function isFile (absPile) {
  try {
    return fs.statSync(absPile).isFile()
  } catch (ex) {
    return false
  }
}

function equipPluginToPostcss (opts) {
  return postcss().use(functions({
    functions: {
      'equip-image': function (nameImage) {
        const regsImage = (/^['"]?([^'"]+)['"]?$/).exec(nameImage)

        if (regsImage === null) return Promise.reject(new Error('Value in equip-image is not valid.'))

        let [, imagePath] = regsImage

        if (path.extname(imagePath) === '') imagePath += '.svg'

        const absPile = path.resolve(`${IMAGESDIR}/${imagePath}`)

        if (isFile(absPile)) {
          return Promise.resolve(`"${absPile}"`)
        } else {
          return Promise.reject(new Error(`File "${absPile}" not exists.`))
        }
      }
    }
  }))
}

module.exports = postcss.plugin('equip-resources-basestyles', equipPluginToPostcss)

module.exports.images = IMAGESDIR

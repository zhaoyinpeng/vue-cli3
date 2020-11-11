function FileListPlugin(options) {}

FileListPlugin.prototype.apply = function(compiler) {
  compiler.plugin('done', function(compilation, callback) {
    for (var filename in compilation.assets) {
      console.log(filename)
    }
    console.log(123)
    callback()
  })
  compiler.plugin('emit', function(compilation, callback) {
    // Create a header string for the generated file:
    var filelist = 'npm run build后生成的文件列表如下:\n\n'

    // Loop through all compiled assets,
    // adding a new line item for each filename.
    for (var filename in compilation.assets) {
      filelist += ('- ' + filename + '\n')
    }
    debugger

    // Insert this list into the webpack build as a new file asset:
    compilation.assets['filelist.md'] = {
      source: function() {
        return filelist
      },
      size: function() {
        return filelist.length
      }
    }

    callback()
  })
}

module.exports = FileListPlugin

function loader(source) {
  console.log("loader -> source -> 2", source)
  return source
}

loader.pitch = function() {
  console.log('loader2 -> pitch');
  return 'console.log("pitch2 返回的")'
}

module.exports = loader
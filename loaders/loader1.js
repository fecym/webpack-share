function loader(source) {
  console.log("loader -> source -> 1", source)
  return source
}

loader.pitch = function() {
  console.log('loader1 -> pitch');
}

module.exports = loader
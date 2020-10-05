function loader(source) {
  console.log("loader -> source -> 3", source)
  return source
}

loader.pitch = function() {
  console.log('loader3 -> pitch');
}

module.exports = loader
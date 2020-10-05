function loader(source) {
  const callback = this.async();
  const consoleReg = /console\..+\(.+\)/g;
  const result = source.replace(consoleReg, '');
  callback(null, result);
}

module.exports = loader;

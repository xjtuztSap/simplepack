function domainLoader(source) {
  return source.replace("hello.com", "hey.com");
}

module.exports = domainLoader;

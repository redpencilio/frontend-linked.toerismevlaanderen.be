module.exports = function (/*environment*/) {
  return {
    buildSandboxGlobals(defaultGlobals) {
      return Object.assign({}, defaultGlobals, {
        BACKEND_URL: 'https://linked.toerismevlaanderen.be/',
      });
    }
  };
};

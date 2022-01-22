const util = require('util');
var yaml = require('js-yaml');
require('isomorphic-fetch');

async function toplev() {
    try {
      const resp = await fetch("https://raw.githubusercontent.com/dc25/sl/main/sample_document.yml");
      const contents = await resp.text();
      const data = await yaml.load(contents);

      console.log(util.inspect(data, false, 10, true));
    } catch (err) {
      console.log(err.stack || String(err));
    }
}


toplev();

'use strict';

const util = require('util');
require('isomorphic-fetch');


async function toplev() {
    try {
      const resp = await fetch("https://raw.githubusercontent.com/dc25/sl/main/sample_document.yml");
      const data = await resp.text();

      console.log(util.inspect(data, false, 10, true));
    } catch (err) {
      console.log(err.stack || String(err));
    }
}


toplev();

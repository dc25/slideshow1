var yaml = require('js-yaml');

export async function toplev(search: string) {
    try {
      const params = new URLSearchParams(search);  
      const encodedUrl = params.get("slidesURL");  
      if (encodedUrl === null) {
         throw "Missing argument 'slidesURL' in query params: \'" + search + "\'.";
      }

      const url = decodeURIComponent(encodedUrl);

      const resp = await fetch(url);
      const contents = await resp.text();
      const data = await yaml.load(contents);

      for (let i = 0; i < data["images"].length; i++) {
          console.log(data["images"][i])
      }
    } catch (err) {
      console.log(err.stack || String(err));
    }
}

// per: https://stackoverflow.com/questions/23296094/browserify-how-to-call-function-bundled-in-a-file-generated-through-browserify
// and: https://stackoverflow.com/questions/12709074/how-do-you-explicitly-set-a-new-property-on-window-in-typescript

(<any>window).toplev = toplev;

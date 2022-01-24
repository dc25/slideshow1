var yaml = require('js-yaml');

export async function readSlides(search: string, setHtmlCallback : (html:string) => any) {
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
      const root = data["root"] + "/";
      const ins = data["images"].reduce(
                                    (acc: string, slide : Object) => {
                                      const ipath = root + Object.keys(slide)[0];
                                      return acc + "<img src=\"" + ipath + "\" >" 
                                    }

                                    , "");
      setHtmlCallback(ins);

    } catch (err) {
      console.log(err.stack || String(err));
    }
}

// per: https://stackoverflow.com/questions/23296094/browserify-how-to-call-function-bundled-in-a-file-generated-through-browserify
// and: https://stackoverflow.com/questions/12709074/how-do-you-explicitly-set-a-new-property-on-window-in-typescript

(<any>window).readSlides = readSlides;

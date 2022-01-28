# NAME
    slideshow1

# SYNOPSIS
Read a yaml file containing a list of images and captions. Present those images as a browser friendly slideshow.

# BUILDING
## Setup
```bash
npm install -g browserify
npm install -g babel-minify
gem install haml
git clone <this repository>
cd <this repository>
``` 

## Build
```bash
cd src
make
```

## Publish

Make the contents of _site available via https (like any other website).

# USAGE
Create an index (yaml) file containing a list of images and captions as in the following example:

```yaml
root:
    'https://dc25.github.io/slideshow1'

images: !!omap
 - 20190503_070718.jpg: "R.I.P. Chewbacca"
 - 20190714_073604.jpg: "Don't look up."
 - IMG_20190905_155441.jpg: "Why is this here?"
```
Publicly serve the index file and the images.   If no root is specified in the yaml file, the images are expected to be found in the same place as the yaml file.  Otherwise, the images can be served from "root".

Access the index file as paraameter "slidesURL" .


# EXAMPLE

https://dc25.github.io/slideshow1/?slidesURL=https%3A%2F%2Fdc25.github.io%2Fsample_slides%2Fslides.yml



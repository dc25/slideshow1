SOURCES=show.ts slidelist.ts 
BUILD_DIR=js
ASSETS_DIR=../publish
JS=$(addprefix $(BUILD_DIR)/, $(SOURCES:.ts=.js))
JS_OUTPUT= $(ASSETS_DIR)/slideshow.js

default: $(JS_OUTPUT)

$(BUILD_DIR)/%.js: %.ts
	tsc -p .
        
$(JS_OUTPUT): $(JS)
	browserify -e $^ > $@

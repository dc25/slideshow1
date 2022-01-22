SOURCES= slideshow.ts 
BUILD_DIR=js
ASSETS_DIR=../assets/js
JS=$(addprefix $(BUILD_DIR)/, $(SOURCES:.ts=.js))
JS_OUTPUT= $(ASSETS_DIR)/sls.js

default: $(JS_OUTPUT)

$(BUILD_DIR)/%.js: %.ts
	tsc -p .
        
$(JS_OUTPUT): $(JS)
	browserify -e $^ > $@

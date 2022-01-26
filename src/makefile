PUBLISH=../_site

TS_INPUTS=show.ts slidelist.ts swipe.ts
NON_TS_INPUTS=index.html slideshow.css

JS_WORK_DIR=js
JS_WORK=$(addprefix $(JS_WORK_DIR)/, $(TS_INPUTS:.ts=.js))

JS_OUTPUT=$(addprefix $(PUBLISH)/, slideshow.js)
NON_TS_OUTPUTS=$(addprefix $(PUBLISH)/, $(NON_TS_INPUTS))

OUTPUTS=$(JS_OUTPUT) $(NON_TS_OUTPUTS)

default: $(OUTPUTS)

$(JS_WORK_DIR)/%.js: %.ts
	tsc -p .
        
$(JS_OUTPUT): $(JS_WORK)
	mkdir -p $(PUBLISH)
	browserify -e $^ > $@

$(PUBLISH)/%: %
	mkdir -p $(PUBLISH)
	cp $< $@

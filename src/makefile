PUBLISH=../_site

TS_INPUTS=show.ts slidelist.ts swipe.ts
HAML_INPUTS=index.haml
CP_INPUTS=slideshow.css

JS_WORK_DIR=js
JS_WORK=$(addprefix $(JS_WORK_DIR)/, $(TS_INPUTS:.ts=.js))

JS_OUTPUT=$(addprefix $(PUBLISH)/, slideshow.js)
CP_OUTPUTS=$(addprefix $(PUBLISH)/, $(CP_INPUTS))
HAML_OUTPUTS=$(addprefix $(PUBLISH)/, $(HAML_INPUTS:.haml=.html))

OUTPUTS=$(JS_OUTPUT) $(HAML_OUTPUTS) $(CP_OUTPUTS)

default: $(OUTPUTS)

$(JS_WORK_DIR)/%.js: %.ts
	tsc -p .
        
$(JS_OUTPUT): $(JS_WORK)
	mkdir -p $(PUBLISH)
	browserify -e $^ > $@

$(PUBLISH)/%.html: %.haml
	mkdir -p $(PUBLISH)
	haml $< > $@

$(PUBLISH)/%: %
	mkdir -p $(PUBLISH)
	cp $< $@

steal.config({
	map: {
		"*": {
			"jquery/jquery.js" : "jquery",
			"bootstrap/bootstrap.js" : "bootstrap",
			"bootstrap-fileupload/bootstrap-fileupload.js" : "bootstrap-fileupload",
			"can/util/util.js": "can/util/jquery/jquery.js"
		}
	},
	paths: {
		"jquery": "static/js/jquery.min.js",
		"bootstrap": "static/js/bootstrap.js",
		"bootstrap-fileupload" : "static/js/bootstrap-fileupload.js"
		/*"mootools/mootools.js" : "can/lib/mootools-core-1.4.3.js",
		"dojo/dojo.js" : "can/util/dojo/dojo-1.8.1.js",
		"yui/yui.js" : "can/lib/yui-3.7.3.js",
		"zepto/zepto.js" : "can/lib/zepto.1.0rc1.js"*/
	},
	shim : {
		jquery: {
			exports: "jQuery"
		},
	     bootstrap: { // A dependency example
		    'deps': ['jquery']
		    }
	},
	ext: {
		js: "js",
		css: "css",
		less: "steal/less/less.js",
	    mustache: "can/view/mustache/mustache.js"
	}
})

/*
steal.config({
  map: {
    "*": {
    "jquery/jquery.js": "jquery", // Map to path
    "bootstrap/bootstrap.js": "bootstrap",
    "can/util/util.js": "can/util/jquery/jquery.js"
    }
  },
  paths: {
    "jquery": "can/lib/jquery.1.8.3.js", // Path to jQuery
    "bootstrap": "lib/bootstrap.js"
    "yui/yui.js" : "can/lib/yui-3.7.3.js",
  },
  shim : {
    jquery: {
      exports: "jQuery"
    },
  bootstrap: { // A dependency example
    'deps': ['jquery']
    }
  },
  ext: {
    js: "js",
    css: "css",
    less: "steal/less/less.js",
    coffee: "steal/coffee/coffee.js",
    ejs: "can/view/ejs/ejs.js",
    mustache: "can/view/mustache/mustache.js"
   }
});
*/
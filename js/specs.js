var CLOSURE_UNCOMPILED_DEFINES = null;
if(typeof goog == "undefined") document.write('<script src="js/specs/goog/base.js"></script>');
document.write('<script src="js/specs/cljs_deps.js"></script>');
document.write('<script>if (typeof goog == "undefined") console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?");</script>');
document.write('<script>goog.require("devtools.preload");</script>');

document.write("<script>if (typeof goog != \"undefined\") { goog.require(\"figwheel.connect.test\"); }</script>");
document.write('<script>goog.require("cljs.test_dev");</script>');
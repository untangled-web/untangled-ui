var CLOSURE_UNCOMPILED_DEFINES = null;
if(typeof goog == "undefined") document.write('<script src="js/guide/goog/base.js"></script>');
document.write('<script src="js/guide/cljs_deps.js"></script>');
document.write('<script>if (typeof goog == "undefined") console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?");</script>');
document.write('<script>goog.require("devtools.preload");</script>');

document.write("<script>if (typeof goog != \"undefined\") { goog.require(\"devcards.core\"); }</script>");
document.write("<script>if (typeof goog != \"undefined\") { goog.require(\"figwheel.connect.guide\"); }</script>");
document.write('<script>goog.require("untangled.ui.guide_ui");</script>');
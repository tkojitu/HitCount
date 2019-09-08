import Container from "./Container.js";
import Range from "./Range.js";
import Safety from "./Safety.js";

function onLoad() {
	var c = new Container();
	c.define(
		"rng",
		function(c) {
			return new Range();
		});
	c.define(
		"sft",
		function(c) {
			return new Safety(c.geti("rng"));
		});
	c.geti("rng").ready();
	c.geti("sft").ready();
}

window.addEventListener("load", onLoad);

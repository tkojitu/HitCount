import Container from "./Container.js";
import Range from "./Range.js";
import Referee from "./Referee.js";
import Safety from "./Safety.js";
import Uniform from "./Uniform.js";

function onLoad() {
	var c = new Container();
	c.define(
		"rng",
		function(c) {
			return new Range(c.geti("ref"), c.geti("uni"));
		});
	c.define(
		"sft",
		function(c) {
			return new Safety(c.geti("rng"));
		});
	c.define(
		"ref",
		function(c) {
			return Referee;
		});
	c.define(
		"uni",
		function(c) {
			return Uniform;
		});
	c.geti("rng").ready();
	c.geti("sft").ready();
}

window.addEventListener("load", onLoad);

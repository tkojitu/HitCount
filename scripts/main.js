import Field from "./Field.js";
import Container from "./Container.js";

function onLoad() {
	var c = new Container();
	c.define(
		"fld",
		function(c) {
			return new Field();
		});
	c.geti("fld").ready();
}

window.addEventListener("load", onLoad);

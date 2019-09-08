export default class {
	constructor(rng) {
		this.rng = rng;
	}

	ready() {
		var elt = document.getElementById("safety");
		elt.appendChild(this.newButton());
	}

	newButton() {
		var btn = document.createElement("button");
		btn.innerHTML = "Add Referee";
		btn.className = "buttonSafety";
		var me = this;
		btn.onclick = function() {
			me.rng.newReferee();
		};
		return btn;
	}
}

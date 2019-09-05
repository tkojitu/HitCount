export default class {
	constructor(number) {
		this.number = number;
	}

	ready(elm) {
		var div = document.createElement("div");
		div.id = "div" + this.number;
		div.appendChild(this.createButtonHit());
		div.appendChild(this.createButtonLost());
		div.appendChild(this.createSpanPanel());
		elm.appendChild(div);
	}

	createButtonHit() {
		var btn = document.createElement("button");
		btn.innerHTML = "Hit";
		return btn;
	}

	createButtonLost() {
		var btn = document.createElement("button");
		btn.innerHTML = "Lost";
		return btn;
	}

	createSpanPanel() {
		var spn = document.createElement("span");
		spn.innerHTML = "0/0 0.0";
		return spn;
	}
}

export default class {
	constructor(number) {
		this.number = number;
		this.nhit = 0;
		this.nlost = 0;
	}

	ready(elm) {
		var div = document.createElement("div");
		div.id = "div" + this.number;
		div.appendChild(this.newButtonHit());
		div.appendChild(this.newButtonLost());
		div.appendChild(this.newSpanPanel());
		elm.appendChild(div);
		this.count();
	}

	newButtonHit() {
		var btn = document.createElement("button");
		btn.innerHTML = "Hit";
		btn.className = "buttonRange";
		var me = this;
		btn.onclick = function() {
			me.nhit++;
			me.count();
		};
		return btn;
	}

	newButtonLost() {
		var btn = document.createElement("button");
		btn.innerHTML = "Lost";
		btn.className = "buttonRange";
		var me = this;
		btn.onclick = function() {
			me.nlost++;
			me.count();
		};
		return btn;
	}

	newSpanPanel() {
		var spn = document.createElement("span");
		spn.id = "panel" + this.number;
		spn.className = "panelRange";
		return spn;
	}

	count() {
		var spn = document.getElementById("panel" + this.number);
		spn.innerHTML = this.write();
	}

	write() {
		return "" + this.nhit + "/" + this.nlost + " " + this.rate();
	}

	rate() {
		var total = this.nhit + this.nlost;
		if (total == 0) {
			return "0.0";
		}
		return this.nhit / total * 100.0;
	}
}

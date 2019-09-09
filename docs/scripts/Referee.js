export default class {
	constructor(number) {
		this.number = number;
		this.nhit = 0;
		this.nmiss = 0;
	}

	ready(elm) {
		var div = document.createElement("div");
		div.id = "div" + this.number;
		div.appendChild(this.newButtonHit());
		div.appendChild(this.newSpanSpace());
		div.appendChild(this.newButtonMiss());
		div.appendChild(this.newSpanSpace());
		div.appendChild(this.newSpanPanel());
		div.appendChild(this.newDivSpace());
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

	newSpanSpace() {
		var spn = document.createElement("span");
		spn.innerHTML = "&nbsp;";
		spn.className = "spanSpace";
		return spn;
	}

	newButtonMiss() {
		var btn = document.createElement("button");
		btn.innerHTML = "Miss";
		btn.className = "buttonRange";
		var me = this;
		btn.onclick = function() {
			me.nmiss++;
			me.count();
		};
		return btn;
	}

	newSpanPanel() {
		var spn = document.createElement("span");
		spn.id = "panel" + this.number;
		spn.className = "spanPanel";
		return spn;
	}

	newDivSpace() {
		var div = document.createElement("div");
		div.className = "divSpace";
		div.innerHTML = "&nbsp;";
		return div;
	}

	count() {
		var spn = document.getElementById("panel" + this.number);
		spn.innerHTML = this.write();
	}

	write() {
		return "" + this.nhit + "/" + this.total() + " " + this.rate();
	}

	total() {
		return this.nhit + this.nmiss;
	}

	rate() {
		var total = this.total();
		if (total == 0) {
			return "0.0";
		}
		return this.nhit / total * 100.0;
	}
}

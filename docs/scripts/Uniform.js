export default class {
	constructor(ref) {
		this.ref = ref;
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
	}

	newButtonHit() {
		var btn = document.createElement("button");
		btn.innerHTML = "Hit";
		btn.className = "buttonRange";
		var me = this;
		btn.onclick = function() {
			me.ref.hit();
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
			me.ref.miss();
		};
		return btn;
	}

	newSpanPanel() {
		var spn = document.createElement("span");
		spn.id = this.getIdSpan();
		spn.className = "spanPanel";
		return spn;
	}

	getIdSpan() {
		return "panel" + this.ref.getNumber();
	}

	newDivSpace() {
		var div = document.createElement("div");
		div.className = "divSpace";
		div.innerHTML = "&nbsp;";
		return div;
	}

	write(nhit, total, rate) {
		var spn = document.getElementById(this.getIdSpan());
		spn.innerHTML = "" + nhit + "/" + total + " " + rate.toFixed(2);
	}
}

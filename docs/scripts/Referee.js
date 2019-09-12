import Uniform from "./Uniform.js";

export default class {
	constructor(number) {
		this.number = number;
		this.uni = new Uniform(this);
		this.nhit = 0;
		this.nmiss = 0;
	}

	getNumber() {
		return this.number;
	}

	ready(elm) {
		this.uni.ready(elm);
		this.count();
	}

	hit() {
		this.nhit++;
		this.count();
	}

	miss() {
		this.nmiss++;
		this.count();
	}

	count() {
		this.uni.write(this.nhit, this.total(), this.rate());
	}

	total() {
		return this.nhit + this.nmiss;
	}

	rate() {
		var total = this.total();
		if (total == 0) {
			return 0;
		}
		return this.nhit / total * 100.0;
	}
}

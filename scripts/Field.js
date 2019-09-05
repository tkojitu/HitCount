import Referee from "./Referee.js";

export default class {
	constructor() {
		this.referees = [];
	}

	ready() {
		var ref = new Referee(0);
		ref.ready(document.getElementById("field"));
		this.referees.push(ref);
	}
}

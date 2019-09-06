import Referee from "./Referee.js";

export default class {
	constructor() {
		this.referees = [];
	}

	ready() {
		this.newReferee();
	}

	newReferee() {
		var ref = new Referee(this.referees.length);
		ref.ready(document.getElementById("field"));
		this.referees.push(ref);
	}
}

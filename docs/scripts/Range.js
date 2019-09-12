export default class {
	constructor(classRef, classUni) {
		this.classRef = classRef;
		this.classUni = classUni;
		this.referees = [];
	}

	ready() {
		this.newReferee();
	}

	newReferee() {
		var ref = new this.classRef(this.referees.length, this.classUni);
		ref.ready(document.getElementById("field"));
		this.referees.push(ref);
	}
}

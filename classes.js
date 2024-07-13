class Player {
	constructor() {
		this.inventory = new Map();
	}
}

class Room {
	constructor(north, east, south, west, inventory, description) {
		this.exits = new Map();
		this.exits.set('N', north);
		this.exits.set('E', east);
		this.exits.set('S', south);
		this.exits.set('W', west);

		this.inventory = inventory;
		this.description = description;
	}

	function getDescription() {
		return this.description;
	}
}
async function renderText(text, mode='default') {
	const textDiv = document.querySelector("#text-body");
	const p = document.createElement('p');
	switch (mode){
		case 'input':
			p.id = 'user-input';
			break;
		case 'warning':
			p.id = 'warning';
			break;
		default:
			break;
	}

	textDiv.appendChild(p);
	var t = "";
	for (let i = 0; i < text.length; i++) {
		t += text.charAt(i);
	  	p.textContent = t;
	  	await sleep(40);
	}
	await sleep(100);
}

async function parseInput() {
	if (event.keyCode == 13) {
    	var input = document.getElementById("cli");
    	if(!input.readOnly) {
    		const command = input.value;
	    	input.value = "";
	    	input.readOnly = true;
			renderText(command, 'input').then(async () => {
				switch(command){
					case 'start':
						//Create Labyrinth
						//Create Player
						//Create Minotaurus
						break;
					case 'go':
						break;
					case 'take':
						break;
					case 'use':
						break;
					case 'show':
						break;
					case 'save':
						break;
					default:
						await renderText('That was not a valid input!', 'warning');
						break;
				}
				
			}).then(() => {
				input.readOnly = false;
			});
    	}
    }
}

document.addEventListener('DOMContentLoaded', () => {
	renderText('You are lost in the Labyrinth of Minos...', 'warning').then(() => {
		renderText("Type 'start' to begin exploring.");
	});
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
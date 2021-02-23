function getTime() {
	const tensHours = document.querySelector('.tens-hours');
	const unitsHours = document.querySelector('.units-hours');
	const tensMinutes = document.querySelector('.tens-minutes');
	const unitsMinutes = document.querySelector('.units-minutes');
	const tensSeconds = document.querySelector('.tens-seconds');
	const unitsSeconds = document.querySelector('.units-ceconds');

	let displayNumber = () => {
		toToDoubleNumberToString = (number) => number.toString().padStart(2, '0');
		const currentData = new Date();
		const hours = toToDoubleNumberToString(currentData.getHours());
		const minutes = toToDoubleNumberToString(currentData.getMinutes());
		const seconds = toToDoubleNumberToString(currentData.getSeconds());
		tensHours.textContent = hours[0];
		unitsHours.textContent = hours[1];
		tensMinutes.textContent = minutes[0];
		unitsMinutes.textContent = minutes[1];
		tensSeconds.textContent = seconds[0];
		unitsSeconds.textContent = seconds[1];
	};

	displayNumber();

	setInterval(displayNumber, 1000);
}

getTime();

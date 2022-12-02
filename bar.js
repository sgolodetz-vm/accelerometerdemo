export function printBar() {
	console.log("Bar");
}

export function getAccel() {
	DeviceMotionEvent.requestPermission().then(response => {
		if(response == 'granted') {
			console.log("Yes");
		}
		else {
			console.log("No");
		}
	});
}


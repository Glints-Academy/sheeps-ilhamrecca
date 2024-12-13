function warnTheSheep(queue) {
	let result = "";
	for (let i = 0; i < queue.length; i++) {
		if (queue[i] === "wolf") {
			let position = queue.length - 1 - i;
			result =
				position !== 0
					? "Oi! Sheep number " +
					  position +
					  "! You are about to be eaten by a wolf!"
					: "Pls go away and stop eating my sheep";
		}
	}
	return result;
	// console.log(queue.length);
}

// Test Function do not edit
function Test(fun, result) {
	console.log(fun === result);
}

// Test assertions
Test(
	warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]),
	"Oi! Sheep number 1! You are about to be eaten by a wolf!"
);
Test(
	warnTheSheep(["sheep", "sheep", "wolf"]),
	"Pls go away and stop eating my sheep"
);
Test(
	warnTheSheep(["sheep", "wolf", "sheep"]),
	"Oi! Sheep number 1! You are about to be eaten by a wolf!"
);
Test(
	warnTheSheep([
		"wolf",
		"sheep",
		"sheep",
		"sheep",
		"sheep",
		"sheep",
		"sheep",
	]),
	"Oi! Sheep number 6! You are about to be eaten by a wolf!"
);
warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep"]);

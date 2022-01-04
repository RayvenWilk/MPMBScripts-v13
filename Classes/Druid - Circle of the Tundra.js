var iFileName = "Druid - Circle of the Tundra [Nod].js"; 

SourceList["NodHB-CotT"] = {
	name : "Circle of the Tundra",
	abbreviation : "NodHB-Tundra",
	group : "Nod's Homebrew",
	date : "2021/03/20"
};

AddSubClass("druid", "circle of the tundra", {
	regExpSearch : /^(?=.*(druid|shaman))(?=.*circle)(?=.*tundra).*$/i,
	subname: "Circle of the Tundra",
	source: ["NodHB-CotT"],
	features: {
		"subclassfeature2": {
			name: "Circle Spells",
			source: ["NodHB-CotT"],
			minlevel: 2,
			description: desc ([
				"My link to the tundra infuses me with the ability to cast Ice Barrage and choose certain spells as druid spells. My Circle of the Tundra spells are always prepared, but don't count against the number of spells I can prepare"
			]),
			calcChanges : {
			spellList : [
			function(spList, spName, spType) {
				// don't add if this is not a class or a list of spells is already given
				if (!ClassList[spName] || spList.spells || spList.psionic) return;
				// if this is an 'extra spell', also test if it uses the class' spell list or not
				if (spType.indexOf("bonus") !== -1 && (spList.school || !spList["class"] || (spList["class"].indexOf(spName) === -1 && spName !== "fighter"))) return;
				spList.extraspells = spList.extraspells.concat(["ray of frost", "wall of ice"]);
			},
		]
	},
			spellcastingBonus: {
				name: "Circle Spells",
				spells: ["ice barrage"],
				selection : ["ice barrage"],
			},
			spellcastingExtra: ["hold person", "buffeting eddies", "sleet storm", "slow", "freedom of movement", "auroral winds", "hold monster", "control winds"]
		},
		"subclassfeature2.1" : {
			name : "Arctic Recovery",
			source: ["NodHB-CotT"],
			minlevel : 2,
			description : "\n   " + "After a short rest, I can recover a number of 5th-level or lower spell slots",
			additional : ["1 level spell slots", "1 level spell slots", "2 levels spell slots", "2 levels spell slots", "3 levels spell slots", "3 levels spell slots", "4 levels spell slots", "4 levels spell slots", "5 levels spell slots", "5 levels spell slots", "6 levels spell slots", "6 levels spell slots", "7 levels spell slots", "7 levels spell slots", "8 levels spell slots", "8 levels spell slots", "9 levels spell slots", "9 levels spell slots", "10 levels spell slots", "10 levels spell slots"],
			usages : 1,
			recovery : "long rest"
			},
		"subclassfeature6" : {
			name : "Tundral Respite",
			source: ["NodHB-CotT"],
			minlevel : 6,
			description: desc([
			"I can travel through nonmagical, difficult terrain without penalty and through nonmagical",
			"plants without being slowed or taking damage. When I start a short rest, I chose up to six",
			"creatures and one of them can remove one level of exhaustion at the end of that short rest"
			]),
			usages : 1,
			recovery : "long rest"
			},
		"subclassfeature10": {
			name: "Boreal Safeguard",
			source: ["NodHB-CotT"],
			minlevel: 10,
			description: desc([
				"As a bonus action, I can create a 30-ft radius aura of cool air that moves with me",
				"The aura gives resistance to cold and fire damage to creatures of my choice within it",
				"The aura lasts for 1 minute or until I am incapacitated or I die."
			]),
			action: ["bonus", ""],
			usages : "Proficiency Bonus per ",
			usagescalc : "event.value = Number(What('Proficiency Bonus'));",
			recovery: "long rest"
		},
		"subclassfeature14": {
			name: "Polar Succor",
			source: ["NodHB-CotT"],
			minlevel: 14,
			description: desc([
				"If I drop to 0 hp and don't die outright, I drop to 1 hp instead. I also gain a fly|swim|burrow",
				"speed equal to my walking speed for half my druid level in minutes. In addition, each",
				"creature of my choice within 30-ft that I can see takes 2d10 + Druid level cold dmg.",
			]),
			usages: 1,
			recovery: "long rest"
		}
	}
})
var iFileName = "hb_20200908_Back-alley_Doctor.js";
RequiredSheetVersion(13);

// Define the source
SourceList.HBBaD={
	name : "Back-alley Doctor Subclass",
	abbreviation : "HB:BaD",
	group : "Homebrew",
	url : "",
	date : "2020/09/08"
};

AddSubClass("rogue", "back-alley-doctor-hbbad", {
	regExpSearch : /^(?=.*(rogue|miscreant))(?=.*doctor).*$/i,
	subname : "Back-alley Doctor",
	source : ["HBBaD", 0],
	features : {
		"subclassfeature3" : {
			name : "Medical Training",
			source : ["HBBaD", 0],
			minlevel : 3,
			description : desc([
				"I gain proficiency with the Medicine skill and can use my Intelligence modifier for",
				"Medicine checks. In addition my proficiency bonus is doubled for Medicine checks"
				]),
			skills : ["Medicine", "full"],
			eval : "CurrentScriptFiles['Medicine (Int)'] = \"SkillsList.abilityScores[SkillsList.abbreviations.indexOf('Med')] = 'Int'; SkillsList.abilityScoresByAS[SkillsList.abbreviationsByAS.indexOf('Med')] = 'Int';\"; SkillsList.abilityScores[SkillsList.abbreviations.indexOf('Med')] = 'Int'; SkillsList.abilityScoresByAS[SkillsList.abbreviationsByAS.indexOf('Med')] = 'Int'; SetRichTextFields(false, true);",
			removeeval : "delete CurrentScriptFiles['Medicine (Int)']; SkillsList.abilityScores[SkillsList.abbreviations.indexOf('Med')] = 'Wis'; SkillsList.abilityScoresByAS[SkillsList.abbreviationsByAS.indexOf('Med')] = 'Wis'; SetRichTextFields(false, true);"
		},
		"subclassfeature3.1" : {
			name : "First Aid",
			source : ["HBBaD", 0],
			minlevel : 3,
			description : desc([
				"As an action, I can heal a creature I touch. I can choose to do this as a bonus action",
				"instead, which halves the amount healed"
			]),
			additional : levels.map(function (n) {
				return (n < 5 ? 1 : n < 11 ? 2 : n < 17 ? 3 : 4) + "d8";
			}),
			usages : "1 + Intelligence modifier per ",
			usagescalc : "event.value = Math.max(1 + What('Int Mod'), 1);",
			recovery : "long rest",
			action : [["action", ""], ["bonus action", " (halved)"]]
		},
		"subclassfeature9" : {
			name : "Medical Emergency",
			source : ["HBBaD", 0],
			minlevel : 9,
			description : desc([
				"As an action, I can resuscitate a creature I can touch that died within the last minute",
				"The creature returns to life with 1 hit point"
			]),
			usages : ["", "", "", "", "", "", "", "", 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
			recovery : "long rest",
			action : ["action", ""]
		},
		"subclassfeature9.1" : {
			name : "Surgical Strike",
			source : ["HBBaD", 0],
			minlevel : 9,
			description : desc([
				"I can add my Intelligence modifier to my attack rolls"
			]),
			calcChanges : {
				atkCalc : [
					function (fields, v, output) {
						if (classes.known.rogue && classes.known.rogue.level > 8 && !v.isSpell) {
							output.extraHit += What('Int Mod');
						}
					},
					"I can add my Int mod to my attack rolls."
				]
			}
		},
		"subclassfeature13" : {
			name : "Patch Up",
			source : ["HBBaD", 0],
			minlevel : 13,
			description : desc([
				"I can spend 10 minutes to heal up to 6 creatures (including myself) up to half their",
				"maximum hit points. If I spend these 10 minutes during a short rest each creature",
				"also gains temporary hit points equal to half my rogue level + my Intelligence modifier"
			]),
			additional : levels.map(function (n) {
				return (n < 13 ? "" : (Math.floor(n / 2) + What('Int Mod')) + " temp hp"); 
			}),
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature13.1" : {
			name : "Second Opinion",
			source : ["HBBaD", 0],
			minlevel : 13,
			description : desc([
				"Whenever an ally within 30 ft uses a healing ability, spell or item, as a reaction",
				"I can increase the amount healed to a single target by half, rounded up"
			]),
			action : ["reaction", ""]
		},
		"subclassfeature17" : {
			name : "Deadly Doctor",
			source : ["HBBaD", 0],
			minlevel : 17,
			description : desc([
				"Whenever I apply sneak attack, I can choose to use exploding dice, allowing me to",
				"roll an additional time whenever I roll the maximum for that damage die roll"
			])
		}
	}
});
/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:    
	Effect:     
	Content:	
	Code by:	rayvenwilk
	Date:		2021-11-18 (sheet 13.0.8)
*/

var iFileName = "Something[transcribed by rayvenwilk].js";

SourceList.HW = {
	name : "Humblewood",
	abbreviation : "HW",
	group : "Deck of Many",
	url : "https://hitpointpress.com/humblewood/"
};

SourceList["HW:TotSG"] = {
	name : "Humblewood: Tenders of the Scorched Grove",
	abbreviation : "HW:TotSG",
	group : "Deck of Many",
	url : "https://hitpointpress.com/humblewood/"
};

AddSubClass("druid", "circle of the warden", {
	regExpSearch : /^(?=.*(circle|druid))(?=.*warden).*$/i,
	subname : "Circle of the Warden",
	source : ["HW:TotSG", 8],
	features : {
		"subclassfeature2" : {
			name : "Heartbeat of the Land",
			source : ["TotSG", 8],
			minlevel : 2,
			description : desc(["I have double proficiency in Nature and Insight skills. I can commune for 10 minutes and learn severity of environmental threats, any aberrations, elementals, fey, or undead, or the general direction of the nearest portal to an elemental plane within 3 miles."]),
			skills : [["Nature", "full"], ["Insight", "full"]],
		},
		"subclassfeature2.1" : {
			name : "Shared Burden",
			source : ["TotSG", 9],
			minlevel : 2,
			description : desc([
				"When an ally within 30 feet takes cold, fire, lightning, or thunder damage, I can use a reaction to grant that creature to the damage dealt. I take the same amount of damage. As an action, I can remove up to 20 ft of adjacent spaces where such damage persists, taking 1d6 damage per 5-foot space removed. If the effect is caused by a spell, I take 1d6 per level of the spell per 5-foot space. All damage dealt through this is resisted by me.",
			]),
			action : [["reaction", " (when ally takes damage)"], ["action", " (suppress AoE)"]]
		},
		"subclassfeature6" : {
			name : "Sympathetic Shield",
			source : ["TotSG", 9],
			minlevel : 6,
			description : desc([
				"As an action, I can expend one Wild Shape to shield myself or an ally, granting +2 AC and 1d10 temporary HP. At 14th level, the armor deals 1d8 of magical bludgeoning, piercing, or slashing damage (my choice) when taking damage from a creature within 5 feet."
			]),
			action : ["action", ""]
		},
		"subclassfeature10" : {
			name : "Aura of Calm",
			source : ["TotSG", 9],
			minlevel : 10,
			description : desc([
				"When I or an ally within 10 feet is healed from a spell, that spell heals extra equal to half my druid level. Plants that aren't creature negate difficult terrain and grant advantage against difficult terrain-spells using plants."
			])
		},
		"subclassfeature14" : {
			name : "Bond of Shelter",
			source : ["TotSG", 9],
			minlevel : 14,
			description : desc([
				"As an action, once per Long Rest, I create a 30 ft radius, 20 ft tall cylinder lasting 1 hour. Plants and natural elements defend me when I'm on the material or elemental planes, or plants sprout when I'm elsewhere. I can designate allies to be immune to the effect.\n - Creatures must succeed on a Charisma save to enter the cylinder. Planar travel into the cylinder fails.\n - Creatures have disadvantage on attack rolls against targets in the cylinder.\n - Creatures can't charm, frighten, or possess targets within the cylinder.\n - When a creature enters the area, it takes 5d10 magical bludgeoning damage from the animated nature within."
			]),
			action : ["action", ""],
			usages : 1,
			recovery : "long rest"
		}
	}
})
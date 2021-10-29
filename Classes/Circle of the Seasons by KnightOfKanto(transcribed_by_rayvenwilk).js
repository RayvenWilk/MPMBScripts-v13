/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:    Circle of the Seasons Subclasses
	Effect:     This script adds 4 subclasses to the Druid class
	Content:	The four seasons as druid subclasses by KnightOfKanto, located: https://www.gmbinder.com/share/-MhQoLJGXm-SqxbFXgLf
	Code by:	rayvenwilk
	Date:		2021-10-29 (sheet 13.0.8)
*/

var iFileName = "Circle of the Seasons by KnightOfKanto(transcribed_by_rayvenwilk).js";

SourceList["KoK"] = {
    name : "Knight of Kanto",
    abbreviation : "KoK",
    group : "Homebrew",
    url : "https://www.gmbinder.com/share/-MhQoLJGXm-SqxbFXgLf",
}

// Circle of Spring

AddSubClass("druid", "circle of spring",{
	regExpSearch : /^(?=.*(druid|shaman))(?=.*spring).*$/i,
	subname : "Circle of Spring",
	fullname : "Druid (Circle of Spring)",
	source : [["KoK", 1]],
	features : {
		"subclassfeature2" : {
			name : "Seasonal Circle",
			source : [["KoK", 1]],
			minlevel : 2,
			description : "\n   I learn the Shocking Grasp cantrip, it does not count against spells known.",
            spellcastingExtra : ["create or destroy water", "longstrider", "shatter", "healing spirit", "thunder step", "lightning bolt", "storm sphere", "control water", "dawn", "tree stride"],
			spellcastingBonus : {
				name : "Bonus Cantrip (Shocking Grasp)",
				spells : ["shocking grasp"],
				selection : ["shocking grasp"]
			}
		},
		"subclassfeature6" : {
			name : "Seasonal Spirit",
			source : [["KoK", 1]],
			minlevel : 6,
			description : "\n   As a Bonus Action I can expend a use of my Wild Shape for 10 min. My appearance changes to light green skin w/ flowers. \n   I gain a number of temp HP equal to 3 times my Druid level. The stat bonuses for my physical stats (Str,Dex, & Con) are doubled. I am under the effects of the Barkskin spell. And I deal an additional 2d6 Lightning dmg to spells/abilities.",
			action : ["bonus action", " (10min)"]
		},	
		"subclassfeature10" : {
			name : "Season's Might",
			source : [["KoK", 1]],
			minlevel : 10,
			description : "\n   While in my wild shape or Seasonal Spirit form I deal extra Lightning dmg equal to my Wis mod to all attacks & spells I make.",
		},
		"subclassfeature14" : {
			name : "Season's Wrath",
			source : [["KoK", 1]],
			minlevel : 14,
			description : "\n   I learn the spell Sunburst and can cast it once per long rest w/out using a spell slot.",
			usages : 1,
			recovery : "long rest",
			spellChanges : {
                "sunburst" : {
                    firstCol : "oncelr",
                    changes : "I can cast this spell once per long rest without using a spell slot."
                }
            }		
	    },
    },
}),

// Circle of Summer

AddSubClass("druid", "circle of summer",{
	regExpSearch : /^(?=.*(druid|shaman))(?=.*summer).*$/i,
	subname : "Circle of Summer",
	fullname : "Druid (Circle of Summer)",
	source : [["KoK", 1]],
	features : {
		"subclassfeature2" : {
			name : "Seasonal Circle",
			source : [["KoK", 1]],
			minlevel : 2,
			description : "\n   I learn the Firebolt cantrip, it does not count against spells known.",
            spellcastingExtra : ["burning hands", "entangle", "scorching ray", "dust devil", "daylight", "plant growth", "grasping vine", "guardian of nature", "insect plague", "immolation"],
			spellcastingBonus : {
				name : "Bonus Cantrip (Firebolt)",
				spells : ["firebolt"],
				selection : ["firebolt"]
			}
		},
		"subclassfeature6" : {
			name : "Seasonal Spirit",
			source : [["KoK", 1]],
			minlevel : 6,
			description : "\n   As a Bonus Action I can expend a use of my Wild Shape for 10 min. My appearance changes to dark green skin w/ leaves. \n   I gain a number of temp HP equal to 3 times my Druid level. The stat bonuses for my physical stats (Str,Dex, & Con) are doubled. I am under the effects of the Barkskin spell. And I deal an additional 2d6 Fire dmg to spells/abilities.",
			action : ["bonus action", " (10min)"]
		},	
		"subclassfeature10" : {
			name : "Season's Might",
			source : [["KoK", 1]],
			minlevel : 10,
			description : "\n   While in my wild shape or Seasonal Spirit form I deal extra Fire dmg equal to my Wis mod to all attacks & spells I make.",			
		},
		"subclassfeature14" : {
			name : "Season's Wrath",
			source : [["KoK", 1]],
			minlevel : 14,
			description : "\n   I learn the spell Incendiary Cloud and can cast it once per long rest w/out using a spell slot.",
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
                name : "Once per long rest",
                spells : ["incendiary cloud"],
                selection : ["incendiary cloud"],
                firstCol : "oncelr"
		    }, 
		}		
	}
}),

// Circle of Autumn

AddSubClass("druid", "circle of autumn",{
	regExpSearch : /^(?=.*(druid|shaman))(?=.*autumn|fall).*$/i,
	subname : "Circle of Autumn",
	fullname : "Druid (Circle of Autumn)",
	source : [["KoK", 1]],
    spellcastingExtra : ["thunderwave", "hail of thorns", "misty step", "barkskin", "vampiric touch", "wind wail", "blight", "conjure woodland beings", "far step", "destructive wave"],
	features : {
		"subclassfeature2" : {
			name : "Seasonal Circle",
			source : [["KoK", 1]],
			minlevel : 2,
			description : "\n   I learn the Chill Touch cantrip, it does not count against spells known.",
			spellcastingBonus : {
				name : "Bonus Cantrip (chill touch)",
				spells : ["chill touch"],
				selection : ["chill touch"]
			}
		},
		"subclassfeature6" : {
			name : "Seasonal Spirit",
			source : [["KoK", 1]],
			minlevel : 6,
			description : "\n   As a Bonus Action I can expend a use of my Wild Shape for 10 min. My appearance changes to bark-like skin w/ branches. \n   I gain a number of temp HP equal to 3 times my Druid level. The stat bonuses for my physical stats (Str,Dex, & Con) are doubled. I am under the effects of the Barkskin spell. And I deal an additional 2d6 Necrotic dmg to spells/abilities.",
			action : ["bonus action", " (10min)"]
		},	
		"subclassfeature10" : {
			name : "Season's Might",
			source : [["KoK", 1]],
			minlevel : 10,
			description : "\n   While in my wild shape or Seasonal Spirit form I deal extra Necrotic dmg equal to my Wis mod to all attacks & spells I make.",	
		},
		"subclassfeature14" : {
			name : "Season's Wrath",
			source : [["KoK", 1]],
			minlevel : 14,
			description : "\n   I learn the spell Abi-Dalzim's Horrid Wilting and can cast it once per long rest w/out using a spell slot.",
			usages : 1,
			recovery : "long rest",
			spellcastingBonus : {
                name : "Once per long rest",
                spells : ["abi-dalzim's horrid wilting"],
                selection : ["abi-dalzim's horrid wilting"],
                firstCol : "oncelr"
		    }
		}		
	}
}),

// Circle of Winter

AddSubClass("druid", "circle of winter",{
	regExpSearch : /^(?=.*(druid|shaman))(?=.*winter).*$/i,
	subname : "Circle of Winter",
	fullname : "Druid (Circle of Winter)",
	source : [["KoK", 1]],
    spellcastingExtra : ["armor of agathys", "frost fingers", "moonbeam", "snilloc's snowball storm", "erupting earth", "sleet storm", "stoneskin", "ice storm", "cone of cold", "control winds"],
	features : {
		"subclassfeature2" : {
			name : "Seasonal Circle",
			source : [["KoK", 1]],
			minlevel : 2,
			description : "\n   I learn the Frostbite cantrip, it does not count against spells known.",
			spellcastingBonus : {
				name : "Bonus Cantrip (Frostbite)",
				spells : ["frostbite"],
				selection : ["frostbite"]
			}
		},
		"subclassfeature6" : {
			name : "Seasonal Spirit",
			source : [["KoK", 1]],
			minlevel : 6,
			description : "\n   As a Bonus Action I can expend a use of my Wild Shape for 10 min. My appearance changes to pale blue skin w/ ice. \n   I gain a number of temp HP equal to 3 times my Druid level. The stat bonuses for my physical stats (Str,Dex, & Con) are doubled. I am under the effects of the Barkskin spell. And I deal an additional 2d6 Cold dmg to spells/abilities.",
			action : ["bonus action", " (10min)"]
		},		
		"subclassfeature10" : {
			name : "Season's Might",
			source : [["KoK", 1]],
			minlevel : 10,
			description : "\n   While in my wild shape or Seasonal Spirit form I deal extra Cold dmg equal to my Wis mod to all attacks & spells I make.",			
		},
		"subclassfeature14" : {
			name : "Season's Wrath",
			source : [["KoK", 1]],
			minlevel : 14,
			description : "\n   I learn the spell Earthquake and can cast it once per long rest w/out using a spell slot.",
			usages : 1,
			recovery : "long rest",
            spellChanges : {
                "earthquake" : {
                    firstCol : "oncelr",
                    changes : "I can cast this spell once per long rest without using a spell slot."
                }
            }
		}		
	}
})
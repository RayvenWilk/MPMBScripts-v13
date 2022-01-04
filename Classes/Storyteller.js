/*	-WHAT IS THIS?-
	The script featured here is made as an optional addition to "MPMB's Character Record Sheet" found at http://flapkan.com/mpmb/dmsguild
	You can add the content to the Character Sheet's functionality by adding the script below in the "Add Custom Script" dialogue.

	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, but you have to add the code in at once (i.e. copy all the code into a single, long file and copy that into the sheet).
	It is recommended to enter the code in a fresh sheet before adding any other information.
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script adds a class called "Storyteller" (v1) and the five subclasses for it: "Of Horror", "Of Romance", "Of Tragedy", "Of Comedy", and "of Heroic"
				
	Code by:	Raymond Perez & MorePurpleMoreBetter
	Class Created by: anonymous at https://www.dandwiki.com/wiki/Storyteller_(5e_Class)
	Date:		2017-05-02 (sheet v12.97)

*/

ClassList["storyteller"] = { 
	
	regExpSearch : /^(?=.*storyteller).*$/i, 
	
	name : "Storyteller", 
	
	source : ["HB", 0], 
	
	primaryAbility : "\n \u2022 storyteller: Charisma;", 
	
	prereqs : "\n \u2022 storyteller: Charisma 13;", 
	
	die : 6, 
	
	improvements : [0, 0, 0, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6, 6, 6, 7, 7], 
	
	saves : ["Cha", "Wis"], 
	
	skills : ["\n\n" + toUni("Storyteller") + ": Choose two from Arcana, Deception, History, Persuasion, Perception."], 
	
	tools : ["Artisan's tools of your choice", "Artisan's tools of your choice"], 
	
	armor : [ 
		[true, false, false, false], 
		[true, false, false, false] 
	],
	
	weapons : [ 
		[true, true], 
		[true, true] 
	],
	
	equipment : "Storyteller starting equipment:\n \u2022 leather armor;\n \u2022 A simple weapon and studded leather armor -or- two simple weapons;\n \u2022 2 fairy tails of your choice;\n \u2022 a set of artisan's tools of your choice -or- another fairy tail of your choice.;\n\nAlternatively, choose 4d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.", 
	
	subclasses : ["Storyteller Archtype", ["of horror", "of romance", "of tragedy", "of comedy", "of heroic"]], 
	
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3], 
	
	abilitySave : 6, 
	
	abilitySaveAlt : 5, 
	
	spellcastingFactor : 1, 
		
		spellcastingKnown : { 
			cantrips : [3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6], 
			spells : [4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 13, 13, 14, 14, 15, 16, 16, 16],		
	},
	spellcastingList : { 	
		class : "bard", 
		
		level : [0, 9],
	},
	
	features : { 
	
		"character call" : {
			name : "Character Call", 
			source : ["HB", 0], 
			minlevel : 1, 
			description : "\n   " + "At 1st level, you can use a full action to try to summon a creature from a book that you own. You may only use this feature once per long rest. In order to do so, you must pass a Wisdom check with a DC of 8 + the CR of the creature minimum CR1. The creature must have a CR equal to two times your Storyteller level or lower, or it will fail. At 6th, 11th and 17 levels, you can summon an additional creature per long rest. However, only one creature can be invoked at a time. If you have already summoned a creature and want to summon a second one, you must first dismiss the first creature. The summoned creature remains indefinitely, returning to its source book only if it reaches half of its health or if you call it back on its turn using a bonus action. For this, you must pass a Wisdom check with a DC equal to the check you passed to summon it. Finally, you can not use this feature if you can not hold the book in one hand or if you are unable to speak for some reason.",
			usages : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4],
			recovery : "long rest",
   		},
					
		"create book" : {
			name : "Create Book",
			source : ["HB", 0],
			minlevel : 1,
			description : "\n   " + "At 1st level, you are allowed to create your own books for use with this class. At 5th, 8th, 12th, and 18th levels, you to create an additional new book. When attempting to call a character from a story you created lower DC by 5. These books are considered magical, and so are all books used by this class. You can not have more books created by this feature than the number of times you have aquired it. To create a new book after you have reached the maximum amount, you must first discard one of the books in a ritual that lasts 1 hour and costs half the book value in gp.",
			usages : [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5], //example of usages varying per level
		},
		"spellcasting" : {
			name : "Spellcasting",
			source : ["HB"],
			minlevel : 1,
			description : "\n   " + "I have access to bardic spells. " + "\n   " + "Charisma is your spellcasting ability for your storyteller spells, since the power of your magic relies on the emotion from reading stories. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a storyteller spell you cast and when making an attack roll with one. Spell save DC = 8 + your proficiency bonus + your Charisma modifier Spell attack modifier.",
			additional : ["3 cantrips \u0026 4 spells known", "3 cantrips \u0026 5 spells known", "3 cantrips \u0026 6 spells known", "4 cantrips \u0026 7 spells known", "4 cantrips \u0026 8 spells known", "4 cantrips \u0026 9 spells known", "4 cantrips \u0026 10 spells known", "4 cantrips \u0026 11 spells known", "5 cantrips \u0026 12 spells known", "5 cantrips \u0026 14 spells known", "5 cantrips \u0026 15 spells known", "5 cantrips \u0026 15 spells known", "5 cantrips \u0026 16 spells known", "6 cantrips \u0026 18 spells known", "6 cantrips \u0026 19 spells known", "6 cantrips \u0026 19 spells known", "6 cantrips \u0026 20 spells known", "6 cantrips \u0026 22 spells known", "6 cantrips \u0026 22 spells known", "6 cantrips \u0026 22 spells known"],
    		},
		"subclassfeature3" : { 
			name : "Storyteller Archetype",
			source : ["HB"],
			minlevel : 3,
			description : "\n   " + "Choose a Genre you strive to emulate and put it in the \"Class\" field" + "\n   " + "Choose either Horror, Romance, Tragedy, Comedy, or Heroic.",
  		},
		"enhanced reading" : {
			name : "Enhanced Reading",
			source : ["HB", 0],
			minlevel : 4,
			description : "\n   " + "At 4th level, this feature makes it so that you may read a book or document 25% faster than normal. And at 10th and 18th levels, you may read an extra 25% faster than normal. This affects your Character Call and similar features. At 4th level, it is a standard action. At 10th level, it becomes a bonus action. Finally, in the 14th level it becomes a free action.",
		},
		"story recall" : { 
			name : "Story Recall",
			source : ["HB", 0],
			minlevel : 7,
			description : "\n   " + "Starting at 7th level, you can use Character Call and similar abilities without possessing the book which the thing you wish to summon is contained. In order to do this you must succeed on a Inteligence (History) check with DC 8+ how many days ago you read the book in which the thing you wish to summon is contained. On a success, you may continue your summoning but on a fail you waste your action for that turn.(recalling is a bonus action)",
    		},
		"item call" : { 
			name : "Item Call",
			source : ["HB", 0],
			minlevel : 10,
			description : "\n   " + "Once you reach 10th level, you may call items from a story into your possession for the duration of an encounter or 30 minutes. This ability can be used the same number of times as character call per long rest The DC for these calling checks is 9+1 for every 20GP the item costs. Anything below 20 counts as 20. This follows the same rules of dismissal as Character Call.",
    			usages : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //example of usages varying per level
   		},
		"impact tale" : { 
			name : "Impact Tale",
			source : ["HB", 0],
			minlevel : 14,
			description : "\n   " + "Starting at 14th level, you can make up or tell a familiar story of a certain genre to a target to create these effects. Romance: Target must succeed on a DC 10+ your Charisma modifier Wisdom saving throw or become charmed by you. Horror: The creature must succeed on a DC 10+ your wisdom modifier(wisdom saving throw) or become fearful of you,on a success they are only shaken. Tragedy:The target must succeed on a DC 10+ your intelligence modifier (wisdom saving throw)or become discouraged(Disadvantage on attack rolls and ability checks) if they get below 5 on their saving throw this effect also gives them disadvantage on saving throws. Comedy:You tell an ally a tale of comedy giving them advantage on saving throws against mind affecting abilities or spells for 5 hours. Heroic tale: You regale an ally with a legend of heroism giving them a d10 inspiration die.",
    		},
		"climactic call" : { 
			name : "Climactic Call",
			source : ["HB", 0],
			minlevel : 16,
			description : "\n   " + "At 16th level, you can call abnormal weather conditions (such as storms, acid or granite rain, sandstorms, etc.) or specific environments (forests, swamps, deserts, etc.) of a story in your possession during a encounter or 30 minutes. This ability can be used the same number of times as character call per long rest. The DC for these call checks is 15 + 1 for every 90 feet of affected area. Abnormal climatic conditions cause 1d10 damage per turn of the appropriate type for this condition (thunder damage to storms, acid damage to acid rain, cold damage to granite rain, etc.) to all enemy creatures in its area of effect. Invoked environments impose all the rules that normally would, with the addition that are always considered easy terrain for you and your allies and difficult terrain to all enemy creatures. This follows the same rules of dismissal as Character Call.",
    		},
		"fiction to fact" : { 
			name : "Fiction to Fact",
			source : ["HB", 0],
			minlevel : 20,
			description : "\n   " + "At 20th level, you may create your own personal Demi-plane that you may customize as you see fit (under DM supervision) and can as your action open up a portal to this plane. On subsequent turns you may use your bonus action to bring an item or creature from that plane to the battlefield. If bringing a creature through the portal, you must succeed on a DC 10+ number of its hit dice or you'll lose control of it (it acts as it naturally would on your plane).",
		},
    	},
};
ClassSubList["of horror"] = { 
	regExpSearch : /^(?=.*(of horror)).*$/i, 
	subname : "of Horror", 
	source : ["HB", 0],
	
	features : { 
	
		"subclassfeature3.1" : { 
			name : "Stalker's Knowledge",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n   " + "At level 3 the storyteller gets advantage on Stealth and Perception skill checks.",
   		 },
		"subclassfeature6" : {
			name : "Beasts of Horror",
			source : ["HB", 0],
			minlevel : 6,
			description : "\n   " + "At level 6 you gain advantage on checks made to call Evil aligned characters from a book.",
  		 },
		"subclassfeature9" : {
			name : "Experience in Writing",
			source : ["HB", 0],
			minlevel : 9,
			description : "\n   " + "At level 9 you may avoid paying the cost for one creature and item when using the create book feature to write a horror novel.",
    		},
		"subclassfeature12" : {
			name : "Corruption of the Pages",
			source : ["HB", 0],
			minlevel : 12,
			description : "\n   " + "At level 12 you may add 1d10 necrotic damage to the damage of an attack or spell.You may only use this feature once per short rest.",
    			usages : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			recovery : "short rest",
		},
		"subclassfeature15" : {
			name : "Genre Influence",
			source : ["HB", 0],
			minlevel : 15,
			description : "\n   " + "At level 15 all creatures you call deal an extra 1d8 necrotic damage on all attacks and all items capable of being used to attack you call deal an extra 1d6 necrotic damage.",
    		},
		"subclassfeature18" : {
			name : "Product of Horror",
			source : ["HB", 0],
			minlevel : 18,
			description : "\n   " + "At level 18 you gain resistance to necrotic damage and all attacks you make deal an extra d8 necrotic damage. You gain access to the spell 'Finger of Death' to be used once per long rest.",
   	 		usages : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
			recovery : "long rest",
		}
   },
};
ClassSubList["of romance"] = { 
	regExpSearch : /^(?=.*(of romance)).*$/i, 
	subname : "of Romance", 
	source : ["HB", 0], 
	
	features : { 

		"subclassfeature3.1" : { 
			name : "Lover's knowledge",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n   " + "At level 3 You gain advantage on all Persuasion and Insight skill checks.",
    		},
		"subclassfeature6" : {
			name : "People of Romance",
			source : ["HB", 0],
			minlevel : 6,
			description : "\n   " + "At level 6 you gain advantage on checks made to call Good aligned characters from a book.",
    		},
		"subclassfeature9" : {
			name : "Experience in Writing",
			source : ["HB", 0],
			minlevel : 9,
			description : "\n   " + "At level 9 you may avoid paying the cost for adding one creature and item into a book you are writing with the create book feature as long as it is a romance",
    		},
		"subclassfeature12" : {
			name : "Passion of the Pages",
			source : ["HB", 0],
			minlevel : 12,
			description : "\n   " + "At level 12 you may add 1d10 fire damage to the damage of an attack or spell. You may only use this feature once per short rest.",
			usages : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			recovery : "short rest",
    		},
		"subclassfeature15" : {
			name : "Genre Influence",
			source : ["HB", 0],
			minlevel : 15,
			description : "\n   " + "At level 15 all creatures you call deal an extra 1d8 fire damage on all attacks and all items capable of being used to attack you call deal an extra 1d6 Fire damage.",
    		},
		"subclassfeature18" : {
			name : "Product of Passion",
			source : ["HB", 0],
			minlevel : 18,
			description : "\n   " + "At level 18 you gain resistance to Fire damage and all attacks you make deal an extra d8 Fire damage.You gain access to the 'Fire Storm' spell to be used once per long rest.",
   	 		usages : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
			recovery : "long rest",
		}
   },
};
ClassSubList["of tragedy"] = { 
	regExpSearch : /^(?=.*(of tragedy)).*$/i, 
	subname : "of Tragedy",
	source : ["HB", 0], 
	
	features : { 
	
		"subclassfeature3.1" : { 
			name : "Surviving Knowledge",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n   " + "At level 3 the storyteller gets advantage on Survival and Skulduggery skill checks.",
    		},
		"subclassfeature6" : {
			name : "Fading Hope",
			source : ["HB", 0],
			minlevel : 6,
			description : "\n   " + "At level 6 you gain advantage on checks made to call Neutral aligned characters from a book.",
    		},
		"subclassfeature9" : {
			name : "Experience in Writing",
			source : ["HB", 0],
			minlevel : 9,
			description : "\n   " + "At level 9 you may avoid paying the cost for one creature and item when using the create book feature to write a tragedy novel.",
    		},
		"subclassfeature12" : {
			name : "Catharsis of the Pages",
			source : ["HB", 0],
			minlevel : 12,
			description : "\n   " + "At level 12 you may add 1d10 psychic damage to the damage of an attack or spell. You may only use this feature once per short rest.",
			usages : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			recovery : "short rest",
   		},
		"subclassfeature15" : {
			name : "Genre Influence",
			source : ["HB", 0],
			minlevel : 15,
			description : "\n   " + "At level 15, all creatures you call deal an extra 1d8 psychic damage on all attacks and all items capable of being used to attack you call deal an extra 1d6 psychic damage.",
    		},
		"subclassfeature18" : {
			name : "Product of Tragedy",
			source : ["HB", 0],
			minlevel : 18,
			description : "\n   " + "At level 18 You gain resistance to psychic damage and all attacks you make deal an extra 1d8 psychic damage. You gain access to the spell 'Feeblemind' to be used once per long rest.",
   	 		usages : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
			recovery : "long rest",
		}
    },
};
ClassSubList["of comedy"] = { 
	regExpSearch : /^(?=.*(of comedy)).*$/i, 
	subname : "of Comedy",
	source : ["HB", 0], 
	
	features : { 
	
		"subclassfeature3.1" : { 
			name : "Social Knowledge",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n   " + "At level 3 the storyteller gets advantage on persuasion and deception ability checks.",
   		},
		"subclassfeature6" : {
			name : "Crazy Joker",
			source : ["HB", 0],
			minlevel : 6,
			description : "\n   " + "At level 6 you gain advantage on checks made to call Chaotic aligned characters from a book.",
   		},
		"subclassfeature9" : {
			name : "Experience in Writing",
			source : ["HB", 0],
			minlevel : 9,
			description : "\n   " + "At level 9 you may avoid paying the cost for one creature and item when using the create book feature to write a comedy novel.",
    		},
		"subclassfeature12" : {
			name : "Mockery of the Pages",
			source : ["HB", 0],
			minlevel : 12,
			description : "\n   " + "At level 12 you may add 1d10 force damage to the damage of an attack or spell. You may only use this feature once per short rest.",
			usages : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			recovery : "short rest",
    		},
		"subclassfeature15" : {
			name : "Genre Influence",
			source : ["HB", 0],
			minlevel : 15,
			description : "\n   " + "At level 15 all creatures you call deal an extra 1d8 force damage on all attacks and all items capable of being used to attack you call deal an extra 1d6 force damage.",
    		},
		"subclassfeature18" : {
			name : "Product of Laughter",
			source : ["HB", 0],
			minlevel : 18,
			description : "\n   " + "At level 18 you gain resistance to force damage and all attacks you make deal an extra 1d8 force damage. You gain access to the spell 'Power Word: Stun' to be used once per long rest.",
   	 		usages : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
			recovery : "long rest",
		}
    },
};
ClassSubList["of heroic"] = { 
	regExpSearch : /^(?=.*(of heroic)).*$/i, 
	subname : "of Heroic", 
	source : ["HB", 0],
	 
	features : { 
	
		"subclassfeature3.1" : { 
			name : "Hero's Knowledge",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n   " + "At level 3 the storyteller gets advantage on Athletics and Intimidation skill checks.",
    		},
		"subclassfeature6" : {
			name : "Inspiring Justice",
			source : ["HB", 0],
			minlevel : 6,
			description : "\n   " + "At level 6 you gain advantage on checks made to call Lawful aligned characters from a book.",
   		},
		"subclassfeature9" : {
			name : "Experience in Writing",
			source : ["HB", 0],
			minlevel : 9,
			description : "\n   " + "At level 9 you may avoid paying the cost for one creature and item when using the create book feature to write a heroic novel.",
    		},
		"subclassfeature12" : {
			name : "Heroism of the Pages",
			source : ["HB", 0],
			minlevel : 12,
			description : "\n   " + "At level 12 you may add 1d10 thunder damage to the damage of an attack or spell.You may only use this feature once per short rest.",
			usages : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			recovery : "short rest",
    		},
		"subclassfeature15" : {
			name : "Genre Influence",
			source : ["HB", 0],
			minlevel : 15,
			description : "\n   " + "At level 15 all creatures you call deal an extra 1d8 thunder damage on all attacks and all items capable of being used to attack you call deal an extra 1d6 thunder damage.",
    		},
		"subclassfeature18" : {
			name : "Product of Courage",
			source : ["HB", 0],
			minlevel : 18,
			description : "\n   " + "At level 18 you gain resistance to thunder damage and all attacks you make deal an extra 1d8 thunder damage. You gain access to the spell 'holy Aura' to be used once per long rest.",
   	 		usages : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
			recovery : "long rest",
		}
    },
};
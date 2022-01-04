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
	Date:		2021-11-16 (sheet 13.0.8)
*/

var iFileName = "Faerie by rayvenwilk.js";

SourceList["WHB"] = {
	name : "Wilk's Homebrews",
	abbreviation : "WHB",
	group : "Homebrew",
};

RaceList["winter faerie"] = {
    regExpSearch : /^((?=.*\b(winter?|cold?|ice?|frozen)\b)(?=.*\bfaerie?\b)).*$/i,
    name : "Winter Faerie",
    sortname : "Faerie, Winter",
    source : ["WHB"],
    plural : "Winter faeries",
    size : 4,
    speed : {
        walk : {spd : 10, enc : 5},
        fly : { spd : 40, enc : 30}
    },
    languageProfs : ["Common", "Sylvan"],
    savetxt : {
        text : ["Dex save vs. area effects: success \u2015 half dmg", "Magic can't put me to sleep"],
        adv_vs : ["charmed"]
    },
    dmgres : ["Cold"],
    weaponprofs : [true, false, ["shortbow"]],
    toolProfs : ["Herbalism Kit"],
    skills : ["Nature"],
    skillstxt : "Choose one from Acrobatics, Persuasion, \u0026 Stealth",
    age : "reach maturity by age 60 and live about 500 years",
    height : " stand between 3 inches and 3.5 feet tall",
    weight : " weigh between 2 ounces and 30 lb",
    heightMetric : "",
	weightMetric : "",
    improvements : "Winter Fairy: +1 Dexterity, +2 Charisma;",
    scores : [0, 1, 0, 0, 0, 2],
    trait : "Faerie (+1 Dexterity, +2 Charisma)\nFlight: I have a flying speed of 40 feet and I can hover.\nInnate Faerie Enchantments: I know a number of enchantments per day that can be traded out. Charisma is my spellcasting ability for these spells.\n   I can speak with small woodland animals (simple answers only).\nI can make my wings glow, 10ft radius in non magical darkness \u0026 5ft radius in magical darkness",
    extraAC : [{
        mod : "Cha",
        stopeval : function (v) {
            return v.wearingArmor;
        }
    }],
    spellcastingAbility : 6,
    spellcastingBonus :[{
        name : "Innate Faerie Enchantments",
        times : 2,
        spells : ["enchanted animation", "enchanted freeze"],
        selection : ["enchanted animation", "enchanted freeze"],
        firstCol : "atwill"
    },{
        name : "Faerie Enchantments",
        spells : ["enchanted campsite", "enchanted cleanliness", "enchanted entrance", "enchanted wings", "enchanted guidance", "enchanted musical", "enchanted resistance", "enchanted spare", "enchanted step", "enchanted strike", "enchanted virtue", "enchanted ward", "enchanted warmth", "enchanted winter terrain"],
        selection : ["enchanted campsite", "enchanted cleanliness", "enchanted entrance", "enchanted wings", "enchanted guidance", "enchanted musical", "enchanted resistance", "enchanted spare", "enchanted step", "enchanted strike", "enchanted virtue", "enchanted ward", "enchanted warmth", "enchanted winter terrain"],
        firstCol : "atwill",
        times : [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5],
        level : [0, 0]
    },{
        name : "Faerie Enchantments I",
        spells : ["enchanted appearence",  "enchanted armor", "enchanted blindness", "enchanted cold", "enchanted cure", "enchanted deafness",  "enchanted disappearance", "enchanted familiar", "enchanted friend", "enchanted illumination", "enchanted movement", "enchanted rumor", "enchanted sleep", "enchanted weapon", "enchanted vision"],
        selection : ["enchanted appearence",  "enchanted armor", "enchanted blindness", "enchanted cold", "enchanted cure", "enchanted deafness",  "enchanted disappearance", "enchanted familiar", "enchanted friend", "enchanted illumination", "enchanted movement", "enchanted rumor", "enchanted sleep", "enchanted weapon", "enchanted vision"],
        firstCol : "atwill",
        times : [0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4],
        level : [1, 1]
    }],
    action : [
        ["bonus action", "Glow Wings (start)"],
        ["bonus action", "Glow Wings (end)"]
    ],
    weaponsAdd : ["Enchanted Freeze"]
},
RaceList["spring faerie"] = {
    regExpSearch : /^((?=.*\b(spring?|nature?|flowers?)\b)(?=.*\bfaerie?\b)).*$/i,
    name : "Spring Faerie",
    sortname : "Faerie, Spring",
    source : ["WHB"],
    plural : "Faeries",
    size : 4,
    speed : {
        walk : {spd : 10, enc : 5},
        fly : { spd : 40, enc : 30}
    },
    toolProfs : ["Herbalism Kit"],
    languageProfs : ["Common", "Sylvan"],
    dmgres : ["Poison"],
    savetxt : {
        text : ["Dex save vs. area effects: success \u2015 half dmg", "Magic can't put me to sleep"],
        adv_vs : ["charmed"]
    },
    skills : ["Nature"],
    skillstxt : "Choose one from Acrobatics, Persuasion, \u0026 Stealth",
    age : "reach maturity by age 60 and live about 500 years",
    height : " stand between 3 inches and 3.5 feet tall",
    weight : " weigh between 2 ounces and 30 lb",
    heightMetric : "",
	weightMetric : "",
    improvements : "Spring Fairy: +1 Dexterity, +2 Charisma;",
    scores : [0, 1, 0, 0, 0, 2],
    trait : "Faerie (+1 Dexterity, +2 Charisma)\nFlight: I have a flying speed of 40 feet and I can hover. To use this speed, I can't be wearing medium or heavy armor.\nInnate Faerie Enchantments: I know a number of enchantments per day that can be traded out. Charisma is my spellcasting ability for these spells.\n   I can speak with small woodland animals (simple answers only).\nI can make my wings glow, 10ft radius in non magical darkness \u0026 5ft radius in magical darkness",
    extraAC : [{
        mod : "Cha",
        stopeval : function (v) {
            return v.wearingArmor;
        }
    }],
    spellcastingAbility : 6,
    spellcastingBonus :[{
        name : "Innate Faerie Enchantments",
        times : 2,
        spells : ["enchanted animation", "enchanted thorns"],
        selection : ["enchanted animation", "enchanted thorns"],
        firstCol : "atwill"
    },{
        name : "Faerie Enchantments",
        spells : ["enchanted campsite", "enchanted cleanliness", "enchanted entrance", "enchanted wings", "enchanted guidance", "enchanted musical", "enchanted resistance", "enchanted spare", "enchanted spring terrain", "enchanted step", "enchanted strike", "enchanted virtue", "enchanted ward", "enchanted warmth"],
        selection : ["enchanted campsite", "enchanted cleanliness", "enchanted entrance",, "enchanted wings", "enchanted guidance", "enchanted musical", "enchanted resistance", "enchanted spare", "enchanted spring terrain", "enchanted step", "enchanted strike", "enchanted virtue", "enchanted ward", "enchanted warmth"],
        firstCol : "atwill",
        times : [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5],
        level : [0, 0]
    },{
        name : "Faerie Enchantments I",
        spells : ["enchanted appearence",  "enchanted armor", "enchanted blindness", "enchanted cold", "enchanted cure", "enchanted deafness",  "enchanted disappearance", "enchanted familiar", "enchanted friend", "enchanted illumination", "enchanted movement", "enchanted rumor", "enchanted sleep", "enchanted weapon", "enchanted vision"],
        selection : ["enchanted appearence",  "enchanted armor", "enchanted blindness", "enchanted cold", "enchanted cure", "enchanted deafness",  "enchanted disappearance", "enchanted familiar", "enchanted friend", "enchanted illumination", "enchanted movement", "enchanted rumor", "enchanted sleep", "enchanted weapon", "enchanted vision"],
        firstCol : "atwill",
        times : [0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4],
        level : [1, 1]
    }],
    action : [
        ["bonus action", "Glow Wings (start)"],
        ["bonus action", "Glow Wings (end)"]
    ],
    weaponsAdd : ["Enchanted Thorn"]
},
RaceList["summer faerie"] = {
    regExpSearch : /^((?=.*\b(summer?)\b)(?=.*\bfaerie?\b)).*$/i,
    name : "Summer Faerie",
    sortname : "Faerie, Summer",
    source : ["WHB"],
    plural : "Faeries",
    size : 4,
    speed : {
        walk : {spd : 10, enc : 5},
        fly : { spd : 40, enc : 30}
    },
    toolProfs : ["Herbalism Kit"],
    languageProfs : ["Common", "Sylvan"],
    dmgres : ["Fire"],
    savetxt : {
        text : ["Dex save vs. area effects: success \u2015 half dmg", "Magic can't put me to sleep"],
        adv_vs : ["charmed"]
    },
    skills : ["Nature"],
    skillstxt : "Choose one from Acrobatics, Persuasion, \u0026 Stealth",
    age : "reach maturity by age 60 and live about 500 years",
    height : " stand between 3 inches and 3.5 feet tall",
    weight : " weigh between 2 ounces and 30 lb",
    heightMetric : "",
	weightMetric : "",
    improvements : "Summer Fairy: +1 Dexterity, +2 Charisma;",
    scores : [0, 1, 0, 0, 0, 2],
    trait : "Faerie (+1 Dexterity, +2 Charisma)\nFlight: I have a flying speed of 40 feet and I can hover. To use this speed, I can't be wearing medium or heavy armor.\nInnate Faerie Enchantments: I know a number of enchantments per day that can be traded out. Charisma is my spellcasting ability for these spells.\n   I can speak with small woodland animals (simple answers only).\nI can make my wings glow, 10ft radius in non magical darkness \u0026 5ft radius in magical darkness",
    extraAC : [{
        mod : "Cha",
        stopeval : function (v) {
            return v.wearingArmor;
        }
    }],
    spellcastingAbility : 6,
    spellcastingBonus :[{
        name : "Innate Faerie Enchantments",
        times : 2,
        spells : ["enchanted animation", "enchanted burn"],
        selection : ["enchanted animation", "enchanted burn"],
        firstCol : "atwill"
    },{
        name : "Faerie Enchantments",
        spells : ["enchanted campsite", "enchanted cleanliness", "enchanted entrance", "enchanted wings", "enchanted guidance", "enchanted musical", "enchanted resistance", "enchanted spare", "enchanted step", "enchanted strike", "enchanted summer terrain", "enchanted virtue", "enchanted ward", "enchanted warmth"],
        selection : ["enchanted campsite", "enchanted cleanliness", "enchanted entrance",, "enchanted wings", "enchanted guidance", "enchanted musical", "enchanted resistance", "enchanted spare", "enchanted step", "enchanted strike", "enchanted summer terrain", "enchanted virtue", "enchanted ward", "enchanted warmth"],
        firstCol : "atwill",
        times : [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5],
        level : [0, 0]
    },{
        name : "Faerie Enchantments I",
        spells : ["enchanted appearence",  "enchanted armor", "enchanted blindness", "enchanted cold", "enchanted cure", "enchanted deafness",  "enchanted disappearance", "enchanted familiar", "enchanted friend", "enchanted illumination", "enchanted movement", "enchanted rumor", "enchanted sleep", "enchanted weapon", "enchanted vision"],
        selection : ["enchanted appearence",  "enchanted armor", "enchanted blindness", "enchanted cold", "enchanted cure", "enchanted deafness",  "enchanted disappearance", "enchanted familiar", "enchanted friend", "enchanted illumination", "enchanted movement", "enchanted rumor", "enchanted sleep", "enchanted weapon", "enchanted vision"],
        firstCol : "atwill",
        times : [0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4],
        level : [1, 1]
    }],
    action : [
        ["bonus action", "Glow Wings (start)"],
        ["bonus action", "Glow Wings (end)"]
    ],
    weaponsAdd : ["Enchanted Burn"]
},
RaceList["autumn faerie"] = {
    regExpSearch : /^((?=.*\b(autumn?|fall?)\b)(?=.*\bfaerie?\b)).*$/i,
    name : "Autumn Faerie",
    sortname : "Faerie, Autumn",
    source : ["WHB"],
    plural : "Faeries",
    size : 4,
    speed : {
        walk : {spd : 10, enc : 5},
        fly : { spd : 40, enc : 30}
    },
    toolProfs : ["Herbalism Kit"],
    languageProfs : ["Common", "Sylvan"],
    dmgres : ["Lightning"],
    savetxt : {
        text : ["Dex save vs. area effects: success \u2015 half dmg", "Magic can't put me to sleep"],
        adv_vs : ["charmed"]
    },
    skills : ["Nature"],
    skillstxt : "Choose one from Acrobatics, Persuasion, \u0026 Stealth",
    age : "reach maturity by age 60 and live about 500 years",
    height : " stand between 3 inches and 3.5 feet tall",
    weight : " weigh between 2 ounces and 30 lb",
    heightMetric : "",
	weightMetric : "",
    improvements : "Autumn Fairy: +1 Dexterity, +2 Charisma;",
    scores : [0, 1, 0, 0, 0, 2],
    trait : "Faerie (+1 Dexterity, +2 Charisma)\nFlight: I have a flying speed of 40 feet and I can hover. To use this speed, I can't be wearing medium or heavy armor.\nInnate Faerie Enchantments: I know a number of enchantments per day that can be traded out. Charisma is my spellcasting ability for these spells.\n   I can speak with small woodland animals (simple answers only).\nI can make my wings glow, 10ft radius in non magical darkness \u0026 5ft radius in magical darkness",
    extraAC : [{
        mod : "Cha",
        stopeval : function (v) {
            return v.wearingArmor;
        }
    }],
    spellcastingAbility : 6,
    spellcastingBonus :[{
        name : "Innate Faerie Enchantments",
        times : 2,
        spells : ["enchanted animation", "enchanted storm"],
        selection : ["enchanted animation", "enchanted storm"],
        firstCol : "atwill"
    },{
        name : "Faerie Enchantments",
        spells : ["enchanted autumn terrain", "enchanted campsite", "enchanted cleanliness", "enchanted entrance", "enchanted wings", "enchanted guidance", "enchanted musical", "enchanted resistance", "enchanted spare", "enchanted step", "enchanted strike", "enchanted virtue", "enchanted ward", "enchanted warmth"],
        selection : ["enchanted autumn terrain", "enchanted campsite", "enchanted cleanliness", "enchanted entrance", "enchanted wings", "enchanted guidance", "enchanted musical", "enchanted resistance", "enchanted spare", "enchanted step", "enchanted strike", "enchanted virtue", "enchanted ward", "enchanted warmth"],
        firstCol : "atwill",
        times : [2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5],
        level : [0, 0]
    },{
        name : "Faerie Enchantments I",
        spells : ["enchanted appearence",  "enchanted armor", "enchanted blindness", "enchanted cold", "enchanted cure", "enchanted deafness",  "enchanted disappearance", "enchanted familiar", "enchanted friend", "enchanted illumination", "enchanted movement", "enchanted rumor", "enchanted sleep", "enchanted weapon", "enchanted vision"],
        selection : ["enchanted appearence",  "enchanted armor", "enchanted blindness", "enchanted cold", "enchanted cure", "enchanted deafness",  "enchanted disappearance", "enchanted familiar", "enchanted friend", "enchanted illumination", "enchanted movement", "enchanted rumor", "enchanted sleep", "enchanted weapon", "enchanted vision"],
        firstCol : "atwill",
        times : [0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4],
        level : [1, 1]
    }],
    action : [
        ["bonus action", "Glow Wings (start)"],
        ["bonus action", "Glow Wings (end)"]
    ]
    ,
    weaponsAdd : ["Enchanted Storm"]
},

// Add the Faerie Dust to Equip
GearList["faerie dust, small pouch"] = {
    infoname : "Small Pouch, Faerie Dust (50) [15 gp]",
    name : "Faerie Dust, small",
    amount : 50,
    weight : .25,
    type : "spell component",
    source : ["WHB", 0],
},
GearList["faerie dust, large pouch"] = {
    infoname : "Large Pouch, Faerie Dust (100) [30 gp]",
    name : "Faerie Dust, large",
    amount : 100,
    weight : .5,
    type : "spell component",
    source : ["WHB", 0],
},

// Faerie Enchantments
SpellsList["enchanted animation"] = {
    name : "Enchanted Animation",
    source : ["WHB", 0],
    level : 0,
    time : "1 a",
    range : "10 ft",
    components : "V,S",
    duration : "Instantaneous",
    description : "You can enchant up to 6 mundane objects to perform tasks on their own (excluding weapons, armor, \u0026 shields).",
	descriptionFull : desc([
		"You can enchanted up to 6 mundane objects to perform tasks on their own (excluding weapons, armor, and shields). Items will stay animated until the task is done or the enchantment is dispelled.",
        "If 6 items are already enchanted, you can enchant another item but the first item you enchanted will no longer be enchanted.",
		"Examples: a tent will erect itself or put itself away, a shovel will dig or fill a hole, a broom will sweep, a jug will fill or empty itself from a closeby source, rag will clean weapon/armor, etc."
		]),
},
SpellsList["enchanted freeze"] = {
    name : "Enchanted Freeze",
    source : ["WHB", 0],
    level : 0,
    time : "1 a",
    range : "10' cone",
    components : "V,M\u2020",
    compMaterial : "3 pinches of faerie dust",
    duration : "Instantaneous",
    save : "Dex",
    description : "Crea in rng pelted by tiny snowballs, Dex save or 1d4 Cold dmg; +1d4 at lvl 5, 11, and 17",
    descriptionCantripDie : "Crea in rng pelted by tiny snowballs, Dex save or `CD`d4 Cold dmg",
    descriptionFull : desc([
        "You throw, toss, or blow 3 pinches of faerie dust toward hostile creatures, the dust turns into tiny snowballs that fly out in a 10 foot cone. Creatures in range must make a Dexerity saving throw or take 1d4 Cold damage.The spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).",
    ])
},
SpellsList["enchanted thorns"] = {
    name : "Enchanted Thorns",
    source : ["WHB", 0],
    level : 0,
    time : "1 a",
    range : "10' cone",
    components : "V,M\u2020",
    compMaterial : "3 pinches of faerie dust",
    duration : "Instantaneous",
    save : "Dex",
    description : "Crea in rng stung by thorns, Dex save or 1d4 Poison dmg; +1d4 at lvl 5, 11, and 17",
    descriptionCantripDie : "Crea in rng stung by thorns, Dex save or `CD`d4 Poison dmg",
    descriptionFull : desc([
        "You throw, toss, or blow 3 pinches of faerie dust toward hostile creatures, the dust turns into tiny thorns that fly out in a 10 foot cone. Creatures in range must make a Dexterity saving throw or take 1d4 Poison damage.The spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).",
    ])
},
SpellsList["enchanted burn"] = {
    name : "Enchanted Burn",
    source : ["WHB", 0],
    level : 0,
    time : "1 a",
    range : "10' cone",
    components : "V,M\u2020",
    compMaterial : "3 pinches of faerie dust",
    duration : "Instantaneous",
    save : "Dex",
    description : "Crea in rng singed by embers, Dex save or 1d4 Fire dmg; +1d4 at lvl 5, 11, and 17",
    descriptionCantripDie : "Crea in rng singed by embers, Dex save or `CD`d4 Fire dmg",
    descriptionFull : desc([
        "You throw, toss, or blow  pinches of faerie dust toward hostile creatures, the dust turns into tiny embers that fly out in a 10 foot cone. Creatures in range must make a Dexterity saving throw or take 1d4 Fire damage.The spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).",
    ])
},
SpellsList["enchanted storm"] = {
    name : "Enchanted Storm",
    source : ["WHB", 0],
    level : 0,
    time : "1 a",
    range : "10' cone",
    components : "V,M\u2020",
    compMaterial : "3 pinches of faerie dust",
    duration : "Instantaneous",
    save : "Dex",
    description : "Crea in rng zapped by lightning, Dex save or 1d4 Lightning dmg; +1d4 at lvl 5, 11, \u2022 17",
    descriptionCantripDie : "Crea in rng zapped by lightning, Dex save or `CD`d4 Lightning dmg",
    descriptionFull : desc([
        "You throw, toss, or blow 3 pinches of faerie dust toward hostile creatures, the dust turns into tiny bolts of lightning that fly out in a 10 foot cone. Creatures in range must make a Dexterity saving throw or take 1d4 Lightning damage.The spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4).",
    ])
},
SpellsList["enchanted wings"] = {
	name : "Enchanted Wings",
	source : ["WHB", 0],
	level : 0,
	time : "1 a",
	range : "5 ft",
	components : "V,S,M\u2020",
	compMaterial : "5 pinches of faerie dust",
	duration : "5 min",
	description : "One creature fly for 5 min; fall at half rate",
	descriptionFull : desc([
		"You sprinkle 5 pinches of faerie dust on one creature to give them flight for 5 minutes. If the creature is in the air when the enchantment ends they fall at half rate."
	]),
},
SpellsList["enchanted entrance"] = {
    name : "Enchanted Entrance",
    source : ["WHB", 0],
	level : 0,
	time : "1 a",
	range : "10' cone",
	components : "V,M\u2020",
	compMaterial : "2 pinches of faerie dust",
    duration : "Instantaneous",
    description : "Items under a pound float or move up to 5ft back",
    descriptionFull : desc([
        "You throw, toss, or blow 2 pinches of faerie dust to cause a gust of wind to blow in a 10 foot cone. Items under a pound will float in the breeze or be moved up to 5 feet back.",
    ])
},
SpellsList["enchanted weapon"] = {
    name : "Enchanted Weapon",
    source : ["WHB", 0],
	level : 1,
	time : "1 a",
	range : "5 ft",
    components : "V,S,M\u2020",
	compMaterial : "5 pinches of faerie dust \u0026 non magical weapon",
    duration : "Instantaneous",
    description : "+1 to atk or dmg to 1 nonmagical wea for 1d4 +1 rnd",
    descriptionFull : desc([
        "You sprinkle 5 pinches of faerie dust on a nonmagical weapon. Until the spell ends, that weapon becomes a magic weapon with a +1 bonus to attack or damage for 1d4 +1 rounds."
    ])
},
SpellsList["enchanted armor"] = {
    name : "Enchanted Armor",
    source : ["WHB", 0],
	level : 1,
	time : "1 a",
	range : "5 ft",
    components : "V,S,M\u2020",
	compMaterial : "5 pinches of faerie dust \u0026 non magical armor",
    duration : "Instantaneous",
    description : "+1 AC to one crea wearing armor for 1d4 +1 rnd",
    descriptionFull : desc([
        "You sprinkle 5 pinches of faerie dust on one creature wearing nonmagical armor. Until the enchantment ends, the armor gains a +1 bonus to AC for 1d4 +1 rounds."
    ])
},
SpellsList["enchanted movement"] = {
    name : "Enchanted Movement",
    source : ["WHB", 0],
	level : 1,
	time : "1 a",
	range : "5 ft",
	components : "V,S,M\u2020",
	compMaterial : "2 pinches of faerie dust",
    duration : "Instantaneous",
    description : "One crea 2\u00D7 speed 1d4 +1 rnd, no disadv difficult terrain.",
    descriptionFull : desc([
        "You sprinkle 2 pinch of faerie dust on one creature (or yourself) to double their movement rate and impose no disadvantage on difficult terrain for 1d4 +1 rounds.",
    ])
},
SpellsList["enchanted summer terrain"]= {
    name : "Enchanted Summer Terrain",
    source : ["WHB", 0],
	level : 0,
	time : "1 a",
	range : "10' cone",
	components : "V,M\u2020",
	compMaterial : "3 pinches of faerie dust",
    duration : "Instantaneous",
    save : "Con",
    description : "Creatures w/in a 10ft cone have their movement rate cut in half for 1d4 +1 rounds; half on save (min 1)",
    descriptionFull : desc([
        "You throw, toss, or blow 3 pinches of faerie dust to cause the terrain in a 10 foot cone to become like quicksand. Creatures in range must make a Dexterity saving throw or have their movement rate cut in have for 1d4 +1 rounds, save for half the time (round down)",
    ])
},
SpellsList["enchanted winter terrain"]= {
    name : "Enchanted Winter Terrain",
    source : ["WHB", 0],
	level : 0,
	time : "1 a",
	range : "10' cone",
	components : "V,M\u2020",
	compMaterial : "3 pinches of faerie dust",
    duration : "Instantaneous",
    save : "Con",
    description : "Creatures w/in a 10ft cone have their movement rate cut in half for 1d4 +1 rounds; half on save (min 1)",
    descriptionFull : desc([
        "You throw, toss, or blow 3 pinches of faerie dust to cause the terrain in a 10 foot cone to become slushy and slippery. Creatures in range must make a Dexterity saving throw or have their movement rate cut in have for 1d4 +1 rounds, save for half the time (round down)",
    ])
},
SpellsList["enchanted spring terrain"]= {
    name : "Enchanted Spring Terrain",
    source : ["WHB", 0],
	level : 0,
	time : "1 a",
	range : "10' cone",
	components : "V,M\u2020",
	compMaterial : "3 pinches of faerie dust",
    duration : "Instantaneous",
    save : "Con",
    description : "Creatures w/in a 10ft cone have their movement rate cut in half for 1d4 +1 rounds; half on save (min 1)",
    descriptionFull : desc([
        "You throw, toss, or blow 3 pinches of faerie dust to cause the terrain in a 10 foot cone to grow 5 foot sunflowers. Creatures in range must make a Dexterity saving throw or have their movement rate cut in have for 1d4 +1 rounds, save for half the time (round down)",
    ])
},
SpellsList["enchanted autumn terrain"]= {
    name : "Enchanted Autumn Terrain",
    source : ["WHB", 0],
	level : 0,
	time : "1 a",
	range : "10' cone",
	components : "V,M\u2020",
	compMaterial : "3 pinches of faerie dust",
    duration : "Instantaneous",
    save : "Con",
    description : "Creatures w/in a 10ft cone have their movement rate cut in half for 1d4 +1 rounds; half on save (min 1)",
    descriptionFull : desc([
        "You throw, toss, or blow 3 pinches of faerie dust to cause the terrain in a 10 foot cone to become muddy. Creatures in range must make a Dexterity saving throw or have their movement rate cut in have for 1d4 +1 rounds, save for half the time (round down)",
    ])
},
SpellsList["enchanted vision"]= {
    name : "Enchanted Vision",
    source : ["WHB", 0],
	level : 1,
	time : "1 a",
	range : "5 ft",
	components : "V,S,M\u2020",
	compMaterial : "4 pinches of faerie dust",
    duration : "1 h",
    description : "One creature gains 10ft non mag \u0026 5ft mag darkvision for 1 hour.",
    descriptionFull : desc([
        "You sprinkle 1 pinch of faerie dust onto one creature (or yourself) to grant them 10 feet of darkvision in non magical darkness and 5 feet in magical darkness for 1 hour.",
    ])
},
SpellsList["enchanted sleep"]= {
    name : "Enchanted Sleep",
    source : ["WHB", 0],
	level : 1,
	time : "1 a",
	range : "10' cone",
	components : "V,M\u2020",
	compMaterial : "4 pinches of faerie dust",
    duration : "Instantaneous",
    save : "Con",
    description : "Crea in rng fail \u2015 sleep 1d4 +1 rnd; save \u2015 feel drowsy, disadv atk \u0026 save 1d4 +1 rnd",
    descriptionFull : desc([
        "You throw, toss, or blow 4 pinches of faerie dust, creatures within a 10 foot cone must make a Constitution saving throw or fall asleep for 1d4 +1 rounds. If the creature makes the save they have disadvantage on attack for the duration instead. ",
    ])
},
SpellsList["enchanted disappearance"]= {
    name : "Enchanted Disappearance",
    source : ["WHB", 0],
	level : 1,
	time : "1 a",
	range : "5 ft",
	components : "V,S,M\u2020",
	compMaterial : "5 pinches of faerie dust",
    duration : "Instantaneous",
    description : "One crea or self \u0026 everything they carry becomes invisible for 5 min; ends early if atk.",
    descriptionFull : desc([
        "You sprinkle 5 pinches of faerie dust on one creature or yourself to cause them or yourself, with everything being carried to become invisible for 5 minutes. Any action that causes harm to another creature will end the enchantment early.",
    ])
},
SpellsList["enchanted cold"]= {
    name : "Enchanted Cold",
    source : ["WHB", 0],
	level : 0,
	time : "1 a",
	range : "10' cone",
	components : "V,M\u2020",
	compMaterial : "2 pinches of faerie dust",
    duration : "Instantaneous",
    save : "Con",
    description : "All in range; fail \u2015 disadv on atk \u0026 saves 1d4 +1 rnd; save \u2015 half (min 1).",
    descriptionFull : desc([
        "You throw, toss, or blow 2 pinches of faerie dust to cause all creatures within a 10 ft cone to start sneezing, giving them disadvantage on attack and saving throws for 1d4 +1 rounds. Creatures that make their Constitution saving throw are effected only half as many rounds (min 1)"
    ])
},
SpellsList["enchanted rumor"]= {
    name : "Enchanted Rumor",
    source : ["WHB", 0],
	level : 1,
	time : "1 a",
	range : "5 ft",
	components : "V,S,M\u2020",
	compMaterial : "7 pinches of faerie dust",
    duration : "Instantaneous",
    save : "Con",
    description : "You speak the words \"I heard a rumor\" followed by a rumor.",
    descriptionFull : desc([
        "You throw, toss, or blow 5 pinches of faerie dust toward one creature in range. The target must succeed a Constitution saving throw or decides to do one of the following (player choice):",
        "\u2022 Go to another location",
        "\u2022 Find something else to fight or eat",
        "\u2022 Give you an item they possess",
        "\u2022 Remove clothing",
        "\u2022 Sing or dance",
        "As long as the rumor does not cause the target to do damage or use any magic the enchantment will work."
    ])
},
SpellsList["enchanted illumination"]= {
    name : "Enchanted Illumination",
    source : ["WHB", 0],
	level : 1,
	time : "1 a",
	range : "10' cone",
	components : "V,M\u2020",
	compMaterial : "6 pinches of faerie dust",
    duration : "Instantaneous",
    save : "Con",
    description : "All creatures w/in a 10 ft cone illuminate for 1d4 +1 rounds",
    descriptionFull : desc([
        "You throw, toss, or blow 6 pinches of faerie dust, creatures within a 10 foot cone must make a Constitution saving throw or illuminate for 1d4 +1 rounds making them glow in the dark and preventing them from being able to hide in shadows or be invisible. If a creature saves they only glow for half the time (round down).",
    ])
},
SpellsList["enchanted step"] = {
    name : "Enchanted Step",
    source : ["WHB", 0],
	level : 0,
	time : "1 a",
	range : "5 ft",
	components : "V,S,M\u2020",
	compMaterial : "3 pinches of faerie dust",
    duration : "Instantaneous",
    description : "Crea has adv on all Dex check/saves for 1d4 +1 rnd",
    descriptionFull : desc([
        "You sprinkle 3 pinches of faerie dust on one creature or yourself for advantage on all Dexterity checks and saving throws for 1d4 +1 rounds.",
    ])
},
SpellsList["enchanted appearence"] = {
    name : "Enchanted Appearance",
    source : ["WHB", 0],
	level : 1,
	time : "1 a",
	range : "5 ft",
	components : "V,S,M\u2020",
	compMaterial : "4 pinches of faerie dust",
    duration : "1 h",
    save : "Int",
    description : "Alter appearance; Int(Investigation) check vs. spell DC to determine disguise",
    descriptionFull : desc([
        "You sprinkle 4 pinches of faerie dust on one creature or yourself to create an illusionary disguise that lasts for 1 hour.",
        "   To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC."
    ])
},
SpellsList["enchanted blindness"] = {
    name : "Enchanted Blindness",
    source : ["WHB", 0],
	level : 1,
	time : "1 a",
	range : "5 ft",
	components : "V,M\u2020",
	compMaterial : "4 pinches of faerie dust",
    duration : "Instantaneous",
    save : "Con",
    description : "One crea save or Blinded for 1d4 +1 rnd; saves half (min 1 rnd)",
    descriptionFull : desc([
        "You throw, toss, or blow 4 pinches of faerie dust toward 1 creature within 5 feet of you. Tiny beams of sunlight blink in the direction of the target. The target must succeed on a Constitution saving throw or be blinded for 1d4 +1 rounds. If successful, the target is blinded for half the rolled duration (round down)",
    ])
},
SpellsList["enchanted deafness"] = {
    name : "Enchanted Deafness",
    source : ["WHB", 0],
	level : 1,
	time : "1 a",
	range : "5 ft",
	components : "V,M\u2020",
	compMaterial : "4 pinches of faerie dust",
    duration : "Instantaneous",
    description : "One crea save or Deafened for 1d4 +1 rnd; saves half (min 1 rnd)",
    descriptionFull : desc([
        "You throw, toss, or blow 4 pinches of faerie dust toward 1 creature within 5 feet of you. The target must succeed on a Constitution saving throw or be deafened for 1d4 +1 rounds. If successful, the target is deafened for half the rolled duration (round down)",
    ])
},
SpellsList["enchanted friend"] = {
    name : "Enchanted Friend",
    source : ["WHB", 0],
	level : 1,
	time : "1 a",
	range : "5 ft",
	components : "V,M\u2020",
	compMaterial : "5 pinches of faerie dust",
    duration : "Instantaneous",
    save : "Con",
    description : "Hostile crea is friend, incapacitated for 1d4 +1 rnd, save half.",
    descriptionFull : desc([
        "You throw, toss, or blow 5 pinches of faerie dust toward one hostile creature. For the duration of the enchantment, the target sees your party as \"friends\" for 1d4 +1 rounds. The creature is not able to take any actions, reactions or bonus actions for the duration. On a save the creature is only a \"friend\" for half the time (min 1)",
    ])
},
SpellsList["enchanted warmth"] = {
    name : "Enchanted Warmth",
    source : ["WHB", 0],
	level : 0,
	time : "1 a",
	range : "5 ft",
	components : "V,M\u2020",
	compMaterial : "2 pinches of faerie dust",
    duration : "8 h",
    description : "Create small, smokeless campfire; can not be put out by wind; casts dim light in a 20ft radius",
    descriptionFull : desc([
        "You throw, toss, or blow 2 pinches of faerie dust create a small campfire, with about a 3 foot radius, in an unoccupied space. This magical campfire can not be put out by wind and only casts dim light in a 20 foot radius. It can keep you warm and cook your food. ",
    ])
},
SpellsList["enchanted familiar"] = {
    name : "Enchanted Familiar",
    source : ["WHB", 0],
	level : 1,
	time : "1 a",
	range : "10' cone",
	components : "V,M\u2020",
	compMaterial : "5 pinches of faerie dust",
    duration : "Instantaneous",
    description : "",
    descriptionFull : desc([
        "You throw, toss, or blow 5 pinches of faerie dust toward a small woodland creature. For the next 1d6 +1 rounds the creature will obey simple commands unless attacked, then they will scurry off and the enchantment will end. Otherwise, at the end of the duration the creature will scurry off.",
    ])
},
SpellsList["enchanted musical"] = {
    name : "Enchanted Musical",
    source : ["WHB", 0],
	level : 0,
	time : "1 a",
	range : "10' cone",
	components : "V,M\u2020",
	compMaterial : "5 pinches of faerie dust",
    duration : "Instantaneous",
    save : "Con",
    description : "Crea in rng save or disadv on atk \u0026 saves for 1d4 +1 rnd; saves half (min 1 rnd)",
    descriptionFull : desc([
        "You throw, toss, or blow 5 pinches of faerie dust toward creatures within 10 feet of you. Creatures in range must make a Constitution saving throw or start doing their intended actions as if they were in a musical giving them disadvantage on attacks and saves for 1d4 +1 rounds.",
        "Those that did not make their saving throw can try again at the end of their turn."
    ])
},
SpellsList["enchanted cleanliness"] = {
    name : "Enchanted Cleanliness",
    source : ["WHB", 0],
	level : 0,
	time : "1 a",
	range : "5 ft",
	components : "V,M\u2020",
	compMaterial : "2 pinches of faerie dust",
    duration : "Instantaneous",
    description : "Your clothing is now clean and you smell nice",
    descriptionFull : desc([
        "You sprinkle 2 pinches of faerie dust onto one creature or yourself. You and the clothing you are wearing are clean and you smell like you just bathed.",
    ])
},
SpellsList["enchanted cure"] = {
    name : "Enchanted Cure",
    source : ["WHB", 0],
	level : 1,
	time : "1 a",
	range : "5 ft",
	components : "V,M\u2020",
	compMaterial : "4 pinches of faerie dust",
    duration : "Instantaneous",
    description : "Cures Paralyzed, Blindness, Deafness, or Poison",
    descriptionFull : desc([
        "You sprinkle 4 pinches of faerie dust onto one creature or yourself to cure a condition. Only one condition can be cured at a time; paralyzed, blindness, deafness, or poison.",
    ])
},
SpellsList["enchanted campsite"] = {
    name : "Enchanted Campsite",
    source : ["WHB", 0],
	level : 0,
	time : "1 a",
	range : "5 ft",
	components : "V,M\u2020",
	compMaterial : "5 pinches of faerie dust",
    duration : "8 h",
    description : "Create a dry weatherproof campsite in.",
    descriptionFull : desc([
        "You throw, toss, or blow 5 pinches of faerie dust toward an unoccupied area to create a 10 foot radius dry weatherproof campsite. Inside the area is like a bubble, you can see the sky, but if it is raining or snowing none will land within the campsite. If the wind is blowing, it will go around the campsite and the temperature within the area is always comfortable.",
        "You also won't feel the heat, cold, or wetness on the ground if there is any. It doesn't disappear, you just don't feel it's effects."
    ])
},
SpellsList["enchanted ward"] = {
    name : "Enchanted Ward",
    source : ["WHB", 0],
	level : 0,
	time : "1 a",
	range : "5 ft",
	components : "V,M\u2020",
	compMaterial : "4 pinches of faerie dust",
    duration : "1 rnd",
    description : "Until the end of your next turn, Bludgeoning, Piercing, and Slashing dmg resist. vs. weapons",
    descriptionFull : desc([
        "You sprinkle 4 pinches of faerie dust onto yourself or another creature. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks."
    ])
},
SpellsList["enchanted guidance"] = {
    name : "Enchanted Guidance",
    source : ["WHB", 0],
	level : 0,
	time : "1 a",
	range : "5 ft",
	components : "V,M\u2020",
	compMaterial : "4 pinches of faerie dust",
    duration : "1 min",
    description : "1 willing creature adds 1d4 to ability check of its choice, after rolling, once during the duration",
    descriptionFull : desc([
        "You sprinkle 4 pinches of faerie dust on one creature (or yourself). Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends."
    ])
},
SpellsList["enchanted resistance"] = {
    name : "Enchanted Resistance",
    source : ["WHB", 0],
	level : 0,
	time : "1 a",
	range : "5 ft",
	components : "V,M\u2020",
	compMaterial : "4 pinches of faerie dust",
    duration : "1 min",
    description : "1 willing crea can add 1d4 to one saving throw after rolling, once during the duration",
    descriptionFull : desc([
        "You sprinkle 4 pinches of faerie dust Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll the die before or after the saving throw. The spell then ends."
    ])
},
SpellsList["enchanted virtue"] = {
    name : "Enchanted Virtue",
    source : ["WHB", 0],
	level : 0,
	time : "1 a",
	range : "5 ft",
	components : "V,M\u2020",
	compMaterial : "4 pinches of faerie dust",
    duration : "1 min",
    description : "1 creature that has at least 1 HP gets 1d4 + spellcasting ability modifier in temporary hit points",
    descriptionFull : desc([
        "You sprinkle 4 pinches of faerie dust on a creature (or yourself). If the target has at least 1 hit point, it gains a number of temporary hit points equal to 1d4 + your spellcasting ability modifier. The temporary hit points are lost when the spell ends."
    ])
},
SpellsList["enchanted spare"] = {
    name : "Enchanted Spare",
    source : ["WHB", 0],
	level : 0,
	time : "1 a",
	range : "5 ft",
	components : "V,M\u2020",
	compMaterial : "4 pinches of faerie dust",
    duration : "Instantaneous",
    description : "1 living creature with 0 current HP becomes stable",
    descriptionFull : desc([
        "You sprinkle 4 pinches of faerie dust on a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs."
    ])
},
SpellsList["enchanted strike"] = {
    name : "Enchanted Strike",
    source : ["WHB", 0],
	level : 0,
	time : "1 a",
	range : "5 ft",
	components : "V,M\u2020",
	compMaterial : "4 pinches of faerie dust",
    duration : "1 rnd",
    description : "1 creature gains advantage on next attack roll",
    descriptionFull : desc([
        "You sprinkle 4 pinches of faerie dust on yourself or another creature. On your next turn, you gain advantage on your first attack roll."
    ])
},

// Add the Enchantments to weapons list
WeaponsList["enchanted freeze"] = {
    name : "Enchanted Freeze",
    source : ["WHB", 0],
    regExpSearch : /^(?=.*enchanted)(?=.*freeze|cold|ice).*$/i,
    type : "Cantrip",
    ability : 6,
    damage : [1, 4, "cold"],
    range : "10ft cone",
    description : "crea in rng pelted by tiny snowballs",
    list : "spell",
    dc : true,    
},
WeaponsList["enchanted thorns"] = {
    name : "Enchanted Thorns",
    source : ["WHB", 0],
    regExpSearch : /^(?=.*enchanted)(?=.*thorns).*$/i,
    type : "Cantrip",
    ability : 6,
    damage : [1, 4, "poison"],
    range : "10ft cone",
    description : "crea in rng stung by thorns",
    list : "spell",
    dc : true,    
},
WeaponsList["enchanted burn"] = {
    name : "Enchanted Burn",
    source : ["WHB", 0],
    regExpSearch : /^(?=.*enchanted)(?=.*burn|hot|fire).*$/i,
    type : "Cantrip",
    ability : 6,
    damage : [1, 4, "fire"],
    range : "10ft cone",
    description : "crea in rng singed by embers",
    list : "spell",
    dc : true,    
},
WeaponsList["enchanted storm"] = {
    name : "Enchanted Storm",
    source : ["WHB", 0],
    regExpSearch : /^(?=.*enchanted)(?=.*storm).*$/i,
    type : "Cantrip",
    ability : 6,
    damage : [1, 4, "lightning"],
    range : "10ft cone",
    description : "crea in rng zapped by lightning",
    list : "spell",
    dc : true,    
}

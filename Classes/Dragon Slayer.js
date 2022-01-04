var iFileName = "Dragon Slayer[Created by Sean D Little, Transcribed by Senescha]";
RequiredSheetVersion(13);

SourceList["SDL:DS"] = {
    name : "Sean D Little: Dragon Slayer",
    abbreviation : "SDL:DS",
    group : "Dungeon Masters Guild",
    url : "https://www.dmsguild.com/product/183451/Dragon-Slayer-Prestige-Class",
    defaultExcluded : true,
    date : "2016/05/17"
};

ClassList["dragonslayer"] = {
    regExpSearch : /dragon slayer/i,
    name : "Dragon Slayer",
    source : ["SDL:DS"],
    primaryAbility : "Strength or Dexterity",
    prereqs : "Strength 13 or Dexterity 13 \nProficiency in History, Nature, or Survival skill \nComplete a special task: Killed A Dragon",
    prestigeClassPrereq : 8,
    die : 10,
    improvements : levels.map(function (n) {return 0}),
    attacks : levels.map(function (n) {return 1}),
    subclasses : ["", []],
    skillstxt : {
        secondary : "Choose two from Intimidation, Survival, Deception, Animal Handling, and Sleight of Hand"
    },
    features : {
        "advanced favored enemy" : {
            name : "Advanced Favored Enemy",
            source : ["SDL:DS", 1],
            minlevel : 1,
            description : desc([
                "I gain features of Ranger's Favored Enemy Class Feature for dragons",
                "Use the \"Choose Features\" button to choose between Chromatic and Metallic Dragons",
                "I add double my proficiency mod on Wis (Survivial) checks to track them and Int checks to recall knowledge",
                "I have advantage on Charisma checks against that type of Dragon"
            ]),
            choices : ["Metallic", "Chromatic"],
            "metallic" : {
                name : "Advanced Favored Enemy: Metallic",
                description : desc([
                    "I gain features of Ranger's Favored Enemy Class Feature for dragons",
                    "I add double my proficiency mod on Wis (Survivial) checks to track Metalllic Dragons",
                    "and Int checks to recall knowledge",
                    "I have advantage on Charisma checks against that type of Dragon"
                ])
            },
            "chromatic" : {
                name : "Advanced Favored Enemy: Chromatic",
                description : desc([
                    "I gain features of Ranger's Favored Enemy Class Feature for dragons",
                    "I add double my proficiency mod on Wis (Survival) checks to track Chromatic Dragons", 
                    "and Int checks to recall knowledge",
                    "I have advantage on Charisma checks against that type of Dragon"
                ])
            }
        },
        "steel will" : {
            name : "Steel Will",
            source : ["SDL:DS", 1],
            minlevel : 2,
            description : desc([
                "A dragon's \"Frightful Presence\" no longer has any effect on me",
                "Any ally within 30ft of me gains adv. on their save against the effect"
            ])
        },
        "slayer's speed" : {
            name : "Slayer's Speed",
            source : ["SDL:DS", 1],
            minlevel : 3,
            description : desc([
                "When fighting a dragon, my movement speed increases by 10 ft in the first round of combat",
                "I have adv. on saves against a dragon's breath weapon and their effects"
            ]),
            savetxt : {
                adv_vs : ["breath weapon", "breathe weapon effects"]
            }
        },
        "draconic weakness" : {
            name : "Draconic Weakness",
            source : ["SDL:DS", 1],
            minlevel : 4,
            description : desc([
                "Once per round, I can take a -5 to my attack roll and deal +10 damage against a dragon",
                "I have adv. on attacks against dragons"
            ]),
            usages : 1,
            recovery : "Round"
        },
        "frightful presence" : {
            name : "Frightful Presence",
            source : ["SDL:DS", 1],
            minlevel : 5,
            description : desc([
                "I gain the \"Frightful Presence\" of a Dragon",
                "As an action, I force each creature within 60ft of me to make a Wis save",
                "The DC is equal to 8 + my Charisma mod + my proficiency bonus",
                "If they fail, they are frightened by me for 1 min",
                "They repeat the save at the end of each turn, ending it early on a success",
                "They are also immune to my Frightful Presence for the next 24 hours",
                "I must finish a short or long rest after I use this ability once"
            ]),
            usages : 1,
            recovery : "short rest"
        },
        "dragon master" : {
            name : "Dragon Master",
            source : ["SDL:DS"],
            minlevel : 5,
            description : desc([
                "My Advanced Favored Enemy feature can be used with the Dragon Type I didn't use",
                "Dragons have disadv. on saves against any effect I target them with",
                "Dragons have disadv. on attack rolls against me"
            ])
        }
    }
}
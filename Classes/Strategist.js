var iFileName = "The Strategist [Created by TJ Snowden, Transcribed by Seneschal].js";
RequiredSheetVersion(13);

SourceList["TJS:TS"] = {
    name : "TJ Snowden: The Strategist",
    abbreviation : "TJS:TS",
    group : "Dungeon Masters Guild",
    url : "https://www.dmsguild.com/product/208785/Strategist-Class",
    defaultExcluded : true,
    date : "2017/04/01"
};

ClassList["strategist"] = {
    name : "Strategist",
    regExpSearch : /strategist/i,
    source : ["TJS:TS", 1],
    primaryAbility : "Intelligence",
    prereqs : "Intelligence 13",
    die : 8,
    improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    saves : ["Con", "Int"],
    abilitySave : 4,
    skillstxt : {
        primary : "Choose two skills from Athletics, Deception, History, Insight, Investigation, Perception, Persuasion, and Survival",
    },
    armorProfs : {
        primary : [true, true, false, true]
    },
    weaponProfs : {
        primary : [true, true, false]
    },
    toolProfs : [["Gaming Set", 2]],
    equipment : "Strategist starting equipment" +
    "\n \u2022 Scalemail -or- leather armor;" +
    "\n \u2022 A martial weapon and shield -or- a longbow and a quiver of 20 arrows;" +
    "\n \u2022 Two handaxes -or- two daggers;" +
    "\n \u2022 An explorer's pack -or- a diplomat's pack -or- a dungeoneer's pack;" + 
    "\n \u2022 A gaming set of your choice;",
    subclasses : ["Academy of War", []],
    attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    features : {
        "stick to the plan" : {
            name  : "Stick to the Plan",
            source : ["TJS:TS", 2],
            minlevel : 1,
            description : desc([
                "I spend 10 minutes outlining a plan and narrative trigger for successful completion of the plan",
                "I choose up to 6 friendly creatures within 30 ft who can see or hear me and understand me",
                "Each creature adds my Intelligence modifier (min 1) to any ability check enacting the plan",
                "This must be declared before any roll is made and continues until a failed roll or failed plan",
                "I can use this ability once per long rest and all bonuses end as well after a long rest",
                "At 7th level, this bonus applies to saves and automatically to attack rolls at 13th"
            ]),
            usages : 1,
            recovery : "long rest"
        },
        "tactical maneuvers" : {
            name : "Tactical Maneuvers",
            source : ["TJS:TS", 2],
            minlevel : 1,
            description : desc([
                "I can prepare a number of tactics, taking 10 minutes per tactics to prepare them",
                "I spend preparation points to use these strategies a number of times per short/long rest",
                "Some tactics use my Intelligence modifier to calculate attack rolls and DC"
            ]),
            additional : levels.map(function (n){
                return (n < 3 ? 2 : n < 5 ? 3 : n < 7 ? 4 : n < 9 ? 5 : n < 11 ? 6 : n < 13 ? 7 : n < 15 ? 8 : n < 17 ? 9 : n < 19 ? 10 : 11) +
                " Prepared Strategies";
            }),
            limfeaname : "Preparation Points",
            usagescalc : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            recovery : "short rest",
            extraname : "Tactics",
            extrachoices : ["Battlefield Medicine(Prereq: One use of Healer's Kit)", "Battlefield Misdirection", "Battlefield Mobility",
            "Battlefield Stimulants(Prereq: Herbalism Kit)", "Camoflouge(Prereq: Disguise Kit)", "Covering Strikes", "Decoy",
            "Elemental Defense(Prereq: Leatherworker's Tools)", "Escapology(Prereq: Thieves' Tools)",
            "Grenadier(Prereq: Alchemist's Tools + One flask of Alchemist Fire)", "Gadgetry(Prereq: Tinkerer's Tools)", "Guerilla Warfare",
            "Mental Conditioning", "Mind Games", "Order in the Ranks", "Overwatch", "Physical Conditioning", "Sacrifice",
            "Studied Strikes", "Weapon Preparation(Prereq: Smith's Tools)", "With a Little Help"],
            "battlefield medicine(prereq: one use of healer's kit)" : {
                name : "Battlefield Medicine",
                source : ["TJS:TS", 7],
                description : desc([
                    "I expend one use of healer's kit and one prep point to restore 1d6 hp to creature within 5 feet",
                    "I can expend an additional prep point for an extra 1d6 up to a max of 5d6"
                ]),
                action : ["action", ""],
            },
            "battlefield misdirection" : {
                name : "Battlefield Misdirection",
                source : ["TJS:TS", 7],
                description : desc([
                    "1 Prep Point: I grant disadv. to a creature's next attack roll that I hit with a weapon attack",
                    "3 Prep Points: I use my reaction to grant disadv. on a creature's attack roll within 30 feet",
                    "5 Prep Points: I use my reaction to grant disadv. on a creature's saving throw within 30 feet"
                ]),
                action : ["reaction", ""]
            },
            "battlefield mobility" : {
                name : "Battlefield Mobility",
                source : ["TJS:TS", 7],
                description : desc([
                    "Grant to targets within 60 feet",
                    "1 Prep Point per target: targets use reaction to move current speed without opportunity attacks",
                    "3 Prep Points: Target uses reaction to move up to current speed",
                    "If it ends within 5 feet of another creature, they can make a single weapon attack",
                    "If attack hits, the creature must succeed on a Strength save against tactics DC or be prone",
                    "5 Prep Points per target: End grappled, stunned, or incapacitated (not unconscious) condition",
                    "Affected creature are immune to opportunity attacks until the end of their next turn"
                ]),
            },
            "battlefield stimulants(prereq: herbalism kit)" : {
                name : "Battlefield Stimulants",
                source : ["TJS:TS", 7],
                description : desc([
                    "Given to an ally witin 5 feet as an action with herbalism kit",
                    "1 Prep Point: Grant creature adv. on attack rolls and +2 damage to all hits",
                    "Also vulnerable to all damage except psychic for 1 minute",
                    "3 Prep Points: If an ally drops to 0 hp in next hour, they expend a hit die to fall to 1 hp",
                    "Each use doubles the amount of hit dice required until reset after a long rest",
                    "Using this feature means a creature doesn't recover hit dice during their next long rest",
                    "5 Prep Points: Affected creature makes single weapon attack as bonus action at end of turn",
                    "After 1 minute, the affected creature immediately gains one point of exhaustion"
                ]),
                action : ["action", ""],
            },
            "camoflouge(prereq: disguise kit)" : {
                name : "Camoflouge",
                source : ["TJS:TS", 7],
                description : desc([
                    "Requires me to have a disguise kit",
                    "I choose a terrain: arctic, coast, desert, forest, grassland, mountain, swamp, underdark, urban",
                    "The effect lasts for an hour or until target moves to a vastly different terrain type not chosen",
                    "1 Prep Point: After 1 minute, a single creature has advantage on Dexterity (Stealth) checks",
                    "3 Prep Points: After 1 minute, I grant my Int mod a +10 bonus to Dexterity (Stealth) checks",
                    "5 Prep Points: After 1 minute, a single creature is nonmagically invisible",
                    "This effect ends only if the creature attacks or casts a spell"
                ])
            },
            "covering strikes" : {
                name : "Covering Strikes",
                source : ["TJS:TS", 7],
                description : desc([
                    "I spend 1 prep point per creature to let them dodge as a bonus action",
                    "I can give this to any number of creature within 30 feet of me to do on their next turn"
                ]),
                action : ["bonus action", ""]
            },
            "decoy" : {
                name : "Decoy",
                source : ["TJS:TS", 8],
                description : desc([
                    "I can activate this tactic as an action and can only have 1 effect work at a time",
                    "1 Prep Point: Given to a creature within 60 feet of me as an action",
                    "If a creature within 30 feet attacks it, they must make an Int save against Tactics DC",
                    "On a failure, they can't move more than 30 feet away from that target",
                    "Ends if the decoy is incapacitated or unconscious",
                    "3 Prep Points: Given to a creature within 60 feet of me as an action",
                    "Decoy chooses any number of creatures within 30 feet to make Int save against Tactics DC",
                    "On a failure, the creatures have disadv. on attack rolls against anyone except the decoy",
                    "Each affected creature can repeat the save at the end of each of its turns",
                    "On a success, the condition ends as well when the decoy is incapacitated or dies",
                    "5 Prep Points: Given to a creature within 60 feet of me as an action",
                    "Decoy choosese any number of creatures within 30 feet to make Int save against Tactics DC",
                    "On a failure, the creatures use all movement and action to dash to a point I choose in 120 feet",
                    "They won't move into dangerous terrain but the movement does provoke an attack of opportunity"
                ]),
                action : ["action", ""]
            },
            "elemental defense(prereq: leatherworker's tools)" : {
                name : "Elemental Defense",
                source : ["TJS:TS", 8],
                description : desc([
                    "I activate this tactic with 10 minutes of work, any monetary cost, and prep points",
                    "There can only be one effect of this ability at a time and each effect lasts 1 hour",
                    "1 Prep Point: I give this to a creature at the cost of 10 gold pieces",
                    "The creature has adv. on saves to resist fire, cold, lightning, thunder, acid, or poison damage",
                    "3 Prep Points: I give this to a creature at the cost of 30 gold pieces",
                    "The creature has resistance to fire, cold, lightning, thunder, acid or poison damage",
                    "5 Prep Points: I give this to a creature at the cost of 100 gold pieces",
                    "The creature has shielding against fire, cold, lightning, thunder, acid or poison",
                    "This shield has hp to 5 x my Strategist level and if reduced to 0, the creature takes the rest",
                ])
            },
            "escapology(prereq: thieves' tools)" : {
                name : "Escapology",
                source : ["TJS:TS", 8],
                description : desc([
                    "1 Prep Point: I spend an action to end grappled condition on me or a creature within 5 feet",
                    "3 Prep Points: I spend an action to end restrained condition on me or a creature within 5 feet"
                ]),
                action : ["action", ""]
            },
            "grenadier(prereq: alchemist's tools + one flask of alchemist fire)" : {
                name : "Grenadier",
                source : ["TJS:TS", 8],
                description : desc([
                    "1 Prep Point: I use a flask to force a Con save on creatures within a 10 foot radius",
                    "On a failure, they are blinded and deafened until the end of my next turn",
                    "3 Prep Points: I use a flask to force a Con save on creatures within a 10 foot radius",
                    "On a failure, they are stunned up to 1 minute but can repeat the save at the end of their turn",
                    "On a success, if they take damage, or if another creature uses an action, the condition ends"
                ]),
                action : ["action", " (Part of Alchemist Fire attack)"]
            },
            "gadgetry(prereq: tinkerer's tools)" : {
                name : "Gadgetry",
                source : ["TJS:TS", 8],
                description : desc([
                    "1 Prep Point: I can use an item as a bonus action on my turn",
                    "5 Prep Points: During a short or long rest, I can attune to a magical object or scroll",
                    "This works even if I don't fit the requirements of the object until my next short or long rest"
                ]),
                action : ["bonus action", ""]
            },
            "guerilla warfare" : {
                name : "Guerilla Warfare",
                source : ["TJS:TS", 8],
                description : desc([
                    "I use this tactic as an action to grant allies one of the following effects",
                    "1 Prep Point per target: An affected creature begins their turn hidden",
                    "They can also hide as a bonus action as well until this effect ends in 1 minute",
                    "5 Prep Points per target: An affected creature can remain hidden after a melee weapon attack",
                    "They can only be detected by a Search action and their initial Dexterity (Stealth) losing",
                    "to the creature's Wisdom (Perception) check",
                    "This effect ends early if affected creature uses action for other than a single weapon attack",
                    "This effect ends after 1 minute"
                ]),
                action : ["action", ""]
            },
            "mental conditioning" : {
                name : "Mental Conditioning",
                source : ["TJS:TS", 9],
                description : desc([
                    "I use this tactic as a bonus action to grant myself one of the following",
                    "1 Prep Point: I have adv. on saves against my choice of charmed, frightened, or stunned",
                    "This lasts for 1 minute and I also can't be put to sleep by magic for the duration",
                    "3 Prep Points: I have adv. on my choice of Intelligence, Wisdom, or Charisma saves",
                    "This lasts for 1 minute and I also can't be put to sleep by magic for the duration",
                    "5 Prep Points: I am immune to my choice of charmed, frightened, or stunned condition",
                    "This lasts for 1 minute and I also can't be put to sleep by magic for the duration"
                ]),
                action : ["bonus action", ""]
            },
            "mind games" : {
                name : "Mind Games",
                source : ["TJS:Ts", 9],
                description : desc([
                    "When I hit a creature with an attack, I can choose any number of creatures within 15 feet",
                    "For 1 Prep Point per creature, they must make a Wisdom save against my Tactics DC",
                    "On a failure, they are frightened and can repeat their save at the end of each turn",
                    "This condition ends if they succeed their save, I am knocked unconscious or incapacitated",
                    "If this condition ends, they are immune to this tactic for 24 hours"
                ]),
                action : ["action", " (part of Attack)"]
            },
            "order in the ranks" : {
                name : "Order in the Ranks",
                source : ["TJS:TS", 9],
                description : desc([
                    "I spend 1 Prep Point to swap initiative of two willing creatures within 60 feet",
                    "This can only be down after initiative is rolled but before combat begins",
                    "This also swaps the surprised condition between the two targets if possible",
                    "The amount of swaps I can do can be increased by 1 prep point per swap",
                ])
            },
            "overwatch" : {
                name : "Overwatch",
                source : ["TJS:TS", 9],
                description : desc([
                    "I use an action while wielding a range weapon to go into overwatch",
                    "Overwatch ends when I am in melee range of a hostile creature or am moved",
                    "When a creature I see within 60 feet uses their movement, I can attack as a reaction",
                    "Whether the attack hits or not, the creature must make a Wis save against my Tactics DC",
                    "To use a tactic effect, I must spend the prep points before the save is made",
                    "1 Prep Point: On a failed save, the creature has disadv. on next attack roll",
                    "3 Prep Points: On a failed save, the creature is stunned until the end of their next turn",
                    "5 Prep Points: On a failed save, the creature is under the effects of the confusion spell",
                    "The creature can repeat their Wis save at the end of each turn to end the condition"
                ]),
                action : ["action", " (overwatch)"],
                action : ["reaction", " (weapon attack)"]
            },
            "physical conditioning" : {
                name : "Physical Conditioning",
                source : ["TJS:TS", 9],
                description : desc([
                    "I get temp hp equal to my strategist level when I prepare this strategy",
                    "I use this tactic as a bonus action to grant myself one of the following effects for 1 minute",
                    "1 Prep Point: I have adv. on saves against choice of blinded, deafened, paralyzed, or poisoned",
                    "3 Prep Points: I have adv. on my choice of Strength, Dexterity, or Constitution saves",
                    "5 Prep Points: I am immune to my choice of blinded, deafened, paralyzed, or poisoned",
                ])
            },
            "sacrifice" : {
                name : "Sacrifice",
                source : ["TJS:TS", 9],
                description : desc([
                    "I use this tactic when a nonhostile creature within 60 feet is killed or knocked unconscious",
                    "I use my reaction to select a number of creatures equal to the amount of prep points I spend",
                    "If they can see and hear me within 60 feet, they are affected",
                    "They make a single weapon attack against a target of their choice"
                ]),
                action : ["reaction", ""]
            },
            "studied strikes" : {
                name : "Studied Strikes",
                source : ["TJS:TS", 10],
                description : desc([
                    "As a bonus action, I use Intelligence for weapon attacks and damage instead of ",
                    "Strength or Dexterity for 1 hour and 1 Prep Point when I activate this effect",
                    "While this effect is active, I can increase damage for Int weapon attacks for 1d8 per prep point",
                    "This increases up to a max of 5d8 damage and is the same damage as the weapon's"
                ]),
                action : ["bonus action", ""]
            },
            "weapon preparation(prereq: smith's tools)" : {
                name : "Weapon Preparation",
                source : ["TJS:TS", 10],
                description : desc([
                    "I spend 10 minutes and money when I use this tactic to modify a weapon of my choice",
                    "I pick one effect from the following and the weapon receives a -1 penalty to hit",
                    "1 Prep Point: 5 gp material and weapon counts silvered for 1 hour",
                    "3 Prep Points:30 gp material and weapon does fire, cold, lighting, thunder, poison or acid",
                    "This effect lasts for 1 hour",
                    "5 Prep Points: 100 gp material and weapon does fire, cold, lighting, thunder, poison or acid",
                    "It deals an extra 1d8 force, pyschic, necrotic, or radiant damage and the effect lasts for 1 hour"
                ])
            },
            "with a little help" : {
                name : "With a Little Help",
                source : ["TJS:TS", 10],
                description : desc([
                    "I spend 1 prep point and a bonus action to take the help action as a bonus action for 1 hour",
                    "I spend 1 prep point to give another ally adv. against a target when giving it to another ally"
                ]),
                action : ["bonus action", ""]
            }
        },
        "i love it when a plan comes together" : {
            name : "I Love It When a Plan Comes Together",
            source : ["TJS:TS", 3],
            minlevel : 2,
            description : desc([
                "When narrative trigger of Stick to the Plan is completed, regain 1/2 strategist level of prep points",
                "This occurs regardless of if Stick to the Plan bonuses are active and I only regain up to max"
            ]),
            additional : levels.map(function(n){
                return Math.max(1, Math.floor(n/2)) + " Prep Points"
            }),
        },
        "subclassfeature3" : {
            name : "Academy of War",
            source : ["TJS:TS", 3],
            minlevel : 3,
            description : desc([
                "Choose an Academy of War I strive to emulate and put it in the \"Class\" field",
                "Choose either the Academy of Coins, the Academy of Cups, the Academy of Swords, or the Academy of Wands"
            ])
        },
        "battle anaylsis" : {
            name : "Battle Anaylsis",
            source : ["TJS:TS", 3],
            minlevel : 4,
            description : desc([
                "I can spend an action to a study a creature I see or hear within 30 feet of me",
                "I roll an Intelligence (Investigation) check against a DC of 10 + the target's CR",
                "This DC is reduced by 1 for each preparation point spent",
                "I learn the target's current HP and any resistances, immunities or vulnerabilities",
                "11th level: I know its save modifiers, condition immunities, and its senses",
                "18th level: I can see the target akin to truesight for 60 feet and gain +4 to attacks against it"
            ]),
            action : ["action", ""]
        },
        "contingency plan" : {
            name : "Contingency Plan",
            source : ["TJS:TS", 3],
            minlevel : 5,
            description : desc([
                "I roll a d20 at the start of each day and substitute it for any player or DM roll as a reaction",
                "I can substitute it after a die roll is made but before the outcome is determined",
                "I reroll once expended a number of times equal to 1 + 1/4 my strategist level per long rest",
                "This can be negated by abilities that automatically negate a failure"
            ]),
            usagescalc : "event.value = !classes.known.strategist ? '' : (1 + (classes.known.strategist.level)/2);",
            recovery : "long rest",
            action : ["reaction", ""]
        },
        "just one more thing..." : {
            name : "Just One More Thing...",
            source : ["TJS:TS", 3],
            minlevel : 9,
            description : desc([
                "If I converse with a creature in a language we both understand for one minute, I can make",
                "an Intelligence (Investigation) check instead of Wisdom (Insight) to assess true intentions",
                "or discover deception"
            ])
        },
        "it's a trap!" : {
            name : "It's A Trap!",
            source : ["TJS:TS", 4],
            minlevel : 10,
            description : desc([
                "I have advantage on Int saves and Intelligence (Investigation) checks to discern illusions,",
                "disguises, or bluffs of any times but I must not be blind, deafened, or incapacitated"
            ]),
            savetxt : {
                adv_vs : ["illusions", "disguises", "bluffs"]
            }
        },
        "ambush expertise" : {
            name : "Ambush Expertise",
            source : ["TJS:TS", 4],
            minlevel : 15,
            description : desc([
                "I make 40-foot cube primed for a surprise in 1 minute",
                "Any creature that enters makes a Int save on top of Wisdom (Perception)",
                "I can spend my reaction and 10 Prep points to all hits against 1 creature deal max damage",
                "This lasts until the end of the surprise rounds"
            ]),
            action : ["action", ""]
        },
        "checkmate" : {
            name : "Checkmate",
            source : ["TJS:TS", 4],
            minlevel : 20,
            description : desc([
                "As an action and 10 prep points, I force any creatures within 60 feet to make an Int save",
                "On a failure, the creature is surprised and cannot move, act, or react",
                "This lasts until their turn in that round ends"
            ])
        }
    }
}
AddSubClass("strategist", "academy of swords", {
    regExpSearch : /academy of swords/i,
    subname : "Academy of Swords",
    source : ["TJS:TS", 4],
    attacks : [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    features : {
        "subclassfeature3" : {
            name : "Bonus Proficiency",
            source : ["TJS:TS", 4],
            minlevel : 3,
            description : desc([
                "I am proficient with heavy armor"
            ]),
            armorProfs : {
                primary : [true, true, true, true],
                secondary : [true, true, true, true]
            }
        },
        "ssubclassfeature3.1" : {
            name : "Squad Tactics",
            source : ["TJS:TS", 4],
            minlevel : 3,
            description : desc([
                "When I hit a creature with a melee weapon attack, an ally's next attack roll has advantage",
                "This excludes myself and ends after the end of my next turn"
            ])
        },
        "subclassfeature14" : {
            name : "Counterstrike",
            source : ["TJS:TS", 4],
            minlevel : 14,
            description : desc([
                "When I take damage from a creature within 5 feet of me, I can expend a reaction",
                "An ally within 60 feet who can see and hear me can make a single weapon attack against that creature"
            ]),
            action : ["reaction", ""]
        }
    }
});
AddSubClass("strategist", "academy of cups", {
    regExpSearch : /academy of cups/i,
    subname : "Academy of Cups",
    source : ["TJS:TS", 4],
    features : {
        "subclassfeature3" : {
            name : "Always Prepared",
            source : ["TJS:TS", 4],
            minlevel : 3,
            description : desc([
                "I add my Intelligence modifier to Initiative rolls and can't be surprised",
                "I can use an action to swap a prepared tactic for another once per long rest"
            ]),
            action : ["action", " (swap)"],
            recovery : "long rest",
            addMod : [
                { type : "skill", field : "Init", mod : "Int", text : "I can add my Intelligence modifier to initiative rolls." }
            ]
        },
        "subclassfeature3.1" : {
            name : "The Right Tool for The Job",
            source : ["TJS:TS", 4],
            minlevel : 3,
            description : desc([
                "I can retroactivtely purchase any number of items for twice their normal price in the PHB",
                "The total cost can't be more than 5 x my Strategist level"
            ]),
            recovery : "short rest",
            action : ["action", ""],
            additional : levels.map(function(n){
                return (n*5) + " gold spent";
            })
        },
        "subclassfeature6" : {
            name : "The Measure of My Foe",
            source : ["TJS:TS", 4],
            minlevel : 6,
            description : desc([
                "I gain 1/2 my strategist level prep points when facing an enemy I've fight, studied or played against",
                "Any creature with an Intelligence score less than 1/2 of my own automatically give me this bonus"
            ]),
            additional : levels.map(function(n){
                return Math.floor(n/2) + " prepration points";
            })
        },
        "subclassfeature14" : {
            name : "A Quick Fix",
            source : ["TJS:TS", 5],
            minlevel : 14,
            description : desc([
                "I can get temporary proficiency with one tool or kit of my choice as a bnous action",
                "This proficiency lasts for 1 hour and can use this ability once per long rest",
                "I can improvise any object in 10 minutes as if using the fabricate spell",
                "This object is nonmagical and cannot be dispeleld but encurs a -2 attack penalty",
                "It can make makeshift tools or kit that can be used for one ability check or one tactic"
            ]),
            recovery : "long rest",
            action : ["bonus action", ""]
        }
    }
});
AddSubClass("strategist", "academy of coins", {
    regExpSearch : /academy of coins/i,
    subname : "Academy of Coins",
    source : ["TJS:TS", 5],
    features : {
        "subclassfeature3" : {
            name : "Sidekick",
            source : ["TJS:TS", 5],
            minlevel : 3,
            description : desc([
                "I can now recruit a companion as a sidekick. See Notes page for more details"
            ]),
            toNotesPage : [{
                name : "Sidekick Rules",
                note : [
                    "I can recruit an NPC in a settlement of at least 200 people, spending 8 hours and 50 gp",
                    "The NPC has the statistics of the guard or a 1/8 CR creature the DM allows without racial traits",
                    "I can choose appearance, race, and name but the DM has final say on any choices based off the area",
                    "Once recruited, my companion gains all benefits of the command feature and any previous ASIs",
                    "My sidekick can choose to leave if mistreated or endangered too much and can be slain in battle",
                    "If I lose my sidekick in any way, I can repeat this feature to gain a new one"
                ],
                popupName : "Sidekick Rules",
                source : ["TJS:TS", 5]
            }]
        },
        "subclassfeature3.1" : {
            name : "Command",
            source : ["TJS:TS", 5],
            minlevel : 3,
            description : desc([
                "My sidekick gains an number of benefits when recruited. See Notes page for more details"
            ]),
            toNotesPage : [{
                name : "Command Rules",
                note : [
                    "My sidekick obeys my commands as best as they can and roll their own initiative",
                    "If I am incapacitated or absent, my sidekick acts on their own under the control of the DM",
                    "My sidekick uses my proficiency bonus as I gain levels rather than their own",
                    "They gain proficiency in two skills and a language of my choice when they are first recruited",
                    "They gain proficiency in all armors, simple and martial weapons, and two saves of my choice",
                    "For every level after 3rd, they gain an extra hitdie and 1d8 (or 5) + Con modifier hit points",
                    "When I gain an Ability Score Improvement, they gain one as well, up to a max of 20 per stat",
                    "My sidekick can use any equpiment they fit the requirements for and can attune to 3 magic items",
                    "While within 60 feet of me and able to hear me, they add my Cha modifier to their damage rolls",
                    "And add my Cha modifier to saves against being charmed or frightened"
                ],
                popupName : "Command Rules",
                source : ["TJS:TS", 5]
            }]
        },
        "subclassfeature6" : {
            name : "Combined Attack",
            source : ["TJS:TS", 5],
            minlevel : 6,
            description : desc([
                "If I use Attack action, my companion can use my reaction to make a melee weapon attack"
            ]),
            action : ["reaction", ""]
        },
        "subclassfeature14" : {
            name : "Bodyguard",
            source : ["TJS:TS", 5],
            minlevel : 14,
            description : desc([
                "If a creature takes damage in 5 feet of my companion, they can use reaction to take it instead",
                "This damage cannot be reduced in any way"
            ]),
            action : ["reaction", ""]
        }
    }
});
AddSubClass("strategist", "academy of wands", {
    regExpSearch : /academy of wands/i,
    subname : "Academy of Wands",
    source : ["TJS:TS", 5],
    spellcastingFactor : 3,
    spellcastingAbility : 4,
    spellcastingTable : [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[1, 0, 0, 0, 0, 0, 0, 0, 0],
		[1, 0, 0, 0, 0, 0, 0, 0, 0],
		[1, 0, 0, 0, 0, 0, 0, 0, 0],
		[1, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 0, 0, 0, 0, 0, 0, 0], 
		[0, 1, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0, 0, 0, 0, 0],
		[0, 0, 1, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 1, 0, 0, 0, 0, 0],
		[0, 0, 0, 1, 0, 0, 0, 0, 0],
		[0, 0, 0, 1, 0, 0, 0, 0, 0],
		[0, 0, 0, 1, 0, 0, 0, 0, 0]
    ],
    spellcastingKnown : {
        cantrips : [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        spells : [0, 0, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 10, 11, 11, 11, 12, 13]
    },
    spellcastingList : {
        class : "wizard",
        school : ["Div", "Trans"],
        level : [0, 4],
    },
    extraLimitedFeatures : [{
        name : "Slot Preparation Points",
        usagescalc : levels.map(function(n){
            return n < 4 ? 2 : n < 7 ? 3 : n < 10 ? 8 : n < 13 ? 10 : n < 16 ? 16 : n < 19 ? 19 : 23;
        }),
        recovery : "long rest"
    }],
    features : {
        "subclassfeature3" : {
            name : "Spellcasting",
            source : ["TJS:TS", 6],
            minlevel : 3,
            description : desc([
                "I can cast known wizard cantrips/spells, using Intelligence as my spellcasting ability",
            ]),
            spellcastingBonus : {
				name : "From any School",
				"class" : "wizard",
				times : [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3],
				level : [1, 4],
            },
            additional : levels.map(function(n){
                additional : ["", "", "2 cantrips \u0026 3 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 5 spells known", "2 cantrips \u0026 6 spells known", "3 cantrips \u0026 6 spells known", "3 cantrips \u0026 7 spells known", "3 cantrips \u0026 8 spells known", "3 cantrips \u0026 9 spells known", "3 cantrips \u0026 10 spells known", "3 cantrips \u0026 10 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 12 spells known", "3 cantrips \u0026 13 spells known"]
            })
        },
        "subclassfeature3.1" : {
            name : "Tactical Casting",
            source : ["TJS:TS", 6],
            minlevel : 3,
            description : desc([
                "I use my slot preparation points to create spell slots as needed when casting a spell",
                "I can only cast a spell equal to or less than the max spell slot level I have access to",
                "I can also use my normal preparation points to create spell slots as well",
                "I can only get slot points back after a long rest and normal after a short rest",
                "1st level Spell Slot: 1 Point",
                "2nd level Spell Slot: 2 Point",
                "3rd level Spell Slot: 3 Point",
                "4th level Spell Slot: 4 Point"
            ])
        },
        "subclassfeature6" : {
            name : "Duplication",
            source : ["TJS:TS", 6],
            minlevel : 6,
            description : desc([
                "I expend 1 prep point in a 1 minute ritual to duplicate an object within 30 feet",
                "The object can't be larger than 10 feet in any direction",
                "The object is an exact copy with no magical properties of the item being copied",
                "I must expend materials of an equal worth to the original object",
                "If I duplicate a creature, I make a lifelike waxwork at a cost of 50 gp",
                "I can only do this once per long rest"
            ]),
            recovery : "long rest",
            usages : 1
        },
        "subclassfeature14" : {
            name : "Deadly Premonition",
            source : ["TJS:TS", 6],
            minlevel : 14,
            description : desc([
                "As a reaction, I turn a critical hit on an ally within 30 feet or me into a normal  hit",
                "I can only do this once per short or long rest"
            ]),
            recovery : "short rest",
            action : ["reaction", ""],
            usages : 1
        }
    }
});
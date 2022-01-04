var iFileName = "Psi Knight [Created by Wizards of the Coast, Transcribed by Seneschal].js";
RequiredSheetVersion(13);

SourceList["UA:POR"] = {
	name : "Unearthed Arcana: Psionic Options Revisited",
	abbreviation : "UA:POR",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2020/dnd/downloads/UA2020_PsionicOptions.pdf",
	date : "2020/04/14"
};

AddSubClass("fighter", "psi knight", {
    regExpSearch : /^(?=.*psi)(?=.*knight).*$/i,
    subname : "Psi Knight",
    source : ["UA:POR", 2],
    abilitySave : 4,
    spellcastingAbility : 4,
    features : {
        "subclassfeature3" : {
            name : "Psionic Talent",
            source : ["UA:POR", 2],
            minlevel : 3,
            additional : levels.map(function(n) {
                return "Starting Psionic Talent Die: 1d" + (n < 5 ? 6 : n < 11 ? 8 : n < 17 ? 10 : 12);
            }),
            description : desc([
                "I use my Psionic Talent die (Psi Die) to use Psionic Talents",
                "On max roll, the size decreases (d6 to d4) and a roll of 1, it increases to start (d6 to d8)",
                "On a roll of 4 on a d4, I can't use the die again until I finish a long rest",
                "As a bonus action, I can restore the die to its starting size once per long rest",
                "Psi DC for my Psionic Talents is 8 + proficiency mod + my Intelligence modifier",
                "See the notes sheet for Psionic Talents"
            ]),
            action : [
                ["bonus action", "Psi Replenishment"],
                ["reaction", "Proctective Field"]
            ],
            extraLimitedFeatures : {
                name : "Psi Replenishment",
                usages : 1, 
                recovery : "long rest",
            },
            toNotesPage : {
                name : "Psi Knight Psionic Talents",
                note : [
                    "\u2022 Protective Field",
                    "   I reduce damage taken by me or creature I see within 30 feet as a reaction",
                    "   Reduce equals number rolled on Psi Die + my Int modifier (min 1)",
                    "\u2022 Psi-Powered Leap",
                    "   I extend the distance of a high or long jump with extra 1 foot movement cost",
                    "   Extend equals twice number rolled on Psi Die + twice my Int modifier (min 1)",
                    "\u2022 Telekinetic Strike",
                    "   I deal extra force damage to a target I damaged with a weapon within 30 feet",
                    "   Damage equals number rolled on Psi Die and I can only do this once per turn"
                ],
                popUpName : "Psi Knight Psionic Talents Part 1",
                source : ["UA:POR", 2],
            }
        },
        "subclassfeature7" : {
            name : "Tekelkinetic Adept",
            source : ["UA:POR", 3],
            minlevel : 7,
            description : "",
            action : [
                ["action", "Telekinetic Movement"]
            ],
            toNotesPage : {
                name : "Psi Knight Telekinetic Adept",
                note : [
                    "\u2022 Psionic Thrust",
                    "   When I damage a target with Telekinetic Strike, I force a strength save vs DC",
                    "   On failure, target is knocked prone and moved 10 feet in horizontal direction",
                    "\u2022 Telekinetic Movement",
                    "   I move a Large or smaller object or creature other than me within 30 feet",
                    "   As an action, I move it up to 30 feet to an unoccupied space I can see",
                    "   If the object is Tiny, I can move it to and from my hand",
                    "   The target can be moved horizontally, vertically, or both",
                    "   My Talents die is reduced by one die size when I take this action"
                ],
                popUpName : "Psi Knight Psionic Talents Part 2",
                amendTo : "Psi Knight Psionic Talents",
                source : ["UA:POR", 2],
            }
        },
        "subclassfeature10" : {
            name : "Psi-Enhanced Metabolism",
            source : ["UA:POR", 3],
            minlevel : 10,
            description : desc([
                "I am resistant to poison and psychic damage and am immune to the poisoned condition"
            ]),
            dmgres : ["Poison", "Psychic"],
            savetxt : {
                immune : ["poisoned"]
            }
        },
        "subclassfeature15" : {
            name : "Bulwark of Force",
            source : ["UA:POR", 3],
            minlevel : 15,
            description : desc([
                "I choose number of creatures including me equal to my Int mod within 30 feet (min 1)",
                "Each creature is protected by half cover for 1 minute or until I am incapacitated",
                "I regain all uses after I finish a long rest or reduce my Talent die by one die size"
            ])
        },
        "subclassfeature18" : {
            name : "Telekinetic Master",
            soruce : ["UA:POR", 3],
            minlevel : 18,
            description : desc([
                "I can cast the telekinesis spell if my Talent die is available",
                "My ability for the spell is Intelligence and it requires no components to cast",
                "When I cast the spell, my Psi die decreases by 1 die size"
            ]),
            spellcastingBonus : {
                name : "Telekinetic Master",
                spells : "telekinesis",
                selection : ["telekinesis"],
                firstCol : "oncelr"
            }
        }
    }
});
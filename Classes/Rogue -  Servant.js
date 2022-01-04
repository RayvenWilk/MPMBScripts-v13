var iFileName = "Roguish_Archtype_Servant.js";
RequiredSheetVersion(13);
 
// Define the source
SourceList["Homebrew"] = {
    name : "Justin's Homebrew",
    abbreviation : "Homebrew",
    group : "Primary Sources",
};
 
 
AddSubClass("rogue", "servant", {
    regExpSearch: /^(?=.*(rogue))(?=.*(servant)).*$/i,
    subname: "Servant",
    source: ["Homebrew"],
    fullname : "Servant",
    features: {
        "subclassfeature3": {
            name: "Servant's Apparel",
            source: ["Homebrew"],
            minlevel: 3,
            description: desc([
                "When I use a disguise kit to blend in as a servant, I have advantage on Deception and Persuasion checks made to keep my disguise from being discovered.",
                "Additionally, I gain proficiency with disguise kits.",
                ]),
            toolprofs : ["Disguise kit"],   
        },
        "subclassfeature3.1": {
            name: "Master's Bond",
            source : ["Homebrew"],
            minlevel: 3,
            description: desc([
                "As a 10 minute ritual I can bond with one creature as my Master and gain the following:",
                "My Master and I can sense each other's emotions when within 120 feet of each other.",
                "If an enemy attacks my master within my melee attack reach attacks my master, I can use my reaction to make a melee attack against that creature.", 
                "Additionally if the target is no more than one size category larger than me I can force it to make a Str Save vs DC (8+prof bonus+dex or str, whichever is higher)",
                "to avoid being pushed 10 feet away from my Master.",
                "I cannot be bonded to more than one Master at a time, and bonding to a new Master servers my connection with the previous Master.",
            ]),
            action: [["reaction", ""]],
        },
        "subclassfeature9": {
            name: "Live to Serve",
            source : ["Homebrew"],
            minlevel: 9,
            description: desc([
                "During a short rest, if my Master spends hit dice to restore health I can heal them an additional amount equal to half my sneak attack dice",
                "Additionally, I can use my full sneak attack dice at 17th level"
            ]),
        },
        "subclassfeature13": {
            name: "Not On My Watch",
            source : ["Homebrew"],
            minlevel: 13,
            description: desc([
                "When using the Master's Bond feature to attack an enemy attacking my Master, I can choose to become the target of the enemy's attack instead",
                "Moreover, if the enemy misses me, I can still attack them and impose a save to push them back as normal"
            ]),
        },
        "subclassfeature17": {
            name: "Undying Loyalty",
            source : ["Homebrew"],
            minlevel: 17,
            description: desc([
                "If I were to fall to 0 hp within 30 feet of my Master, I am reduced to 1 hp instead",
                "Additionall, I become immune to all damage until the end of my next turn."
            ]),
            usages : 1,
            recovery : "long rest",
        },
    },
});

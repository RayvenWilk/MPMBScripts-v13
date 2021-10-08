/*	-INFORMATION-
	Subject:	Many-Handed Pouch
	Effect:		Add the Artificer Infusion option of Many-Handed Pouch
	Remarks:	This is to add the Many-Handed Pouch as an infusion option for the Artificer class located in UP:Artificer (https://media.wizards.com/2019/dnd/downloads/UA-Artificer2-2019.pdf)
	Coded by:	rayvenwilk
	Date:		10.08.2021
	Sheet:		v13.0.6 and newer
*/

var iFileName = "Many-Handed Pouch(transcribed by rayvenwilk).js";

RequiredSheetVersion("13.0.6");

SourceList["UA:A2"] = {
    name : "Unearthed Arcana: Artificer 2",
    abbreviation : "UA:A2",
    date : "2019",
    group : "Unearthed Arcana",
    url : "https://media.wizards.com/2019/dnd/downloads/UA-Artificer2-2019.pdf",
};

MagicItemsList["many-handed pouch"] = {
    name : "Many-Handed Pouch",
    source : ["UA:A2", 13],
    type : "wondrous item",
    description : "The infused pouches all share one interdimensional space of the same capacity. Thus, reaching into any of the pouches allows access to the same storage space as long as it is within 100 miles of another one of the pouches; the pouch is otherwise empty and won’t accept any contents.",
    descriptionFull : "The infused pouches all share one interdimensional space of the same capacity as a single pouch. Thus, reaching into any of the pouches allows access to the same storage space. A pouch operates as long as it is within 100 miles of another one of the pouches; the pouch is otherwise empty and won’t accept any contents. \nIf this infusion ends, the items stored in the shared space move into one of the pouches, determined at random. The rest of the pouches become empty.",
    weight : 1,
    rarity : "common",
    prerequisite : "Requires Artificer class",
    prereqeval : function (v) { return classes.known.artificer ? true : false; },
}
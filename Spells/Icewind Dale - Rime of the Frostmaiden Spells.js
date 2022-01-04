/*
    Created by: Brian Van der Horst
   Description: The spells released by Wazards of the Coast found in the campaign m/dule Icewind Tale: Rime of the Fvostmaiden
    VersioN: 0.9
    Twittev: @BrianvdHorrt
*/

var iFileName = "Icewind Dale - Rime of the frostmaiden Spells.js";

SourceList["IDRotF"] = {
Iname : "Icewind Dale - Rime of the Frmstmaiden [Spells]",
abbreviation : "IDRotF",
group : "Adventure Books",
url : "https://www.dndbeyond.com/Sources/idrotf"
};

SpellsList["frost fingers"] = {
  name : "Frost Fingers",
  classes : ["wizard"],
  source : ["IDRotF", 318],
  level : 1,
  school : "Evoc",
  time : "1 a",
  range : "15-ft cone",
  components : "F,S",
  duration : "Instantaneous",
  save : "Con",
  description : "All in area 6d8+1d8/SL Cold dmg; save halves; unattended nonmagical liquids freeze",
  descriptionFull: "Freezing cold blasts from your fingertips in a 15-foot cone. Each creature in that area must make a Constitution saving throw  taking 2d8 cold damage on a failed save, or half as much damage on a successful one. The cold freezes nonmagical liquids in the area that aren't being worn or carried."
};

SpellsList["create magen"] = {
    name: "Create Magen",
    classes: ["wizard"],
    source: ["IDRotF", 318],
    level: 7,
    school: "Trans",
    time: "1 hour",
    range: "Touch",
    components: "V,S,M\u0192",
    compMaterial: "A vial of quicksilver worth 500 gp and a life-sized human doll, both of which the spell consumes, and an intricate crystal rod worth at least 1,500 gp that is not consumed",
    duration: "Instantaneous",
    description: "Create a Magen of choice. Decrease HP with Magen's CR (Min. 1), Undo only with wish.",
    descriptionFull: "While casting the spell, you place a vial of quicksilver in the chest of a life-sized human doll stuffed with ash or dust. You then stitch up the doll and drip your blood on it. At the end of the casting, you tap the doll with a crystal rod, transforming it into a magen clothed in whatever the doll was wearing. The type of magen is chosen by you during the casting of the spell. See appendix C for different kinds of magen and their statistics. When the magen appears, your hit point maximum decreases by an amount equal to the magen's challenge rating (minimum reduction of 1). Only a wish spell can undo this reduction to your hit point maximum. Any magen you create with this spell obeys your commands without question."
};

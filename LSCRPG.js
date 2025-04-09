import LSCRPGActorSheet from "./module/sheets/LSCRPGActorSheet.js"

Hooks.once("init", function () {
    console.log("LSCRPG | Initialising Leovaunt Starcraft System");

    
    Actors.registerSheet("LSCRPG", LSCRPGActorSheet, { makeDefault: true });
});


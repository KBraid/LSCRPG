import config from "../config.js";

/**
 * @extends {ActorSheet}
 */


const { api, sheets  } = foundry.applications;
export default class LSCRPGActorSheet extends api.HandlebarsApplicationMixin(sheets.ActorSheetV2) {
static PARTS = {
     form: {
         template: "systems/LSCRPG/templates/sheets/actor-sheet.hbs",
         width: 800,
         height: 1000,
         tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "features" }]
        } 
    }
};

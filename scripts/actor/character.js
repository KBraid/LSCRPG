export default class StarcraftCharacterSheet extends ActorSheet {
    getData() {
        const data = super.getData();
        data.stats = this.actor.system.stats;
        data.skills = this.actor.items.filter(i => i.type === "skill");
        data.equipment = this.actor.items.filter(i => i.type === "weapon" || i.type === "armor");
        data.powers = this.actor.items.filter(i => i.type === "power");
        return data;
    }
}

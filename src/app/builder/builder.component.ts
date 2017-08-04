import { Component } from '@angular/core';
import { CapitalizePipe } from '../pipes/capitalize.pipe';

@Component({
    selector: 'builder-component',
    templateUrl: './builder.component.html',
    styleUrls: ['../app.component.scss']
})
export class BuilderComponent {
    races = [
        { race: "human", subraces: [] },
        { race: "kol", subraces: [ "barren kol" ] },
        { race: "neem", subraces: [] },
        { race: "voe'er", subraces: [] },
        { race: "reiandi", subraces: [ "arctic reiandi", "island reiandi"] },
        { race: "bakeh", subraces: [ "mt. nuuney bakeh" ] }
    ];
    classes = [ "cognit", "knights", "bulwark", "striker", "portent" ];
    skills = [
        { skill: "acrobatics", trait: "dexterity" },
        { skill: "animal handling", trait: "wisdom" },
        { skill: "technology", trait: "intelligence" },
        { skill: "athletics", trait: "strength" },
        { skill: "deception", trait: "charisma" },
        { skill: "history", trait: "intelligence" },
        { skill: "insight", trait: "wisdom" },
        { skill: "intimidation", trait: "charisma" },
        { skill: "investigation", trait: "intelligence" },
        { skill: "medicine", trait: "wisdom" },
        { skill: "nature", trait: "intelligence" },
        { skill: "perception", trait: "wisdom" },
        { skill: "performance", trait: "charisma" },
        { skill: "persuasion", trait: "charisma" },
        { skill: "religion", trait: "intelligence" },
        { skill: "sleight of hand", trait: "dexterity" },
        { skill: "stealth", trait: "dexterity" },
        { skill: "survival", trait: "wisdom" },
        { skill: "vehicle piloting", trait: "dexterity" }
    ];
    abilityScores = [ "strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma" ];
    alignment1 = ["lawful", "neutral", "chaotic"];
    alignment2 = ["good", "neutral", "evil"];
}

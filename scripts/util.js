import { MODULE, DEATH_ICON_FILENAME } from "./const.js"
import { registerSettings } from "./settings.js"



// Modification icone DEAD
export async function updateDeathIcon(iconFileName) {
  console.log("---------- updateDeathIcon");

  // Recherche Index Icon
  let effectIndex = CONFIG.statusEffects.findIndex(t => t.id === 'dead');

  // Modification Icon DEAD
  if ((effectIndex !== -1) && (iconFileName !== "")) {
    CONFIG.statusEffects[effectIndex].icon = iconFileName;
  }
  console.log("---------- *updateDeathIcon");
}


// FORCAGE Options Ruleset
export async function updateRulesetOptions() {
  console.log("---------- updateRulesetOptions");
  
  if (game.settings.get('CoC7', 'overrideSheetArtwork')) {
    game.settings.set('CoC7', 'artworkSheetImage', "null");                     //url('./assets/images/tentacles.webp')
    game.settings.set('CoC7', 'artWorkSheetBackground', "null");                //url('./assets/images/background.webp') 4 repeat
    //game.settings.set('CoC7', 'artWorkOtherSheetBackground', "null");           //url( './assets/images/background.webp')
    /*
    game.settings.set('CoC7', 'artworkFrontColor', "rgba(127,0,0,1)");          //rgba(43,55,83,1)
    game.settings.set('CoC7', 'artworkBackgroundColor', "rgba(127,0,0,1)");     //rgba(43,55,83,1)
    game.settings.set('CoC7', 'artworkInteractiveColor', "rgba(127,0,0,1)");    //rgba(103,11,11,1)
  */
  }

  console.log("---------- *updateRulesetOptions");
}







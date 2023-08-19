import { MODULE,DEATH_ICON_FILENAME } from "./scripts/const.js"
import { registerSettings } from "./scripts/settings.js"
import { updateDeathIcon, updateRulesetOptions } from "./scripts/util.js"



Hooks.once('init', async function () {
  registerSettings();
});

Hooks.on('ready', async function () {
  let fvttVersion = parseInt(game.version);
  let system = game.system.id;

  console.log("======================= Coc7 JMN ========================");
  console.log(" FoundryVTT Version:", fvttVersion);
  console.log(" System:", system);
  console.log("* READY * READY * READY * READY * READY * READY * READY *");

  //CONFIG.debug.hooks = true;


  // MAJ Icone de Mort
  let iconFileName = game.settings.get(MODULE, "deathIcon");
  updateDeathIcon(iconFileName);

  // FORCAGE Options Ruleset
  updateRulesetOptions();
});


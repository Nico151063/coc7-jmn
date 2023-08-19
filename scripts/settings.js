import { MODULE, DEATH_ICON_FILENAME } from "./const.js"
import { updateDeathIcon } from "./util.js"


export function registerSettings() {

    game.settings.register(MODULE, "deathIcon", {
        name: "COC7JMN.Settings.deathIcon.Name",
        scope: 'world',
        config: true,
        type: String,
        filePicker: "image",
        default: DEATH_ICON_FILENAME,
        onChange: value => {
            updateDeathIcon(value);
        },
    })
}

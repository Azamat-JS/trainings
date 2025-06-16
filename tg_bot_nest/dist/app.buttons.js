"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionButtons = actionButtons;
const telegraf_1 = require("telegraf");
function actionButtons() {
    return telegraf_1.Markup.keyboard([
        ['List of tasks'],
        ['Get one Task'],
        ['✅ Completed']
    ])
        .resize().oneTime(true);
}
//# sourceMappingURL=app.buttons.js.map
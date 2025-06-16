import { Markup } from "telegraf";

export function actionButtons(){
    return Markup.keyboard([
        ['List of tasks'],
        ['Get one Task'],
        ['✅ Completed']
    ])
    .resize().oneTime(true)
}


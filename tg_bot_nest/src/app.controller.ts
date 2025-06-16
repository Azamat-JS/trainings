import { Action, Command, Ctx, Hears, Message, On, Start, Update } from "nestjs-telegraf";
import { AppService } from "./app.service";
import { Markup } from "telegraf";
import { actionButtons } from "./app.buttons";
import { showTasks } from "./app.utils";
import { Context } from "./app.interface";

const tasks = [
  {id: 1, name: 'Reading', isCompleted: true},
  {id: 2, name: 'Playing', isCompleted: false},
  {id: 3, name: 'Writing', isCompleted: true},
]

@Update()
export class AppUpdate {
  constructor(private readonly appService: AppService) {}

  @Start()
  async startCommand(ctx: Context) {
    await ctx.reply(`Hi ${ctx.from?.first_name}, \n\nWelcome to chat_bot!`, actionButtons());
  }

  @Command("help")
  async helpCommand(ctx: Context) {
    await ctx.reply(
      `📋 Available commands:\n/start - Start bot\n/help - Show this help\n/info - Info about bot`
    );
  }

  @Hears('List of tasks')
  async handleTasks(ctx: Context){
    await ctx.reply(`Your tasks: \n\n ${tasks.map(task => 
    (task.isCompleted ? '✅' : '📍') + ' ' + task.name + '\n\n'
    ).join('')}`)
  }

  @Command('mytasks')
  async handleUserTasks(ctx: Context){
    await ctx.replyWithHTML('<i>Do you want to get your all tasks?</i>', Markup.inlineKeyboard([
      Markup.button.callback('Yes I want', 'yes'),
      Markup.button.callback('No I don`t', 'no')
    ]))
  }

  @Action('yes')
 async handleYes(ctx: Context){
  await ctx.reply(showTasks(tasks))
 }

  @Action('no')
 async handleNo(ctx: Context){
  await ctx.replyWithHTML(`<strong>Ok</strong>, <i>Take Care</i>`)
 }

 @Hears('✅ Completed')
 async handleCompleted(ctx: Context){
  ctx.session.type = 'done'
  await ctx.reply('Write task ID: ')
 }

 @On('text')
 async getMessage(@Message('text') message: string, @Ctx()ctx: Context){
  if(!ctx.session.type) return;

  if(ctx.session.type === 'done'){
    const task = tasks.find(t => t.id === Number(message))

    if(!task){
      await ctx.deleteMessage()
      await ctx.reply(`Task with id: ${message} not found`)
      return
    }

    task.isCompleted = !task.isCompleted;
    await ctx.reply(showTasks(tasks))
  }
 }
}

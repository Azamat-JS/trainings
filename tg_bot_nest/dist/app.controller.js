"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUpdate = void 0;
const nestjs_telegraf_1 = require("nestjs-telegraf");
const app_service_1 = require("./app.service");
const telegraf_1 = require("telegraf");
const app_buttons_1 = require("./app.buttons");
const app_utils_1 = require("./app.utils");
const tasks = [
    { id: 1, name: 'Reading', isCompleted: true },
    { id: 2, name: 'Playing', isCompleted: false },
    { id: 3, name: 'Writing', isCompleted: true },
];
let AppUpdate = class AppUpdate {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    async startCommand(ctx) {
        await ctx.reply(`Hi ${ctx.from?.first_name}, \n\nWelcome to chat_bot!`, (0, app_buttons_1.actionButtons)());
    }
    async helpCommand(ctx) {
        await ctx.reply(`📋 Available commands:\n/start - Start bot\n/help - Show this help\n/info - Info about bot`);
    }
    async handleTasks(ctx) {
        await ctx.reply(`Your tasks: \n\n ${tasks.map(task => (task.isCompleted ? '✅' : '📍') + ' ' + task.name + '\n\n').join('')}`);
    }
    async handleUserTasks(ctx) {
        await ctx.replyWithHTML('<i>Do you want to get your all tasks?</i>', telegraf_1.Markup.inlineKeyboard([
            telegraf_1.Markup.button.callback('Yes I want', 'yes'),
            telegraf_1.Markup.button.callback('No I don`t', 'no')
        ]));
    }
    async handleYes(ctx) {
        await ctx.reply((0, app_utils_1.showTasks)(tasks));
    }
    async handleNo(ctx) {
        await ctx.replyWithHTML(`<strong>Ok</strong>, <i>Take Care</i>`);
    }
    async handleCompleted(ctx) {
        ctx.session.type = 'done';
        await ctx.reply('Write task ID: ');
    }
    async getMessage(message, ctx) {
        if (!ctx.session.type)
            return;
        if (ctx.session.type === 'done') {
            const task = tasks.find(t => t.id === Number(message));
            if (!task) {
                await ctx.deleteMessage();
                await ctx.reply(`Task with id: ${message} not found`);
                return;
            }
            task.isCompleted = !task.isCompleted;
            await ctx.reply((0, app_utils_1.showTasks)(tasks));
        }
    }
};
exports.AppUpdate = AppUpdate;
__decorate([
    (0, nestjs_telegraf_1.Start)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppUpdate.prototype, "startCommand", null);
__decorate([
    (0, nestjs_telegraf_1.Command)("help"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppUpdate.prototype, "helpCommand", null);
__decorate([
    (0, nestjs_telegraf_1.Hears)('List of tasks'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppUpdate.prototype, "handleTasks", null);
__decorate([
    (0, nestjs_telegraf_1.Command)('mytasks'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppUpdate.prototype, "handleUserTasks", null);
__decorate([
    (0, nestjs_telegraf_1.Action)('yes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppUpdate.prototype, "handleYes", null);
__decorate([
    (0, nestjs_telegraf_1.Action)('no'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppUpdate.prototype, "handleNo", null);
__decorate([
    (0, nestjs_telegraf_1.Hears)('✅ Completed'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppUpdate.prototype, "handleCompleted", null);
__decorate([
    (0, nestjs_telegraf_1.On)('text'),
    __param(0, (0, nestjs_telegraf_1.Message)('text')),
    __param(1, (0, nestjs_telegraf_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppUpdate.prototype, "getMessage", null);
exports.AppUpdate = AppUpdate = __decorate([
    (0, nestjs_telegraf_1.Update)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppUpdate);
//# sourceMappingURL=app.controller.js.map
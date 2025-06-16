"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotCommandService = void 0;
const common_1 = require("@nestjs/common");
const telegraf_1 = require("telegraf");
let BotCommandService = class BotCommandService {
    bot = new telegraf_1.Telegraf(process.env.TG_TOKEN);
    async onModuleInit() {
        await this.bot.telegram.setMyCommands([
            { command: 'start', description: 'Start the bot' },
            { command: 'help', description: 'Get help' },
            { command: 'about', description: 'About this bot' },
        ]);
        console.log('✅ Telegram commands registered');
    }
};
exports.BotCommandService = BotCommandService;
exports.BotCommandService = BotCommandService = __decorate([
    (0, common_1.Injectable)()
], BotCommandService);
//# sourceMappingURL=commands.js.map
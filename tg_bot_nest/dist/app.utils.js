"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showTasks = void 0;
const showTasks = tasks => `Your all tasks: \n\n${tasks.map(task => (task.isCompleted ? '✅' : '📍') + ' ' + task.name + '\n\n').join('')}`;
exports.showTasks = showTasks;
//# sourceMappingURL=app.utils.js.map
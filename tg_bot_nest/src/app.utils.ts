export const showTasks = tasks => 
    `Your all tasks: \n\n${tasks.map(task => 
    (task.isCompleted ? '✅' : '📍') + ' ' + task.name + '\n\n'
    ).join('')}`
function editTask() {
    let maxId = Math.max(...model.tasks.map(t => t.id));
    const task = model.inputs.editTaskPage;
    const newTask = {
        id: maxId + 1,
        title: task.title,
        description: task.description,
        duration: task.duration,
        recurring: task.recurring,
        priority: task.priority,
        duedate: task.duedate,
    };
    model.tasks.push(newTask);
    model.app.currentPage = 'week';
    updateView();
}
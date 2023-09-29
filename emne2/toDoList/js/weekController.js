function selectTaskForEdit(id){
    // Find the task with the specified id in the model.tasks array
    const taskToEdit = model.tasks.find(task => task.id === id);

    // Check if a task with the given id was found
    if (taskToEdit) {
        // Copy the task details to model.inputs.editTask
        model.inputs.editTask.id = taskToEdit.id;
        model.inputs.editTask.title = taskToEdit.title;
        model.inputs.editTask.description = taskToEdit.description;
        // Copy other task properties as needed

        // Set the current page to 'editTask'
        model.app.currentPage = 'editTask';

        updateView();
    } else {
        console.log(`Task with id ${id} not found.`)
    }
}
// const task = model.inputs.editTask;
// task.id = id;
// // slå opp dette objektet i model.tasks og kopiere verdiene over i model.input.editTask
// task.title = '';
// task.description = '';
// model.app.currentPage = 'editTask';
// updateView();
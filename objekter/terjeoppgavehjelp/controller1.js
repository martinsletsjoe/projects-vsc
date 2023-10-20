function selectSubtype(id) {
    model.selectedSubtype = id;
    updateView();
}

function showAllExercises(){
    model.selectedSubtype = -1;
    updateView();
}
function showNoExercises(){
    model.selectedSubtype = null;
    updateView();
}

function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1>app</h1>
        Blablbal. Blablbal.Blablbal. Blablbal.

        <pre>selectedSubtype = ${model.selectedSubtype}</pre>
        <h3>Subtypes</h3>
        ${createSubtypesHtml()}
        <h3>Øvelser</h3>
        ${createExercisesMain()}
        <button onclick="showAllExercises()">vis alt</button>
        <button onclick="showNoExercises()">vis ingen</button>
    `;
}

function createSubtypesHtml() {
    let html = '';
    for (let subtype of model.subtypes) {
        html += /*HTML*/`
            <li>${subtype.name}
                <button onclick="selectSubtype(${subtype.id})">velg</button>
            </li>
        `;
    }
    return html;
}

function createExercisesHtml() {
    if (model.selectedSubtype == null) return '';

    let html = '';
    for (let exercise of model.exercises) {
        if (exercise.subtypesId == model.selectedSubtype) {
            html += /*HTML*/` <li>${exercise.name}</li>`;
        }
    }
    return html;
}
function createExercisesHtml2() {
    let html = '';
    for (let exercise of model.exercises) {

            html += /*HTML*/` <li>${exercise.name}</li>`;
        
    }
    return html;
}

function createExercisesMain(){
    return model.selectedSubtype == -1 ? createExercisesHtml2() : createExercisesHtml();
}


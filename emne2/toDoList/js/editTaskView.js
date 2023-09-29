function updateViewEditTask() {
    document.getElementById('app').innerHTML = /*HTML*/`
        ${createMenuHtml()}
        <h1>Endre oppgave</h1>

        ${createEditFieldHtml('Tittel', 'title')}
        ${createEditFieldHtml('Beskrivelse', 'description')}
        ${createEditFieldHtml('Varighet', 'duration', 'number')}
        ${createEditFieldHtml('Gjentakelse', 'recurring')}
        ${createEditFieldHtml('Frist', 'duedate', 'date')}
        <button onclick="editTask()">Lagre</button>
    `;
}


function createEditFieldHtml(label, fieldName, type, defaultValue) {
    if (!type) type = 'text';
    if(!defaultValue) defaultValue = '';
    const value = type == 'number' ? 'valueAsNumber' : 'value';
    return  /*HTML*/`
        ${label}: <br/>
        <input 
            type="${type}"
            oninput="model.inputs.editTaskPage.${fieldName}=this.${value}"
            value="${model.inputs.editTaskPage[fieldName] || defaultValue}"
            />
        <br/>
        `;
}

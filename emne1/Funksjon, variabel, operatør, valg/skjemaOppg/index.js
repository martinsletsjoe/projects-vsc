function showForm() {
    document.getElementById('app').innerHTML =
        createField('text', 'fname', 'First name:')
        + createField('text', 'lname', 'Last name:')
        + createField('range', 'zero2hundred', 'en til hundre:', 1, 100, 1)
        + createField('number', 'number', 'Skriv inn et tall:')
        + createField('radio', 'html', 'HTML')
        + createField('radio', 'css', 'CSS')
        + createField('radio', 'js', 'JavaScript')
        + createField('checkbox', 'bike', 'I have a bike')
        + createField('checkbox', 'car', 'I have a car')
        + createField('checkbox', 'boat', 'I have a boat');

}

function createField(type, id, label, min, max, step) {
    const extraAttributes = type == 'range' ? `min="${min}" max="${max}" step="${step}"` : '';
    const breakHtml = /*HTML*/`<br/>`;
    const labelHtml = /*HTML*/`<label for="${id}">${label}</label>`;
    const inputHtml = /*HTML*/`<input type="${type}" id="${id}" ${extraAttributes}>`;
    if (type=='radio' || type=='checkbox') {
        return inputHtml + ' ' + labelHtml + breakHtml
    }
    return labelHtml + breakHtml + inputHtml + breakHtml;
}

function createCheckboxBike() {
    return /*HTML*/`
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
        <label for="vehicle1"> I have a bike</label><br/>   
    `;
}

function createCheckboxCar() {
    return /*HTML*/`
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
        <label for="vehicle2"> I have a car</label><br/>
    `;
}

function createCheckboxBoat() {
    return /*HTML*/`
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
        <label for="vehicle3"> I have a boat</label><br/>
    `;
}


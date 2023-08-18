function showForm() {
    document.getElementById('app').innerHTML =
        createField('text', 'fname', 'First name:')
        + createField('text', 'lname', 'Last name:')
        + createField('range', 'zero2hundred', 'en til hundre:',null, 1, 100, 1)
        + createField('number', 'number', 'Skriv inn et tall:')
        + createField('radio', 'html', 'HTML', 'fav_language')
        + createField('radio', 'css', 'CSS', 'fav_language')
        + createField('radio', 'js', 'JavaScript', 'fav_language')
        + createField('checkbox', 'bike', 'I have a bike')
        + createField('checkbox', 'car', 'I have a car')
        + createField('checkbox', 'boat', 'I have a boat');

}

function createField(type, id, label, radiogroup, min, max, step,) {
    const extra = getExtraAttributes(type, min, max, step, radiogroup);

    const isRadioOrCheck = type == 'radio' || type == 'checkbox';
    const inputHtml = createInputHtml(type, id, extra);
    const labelHtml = createLabelHtml(id, label);
    return isRadioOrCheck ? inputHtml + ' ' + labelHtml + `<br/>`
    : labelHtml + `<br/>` + inputHtml + `<br/>`;
}
function createInputHtml(type, id, extra) {
    return /*HTML*/`<input type="${type}" id="${id}" ${extra}>`;
}

function createLabelHtml(id, label) {
    return /*HTML*/`<label for="${id}">${label}</label>`;
}

function getExtraAttributes(type, min, max, step, radiogroup) {
    if(type == 'range') return `min="${min}" max="${max}" step="${step}"`;
    if(type == 'radio') return `name="${radiogroup}"`;
    return '';


    // return type == 'range' ? `min="${min}" max="${max}" step="${step}"`
    //     : type == 'radio' ? `name="${radiogroup}"`
    //         : '';
}


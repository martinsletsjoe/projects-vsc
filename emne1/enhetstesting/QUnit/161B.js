function checkIfEmail(text) {
    if(!text) return false;
    if(text.includes('@') && text.indexOf('.') > text.indexOf('@'))return true
    else return false
}
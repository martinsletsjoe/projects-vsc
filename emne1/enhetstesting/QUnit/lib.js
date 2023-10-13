function fixText(text){
    text = text.trim()
    if(!text) return text;
    return text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
}
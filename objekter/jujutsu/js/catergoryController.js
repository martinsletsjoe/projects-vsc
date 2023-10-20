function techniqueTraining(start, end) {
    let subType = model.subtypes;
    let delB = [];
    for (let i = start; i < subType.length - end; i++) {
        delB.push(subType[i].name)   
    }

    let optionsHtml = '';
    for(let i = 0; i <delB.length; i++) {
        optionsHtml += `<li><a href="#" onclick="clickedTrainingInfo('${delB[i]}')">${delB[i]}</a></li>`;
    }

    return /*HTML*/` <ul>${optionsHtml}</ul>`
}
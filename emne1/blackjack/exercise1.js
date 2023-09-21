function countBlackJackPoints(cards) {
    let points = 0;
    let aces = 0;
    if (cards === null) {
        return points = null;
    }
    for (let card of cards) {
        let suitAndRank = card.split(' ');
        let rank = suitAndRank[1];
        if (rank === 'Ess') {
            if (points > 10) {
                points += 1;
            } else {
                points += 11
                aces++;
            }
        } else if (rank === 'Dame' || rank === 'konge' || rank === 'Knekt') {
            points += 10;
        } else {
            points += parseInt(rank);
        }
    }
    while (aces > 0 && points > 21) {
        points -= 10;
        aces--;
    }
    return points;
}
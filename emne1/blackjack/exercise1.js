// let cards = ['Hjerter Ess', ' Hjerter Konge', 'Hjerter Dame', 'Hjerter Knekt', 'Hjerter 10', 'Hjerter 9', 'Hjerter 8', 'Hjerter 7', 'Hjerter 6', 'Hjerter 5', 'Hjerter 4', 'Hjerter 3', 'Hjerter 2',
//             'Spar Ess', 'Spar Konge', 'Spar Dame', 'Spar Knekt', 'Spar 10', 'Spar 9', 'Spar 8', 'Spar 7', 'Spar 6', 'Spar 5', 'Spar 4', 'Spar 3', 'Spar 2',
//             'Ruter Ess', 'Ruter Konge', 'Ruter Dame', 'Ruter Knekt', 'Ruter 10', 'Ruter 9', 'Ruter 8', 'Ruter 7', 'Ruter 6', 'Ruter 5', 'Ruter 4', 'Ruter 3', 'Ruter 2',
//             'Kløver Ess', 'Kløver konge', 'Kløver Dame', 'Kløver Knekt', 'Kløver 10', 'Kløver 9', 'Kløver 8', 'Kløver 7', 'Kløver 6', 'Kløver 5', 'Kløver 4', 'Kløver 3', 'Kløver 2']

















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
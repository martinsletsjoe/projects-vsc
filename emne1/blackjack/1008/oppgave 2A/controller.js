function rotate() {
    /*
        indeks, rad og kolonne for alle rutene på brettet: 
        |-------------------------|-------------------------|-------------------------|-------------------------|
        | indeks  0, col=0, rad=0 | indeks  1, col=1, rad=0 | indeks  2, col=2, rad=0 | indeks  3, col=3, rad=0 |
        | indeks  4, col=0, rad=1 | indeks  5, col=1, rad=1 | indeks  6, col=2, rad=1 | indeks  7, col=3, rad=1 | 
        | indeks  8, col=0, rad=2 | indeks  9, col=1, rad=2 | indeks 10, col=2, rad=2 | indeks 11, col=3, rad=2 | 
        | indeks 12, col=0, rad=3 | indeks 13, col=1, rad=3 | indeks 14, col=2, rad=3 | indeks 15, col=3, rad=3 | 
        |-------------------------|-------------------------|-------------------------|-------------------------|
    */
    let tmpBoard = [];
    for (let index = 0; index < board.length; index++) {
        let rowIndex;
        let newRowIndex;
        for (let i = 0; i <= 3; i++) {
            if (index >= i * 4 && index <= i * 4 + 3) {
                rowIndex = i;
            }
            if (index % 4 === i) {
                newRowIndex = i;
            }
        }
        let newColIndex = 3 - rowIndex;
        let newIndex = newRowIndex * 4 + newColIndex;
        tmpBoard[newIndex] = board[index];
    }
    board = tmpBoard;
    updateView();
}
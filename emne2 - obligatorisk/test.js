import { heihei } from "./modell-1";

heihei("app")




function calculateSumAndTotalSum() {
    for (let i = 0; i < model.players.length; i++) {
        let sum = 0;
        let sum2 = 0;
        for (let j = 0; j < model.categories.length; j++) {
            if (model.categories[j].scores[i] !== null && model.categories[j].part == 1) {
                sum += model.categories[j].scores[i];
                console.log(sum)
            }
            else sum2 += model.categories[j].scores[i];
        }
        const totalSum = sum + sum2

        model.categories[model.categories.length - 12].scores[i] = sum; // Set "Sum"
        model.categories[model.categories.length - 1].scores[i] = totalSum; // Set "Totalsum"
        updateView();
    }
}


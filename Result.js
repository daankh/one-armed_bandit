//Instancja tej klasy nie będzie tworzona
// słowo static oznacza, że tworzymy metodę dostępną z poziomu klasy
class Result {
    static moneyWinInGame(result, bid) {
        if (typeof result === "boolean") {
            if (result) {
                return 3 * bid
            } else {
                return 0;
            }
        } else {
            throw new Error("result powinien być wartością logiczną")
        }
    }

    static checkWinner(draw) {
        // Określa warunku zwycięstwa
        if ((draw[0] === draw[1] && draw[1] === draw[2]) || (draw[0] !== draw[1] && draw[1] !== draw[2] && draw[0] !== draw[2])) {
            return true;
        } else {
            return false;
        }
    }
}
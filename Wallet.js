class Wallet {
    constructor(money) {
        let _money = money;

        //Pobieranie aktualnej zawartości portfela
        this.getWalletValue = () => _money;

        //Sprawdzanie czy użytkownik ma odpowiednią ilość środków
        this.checkCanPlay = value => _money >= value;

        //AKtualizacja zawartości portfela
        this.changeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                switch (type) {
                    case "+":
                        return _money += value;
                    case "-":
                        return _money -= value;
                    default:
                        throw new Error("Nieprawidłowy typ działania - możesz użyć wartości + i - jako wartości String")
                }
            } else {
                console.log(typeof value);
                throw new Error("Nieprawidłowa liczba")
            }
        }
    }
}
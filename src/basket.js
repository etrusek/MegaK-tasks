class Calc {
    constructor(a, b) {
        // try catch walidacja
        this.firstNumber = Number(a);
        this.secondNumber = Number(b);
    }

    add() {
        return {operation: 'dodawania', result: this.firstNumber + this.secondNumber};
    }

    subtract() {
        return {operation: 'odejmowania', result: this.firstNumber - this.secondNumber};
    }

    multiply() {
        return {operation: 'mnożenia', result: this.firstNumber * this.secondNumber};
    }

    divide() {
        // dodać walidację, dzielenie przez zero
        return {operation: 'dzielenia', result: this.firstNumber / this.secondNumber};
    }
}
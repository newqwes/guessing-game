class GuessingGame {
  constructor() {
    this.current;
    this.min;
    this.max;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.current = this.min + Math.round((this.max - this.min) / 2);
    return this.current;
  }

  lower() {
    this.max = this.current;
  }

  greater() {
    this.min = this.current;
  }
}

module.exports = GuessingGame;

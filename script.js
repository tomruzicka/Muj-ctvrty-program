let number = document.querySelector("#number");
let range = document.querySelector("#range");

class Settings {
  constructor(min, max, step) {
    this.min = min;
    this.max = max;
    this.step = step;
  }

  sync(input) {
    number.value = input;
    range.value = input;
  }
}

let settings = new Settings(1, 10, 1);

class Table {
  constructor(rows, column, id) {
    this.rows = rows;
    this.column = column;
    this.table = document.getElementById(id);
  }

  random_number() {
    return Math.floor(this.rows * this.column * Math.random()) + 1;
  }

  show_table() {
    this.table.innerHTML = " ";

    for (let r = 0; r < this.rows; r++) {
      let row = this.table.insertRow(0);

      for (let c = 0; c < this.column; c++) {
        row.insertCell(0).innerHTML = this.random_number();
      }
    }
  }
}

function change(input) {
  settings.sync(input);
  var table = new Table(input, input, "table");
  table.show_table();
}

console.log(
  "%c© Tom Růžička, www.virtualniajtak.cz, www.tomruzicka.cz",
  "color: grey; font-size:20px;"
);

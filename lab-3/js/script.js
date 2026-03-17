//Car Creator

let cars = [];
let nextId = 1;
const COLORS = ['Red', 'Blue', 'Green'];
const MATERIALS = ['Metal', 'Plastic'];

const form = document.getElementById('toyCarForm');
const randomBtn = document.getElementById('randomBtn');
const carsUl = document.getElementById('carsUl');
// Events
form.addEventListener('submit', (e) => {
  e.preventDefault();
  createToyCar();
});
randomBtn.addEventListener('click', generateRandomCar);
// Constructor
function ToyCar(b, m, y, c, p) {
  this.id = nextId++;
  this.brand = b;
  this.model = m;
  this.year = y;
  this.colour = c;
  this.price = p;
  this.toString = () => `${b} ${m}: ${c}. $${p}`;
}

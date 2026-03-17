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
// Create
function createToyCar() {
  const b = document.getElementById('brand').value;
  const m = document.getElementById('model').value;
  const y = parseInt(document.getElementById('year').value);
  const c = document.getElementById('colour').value;
  const p = parseFloat(document.getElementById('price').value);
  
  if (!b || !m || !p || y < 1900 || y > 2024) {
    alert('Fix inputs');
    return;
  }
  
  const car = new ToyCar(b, m, y, c, p);
  cars.push(car);
  updateList();
  form.reset();
}
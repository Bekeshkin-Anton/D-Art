const svg = document.querySelector('svg.main-img');
const w = +svg.attributes['width'].value;
const h = +svg.attributes['height'].value;


let PI2 = Math.PI * 2;
let bubbles = Array(13)
  .fill(0)
  .map((e, i) => {
    // создаем 33 частицы
    let d = Math.random() * PI2; // направление
    return {
      dir: d, // текущее направление
      targetDir: d, // целевое направление
      k: Math.random(), // коэфициент колебания частицы
      speed: 0.1 + Math.random(), // скорость
      size: Math.random() * 5 + 9, // размер частицы
      x: Math.random() * w, // начальные координаты
      y: Math.random() * h, // --
    };
  });

const background = document.getElementById('background');
// добавляем круги к svg по кол-ву частиц
background.innerHTML = bubbles.map((_, i) => `<circle></circle>`).join("");
let c = document.querySelectorAll("circle"); // находим их все
requestAnimationFrame(render);

// Перевод градусов в радианы
const degToRad = (angle) => Math.PI / 180 * angle;
const radToDeg = (angle) => 180 * angle / Math.PI;

function render(t) {
  // прорисовка кадра, тут t - время с начала анимации
  window.requestAnimationFrame(render);

  bubbles.forEach((p, i) => {
    // для каждой частицы

    /*if (Math.random() > 0.995)
      // с очень небольшой вероятностью
      p.targetDir = Math.random() * PI2; // меняем направление движения*/
    //let da = (p.targetDir - p.dir) % PI2; // считаем новое направление
    //p.dir += (((2 * da) % PI2) - da) * 0.1 + Math.sin(t / 100 + i) * 0.05; // + колебания


/*    p.dir = degToRad(180);*/



    if (p.x + p.size  > w
      || p.y + p.size  > h
      || p.x - p.size  < 0
      || p.y - p.size  < 0) p.dir = degToRad(radToDeg(p.dir) + 90);


    p.x += Math.cos(p.dir) * p.speed; // вычисляем новое положение
    p.y += Math.sin(p.dir) * p.speed; // с учетом скорости и направления

    c[i].setAttribute("r", Math.max(0, p.size + 2 * Math.sin(t / (444 + i * 77))));
    c[i].setAttribute("cx", p.x);
    c[i].setAttribute("cy", p.y);

  });
}

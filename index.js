var resultados = {
  co: document.getElementById('catOpt'),
  ca: document.getElementById('catAdj'),
  hip: document.getElementById('hipt')
};

function modifyTriangle(ca, co) {
  var triangleRectangle = document.getElementById('triangleRectangle');

  triangleRectangle.style.borderBottomWidth = ca + 'px';
  triangleRectangle.style.borderRightWidth = co + 'px';
}

function copyright() {
  let year = new Date().getFullYear();
  let autor = 'David Rodriguez';
  document.getElementById('copyright').innerHTML = '<strong>' + autor + '<strong/>&nbsp;' + year;
}

copyright();

function valoresForm() {
  let formData = {
    ca: document.forms["pitagoras"]["catetoAdjacente"].value,
    co: document.forms["pitagoras"]["catetoOpuesto"].value,
    hip: document.forms["pitagoras"]["hipotenusa"].value
  };
  console.log(formData);
  return formData;
}

let formPitagoras = document.forms['pitagoras'];

formPitagoras.addEventListener('submit', function(e) {
  e.preventDefault();
  pitagoras(valoresForm());
});

function pitagoras(values) {
  let sides = {
    catetoOpuesto: values.ca,
    catetoAdjacente: values.co,
    hipotenusa: values.hip
  };

  if ((sides.catetoAdjacente > 0 && sides.catetoOpuesto > 0) && sides.hipotenusa > 0) {
    console.log('Todos');
  } else if (sides.hipotenusa && sides.catetoAdjacente) {
    sides.catetoOpuesto = Math.sqrt(Math.pow(sides.hipotenusa, 2) - Math.pow(sides.catetoAdjacente, 2));
  } else if (sides.hipotenusa && sides.catetoOpuesto) {
    sides.catetoAdjacente = Math.sqrt(Math.pow(sides.hipotenusa, 2) - Math.pow(sides.catetoOpuesto, 2));
  } else if (sides.catetoAdjacente && sides.catetoOpuesto) {
    sides.hipotenusa = Math.sqrt(Math.pow(sides.catetoAdjacente, 2) + Math.pow(sides.catetoOpuesto, 2));
  }

  resultados.ca.innerText = Number(sides.catetoAdjacente).toFixed(2) + ' cm';
  resultados.co.innerText = Number(sides.catetoOpuesto).toFixed(2) + ' cm';
  resultados.hip.innerText = Number(sides.hipotenusa).toFixed(2) + ' cm';

  modifyTriangle(sides.catetoAdjacente, sides.catetoOpuesto);

  return sides;
}

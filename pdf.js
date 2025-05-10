window.generar = async function () {
  const { jsPDF } = window.jspdf;

  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("Resultados del Cuestionario de Cálculo Integral", 10, 20);

  const preguntas = {
    q1: "1. ¿Cuál es la integral de x?",
    q2: "2. ¿Cuál es la integral de 1/x?",
    q3: "3. ¿Cuál es la integral de cos(x)?",
    q4: "4. ¿Cuál es la integral de sen(x)?",
    q5: "5. ¿Cuál es la integral de e^x?",
    q6: "6. ¿Cuál es la integral de 0?"
  };

  const respuestasCorrectas = {
    q1: "x^2/2",
    q2: "ln(x)",
    q3: "sen(x)",
    q4: "-cos(x)",
    q5: "e^x",
    q6: "C"
  };

  let y = 40;

  for (let key in preguntas) {
    const seleccion = document.querySelector(`input[name="${key}"]:checked`);
    let respuesta = seleccion ? seleccion.value : "No respondida";
    let esCorrecta = respuesta === respuestasCorrectas[key];

    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text(preguntas[key], 10, y);
    y += 7;

    doc.text("Respuesta seleccionada: " + respuesta, 10, y);
    y += 7;

    doc.setTextColor(esCorrecta ? 0 : 200, esCorrecta ? 150 : 0, 0);
    doc.text("Resultado: " + (esCorrecta ? "Correcta ✅" : "Incorrecta ❌"), 10, y);
    y += 15;
  }

  const string = doc.output('datauristring');
  document.querySelector('iframe').setAttribute('src', string);
  const resultados = Object.keys(preguntas).map(key => {
  const seleccion = document.querySelector(`input[name="${key}"]:checked`);
  return seleccion && seleccion.value === respuestasCorrectas[key];
});

generarGrafico(resultados);

};

function generarGrafico(resultados) {
  google.charts.load('current', { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    const data = google.visualization.arrayToDataTable([
      ['Pregunta', 'Puntos'],
      ...resultados.map((r, i) => [`Pregunta ${i + 1}`, r ? 1 : 0])
    ]);

    const options = {
      title: 'Resultados del Cuestionario',
      hAxis: {
        title: 'Preguntas',
        titleTextStyle: { color: '#333' }
      },
      vAxis: {
        minValue: 0,
        maxValue: 1
      },
      colors: ['#2ecc71']
    };

    const chart = new google.visualization.ColumnChart(document.getElementById('grafico-puntos'));
    chart.draw(data, options);
  }
}


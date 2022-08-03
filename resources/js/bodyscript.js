// display report
for (let s of document.getElementsByClassName("stage" + stage)) { s.classList.add("selected"); }
for (let s of document.getElementsByClassName("hstage" + hStage)) { s.classList.add("selected"); }
for (let s of document.getElementsByClassName("kstage" + kStage)) { s.classList.add("selected"); }
for (let s of document.getElementsByClassName("gstage" + gStage)) { s.classList.add("selected"); }

// generate chart
const colors = {g:'#111111', k:'#f6630d', h:'#7c7c7c', bg:'#ebebeb'};
const options = {
  series: [scores.h1, scores.h2, scores.h3, scores.k1, scores.k2, scores.g1, scores.g2, scores.g3, scores.g4, scores.g5],
  labels: [
    'Creativity',
    'Critical thinking',
    'Leadership',
    'Possession of knowledge',
    'Application of knowledge',
    'Roles',
    'Structures',
    'Plans & policies',
    'Processes',
    'Financial'
  ],
  chart: {
    type: 'polarArea',
    background: colors.bg,
    fontFamily: 'Boxed, Helvetica, Arial, sans-serif'
  },
  stroke: {
    colors: [colors.bg],
    width: 1
  },
  fill: {
    opacity: 0.98
  },
  colors: [colors.h, colors.h, colors.h, colors.k, colors.k, colors.g, colors.g, colors.g, colors.g, colors.g],
  legend: {
    show: false,
    position: 'bottom'
  },
  yaxis: {
    show: false,
    max: 7,
    crosshairs: { show: false },
    labels: { show: false },
    axisTicks: { show: false }
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 1,
        strokeColor: '#ddd',
      },
      spokes: {
        strokeWidth: 1,
        connectorColors: '#ddd',
      }
    }
  }
};

const polarAreaChart = new ApexCharts(document.getElementById('polar-area-chart'), options);
const pacPrint = new ApexCharts(document.getElementById('polar-area-chart-print'), options);
polarAreaChart.render();
pacPrint.render();

function savePDF() {
  document.getElementById("download-div").disabled = true;
  document.body.classList.add("busy");
  const options = {
    scale:3, windowWidth:2000, windowHeight:1000, letterRendering: true, allowTaint: false, useCORS: false,
    onclone: function (doc) {
          doc.getElementsByClassName("QuestionText")[0].classList.add("print");
      }
  };
  html2canvas(document.querySelector(".QuestionText"), options).then(function(canvas) {
      document.getElementsByClassName("QuestionText")[0].classList.remove("print");
      document.getElementById("printCanvas").appendChild(canvas);
      let imgdata = canvas.toDataURL("image/jpeg", 1.0);
      let doc = new jspdf.jsPDF();
      doc.addImage(imgdata, "JPEG", 15, 10, 180, 277,"img","NONE");
      document.getElementById("download-div").disabled = false;
      document.body.classList.remove("busy");
      doc.save("Scenario Planning Capability Report.pdf");
  });
}
document.getElementById('download-div').addEventListener("click", savePDF);
import "../js/chartjs";

const dashboardLine = () => {
$(function() {
      // Line chart
      new Chart(document.getElementById("chartjs-dashboard-line"), {
        type: "line",
        data: {
          labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
          datasets: [{
            label: "Event Driven Multistrategy $",
            fill: true,
            backgroundColor: "transparent",
            borderColor: 'rgb(255, 99, 132)',
            data: [536.96, 543.69, 575.52, 545.65, 595.23, 586.96]
          },
          {
            label: "Benchmark 0.45% p.a",
            fill: true,
            backgroundColor: "transparent",
            borderColor: 'rgb(255, 99, 132)',
            borderDash: [4, 4],
            data: [573.9447949, 576.5143458, 579.0954005,581.6880106,584.2922278,586.9081041]
          }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            intersect: false
          },
          hover: {
            intersect: true
          },
          plugins: {
            filler: {
              propagate: false
            }
          },
          scales: {
            xAxes: [{
              reverse: true,
              gridLines: {
                color: "rgba(0,0,0,0.05)"
              }
            }],
            yAxes: [{
              ticks: {
                stepSize: 10
              },
              display: true,
              borderDash: [5, 5],
              gridLines: {
                color: "rgba(0,0,0,0)",
                fontColor: "#fff"
              }
            }]
          }
        }
      });
    });
}


export { dashboardLine };


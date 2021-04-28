import "../js/chartjs";
import Chart from 'chart.js/auto';

const dashboardLine = () => {
  $(function() {
      const labels = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                      ];

      const data = {
        labels: labels,
        datasets: [{
          label: 'Jazztel Stock price',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
        }]
      };

      const config = {
                      type: 'line',
                      data,
                      options: {}
                    };

  new Chart(
    document.getElementById('myChart'),
    config
  );
  });
}

const dashboardLineJazztel = () => {
  $(function() {
      const labels = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                      ];

      const data = {
        labels: labels,
        datasets: [{
          label: 'Jazztel Capital',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
        }]
      };

      const config = {
                      type: 'line',
                      data,
                      options: {}
                    };

  new Chart(
    document.getElementById('myChartJazztel'),
    config
  );
  });
}

const dashboardLineJazztelPnl = () => {
  $(function() {
      const labels = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                      ];

      const data = {
        labels: labels,
        datasets: [{
          label: 'Jazztel PNL',
          backgroundColor: '#393e46',
          borderColor: '#393e46',
          data: [0, 10, 5, 2, 20, 30, 45],
        }]
      };

      const config = {
                      type: 'line',
                      data,
                      options: {}
                    };

  new Chart(
    document.getElementById('myChartJazztelPnl'),
    config
  );
  });
}

export { dashboardLine };
export { dashboardLineJazztel };
export { dashboardLineJazztelPnl };


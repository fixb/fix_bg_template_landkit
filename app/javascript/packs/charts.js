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

const dashboardLineCggPnl = () => {
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
          label: 'CGG PNL',
          backgroundColor: '#f4eee8',
          borderColor: '#f4eee8',
          data: [0, 10, 5, 2, 20, 30, 45],
        }]
      };

      const config = {
                      type: 'line',
                      data,
                      options: {}
                    };

  new Chart(
    document.getElementById('myChartCggPnl'),
    config
  );
  });
}

const priceCl = () => {
  $(function() {
      const labels = [
                '2013',
                '2014',
                '2015',
                '2016',
                '2017',
                '2018',
                '2019',
                '2020',
                      ];

      const data = {
        labels: labels,
        datasets: [{
          label: 'WTI $',
          backgroundColor: '#f4eee8',
          borderColor: '#f4eee8',
          data: [165.09, 96.61, 54.95, 59.98, 62.27, 48.05, 62.76, 48.59],
        }]
      };

      const config = {
                      type: 'line',
                      data,
                      options: {}
                    };

  new Chart(
    document.getElementById('myChartpriceCl'),
    config
  );
  });
}

const priceCgg = () => {
  $(function() {
      const labels = [
                '2013',
                '2014',
                '2015',
                '2016',
                '2017',
                '2018',
                '2019',
                '2020',
                      ];

      const data = {
        labels: labels,
        datasets: [{
          label: 'CGG €',
          backgroundColor: '#f4eee8',
          borderColor: '#f4eee8',
          data: [95.3433, 37.7432, 20.3116, 6.5912, 1.8269, 1.156, 2.895, 0.81],
        }]
      };

      const config = {
                      type: 'line',
                      data,
                      options: {}
                    };

  new Chart(
    document.getElementById('myChartpriceCgg'),
    config
  );
  });
}

export { dashboardLine };
export { dashboardLineJazztel };
export { dashboardLineJazztelPnl };
export { dashboardLineCggPnl };
export { priceCl };
export { priceCgg };


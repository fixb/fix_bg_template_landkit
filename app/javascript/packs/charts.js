import "../js/chartjs";
import Chart from 'chart.js/auto';

const dashboardLine = () => {
  $(function() {
      const labels = [
                '2002',
                '2003',
                '2004',
                '2005',
                '2006',
                '2007',
                '2008',
                '2009',
                '2010',
                '2011',
                '2012',
                '2013',
                '2014',
                '2015',
                      ];

      const data = {
        labels: labels,
        datasets: [{
          label: 'Jazztel Stock price',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [4.0376, 2.5902, 5.485, 6.4754, 5.0214, 2.5107, 1.2958, 2.66, 3.55, 3.737, 5.255, 7.779, 12.55, 12.98],
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
                'Dec-2010',
                'Jun-2011',
                'Dec-2011',
                'Jun-2012',
                'Dec-2012',
                'Jun-2013',
                'Dec-2014',
                'Jun-2015',
                      ];

      const data = {
        labels: labels,
        datasets: [{
          label: 'Jazztel Capital - Position size',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [3.4, 3.3, 3.3, 3, 1.5, 1.45, 0.91, 0.5],
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
                '2011',
                '2012',
                '2013',
                '2014',
                '2015',
                      ];

      const data = {
        labels: labels,
        datasets: [{
          label: 'Jazztel PNL ctr in bps',
          backgroundColor: '#393e46',
          borderColor: '#393e46',
          data: [10, 10, 21, 33, 1],
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

const directLending = () => {
  $(function() {
      const labels = [
                'Jun-2018',
                'Dec-2018',
                'Jun-2019',
                'Dec-2019',
                'Jun-2020',
                'Dec-2020',
                'Apr-2021',
                      ];

      const data = {
        labels: labels,
        datasets: [{
          label: 'Direct Lending book (%)',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0.83, 1.96, 3.79, 6.14, 6.36, 7.69, 9.33],
        }]
      };

      const config = {
                      type: 'line',
                      data,
                      options: {}
                    };

  new Chart(
    document.getElementById('mydirectlendinggraph'),
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
export { directLending };
export { priceCgg };


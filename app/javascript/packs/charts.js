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

const dashboardLineSolocal = () => {
  $(function() {
      const labels = [
                '08/2004', '09/2004', '11/2004', '12/2004', '01/2005', '02/2005', '03/2005', '05/2005', '06/2005', '08/2005', '09/2005', '10/2005', '11/2005', '01/2006', '02/2006', '03/2006', '05/2006', '06/2006', '07/2006', '08/2006', '11/2006', '01/2007', '02/2007', '04/2007', '05/2007', '07/2007', '08/2007', '10/2007', '11/2007', '12/2007', '01/2008', '02/2008', '03/2008', '04/2008', '06/2008', '07/2008', '09/2008', '10/2008', '12/2008', '03/2009', '04/2009', '06/2009', '07/2009', '08/2009', '09/2009', '11/2009', '12/2009', '03/2010', '04/2010', '05/2010', '06/2010', '08/2010', '09/2010', '11/2010', '12/2010', '01/2011', '02/2011', '03/2011', '05/2011', '06/2011', '08/2011', '09/2011', '10/2011', '11/2011', '01/2012', '02/2012', '04/2012', '05/2012', '07/2012', '08/2012', '10/2012', '11/2012', '12/2012', '01/2013', '02/2013', '04/2013', '05/2013', '07/2013', '09/2013', '10/2013', '12/2013', '01/2014', '02/2014', '03/2014', '04/2014', '06/2014', '07/2014', '09/2014', '10/2014', '12/2014', '03/2015', '04/2015', '06/2015', '07/2015', '08/2015', '09/2015', '11/2015', '12/2015', '02/2016', '03/2016', '05/2016', '06/2016', '08/2016', '09/2016', '11/2016', '01/2017', '02/2017', '03/2017', '05/2017', '06/2017', '07/2017', '08/2017', '10/2017', '11/2017', '01/2018', '02/2018', '04/2018', '05/2018', '07/2018', '08/2018', '10/2018', '11/2018', '12/2018', '01/2019', '02/2019', '04/2019', '05/2019', '07/2019', '09/2019', '10/2019', '12/2019', '01/2020', '03/2020', '04/2020', '07/2020', '08/2020', '09/2020', '11/2020', '12/2020', '03/2021', '04/2021',
                      ];

      const data = {
        labels: labels,
        datasets: [{
          label: 'Solocal (aka Pages Jaunes) Stock price (€)',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [14.66, 15.47, 16.48, 17.85, 18.42, 19.09, 18.94, 19.64, 19.31, 21.04, 22.70, 21.50, 20.66, 20.95, 22.45, 23.18, 21.68, 24.55, 22.03, 22.39, 15.34, 16.16, 15.70, 17.03, 15.90, 14.74, 14.88, 15.24, 15.00, 13.71, 12.99, 12.33, 11.28, 12.85, 9.35, 8.71, 9.74, 7.41, 7.03, 6.37, 8.27, 6.93, 7.57, 7.79, 8.86, 7.88, 7.80, 8.50, 9.05, 9.43, 8.48, 7.50, 7.68, 6.83, 6.80, 7.50, 7.07, 7.07, 7.16, 6.20, 4.54, 2.97, 3.10, 2.58, 3.54, 2.66, 2.17, 1.81, 1.43, 1.42, 1.40, 1.71, 1.87, 2.85, 2.05, 1.60, 1.84, 1.64, 1.70, 1.72, 1.10, 1.32, 1.47, 1.86, 1.65, 0.72, 0.61, 0.56, 0.49, 0.58, 0.62, 0.50, 0.45, 0.41, 0.33, 0.23, 7.56, 6.90, 3.73, 4.50, 3.25, 2.16, 2.61, 3.81, 3.10, 2.39, 2.97, 1.00, 1.19, 1.14, 0.85, 0.89, 0.95, 0.91, 1.00, 1.18, 1.06, 1.07, 1.15, 1.04, 0.72, 0.62, 0.50, 0.45, 0.49, 0.95, 0.76, 0.75, 0.73, 0.70, 0.55, 0.44, 0.23, 0.16, 0.10, 0.08, 0.03, 2.49, 2.66, 2.88, 2.81],
        }]
      };

      const config = {
                      type: 'line',
                      data,
                      options: {}
                    };

  new Chart(
    document.getElementById('myChartSolocal'),
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
          backgroundColor: '#325288',
          borderColor: '#325288',
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
export {dashboardLineSolocal};


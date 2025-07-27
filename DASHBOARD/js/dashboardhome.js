  const ctx = document.getElementById('myChart').getContext('2d');

  const myChart = new Chart(ctx, {
    type: 'line', // change to 'line', 'pie', etc.
    data: {
      labels: ['5', '10', '15', '20', '25', '30'],
      datasets: [{
        label: 'Product Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          ' #910a2c',
          '#590016',
          '#f38e8e',
          '#a70d39'
      
        ],
        borderWidth: 3
    
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
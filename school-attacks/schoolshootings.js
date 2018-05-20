var ctx = document.getElementById('2018Chart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'horizontalBar',

    // data for the dataset
    data: {
        
        labels: ["January", "February", "March", "April", "May"],
        datasets: [{
            label: "Deaths",
            backgroundColor: 'rgb(0, 0, 0)',
            borderColor: 'rgb(0, 0, 0)',
            data: [4, 17, 7, 0, 11],
        },
        {
            label: "Injuries",
            backgroundColor: 'rgb(255, 0, 0)',
            borderColor: 'rgb(255, 0, 0)',
            data: [20, 20, 5, 1, 15],
          },     
        ]
    },

    // Configuration options go here
    options: {
      scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
    }
    }
})

//pie graph for world data
var thePie = document.getElementById('worldChart').getContext('2d');
var chart = new Chart(thePie, {
    type: 'doughnut',

    // data for the dataset
    data:  {
    datasets: [{
      
        data: [175, 18, 12, 8, 5],
        backgroundColor: [
        'rgb(0, 51, 204)',
        'rgb(204, 0, 0)',
        'rgb(51, 204, 0)',
        'rgb(204, 204, 0)',
        'rgb(102, 0, 204)'
      ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'USA',
        'China',
        'South Africa',
        'Canada',
        'UK'
    ]
      
}
  
})
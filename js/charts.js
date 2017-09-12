$(document).ready(function(){
    $("#myChart3").hide();
    $("#myChart").hide();
    $("#myChart2").hide();

    $("#tool").click(function(){
        $("#myChart3").show();
        $("#tool").hide();
    });
    $("#webdev").click(function(){
        $("#myChart").show();
        $("#webdev").hide();
    });
    $("#language").click(function(){
        $("#myChart2").show();
        $("#language").hide();
    });
});

// Removes legend
Chart.defaults.global.legend.display = false;

// Web Dev
var yLabels = {
    0 : 'newb', 5 : 'mediocre at best', 10 : 'fluent', 15 : 'proficient', 20 : 'magical unicorn god'
};
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    responsive: true,
    maintainAspectRatio: false,
    data: {
        labels: ["HTML(5)", "CSS(3)", "MongoDB", "Node.JS", "Bootstrap Framework", "Javascript", "JQuery"],
        datasets: [{
            data: [18, 16, 13, 11, 14, 19, 17],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            xAxes: [
                {
                   ticks: {
                       beginAtZero: true,
                       steps: 4,
                       fixedStepSize: 5,
                       max: 20,
                       callback: function(value, index, values) {
                           // for a value (tick) equals to 8
                           return yLabels[value];
                           // 'junior-dev' will be returned instead and displayed on your chart
                       }
                   }
                }
            ],
            yAxes: [
                {
                    barThickness: 40
                }
            ]
        }
    }
});

// Other Languages
var ctx2 = document.getElementById("myChart2");
var myChart2 = new Chart(ctx2, {
    type: 'horizontalBar',
    responsive: true,
    maintainAspectRatio: false,
    data: {
        labels: ["English - Comprehensive", "English - Literary", "Chinese Simplified - Comprehensive", "Chinese Simplified - Literary", "French - Comprehensive", "French - Literary"],
        datasets: [{
            data: [19, 16, 16, 6, 7, 4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            xAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        steps: 4,
                        fixedStepSize: 5,
                        max: 20,
                        callback: function(value, index, values) {
                            // for a value (tick) equals to 8
                            return yLabels[value];
                            // 'junior-dev' will be returned instead and displayed on your chart
                        }
                    }
                }
            ],
            yAxes: [
                {
                    barThickness: 40,
                    padding: 0
                }
            ]
        }
    }
});

// Tools
var ctx3 = document.getElementById("myChart3");
var myChart3 = new Chart(ctx3, {
    type: 'horizontalBar',
    data: {
        labels: ["MS Office", "Windows", "Webkit Browsers", "IntelliJ", "Git/Github", "Balsamiq Mockups 3", "InVision", "Adobe Photoshop"],
        datasets: [{
            data: [19, 19, 16, 12, 16, 13, 10, 4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            xAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        steps: 4,
                        fixedStepSize: 5,
                        max: 20,
                        callback: function(value, index, values) {
                            // for a value (tick) equals to 8
                            return yLabels[value];
                            // 'junior-dev' will be returned instead and displayed on your chart
                        }
                    }
                }
            ],
            yAxes: [
                {
                    barThickness: 40
                }
            ]
        }
    }
});
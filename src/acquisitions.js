import Chart from 'chart.js/auto';

const ctx_a = document.getElementById('myChart-a');
const ctx_b = document.getElementById('myChart-b');

new Chart(ctx_a, {
    type: 'pie',
    data: {
        labels: [
            'Red', 'Orange', 'Yellow', 'Green', 'Blue'
        ],
        datasets: [{
            label: 'Dataset 1',
            data: [10, 20, 30, 40, 15],
            backgroundColor: [
                'rgb(220, 53, 69)',
                'rgb(253, 126, 20)',
                'rgb(255, 193, 7)',
                'rgb(32, 201, 151)',
                'rgb(13, 110, 253)'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        }
    }
});
new Chart(ctx_b, {
    type: 'pie',
    data: {
        labels: [
            'Red', 'Orange', 'Yellow', 'Green', 'Blue'
        ],
        datasets: [{
            label: 'Dataset 1',
            data: [10, 20, 30, 5, 14, 20],
            backgroundColor: [
                'rgb(220, 53, 69)',
                'rgb(253, 126, 20)',
                'rgb(255, 193, 7)',
                'rgb(32, 201, 151)',
                'rgb(13, 110, 253)'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        }
    }
});
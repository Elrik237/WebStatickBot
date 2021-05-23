function renderChart(listFName, listCountFName) {
    var popCanvas = document.getElementById("popChart").getContext("2d");
    var barChart = new Chart(popCanvas, {
        type: 'bar',
        data: {
        labels: listFName,
        datasets: [{
            label: 'Статистика по выполняемым командам',
            data: listCountFName,
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)'
                ]
            }]
        }
    });
    return barChart
}
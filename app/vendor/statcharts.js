/*global $, document, */
var StatCharts = (function ($) {
    'use strict';

    var NUM_USERS = 15,
        colors,
        elementoTweets,
        elementoRetweets,
        elementoPagerank,
        elementoCloseness,
        file,
        valoresTweets = [],
        valoresRetweets = [],
        valoresPagerank = [],
        valoresCloseness = [];

    function compare(a, b) {
        if (a.valor < b.valor) {
            return 1;
        }
        if (a.valor > b.valor) {
            return -1;
        }
        return 0;
    }

    function sortValores() {
        valoresTweets.sort(compare);
        valoresRetweets.sort(compare);
        valoresPagerank.sort(compare);
        valoresCloseness.sort(compare);
    }

    function drawChart(elemento, valoresMetrica, nombreSerie, nombreEje) {
        var usernames = [],
            valores = [];

        valoresMetrica.forEach(function (valorMetrica) {
            usernames.push(valorMetrica.username);
            valores.push(valorMetrica.valor);
        });

        usernames = usernames.splice(0, NUM_USERS);
        valores = valores.splice(0, NUM_USERS);

        elemento.highcharts({

            chart: {
                type: 'bar'
            },
            title: {
                text: ''
            },
            tooltip: {
                headerFormat: ''
            },
            legend: {
                enabled: false
            },
            xAxis: {
                categories: usernames,
                visible: true,
                min: 0,
                max: 10,
                minRange: 10,
                labels: {
                    formatter: function () {
                        return '<a class="user-link" target="_blank" href="https://twitter.com/' + this.value + '">' + this.value + '</a>';
                    },
                    useHTML: true
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: nombreEje,
                    x: -40
                },
                visible: true
            },
            plotOptions: {
                bar: {
                    color: {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                        stops: [
                            [0, colors.secondary],
                            [1, colors.primary]
                        ]
                    }
                },
                series: {
                    pointWidth: 14
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: nombreSerie,
                data: valores
            }]
        });
    }

    function drawCharts() {
        drawChart(elementoTweets, valoresTweets, 'Tweets', '');
        drawChart(elementoRetweets, valoresRetweets, 'Retweets', '');
        drawChart(elementoPagerank, valoresPagerank, 'Relevancia', 'Relevancia');
        drawChart(elementoCloseness, valoresCloseness, 'Intermediación', 'Intermediación');
    }

    function parseFile() {
        /*
        Formato:
        nombreUsuario, TweetsOctubre, RT octubre, pagerank, closeness *
        */
        $.getJSON(file, function (elementos) {
            var scrollPos,
                columnas = ['username', 'tweets', 'retweets', 'pagerank', 'closeness'];

            elementos.forEach(function (elem) {
                valoresTweets.push({
                    username: elem[columnas.indexOf('username')],
                    valor: elem[columnas.indexOf('tweets')]
                });
                valoresRetweets.push({
                    username: elem[columnas.indexOf('username')],
                    valor: elem[columnas.indexOf('retweets')]
                });
                valoresPagerank.push({
                    username: elem[columnas.indexOf('username')],
                    valor: Math.floor(elem[columnas.indexOf('pagerank')] * 10000) / 10000
                });
                valoresCloseness.push({
                    username: elem[columnas.indexOf('username')],
                    valor: Math.floor(elem[columnas.indexOf('closeness')] * 10000) / 10000
                });
            });

            sortValores();
            scrollPos = $(document).scrollTop(); // Prevent scrolling when redrawing chart!
            drawCharts();
            $(document).scrollTop(scrollPos);
        });
    }

    function init(selectorTweets, selectorRetweets, selectorPagerank, selectorCloseness, json) {
        elementoTweets = $(selectorTweets);
        elementoRetweets = $(selectorRetweets);
        elementoPagerank = $(selectorPagerank);
        elementoCloseness = $(selectorCloseness);
        file = json;
        parseFile();
    }

    function setColors(colorsConfig) {
        colors = colorsConfig;
    }

    return function Contructor(selectorTweets, selectorRetweets, selectorPagerank, selectorCloseness, json) {
        init(selectorTweets, selectorRetweets, selectorPagerank, selectorCloseness, json);
        this.setColors = setColors;
    };

}($));
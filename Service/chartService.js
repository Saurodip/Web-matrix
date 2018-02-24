angular.module("Application").service("chartService", ["$http", function($http){            
    this.getJSONData = function(callbackFunction)
    {
        $http.get("data/chart.json")
            .then(function(response){                                         
                callbackFunction(response);
            }, function(error){
                console.log("The request is failed: " + error);     
            });
    };

    this.createChart = function(labels, series, colors, data, displayValue, tooltipsValue, xAxisValue, yAxisValue)
    {
        this.obj =
        {
            labels: labels,
            series: series,
            colors: colors,
            data: data,
            options:  
            {
                legend: { display: displayValue },
                tooltips: { enabled: tooltipsValue },
                scales: { 
                            xAxes: [{ ticks: { display: xAxisValue } }],
                            yAxes: [{ ticks: { display: yAxisValue } }]
                        }
            }
        }
        
        return this.obj;
    }
}]);
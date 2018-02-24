angular.module("Application").controller("dashboard1Controller", ["$scope", "$timeout", "$interval", "chartService", "progressBarService", function($scope, $timeout, $interval, chartService, progressBarService){
    var pageBasicInfo = { "heading": "dashboard", "subHeading": "begins with here", "orders": "orders", "orderNumber": "4829", "balance": "balance", "balanceValue": "34343" }
        $scope.pageBasicInfo = pageBasicInfo;
    
    $scope.isRefreshed = false;
    $scope.refreshIconClicked = function()
    {
        $scope.isRefreshed = true;
        $timeout(function () {
            $scope.isRefreshed = false;
        }, 3000);
    }
    
    chartService.getJSONData(function(response){
        $scope.getChartOrders = chartService.createChart(response.data.chartOrders.labels, response.data.chartOrders.series, response.data.chartOrders.colors, response.data.chartOrders.data, response.data.chartOrders.options.legend, response.data.chartOrders.options.tooltips, response.data.chartOrders.options.xAxis, response.data.chartOrders.options.yAxis);
        $scope.getChartBalance = chartService.createChart(response.data.chartBalance.labels, response.data.chartBalance.series, response.data.chartBalance.colors, response.data.chartBalance.data, response.data.chartBalance.options.legend, response.data.chartBalance.options.tooltips, response.data.chartBalance.options.xAxis, response.data.chartBalance.options.yAxis);
    });
    
    
    var currencyInfo = { "symbol": "$", "earningStatement": "total earning", "amount": "35865", "date": "today", "currentAmount": "67.43" }
    $scope.currencyInfo = currencyInfo;
    
    var scaleData = { "currentAmount": "30", "totalAmount": "40" }
    var progressBarMaxValue = Math.ceil((scaleData.currentAmount / scaleData.totalAmount) * 100);
    $scope.progressScaling = function()
    {
        $scope.scaleProgress = 0;
   
        var timer = $interval(function () {
            if($scope.scaleProgress <= progressBarMaxValue)
            {
                $scope.scaleProgress++;
            }
            else
            {
                $interval.cancel(timer);
            }
        }, 40);
    }
    $scope.progressScaling();
    
    $scope.visitor = { "type": ["new", "returning"], "statement": "real time visitor" }
    
    var maxVisitor = 100;
    var randomVisitor = 0;
    $scope.getVisitorNumber = function()
    {
        $interval(function(){
           randomVisitor = Math.floor((Math.random() * maxVisitor) + 1);
           $scope.visitorPercentage = Math.ceil((randomVisitor / maxVisitor) * 100);
        }, 3000);
    }
    $scope.getVisitorNumber();
    
    $scope.circularProgressData = 
    {                   
        progressIndex: "75+",
        userRegistration: "registration",
        growthProgress: "progress",
        rate: "bounce rate: 5.6%"
    }
    
    $scope.circularProgressBarStyle = 
    {
        canvasId: "circularPB",
        radius: 60,
        textFillStyle: "#313131",
        strokePathStyle: "white",
        textColor: "white",
        outlineStrokeStyle: "red",
        limit: 80
    }
    $scope.callCircularProgressBar = function()
    {
        var timer = $interval(function () {
            $scope.amountLoaded = progressBarService.circularProgressBar($scope.circularProgressBarStyle);
            if($scope.amountLoaded >= $scope.circularProgressBarStyle.limit)
            {
                $interval.cancel(timer);
            }
        }, 70);
    }
    $scope.callCircularProgressBar();
    
    chartService.getJSONData(function(response){
        $scope.chart = response.data.chartStatistics;
        $scope.getChartStatistics = chartService.createChart($scope.chart.labels, $scope.chart.series, $scope.chart.colors, $scope.chart.data, $scope.chart.options.legend, $scope.chart.options.tooltips, $scope.chart.options.xAxis, $scope.chart.options.yAxis);
    });
    
    
    var weatherForecast = { "temperature": "25", "description": "stormy sky", "location": "bangalore, india", "date": new Date() }
    $scope.weatherForecast = weatherForecast;
    
    $scope.businessStat = "statistical business overview";
    $scope.socialHeaderTitle = "social activities";
    $scope.socialInfo = {
                            "type": [
                                        {
                                            "desc": "12k+ friends",
                                            "icon": "fa fa-facebook"
                                        }, 
                                        {
                                            "desc": "280 followers",
                                            "icon": "fa fa-google-plus"
                                        },
                                        {
                                            "desc": "9k+ followers",
                                            "icon": "fa fa-twitter"
                                        },
                                        {
                                            "desc": "900 contacts",
                                            "icon": "fa fa-linkedin"
                                        },
                                        {
                                            "desc": "80k+ contacts",
                                            "icon": "fa fa-skype"
                                        },
                                        {
                                            "desc": "4k+ contacts",
                                            "icon": "fa fa-whatsapp"
                                        },
                                        {
                                            "desc": "2k+ followers",
                                            "icon": "fa fa-vimeo"
                                        }
                                    ]
                        }
}]);
angular.module("Application").config(["$routeProvider", function($routeProvider){
    $routeProvider
        .when("/Dashboard1",
        {
            templateUrl: "View/Dashboard.html",
            controller: "dashboard1Controller"
        })
        .when("/Dashboard2",
        {
            templateUrl: "View/Dashboard.html",
            controller: "dashboard1Controller"
        })
        .when("/Dashboard3",
        {
            templateUrl: "View/Dashboard.html",
            controller: "dashboard1Controller"
        })
        .when("/Mailbox-gmail",
        {
            templateUrl: "View/Profile.html",
            controller: "dashboard1Controller"
        })
        .when("/Mailbox-yahoo",
        {
            templateUrl: "View/Profile.html",
            controller: "dashboard1Controller"
        })
        .when("/Mailbox-outlook",
        {
            templateUrl: "View/Profile.html",
            controller: "dashboard1Controller"
        })
        .otherwise({
            redirectTo: "/Dashboard1"
        })
}]);
angular.module("Application").controller("headerController", ["$rootScope", "$scope", "$http", function($rootScope, $scope, $http){
    $http.get("Data/sidenav-menu-items.json")
        .then(function(response) {
            $scope.sidenavMenuItems = response.data.sidenavMenuItems;
        });
    
    $scope.AppTitle = "angular template";
    
    $scope.notifications = { "envelop": 20, "bell": 9, "briefcase": 120 }
    
    $scope.init = function()
    {
        $scope.showSubmenu = false; 
        $rootScope.showSidenav = false;
        $scope.isOnload = true;
        $scope.sidebarMenuItemName = 'dashboard';
    }
    $scope.init();
    
    $scope.changeSidenavState = function()
    {
        $rootScope.showSidenav = !$rootScope.showSidenav;
    }
    
    $scope.getMenuItemInstance = function(menuItemName)
    {
        $scope.resetSubmenu = false;
        $scope.sidebarMenuItemName = menuItemName;
    }
    
    $scope.getSubmenuItemInstance = function(submenuItemName)
    {
        $scope.resetSubmenu = true;
        $scope.sidebarSubMenuItemName = submenuItemName;
    }
    
    var userInfoAdditionalData = 
    {
	"topic": 
        [
            {
		"name": "sales",
		"value": "308"
            }, 
            {
		"name": "order",
		"value": "2093"
            }, 
            {
		"name": "revenue",
		"value": "207"
            }
        ]
    }
    $scope.userInfoAdditionalData = userInfoAdditionalData;
    
    $scope.setActiveTabClass = function(item)
    {
        $scope.selectedItem = item;
    }
    
    $scope.isActive = function(item)
    {
        if($scope.isOnload)
        {
            $scope.isOnload = false;
            return $scope.selectedItem = 'dashboard';
        }
        else
        {
            return $scope.selectedItem === item;
        }
    }
}]);
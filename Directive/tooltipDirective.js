angular.module("Application").directive('tooltip', function() {
    return {
                restrict: 'A',
                link: function(scope, element, attr)
                {
                    $(element).hover(function()
                    {
                        $(element).tooltip('show');
                    }, 
                    function()
                    {
                        $(element).tooltip('hide');
                    });
                }
            };
});
learnApp.factory('jsonFactory', function($http) { 
    
    var factory = {}; // define factory object
    factory.getResponse = function(url) { // define method on factory object
        return $http.get(url);
    };
    return factory; // returning factory to make it ready to be pulled by the controller
});
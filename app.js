var app = angular.module('exam', []);
var Info = {};


app.filter('getName', function() {
        return function(input) {

            var out = input;


            for  (var i = 0; i < Info.users.length; i++) {
                if(out == Info.users[i].firstName){
                    out = Info.users[i].lastName+','+Info.users[i].firstName;

                }
            }





            return out;
        };
    })
app.controller('ExamController', function ($scope, Factory) {

    $scope.Info = Factory;

    $scope.greeting = '';

});
app.factory('Factory', function(){

    Info.users =  [{ firstName: 'Peter', lastName: 'Smith' },{ firstName: 'Jesper', lastName: 'Andersen' }]

    return Info;
});

app.factory('cases', function(caseType){
    switch(caseType) {
        case titleCase:
           response =  "My Example Service"
            break;
        case camelCase:
            response =  "MyExampleService"
            break;
        case dashCase:
            response =  "my-example-service"
            break;
        default:
            response =  "No method"
    }

    return response;
});



app.directive('loginForm', function(){
    return {
        restrict: 'E',
        templateUrl: 'form.html'
    }
});



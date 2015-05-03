//our root module for our angular app
var TodoApp = angular.module("TodoApp", []);

//our first angular controller with its scope
TodoApp.controller("TodosCtrl", ["$scope", function ($scope) {
  // set a variable on our $scope
  // $scope.greeting = "hello world";
    $scope.todos    = [];
    $scope.newTodo  = {};

  $scope.addTodo  = function () {
    $scope.todos.push($scope.newTodo);
    $scope.newTodo = {};
  };

  $scope.delete = function () {
    console.log(this);
    $scope.todos.splice(this.$index, 1);
  }

}]);


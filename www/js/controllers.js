angular.module('starter.controllers', [])

.controller('TasksCtrl', function($scope, Task) {
	//gets all the task from services.js
  $scope.data = Task.data;
    
	//newtask for entering inside html
  var tasks = {
    newTask: ""
  };
    
	//will add task to services.js
  function addTask() {
    Task.addTask(tasks.newTask);
    tasks.newTask = "";
  }
  
	//will remove task to services.js
  function remove(task){
    Task.remove(task);
  }
    
	//use $scope to see it in html
  $scope.tasks = tasks;
  $scope.addTask = addTask;      
  $scope.remove = remove;    
});

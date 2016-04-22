angular.module('starter.services', [])

.factory('Task', function() {
  
	//all tasks code taken from factory solution
  var data = {
    tasks: [
      {title: "Buy groceries"}
      , {title: "Clean dog"}
    ]
  };
  	
	//will add task to all tasks
  function addTask(title) {
    data.tasks.push({title: title});
  }
  
	//will remove task in tasks
    function removeTask(id){
        data.tasks.splice(data.tasks.indexOf(id), 1);
    }
    
	//will let the controller use items in services Task
  return {
    data: data
    , addTask: addTask,
      remove: removeTask
  };
});

(function(){
  'use strict';
angular.module('myapp',[])

.controller('mycontroller',checking);
checking.$inject =['$scope','$filter'];

function checking($scope,$filter)
{
    $scope.name = '';
    $scope.message="";
    $scope.state ;
    $scope.check=function(){

  var value = $scope.name.split(',');

        value.length= countEmptyELem(value);

        if(value.length == 0)
            display( "Please enter data first" ,'error');

        else if(value.length > 3)
            display('Too much!','fine');

        else
            display("Enjoy!",'fine');

    }

   function display(mess,stat)
    {
        $scope.message=mess;
        $scope.state= stat;
    }

    function countEmptyELem(arr){
        var count=arr.length;
        for(var i=0;i<arr.length;i++)
            {
                if(arr[i]=='')
                    {
                        count--;

                    }
            }
        return count;
    }
}}());

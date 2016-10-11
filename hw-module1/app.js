(function (){
  'use strict';

  angular.module('foodie', []).controller('myLunchChecker', myLunchChecker);

  myLunchChecker.$inject = ['$scope'];
  function myLunchChecker($scope){
    $scope.yourLunch = '';
    $scope.lunchMessage = ''
    $scope.fullnessChecker = function(){
      var lunchLength = 0;

      if($scope.yourLunch != ''){
        lunchLength = $scope.yourLunch.split(',').length;
      }

      if(lunchLength > 0 && lunchLength <= 3){
        $scope.lunchMessage = 'Enjoy!';
      }else if(lunchLength > 3){
        $scope.lunchMessage = 'Too much!';
      }else{
        $scope.lunchMessage = 'Please enter data first';
      }
    }
  }
})();

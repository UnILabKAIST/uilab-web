angular.module('uilab')
  .controller('HomeCtrl', ['$scope', 
    function($scope){

    }
  ])
  .controller('MembersCtrl', ['$scope', '$http',
    function($scope, $http){
      $http.get('data/members.json').success(function(data) {
        $scope.member_groups = data;
      });
    }
  ])
  .controller('ResearchCtrl', ['$scope', '$http',
    function($scope, $http){
      $http.get('data/researches.json').success(function(data) {
        $scope.research_groups = data;
      });
    }
  ])
  .controller('LinksCtrl', ['$scope',
    function($scope){

    }
  ]);
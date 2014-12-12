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
  .controller('LinksCtrl', ['$scope', '$http',
    function($scope, $http){
      $http.get('data/links.json').success(function(data) {
        $scope.link_groups = data;
      });
    }
  ])
  .controller('ContactCtrl', ['$scope',
    function($scope){
      $scope.map = { center: { latitude: 36.368071, longitude: 127.365510 }, zoom: 15 };
    }
  ]);
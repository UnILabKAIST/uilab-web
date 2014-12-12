angular.module('uilab')
  .controller('HomeCtrl', ['$scope', '$http',
    function($scope, $http){
      $http.get('data/researches.json').success(function(data) {
        var maxPublicationCount = 5;
        var researchGroups = data;
        var publications;
        var latestPublications = [];
        var researchGroup;
        for (var i = 0; i < researchGroups.length; i++) {
          researchGroup = researchGroups[i];
          if (researchGroup.title == 'Publications') {
            publications = researchGroup.researches;
          }
        }
        var maxIter = Math.min(publications.length, maxPublicationCount);
        var publication;
        for (var i = 0; i < maxIter; i++) {
          publication = publications[i];
          latestPublications.push(publication);
        }
        $scope.publications = latestPublications;
      });
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
      $scope.lab = { center: { latitude: 36.368071, longitude: 127.365510 }}
    }
  ]);
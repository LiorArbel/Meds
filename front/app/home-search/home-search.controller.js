(function () {
    angular
        .module('Meds.homeSearch')
        .controller('HomeSearchCtrl', HomeSearchCtrl);

    HomeSearchCtrl.$inject = ['$http', '$q'];

    function HomeSearchCtrl($http, $q){
        var vm = this;

        vm.searchTypes = [
            {text: 'תרופות זהות', value: 'byName'},
            {text: 'מרכיב פעיל', value: 'byIngredient'}
        ];

        vm.searchType = vm.searchTypes[0];

        vm.bla = [];

        var deferred = $q.defer();
        vm.meds = deferred.promise;

        $http.get('http://172.16.1.247:3000/meds').then(function (res) {
            deferred.resolve(res.data);
        });
    }
})();
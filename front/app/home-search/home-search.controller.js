(function () {
    angular
        .module('Meds.homeSearch')
        .controller('HomeSearchCtrl', HomeSearchCtrl);

    HomeSearchCtrl.$inject = ['$http', '$q', '$location'];

    function HomeSearchCtrl($http, $q, $location){
        var vm = this;

        vm.gotResults = false;

        vm.searchTypes = [
            {text: 'תרופות זהות', value: 'byName'},
            {text: 'מרכיב פעיל', value: 'byIngredient'}
        ];

        vm.searchType = vm.searchTypes[0];

        vm.bla = [];

        var deferred = $q.defer();
        vm.meds = deferred.promise;

        $http.get('http://172.16.1.247:3000/meds').then(function (res) {
            vm.gotResults = true;
            deferred.resolve(res.data);
            vm.meds = res.data;
        });

        vm.doSearch = function (text) {
            if(!vm.gotResults){
                return vm.meds;
            } else {
                return text ? vm.meds.filter(query) : vm.meds;
            }
        };

        vm.selectedItemChange = function (med) {
            $location.path('/med/' + med._id);
        };

        function query(item){
            return item.hebName.indexOf(vm.searchText) >= 0
        }
    }
})();
(function () {
    angular
        .module('homeSearch', [])
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider){
        $routeProvider.when('/home', {
            controller: 'HomeSearchCtrl',
            controllerAs: 'vm',
            templateUrl: 'app/home-search/home-search.html',
            bindToController: true
        })
    }
})();
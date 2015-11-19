(function () {
    angular
        .module('Meds', [
            'ngRoute',
            'ngResource',
            'Meds.homeSearch'
        ])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider'];

    function config($routeProvider){
        $routeProvider.otherwise('home');
    }

    run.$inject = [];

    function run(){

    }
})();
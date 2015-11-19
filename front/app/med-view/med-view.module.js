(function (){
    angular
        .module('Meds.medView', [])
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider){
        $routeProvider.when('/med/:med', {
            controller: 'MedViewCtrl',
            controllerAs: 'vm',
            templateUrl: 'app/med-view/med-view.html',
            bindToController: true
        });
    }
})();
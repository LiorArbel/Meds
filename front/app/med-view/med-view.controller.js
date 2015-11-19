(function(){
    angular.module('Meds.medView')
        .controller('MedViewCtrl', MedViewCtrl);

    MedViewCtrl.$inject = ['Medicine', '$routeParams'];
    function MedViewCtrl(Medicine, $routeParams){
        var vm = this;

        Medicine.getMedicinesByMaterial($routeParams.med)
            .then(function(res){
                vm.medicines = res.data;
            },function(){
                notie.alert(3, 'Wat crap', 3);
            });
    }
})();
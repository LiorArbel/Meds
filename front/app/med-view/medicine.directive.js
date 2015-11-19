(function(){
    angular.module('Meds.medView')
        .directive('medicine', Medicine);

    function Medicine(){
        return {
            templateUrl:'app/med-view/medicine.template.html',
            restrict: 'E',
            controller: MedicineCtrl,
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                medicine: '='
            }
        };

        MedicineCtrl.$inject = ['Medicine']
        function MedicineCtrl(Medicine){
            var vm = this;
        }
    }
})();
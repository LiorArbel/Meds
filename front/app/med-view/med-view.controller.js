(function(){
    angular.module('Meds.medView')
        .controller('MedViewCtrl', MedViewCtrl);

    MedViewCtrl.$inject = ['$http', 'Medicine', '$routeParams', '$location'];
    function MedViewCtrl($http, Medicine, $routeParams, $location){
        var vm = this;

        vm.errMsg = '';

        $http.get('http://172.16.2.140:3000/meds/' + $routeParams.med).then(function (res) {
            vm.medicine = res.data;
        });

        Medicine.getMedicinesByMaterial($routeParams.med)
            .then(function(res){
                if(res.data.length > 0){
                    vm.medicines = res.data;
                } else {
                    vm.errMsg = 'אין תוצאות';
                }
            }, function (err) {
                vm.errMsg = 'אירעה שגיאה';
            });

        $('.meds-results-container').perfectScrollbar();

        $('.md-scroll-mask').remove();

        vm.return = function(){
            $location.path('home');
        };

        vm.getComponentsString = function (components) {
            var text = '';
            components.forEach(function (component) {
                text += component.name;
                if (component.quantity > 1) {
                    text += ' ' + component.quantity
                }
                if (component.quantity > 1 && component.unit) {
                    text += component.unit;
                }
                if (components.indexOf(component) != components.length - 1) {
                    text += ', ';
                } else {
                    text += '.'
                }
            });
            return text;
        };

        //$http.get('http://172.16.1.247:3000/meds?')
    }
})();
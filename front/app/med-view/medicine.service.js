(function () {
    angular
        .module('Meds.medView')
        .factory('Medicine', Medicine);

    Medicine.$inject = ['$http'];
    function Medicine($http) {
        function getMedicinesByMaterial(med) {
            return $http.get('http://172.16.1.247:3000/meds/' + med + '/_get_by_ingredient');

        }

        function getMedicines() {

           return $http.get('http://172.16.1.247:3000/medicine/');
        }

        return {
            getMedicinesByMaterial: getMedicinesByMaterial,
            getMedicines: getMedicines
        }
    }

})();
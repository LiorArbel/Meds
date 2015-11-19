(function () {
    angular
        .module('Meds.medView')
        .factory('Medicine', Medicine);

    Medicine.$inject = ['$http'];
    function Medicine($http) {
        function getMedicinesByMaterial(med) {
            return $http.get('/med/' + med)
                .then(function(){
                    return {data: {medicines: ['ASD', 'asdasd']}};
                });
        }

        function getMedicines() {

           return $http.get('wat/medicine/');
        }

        return {
            getMedicinesByMaterial: getMedicinesByMaterial,
            getMedicines: getMedicines
        }
    }

})();
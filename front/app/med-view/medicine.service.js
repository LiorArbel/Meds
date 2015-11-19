(function () {
    angular
        .module('Meds.medView')
        .factory('Medicine', Medicine);

    Medicine.$inject = ['$http'];
    function Medicine($http) {
        function getMedicinesByMaterial(med) {
            return $http.get('http://172.16.1.247:3000/med/' + med)
                .then(function(){
                    return {data: {medicines: ['ASD', 'asdasd']}};
                });
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
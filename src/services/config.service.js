angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://jrd-api-quiz-env.eba-d4qytphe.us-east-2.elasticbeanstalk.com/';

    return service;
}]);
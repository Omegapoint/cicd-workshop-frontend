describe('test suite: PersonController', function() {
    var $rootScope,
        $q,
        PersonService,
        controller;

    beforeEach(function() {
        module('myApp', function($provide) {
            $provide.constant('ABS_URL', '');
        });
    });


    beforeEach(inject( function(_$rootScope_, $q, _PersonService_) {

        $rootScope = _$rootScope_;
        PersonService = _PersonService_;

        spyOn(PersonService, 'loadPersons').andCallFake(function () {
            var deferred = $q.defer();
            deferred.resolve(testData.getPersons());
            return deferred.promise;
        });
    }));


    beforeEach(inject(function($controller) {
        controller = $controller('PersonController', {
            'PersonService': PersonService
        });
    }));


    it ('onChangeCountry should given a selected person change the persons list', function () {
        $rootScope.$apply();

        /*
            TODO:
            init property selectedPerson and call onChangeCountry on the controller object
            write at least on assertion using the expect function, the expect function can be combined with matchers,
            see example below.

         */
        expect(true).toBeTruthy();
    });

    var testData = (function () {
        var persons = [{namn:'Olle',id:1,country:'Sweden'},{namn:'Jakob', id:2,country:'Sweden'}];

        return {
            getPersons : function () {
                return persons;
            }
        }
    }());
});
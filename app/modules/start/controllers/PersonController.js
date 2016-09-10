angular.module('myApp')
    .controller('PersonController', PersonController);

function PersonController(PersonService) {
    this.selectedPerson = {};
    this.person = "";
    this.personService = PersonService;
    var that = this;
    PersonService.loadPersons().then(function (response) {
       that.allPersons = response;
       that.persons = [];
    });

}

PersonController.prototype.onChangeCountry = function() {
    var that = this;
    this.persons = _.filter(this.allPersons, function (person) {
       return that.selectedPerson.country === person.country;
    });
    this.person = "";
};

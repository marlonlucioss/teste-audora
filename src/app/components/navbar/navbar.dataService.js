(function() {
  'use strict';

  angular
    .module('audoraTeste')
    .factory('NavbarService', NavbarService);

  /** @ngInject */
  function NavbarService() {

    var vm = this;

    var categories = [
      {
        name : "Tudo",
        code: "all"
      },
      {
        name : "Meu Departamento",
        code: "1"
      },
      {
        name : "Meus Agendamentos",
        code: "2"
      },
      {
        name : "Como Responsável",
        code: "3"
      },
      {
        name : "Departamento",
        code: "4"
      },
      {
        name : "Colaborador",
        code: "5"
      },
      {
        name : "Atrasados",
        code: "6"
      }
    ];

    var places = [
      {
        name : "Maceió",
        code: "mcz"
      },
      {
        name : "Aracaju",
        code: "arc"
      },
      {
        name : "Recife",
        code: "ref"
      }
    ];

    function getPlaces() {
      return places;
    }

    function getCategories() {
      return categories;
    }

    return {
      getCategories : getCategories,
      getPlaces : getPlaces
    }

  }
})();

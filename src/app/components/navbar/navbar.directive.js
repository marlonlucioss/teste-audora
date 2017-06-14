(function() {
  'use strict';

  angular
    .module('audoraTeste')
    .directive('mainNavbar', mainNavbar);

  /** @ngInject */
  function mainNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment, NavbarService) {
      var vm = this;

      var places = [];
      var categories = [];

      init();

      function init(){
        places = NavbarService.getPlaces();
        categories = NavbarService.getCategories();
      }

      angular.extend(this,{
        places : places,
        categories : categories
      });

    }
  }

})();

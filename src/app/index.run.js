(function() {
  'use strict';

  angular
    .module('audoraTeste')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

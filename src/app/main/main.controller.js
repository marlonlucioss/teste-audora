(function() {
  'use strict';

  angular
    .module('audoraTeste')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(AgendaService, moment, $scope) {

    var vm = this;

    var appointments = [];

    var currentDate = new Date().getTime();

    vm.rowselected = [];

    init();

    function init() {
      appointments = AgendaService.getAppointments();
    }

    function convertDate(date){

      return moment(date).format('LL');
    }

    function getWeekDay(date){

      if(moment(date).calendar().indexOf('Hoje') != -1){
        date = "Hoje";
      }else{
        switch (moment(date).isoWeekday()){
          case 1:
            date = "Segunda";
            break;
          case 2:
            date = "Terça";
            break;
          case 3:
            date = "Quarta";
            break;
          case 4:
            date = "Quinta";
            break;
          case 5:
            date = "Sexta";
            break;
          case 6:
            date = "Sábado";
            break;
          case 7:
            date = "Domingo";
            break;
        }
      }
      return date;
    }

    var now;
    var then;
    var duration;
    var timeLeft;

    function daysCount(finalDay){
      now = moment(currentDate);
      then = moment(finalDay);
      duration = moment.duration(then.diff(now));
      return [
        parseInt(duration.asDays().toFixed(0)),
        parseInt(duration.asMonths().toFixed(0)),
        parseInt(duration.asYears().toFixed(0))
      ];
    }

    function checkDiffDays(finalDay){

      timeLeft = daysCount(finalDay);

      if(timeLeft[1] == 1){
        timeLeft = '1 mês';
      }else if(timeLeft[1] > 1){
        timeLeft = timeLeft[1] + ' meses';
      }else if(timeLeft[0] == 1){
        timeLeft = '1 dia';
      }else if(timeLeft[0] > 1) {
        timeLeft = timeLeft[0] + ' dias';
      }else if(timeLeft[0] == 0) {
        timeLeft = 'Hoje';
      }

      return timeLeft;

    }

    angular.extend(this, {
      appointments : appointments,
      getWeekDay : getWeekDay,
      convertDate : convertDate,
      checkDiffDays : checkDiffDays
    });

  }
})();

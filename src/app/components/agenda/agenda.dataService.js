(function() {
  'use strict';

  angular
    .module('audoraTeste')
    .factory('AgendaService', AgendaService);

  /** @ngInject */
  function AgendaService() {

    var vm = this;
    var appointments = [
      {
        date : 1497409200000,
        appointments : [
          {
            id : 7854,
            time : "13:30",
            date_to_go : 1497409200000,
            desc : "Requerimento de baixa complexidade",
            cause : "[15054] - 0801546.49.2014.4.05.8000",
            requester : "Santa Casa de Misericórdia de Maceió",
            object : "Confimar a informação da Autora acerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto",
            against : "Quitéria Maria da Conceição de Lima",
            local : "13ª Vara Federal de Alagoas",
            type : "Correspondência",
            avatar : "http://www.belasmensagens.com.br/wp-content/uploads/2014/03/mensagens-dia-da-mulher.jpg",
            person : "John Locke",
            date : 1497322800000,
            done : true,
            open : false,
            confirmed : true
          },
          {
            id : 7854,
            time : "13:30",
            date_to_go : 1497409200000,
            desc : "Requerimento de baixa complexidade",
            cause : "[15054] - 0801546.49.2014.4.05.8000",
            requester : "Santa Casa de Misericórdia de Maceió",
            object : "Confimar a informação da Autora acerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto",
            against : "Quitéria Maria da Conceição de Lima",
            local : "13ª Vara Federal de Alagoas",
            type : "Correspondência",
            avatar : "http://www.belasmensagens.com.br/wp-content/uploads/2014/03/mensagens-dia-da-mulher.jpg",
            person : "John Locke",
            date : 1497322800000,
            done : false,
            open : true,
            confirmed : false
          }
        ]
      },
      {
        date : 1498100400000,
        appointments : [
          {
            id : 7854,
            time : "13:20",
            date_to_go : 1498791600000,
            desc : "Requerimento de baixa complexidade",
            cause : "[15054] - 0801546.49.2014.4.05.8000",
            requester : "Santa Casa de Misericórdia de Maceió",
            object : "Confimar a informação da Autora acerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto",
            against : "Quitéria Maria da Conceição de Lima",
            local : "13ª Vara Federal de Alagoas",
            type : "Correspondência",
            avatar : "http://www.belasmensagens.com.br/wp-content/uploads/2014/03/mensagens-dia-da-mulher.jpg",
            person : "John Locke",
            date : 1497495600000,
            done : true,
            open : true,
            confirmed : false
          }
        ]
      },
      {
        date : 1500692400000,
        appointments : [
          {
            id : 7854,
            time : "13:30",
            date_to_go : 1498100400000,
            desc : "Requerimento de baixa complexidade",
            cause : "[15054] - 0801546.49.2014.4.05.8000",
            requester : "Santa Casa de Misericórdia de Maceió",
            object : "Confimar a informação da Autora acerca da substituição do fármaco utilizado no seu tratamento de saúde juntando Relatório Médico para tanto",
            against : "Quitéria Maria da Conceição de Lima",
            local : "13ª Vara Federal de Alagoas",
            type : "Correspondência",
            avatar : "http://www.belasmensagens.com.br/wp-content/uploads/2014/03/mensagens-dia-da-mulher.jpg",
            person : "John Locke",
            date : 1497409200000,
            done : false,
            open : false,
            confirmed : false
          }
        ]
      }

    ];

    function getAppointments() {
      return appointments;
    }

    return {
      getAppointments : getAppointments
    }

  }
})();

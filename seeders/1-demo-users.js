'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [ {
          firstName: 'One',
          lastName: 'Example',
          password: bcrypt.hashSync('asd123', bcrypt.genSaltSync(8), null),
          email: 'demo1@example.com',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }, {
          firstName: 'Two',
          lastName: 'Example',
          password: bcrypt.hashSync('asd123', bcrypt.genSaltSync(8), null),
          email: 'demo2@example.com',
          createdAt: '2018.01.01',
          updatedAt: '2018.01.01'
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class UserService {

  constructor(){};

  async find() {
    const users = await models.User.findAll({
      include: ['role']
    });
    return users;
  }

  async findOne(dni) {
    const user = await models.User.findByPk(dni, {
      include: [{ all: true }]
    });
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async update(dni, changes) {
    const user = await this.findOne(dni);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(dni) {
    const user = await this.findOne(dni);
    await user.destroy();
    return { dni };
  }
}

module.exports = UserService;
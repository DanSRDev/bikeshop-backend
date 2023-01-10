const boom = require('@hapi/boom');

class UserService {

  constructor(){};

  async find() {
    const users = {};
    return users;
  }

  async findOne(dni) {
    const user = {dni};
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async create(data) {
    const newUser = {data};
    return newUser;
  }

  async update(dni, changes) {
    const user = await this.findOne(dni);
    const rta = {user, ...changes};
    return rta;
  }

  async delete(dni) {
    const user = await this.findOne(dni);
    await user;
    return { dni };
  }
}

module.exports = UserService;
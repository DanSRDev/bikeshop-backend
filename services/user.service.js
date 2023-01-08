const boom = require('@hapi/boom');

class UserService {

  constructor(){};

  async find() {
    const users = {};
    return users;
  }

  async findOne(id) {
    const user = {id};
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async create(data) {
    const newUser = {data};
    return newUser;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = {user, ...changes};
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user;
    return { id };
  }
}

module.exports = UserService;
const boom = require('@hapi/boom');

class RoleService {

  constructor(){};

  async find() {
    const roles = {};
    return roles;
  }

  async findOne(id) {
    const role = {id};
    if (!role) {
      throw boom.notFound('role not found');
    }
    return role;
  }

  async create(data) {
    const newRole = {data};
    return newRole;
  }

  async update(id, changes) {
    const role = await this.findOne(id);
    const rta = {role, ...changes};
    return rta;
  }

  async delete(id) {
    const role = await this.findOne(id);
    await role;
    return { id };
  }
}

module.exports = RoleService;
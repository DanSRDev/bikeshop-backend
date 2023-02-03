const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class RoleService {

  constructor(){};

  async find() {
    const roles = await models.Role.findAll();
    return roles;
  }

  async findOne(id) {
    const role = await models.Role.findByPk(id, {
      include: ['users']
    });
    if (!role) {
      throw boom.notFound('role not found');
    }
    return role;
  }

  async create(data) {
    const newRole = await models.Role.create(data);
    return newRole;
  }

  async update(id, changes) {
    const role = await this.findOne(id);
    const rta = await role.update(changes);
    return rta;
  }

  async delete(id) {
    const role = await this.findOne(id);
    await role.destroy();
    return { id };
  }
}

module.exports = RoleService;
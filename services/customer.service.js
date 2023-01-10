const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CustomerService {

  constructor(){};

  async find() {
    const customers = await models.Customer.findAll();
    return customers;
  }

  async findOne(dni) {
    const customer = await models.Customer.findByPk(dni, {
      include: ['sales']
    });
    if (!customer) {
      throw boom.notFound('customer not found');
    }
    return customer;
  }

  async create(data) {
    const newCustomer = await models.Customer.create(data);
    return newCustomer;
  }

  async update(dni, changes) {
    const customer = await this.findOne(dni);
    const rta = await customer.update(changes);
    return rta;
  }

  async delete(dni) {
    const customer = await this.findOne(dni);
    await customer.destroy();
    return { dni };
  }
}

module.exports = CustomerService;
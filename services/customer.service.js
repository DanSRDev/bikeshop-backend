const boom = require('@hapi/boom');

class CustomerService {

  constructor(){};

  async find() {
    const customers = {};
    return customers;
  }

  async findOne(dni) {
    const customer = {dni};
    if (!customer) {
      throw boom.notFound('customer not found');
    }
    return customer;
  }

  async create(data) {
    const newCustomer = {data};
    return newCustomer;
  }

  async update(dni, changes) {
    const customer = await this.findOne(dni);
    const rta = {customer, ...changes};
    return rta;
  }

  async delete(dni) {
    const customer = await this.findOne(dni);
    await customer;
    return { dni };
  }
}

module.exports = CustomerService;
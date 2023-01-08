const boom = require('@hapi/boom');

class CustomerService {

  constructor(){};

  async find() {
    const customers = {};
    return customers;
  }

  async findOne(id) {
    const customer = {id};
    if (!customer) {
      throw boom.notFound('customer not found');
    }
    return customer;
  }

  async create(data) {
    const newCustomer = {data};
    return newCustomer;
  }

  async update(id, changes) {
    const customer = await this.findOne(id);
    const rta = {customer, ...changes};
    return rta;
  }

  async delete(id) {
    const customer = await this.findOne(id);
    await customer;
    return { id };
  }
}

module.exports = CustomerService;
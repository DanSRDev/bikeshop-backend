const boom = require('@hapi/boom');

class SupplierService {

  constructor(){};

  async find() {
    const suppliers = {};
    return suppliers;
  }

  async findOne(id) {
    const supplier = {id};
    if (!supplier) {
      throw boom.notFound('supplier not found');
    }
    return supplier;
  }

  async create(data) {
    const newSupplier = {data};
    return newSupplier;
  }

  async update(id, changes) {
    const supplier = await this.findOne(id);
    const rta = {supplier, ...changes};
    return rta;
  }

  async delete(id) {
    const supplier = await this.findOne(id);
    await supplier;
    return { id };
  }
}

module.exports = SupplierService;
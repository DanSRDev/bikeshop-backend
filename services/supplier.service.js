const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class SupplierService {

  constructor(){};

  async find() {
    const suppliers = await models.Supplier.findAll();
    return suppliers;
  }

  async findOne(id) {
    const supplier = await models.Supplier.findByPk(id, {
      include: ['products']
    });
    if (!supplier) {
      throw boom.notFound('supplier not found');
    }
    return supplier;
  }

  async create(data) {
    const newSupplier = await models.Supplier.create(data);
    return newSupplier;
  }

  async update(id, changes) {
    const supplier = await this.findOne(id);
    const rta = await supplier.update(changes);
    return rta;
  }

  async delete(id) {
    const supplier = await this.findOne(id);
    await supplier.destroy();
    return { id };
  }
}

module.exports = SupplierService;
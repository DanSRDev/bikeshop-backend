const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class SaleService {

  constructor(){};

  async find() {
    const sales = await models.Sale.findAll();
    return sales;
  }

  async findOne(id) {
    const sale = await models.Sale.findByPk(id, {
      include: [{ all: true }]
    });
    if (!sale) {
      throw boom.notFound('sale not found');
    }
    return sale;
  }

  async findOneItem(id) {
    const item = await models.SaleProduct.findByPk(id, {
      include: [{ all: true }]
    });
    if (!item) {
      throw boom.notFound('sale not found');
    }
    return item;
  }

  async create(data) {
    const newsale = await models.Sale.create(data);
    return newsale;
  }

  async addItem(data) {
    const { saleId } = data;
    await this.findOne(saleId);
    const newItem = await models.SaleProduct.create(data);
    return newItem;
  }

  async updateItem(id, changes) {
    const item = await this.findOneItem(id);
    const rta = await item.update(changes);
    return rta;
  }

  async update(id, changes) {
    const sale = await this.findOne(id);
    const rta = await sale.update(changes);
    return rta;
  }

  async delete(id) {
    const sale = await this.findOne(id);
    await sale.destroy();
    return { id };
  }
}

module.exports = SaleService;
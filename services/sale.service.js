const boom = require('@hapi/boom');

class SaleService {

  constructor(){};

  async find() {
    const sales = {};
    return sales;
  }

  async findOne(id) {
    const sale = {id};
    if (!sale) {
      throw boom.notFound('sale not found');
    }
    return sale;
  }

  async create(data) {
    const newsale = {data};
    return newsale;
  }

  async update(id, changes) {
    const sale = await this.findOne(id);
    const rta = {sale, ...changes};
    return rta;
  }

  async delete(id) {
    const sale = await this.findOne(id);
    await sale;
    return { id };
  }
}

module.exports = SaleService;
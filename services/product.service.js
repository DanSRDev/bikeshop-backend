const boom = require('@hapi/boom');

class ProductService {

  constructor(){};

  async find() {
    const products = {};
    return products;
  }

  async findOne(id) {
    const product = {id};
    if (!product) {
      throw boom.notFound('product not found');
    }
    return product;
  }

  async create(data) {
    const newProduct = {data};
    return newProduct;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const rta = {product, ...changes};
    return rta;
  }

  async delete(id) {
    const product = await this.findOne(id);
    await product;
    return { id };
  }
}

module.exports = ProductService;
const boom = require('@hapi/boom');

class CategoryService {

  constructor(){};

  async find() {
    const categories = {};
    return categories;
  }

  async findOne(id) {
    const category = {id};
    if (!category) {
      throw boom.notFound('category not found');
    }
    return category;
  }

  async create(data) {
    const newCategory = {data};
    return newCategory;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    const rta = {category, ...changes};
    return rta;
  }

  async delete(id) {
    const category = await this.findOne(id);
    await category;
    return { id };
  }
}

module.exports = CategoryService;
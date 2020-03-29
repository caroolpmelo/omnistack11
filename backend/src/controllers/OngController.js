const crypto = require('crypto');
const connection = require('../database/connection');

const OngController = {
  async index(request, response) {
    return response.json(await connection('ongs').select('*'));
  },

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return response.json({ id });
  }
};

module.exports = OngController;

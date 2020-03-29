const connection = require('../database/connection');

const ProfileController = {
  async index(request, response) {
    return response.json(
      await connection('incidents')
        .where('ong_id', request.headers.authorization)
        .select('*')
    );
  }
};

module.exports = ProfileController;

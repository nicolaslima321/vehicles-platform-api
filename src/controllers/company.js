import CompanyRepository from '../models/company.js';

export default {
  async index(_req, res) {
    try {
      const companies = await CompanyRepository.findAll();
      res.json(companies)
    } catch (error) {
      console.error('Could not fetch from database', error);

      res.json({
        message: 'Could not fetch all companies',
      }, 500);
    }
  }
}

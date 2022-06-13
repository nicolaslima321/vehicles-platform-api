import CompanyRepository from '../models/company.js';

export default {
  async index(_req, res) {
    try {
      const companies = await CompanyRepository.findAll();
      return res.json(companies)
    } catch (error) {
      console.error('Could not fetch from database', error);

      return res.status(500).json({
        message: 'Could not fetch all companies',
      });
    }
  }
}

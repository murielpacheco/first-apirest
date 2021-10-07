import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create({
        nome: 'Muriel',
        email: 'daleas@gmail.com',
        password: '12313121',
      });
      res.json(novoUser);
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();

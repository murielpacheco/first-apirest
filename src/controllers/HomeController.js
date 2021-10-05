import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Julia',
      sobrenome: 'Almeida',
      email: 'juliaalmeida@gmail.com',
      idade: 21,
      peso: 59,
      altura: 1.60,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();

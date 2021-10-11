import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

// nao deveria existir
router.get('/', userController.index); // lista usuários
router.get('/:id', userController.show); // mostrar usuário

router.post('/', userController.store);
router.put('/', userController.update);
router.delete('/', userController.delete);

export default router;

/*
index  -> lista todos os usuários -> GET
store/create -> cria novo usuário -> POST
delete -> deleta um usuário -> DELETE
show -> mostra um usurário -> GET
update -> atualiza um usuário -> PATCH ou PUT

*/

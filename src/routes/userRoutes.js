import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);

export default router;

/*
index  -> lista todos os usuários -> GET
store/create -> cria novo usuário -> POST
delete -> deleta um usuário -> DELETE
show -> mostra um usurário -> GET
update -> atualiza um usuário -> PATCH ou PUT

*/

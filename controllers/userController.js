const { Router } = require('express');

const {
  RegisterUserService,
  GetAllUserService,
  GetUserByIdService,
  DeleteUserService,
} = require('../services/userService');
const VerifyAuthorization = require('../middlewares/VerifyAuthorization');
// const { User, BlogPost } = require('../models');

const userController = new Router();

// userController.get('/', (req, res) => {
//   User.findAll({ include: { model: BlogPost, as: 'blogPost' } })
//     .then((data) => {
//       res.status(200).json(data);
//     })
//     .catch(() => {
//       res.status(500).json({ message: 'erro interno' });
//     });
// });

userController.post('/', RegisterUserService);

userController.use(VerifyAuthorization);

userController.get('/', GetAllUserService);
userController.get('/:id', GetUserByIdService);
userController.delete('/me', DeleteUserService);

// userController.put('/:id', updateAdminOrderStatus);

module.exports = userController;

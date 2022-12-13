/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import express from 'express';
import postController from '../controllers/post.controller.js';
import validator from '../validators/validator.js';
import postValidator from '../validators/post.validator.js';
import checkAuth from '../middlewares/auth.middlewares.js';
import store from '../config/multer.config.js';

const postRouter = express.Router();

postRouter.post('/createpost', [checkAuth, store.single('image'), validator(postValidator)], postController.createPost);
postRouter.delete('/:id', postController.deletePost);

export default postRouter;
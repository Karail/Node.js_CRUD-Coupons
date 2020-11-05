import { Router } from 'express';
//Controllers
import couponController from './coupon.controller';
//Passport
import passport from '../auth/middleware/passport.middleware';
//Multer
import multer from '../shared/middleware/multer.middleware';

const router = Router();

router.get('/', passport.authenticate('jwt', { session: false }), couponController.findAll);
router.get('/:id', passport.authenticate('jwt', { session: false }), couponController.findOne);
router.post('/',  multer.single('icon'), couponController.create);
router.put('/:id' , multer.single('icon'), couponController.update);
router.delete('/:id' , couponController.delete);

export default router;
import express from 'express';
import { addToWishlist, removeFromWishlist, getUserWishlist } from '../controllers/wishlistController.js';
import userAuth from '../middleware/auth.js'

const router = express.Router();

router.post('/wishlist/add/:gameId', userAuth, addToWishlist);

router.delete('/wishlist/remove/:gameId', userAuth, removeFromWishlist);

router.get('/wishlist/show', userAuth, getUserWishlist);

export default router;

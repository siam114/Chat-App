import express from 'express';
import { protectRoute } from '../middleware/auth.js';
import { getUsersForSidebar } from '../controllers/messageController';

const messageRouter = express.Router();

messageRouter.get('/users', protectRoute, getUsersForSidebar)
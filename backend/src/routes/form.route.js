

import express from 'express'

import { createForm } from '../controllers/form.controller.js'
import { upload } from '../middleware/multer.middleware.js'

const router = express.Router()

router.post('/create', upload.single('file'),createForm)

export {router}
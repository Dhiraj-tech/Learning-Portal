import express from "express";
import { studentCtrl } from "../../controllers/cms/index.js";

const router = express.Router()
router.route('/')
    .get(studentCtrl.index)
    .post(studentCtrl.store)

router.route('/:id')
    .get(studentCtrl.show)
    .put(studentCtrl.update)
    .patch(studentCtrl.update)
    .delete(studentCtrl.destroy)

export default router
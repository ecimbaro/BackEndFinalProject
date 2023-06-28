import express from "express";
const router = express.Router();
import { addCountry, deleteCountry, getCountry, updateCountry } from "../controllers/controllers";
import { prefixValidator } from '../utils/middleware/prefixValidator';
import { IDValidator } from '../utils/middleware/idValidator';


router.get("/show", getCountry);
router.post("/country/:country",prefixValidator, addCountry);
router.delete("/delete/:id", IDValidator, deleteCountry);
router.put('/update', updateCountry)

export default router;

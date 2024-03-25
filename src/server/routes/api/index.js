import express from "express";
import controllers from "../../controllers/index.js";

const router = express.Router();

router.get("/countries", controllers.getCountries);
router.get("/availability", controllers.getAvailability);
router.get("/terminals", controllers.getTerminals);

const api = router;

export default api;

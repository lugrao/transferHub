import express from "express";
import controllers from "../../controllers/index.js";

const router = express.Router();

router.get("/test", controllers.getTest);
router.get("/countries", controllers.getCountries);

const api = router;

export default api;

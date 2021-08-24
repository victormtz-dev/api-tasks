import tasks from "../components/tasks/routes"

import { Router } from "express";

const router = Router();

router.use(tasks);


export default router;
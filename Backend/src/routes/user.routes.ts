import { validate } from '../Middleware/validate.middleware.js';
import { registerScheme } from '../Validators/auth.validator.js';
import { CreateUser } from '../controllers/user.controller.js';

  import { Router } from "express";

const router = Router();

    router.post(
        "/CreateUser",
        validate(registerScheme),
        CreateUser
    )

    export default router
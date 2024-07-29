import express from "express";
import { addUsuario } from "../controllers/usuarioController";

const router = express.Router();

router.post("/addUsuario", addUsuario);

export default router;
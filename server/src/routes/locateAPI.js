import express from 'express';
import consultaDireccion from '../controllers/consultaDireccion.js';
import consultaDireccionQuery from '../controllers/consultaDireccionQuery.js';


const router = express.Router();


router.get('/', consultaDireccion);

router.get('/query', consultaDireccionQuery); 

export default router;// locateAPI.js
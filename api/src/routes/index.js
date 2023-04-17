const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokRouter = require('./pokemon.routes.js');
const typeRoutes = require('./type.routes.js');

const router = Router();

router.use('/pokemon', pokRouter);
router.use('/type', typeRoutes);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;

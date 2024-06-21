/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import ClientesController from '#controllers/clientes_controller'
import EntregasController from '#controllers/entregas_controller'
import MotoristasController from '#controllers/motoristas_controller'
import RoteirosController from '#controllers/roteiros_controller'
import VeiculosController from '#controllers/veiculos_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/cliente', ClientesController).apiOnly()
router.resource('/entrega', EntregasController).apiOnly()
router.resource('/motorista', MotoristasController).apiOnly()
router.resource('/roteiro', RoteirosController).apiOnly()
router.resource('/veiculo', VeiculosController).apiOnly()

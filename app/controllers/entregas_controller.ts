import Entrega from '#models/entrega';
import type { HttpContext } from '@adonisjs/core/http'

export default class EntregasController {
    async index({request}: HttpContext){
        
        // http://localhost:3333/Cargos?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Entrega.query().paginate(page, perPage)
        // return await Cargo.query()
    };

    async show({params}: HttpContext) {
        return await Entrega.query()
        .where('id', params.id)
        .preload('clientes')
        .preload('roteiros')
        .firstOrFail();
    };

    async store({request}: HttpContext){

        const dados = request.only(["cliente_id","endereco_origem","endereco_destino", "data_agendamento", "status_entrega"])
        return await Entrega.create(dados)
        
    };


    async update({params, request}: HttpContext) {

        const entrega =  await Entrega.findOrFail(params.id)
        const dados = request.only(["cliente_id","endereco_origem","endereco_destino", "data_agendamento", "status_entrega"])
        
        entrega.merge(dados)
    
        return await entrega.save()
    };


    async destroy({params}: HttpContext) {

        const entrega =  await Entrega.findOrFail(params.id)

        await entrega.delete()

        return {msg:'registro deletado com sucesso', Entrega}
    };
}
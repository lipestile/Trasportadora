import Roteiro from '#models/roteiro';
import type { HttpContext } from '@adonisjs/core/http'

export default class RoteirosController {
    async index({request}: HttpContext){
        
        // http://localhost:3333/Cargos?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Roteiro.query().paginate(page, perPage)
        // return await Cargo.query()
    };

    async show({params}: HttpContext) {
        return await Roteiro.query()
        .where('id', params.id)
        .preload('entregas')
        .preload('motoristas')
        .preload('veiculos')
        .firstOrFail();
    };

    async store({request}: HttpContext){

        const dados = request.only(["entrega_id","motorista_id","veiculo_id","data_rota","status_rota"])
        return await Roteiro.create(dados)
        
    };


    async update({params, request}: HttpContext) {

        const roteiro =  await Roteiro.findOrFail(params.id)
        const dados = request.only(["entrega_id","motorista_id","veiculo_id","data_rota","status_rota"])
        
        roteiro.merge(dados)
    
        return await roteiro.save()
    };


    async destroy({params}: HttpContext) {

        const roteiro =  await Roteiro.findOrFail(params.id)

        await roteiro.delete()

        return {msg:'registro deletado com sucesso', Roteiro}
    };
}
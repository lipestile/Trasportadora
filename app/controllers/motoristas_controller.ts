import Motorista from '#models/motorista';
import type { HttpContext } from '@adonisjs/core/http'

export default class MotoristasController {
    async index({request}: HttpContext){
        
        // http://localhost:3333/Cargos?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Motorista.query().paginate(page, perPage)
        // return await Cargo.query()
    };

    async show({params}: HttpContext) {
        return await Motorista.query()
        .where('id', params.id)
        .preload('roteiros')
        .firstOrFail();
    };

    async store({request}: HttpContext){

        const dados = request.only(["nome", "cpf", "salario", "numero_cnh", "categoria_cnh"])
        return await Motorista.create(dados)
        
    };


    async update({params, request}: HttpContext) {

        const motorista =  await Motorista.findOrFail(params.id)
        const dados = request.only(["nome", "cpf", "salario", "numero_cnh", "categoria_cnh"])
        
        motorista.merge(dados)
    
        return await motorista.save()
    };


    async destroy({params}: HttpContext) {

        const motorista =  await Motorista.findOrFail(params.id)

        await motorista.delete()

        return {msg:'registro deletado com sucesso', Motorista}
    };
}
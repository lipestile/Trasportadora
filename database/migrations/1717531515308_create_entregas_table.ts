import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'entregas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      
      table.integer('cliente_id').unsigned().references('id').inTable('clientes').notNullable()
      table.string('endereco_origem', 200).notNullable()
      table.string('endereco_destino', 200).notNullable()
      table.date('data_agendamento').notNullable()
      table.string('status_entrega', 50)


      

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clientes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nome', 200).notNullable()
      table.integer('cpf', 11).notNullable()
      table.date('data_nascimento').notNullable()
      table.string('endereco', 100).notNullable()
      table.decimal('telefone').notNullable()


      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
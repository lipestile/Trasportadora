import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'motoristas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nome', 200).notNullable()
      table.integer('cpf', 11).notNullable()
      table.decimal('salario').notNullable()
      table.decimal('numero_cnh').notNullable()
      table.string('categoria_cnh', 200).notNullable()


      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
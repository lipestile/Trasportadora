import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'roteiros'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('entrega_id').unsigned().references('id').inTable('entregas').notNullable()
      table.integer('motorista_id').unsigned().references('id').inTable('motoristas').notNullable()
      table.integer('veiculo_id').unsigned().references('id').inTable('veiculos').notNullable()

      table.date('data_rota').notNullable()
      table.string('status_rota', 50).notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
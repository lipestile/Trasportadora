import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import Cliente from './cliente.js'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import Roteiro from './roteiro.js'

export default class Entrega extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare clienteId: number

  @column()
  declare endereco_origem: string

  @column()
  declare endereco_destino: string

  @column.date()
  declare data_agendamento: DateTime

  @column()
  declare status_entrega: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Cliente)
  declare clientes: BelongsTo<typeof Cliente>

  @hasOne(() => Roteiro)
  declare roteiros: HasOne<typeof Roteiro>
}
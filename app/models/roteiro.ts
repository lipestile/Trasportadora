import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Entrega from './entrega.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Motorista from './motorista.js'
import Veiculo from './veiculo.js'

export default class Roteiro extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare entregaId: number

  @column()
  declare motoristaId: number

  @column()
  declare veiculoId: number

  @column.date()
  declare data_rota: DateTime

  @column()
  declare status_rota: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Entrega)
  declare entregas: BelongsTo<typeof Entrega>

  @belongsTo(() => Motorista)
  declare motoristas: BelongsTo<typeof Motorista>

  @belongsTo(() => Veiculo)
  declare veiculos: BelongsTo<typeof Veiculo>
}
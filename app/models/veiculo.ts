import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Roteiro from './roteiro.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Veiculo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare modelo: string

  @column()
  declare placa: string

  @column()
  declare carga_max: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=> Roteiro)
  declare roteiros: HasMany<typeof Roteiro>

}
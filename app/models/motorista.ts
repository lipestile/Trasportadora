import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Roteiro from './roteiro.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Motorista extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare cpf: number

  @column()
  declare salario: number

  @column()
  declare numero_cnh: number

  @column()
  declare categoria_cnh: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=> Roteiro)
  declare roteiros: HasMany<typeof Roteiro>
}
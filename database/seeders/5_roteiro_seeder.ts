import Roteiro from '#models/roteiro'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Roteiro.createMany([
      {
        entregaId: 1,
        motoristaId: 1,
        veiculoId: 1,
        data_rota: DateTime.fromISO('2024-02-02'),
        status_rota: 'Longa',
      },
      {
        entregaId: 2,
        motoristaId: 2,
        veiculoId: 2,
        data_rota: DateTime.fromISO('2024-02-03'),
        status_rota: 'Média',
      },
      {
        entregaId: 3,
        motoristaId: 3,
        veiculoId: 3,
        data_rota: DateTime.fromISO('2024-02-04'),
        status_rota: 'Curta',
      },
      {
        entregaId: 4,
        motoristaId: 4,
        veiculoId: 4,
        data_rota: DateTime.fromISO('2024-02-05'),
        status_rota: 'Longa',
      },
      {
        entregaId: 5,
        motoristaId: 5,
        veiculoId: 5,
        data_rota: DateTime.fromISO('2024-02-06'),
        status_rota: 'Média',
      },
      {
        entregaId: 6,
        motoristaId: 6,
        veiculoId: 6,
        data_rota: DateTime.fromISO('2024-02-07'),
        status_rota: 'Curta',
      },
      {
        entregaId: 7,
        motoristaId: 7,
        veiculoId: 7,
        data_rota: DateTime.fromISO('2024-02-08'),
        status_rota: 'Longa',
      },
      {
        entregaId: 8,
        motoristaId: 8,
        veiculoId: 8,
        data_rota: DateTime.fromISO('2024-02-09'),
        status_rota: 'Média',
      },
      {
        entregaId: 9,
        motoristaId: 9,
        veiculoId: 9,
        data_rota: DateTime.fromISO('2024-02-10'),
        status_rota: 'Curta',
      },
      {
        entregaId: 10,
        motoristaId: 10,
        veiculoId: 10,
        data_rota: DateTime.fromISO('2024-02-11'),
        status_rota: 'Longa',
      },
    ])
  }
}

import Veiculo from '#models/veiculo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Veiculo.createMany([
      { modelo: 'Fiorino', placa: 'ABC1d23', carga_max: 1000 },
      { modelo: 'Sprinter', placa: 'DEF4G56', carga_max: 1500 },
      { modelo: 'Ducato', placa: 'GHI7J89', carga_max: 1400 },
      { modelo: 'Master', placa: 'JKL0M12', carga_max: 1600 },
      { modelo: 'Kangoo', placa: 'NOP3Q45', carga_max: 800 },
      { modelo: 'HR', placa: 'QRS6T78', carga_max: 1100 },
      { modelo: 'Transit', placa: 'UVW9X12', carga_max: 1800 },
      { modelo: 'Boxer', placa: 'YZA3B45', carga_max: 1400 },
      { modelo: 'Daily', placa: 'CDE6F78', carga_max: 1700 },
      { modelo: 'Partner', placa: 'GHI0J12', carga_max: 800 },
      { modelo: 'Doblo Cargo', placa: 'KLM3N45', carga_max: 750 },
    ])
  }
}

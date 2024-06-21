import Motorista from '#models/motorista'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Motorista.createMany([
      {
        nome: 'Jose Geraldo',
        cpf: 23456701987,
        salario: 2300,
        numero_cnh: 123456789,
        categoria_cnh: 'B',
      },
      {
        nome: 'Marcos Almeida',
        cpf: 34567891234,
        salario: 2500,
        numero_cnh: 234567890,
        categoria_cnh: 'C',
      },
      {
        nome: 'Paulo Souza',
        cpf: 45678912345,
        salario: 2400,
        numero_cnh: 345678901,
        categoria_cnh: 'D',
      },
      {
        nome: 'Carlos Silva',
        cpf: 56789123456,
        salario: 2600,
        numero_cnh: 456789012,
        categoria_cnh: 'E',
      },
      {
        nome: 'Ana Paula',
        cpf: 67891234567,
        salario: 2200,
        numero_cnh: 567890123,
        categoria_cnh: 'B',
      },
      {
        nome: 'Fernanda Oliveira',
        cpf: 78912345678,
        salario: 2350,
        numero_cnh: 678901234,
        categoria_cnh: 'C',
      },
      {
        nome: 'Bruno Costa',
        cpf: 89123456789,
        salario: 2450,
        numero_cnh: 789012345,
        categoria_cnh: 'D',
      },
      {
        nome: 'Juliana Santos',
        cpf: 91234567890,
        salario: 2550,
        numero_cnh: 890123456,
        categoria_cnh: 'E',
      },
      {
        nome: 'Ricardo Pereira',
        cpf: 12345678901,
        salario: 2700,
        numero_cnh: 901234567,
        categoria_cnh: 'B',
      },
      {
        nome: 'Larissa Fernandes',
        cpf: 23456789012,
        salario: 2300,
        numero_cnh: 123456780,
        categoria_cnh: 'C',
      },
      {
        nome: 'Roberto Lima',
        cpf: 34567890123,
        salario: 2400,
        numero_cnh: 234567891,
        categoria_cnh: 'D',
      },
    ])
  }
}

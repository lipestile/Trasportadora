import Cliente from '#models/cliente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Cliente.createMany([
      {nome: 'Juan Martinez', cpf: 12345678901, data_nascimento: DateTime.fromISO('2000-05-13'), endereco: 'Rua Mendes casa 14', telefone: 62999395032},
      {nome: 'Maria Silva', cpf: 23456789012, data_nascimento: DateTime.fromISO('1985-08-24'), endereco: 'Avenida Central, 101', telefone: 62999887766},
      {nome: 'Pedro Souza', cpf: 34567890123, data_nascimento: DateTime.fromISO('1992-11-11'), endereco: 'Rua das Flores, 25', telefone: 62999776655},
      {nome: 'Ana Pereira', cpf: 45678901234, data_nascimento: DateTime.fromISO('1979-03-30'), endereco: 'Travessa das Palmeiras, 3', telefone: 62999665544},
      {nome: 'Carlos Oliveira', cpf: 56789012345, data_nascimento: DateTime.fromISO('1995-07-19'), endereco: 'Rua do Sol, 87', telefone: 62999554433},
      {nome: 'Fernanda Lima', cpf: 67890123456, data_nascimento: DateTime.fromISO('2002-12-05'), endereco: 'Avenida dos Estudantes, 456', telefone: 62999443322},
      {nome: 'Rafael Costa', cpf: 78901234567, data_nascimento: DateTime.fromISO('1988-09-23'), endereco: 'Rua dos Pioneiros, 12', telefone: 62999332211},
      {nome: 'Juliana Alves', cpf: 89012345678, data_nascimento: DateTime.fromISO('1993-01-08'), endereco: 'Praça da Liberdade, 55', telefone: 62999221100},
      {nome: 'Bruno Rocha', cpf: 90123456789, data_nascimento: DateTime.fromISO('1982-04-17'), endereco: 'Alameda das Orquídeas, 99', telefone: 62999110099},
      {nome: 'Larissa Fernandes', cpf: 11234567890, data_nascimento: DateTime.fromISO('1990-06-26'), endereco: 'Rua das Amoras, 60', telefone: 62999009988},
      {nome: 'Rodrigo Menezes', cpf: 22345678901, data_nascimento: DateTime.fromISO('1987-10-12'), endereco: 'Avenida Brasil, 202', telefone: 62998998877}
    ])
  }
}
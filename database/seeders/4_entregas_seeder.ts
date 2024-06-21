import Entrega from '#models/entrega'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Entrega.createMany([
      {clienteId: 1, endereco_origem: "Rua Marquez casa 34", endereco_destino: 'Manaus Rua Guanabara casa 54', data_agendamento: DateTime.fromISO('2024-11-16'), status_entrega: 'Agendamento'},
      {clienteId: 2, endereco_origem: "Avenida Central, 101", endereco_destino: 'São Paulo Avenida Paulista, 1000', data_agendamento: DateTime.fromISO('2024-11-17'), status_entrega: 'A Caminho'},
      {clienteId: 3, endereco_origem: "Rua das Flores, 25", endereco_destino: 'Rio de Janeiro Rua das Laranjeiras, 50', data_agendamento: DateTime.fromISO('2024-11-18'), status_entrega: 'Entregue'},
      {clienteId: 4, endereco_origem: "Travessa das Palmeiras, 3", endereco_destino: 'Belo Horizonte Rua da Liberdade, 15', data_agendamento: DateTime.fromISO('2024-11-19'), status_entrega: 'Agendamento'},
      {clienteId: 5, endereco_origem: "Rua do Sol, 87", endereco_destino: 'Curitiba Avenida das Torres, 200', data_agendamento: DateTime.fromISO('2024-11-20'), status_entrega: 'A Caminho'},
      {clienteId: 6, endereco_origem: "Avenida dos Estudantes, 456", endereco_destino: 'Porto Alegre Rua dos Andradas, 300', data_agendamento: DateTime.fromISO('2024-11-21'), status_entrega: 'Entregue'},
      {clienteId: 7, endereco_origem: "Rua dos Pioneiros, 12", endereco_destino: 'Recife Rua da Aurora, 400', data_agendamento: DateTime.fromISO('2024-11-22'), status_entrega: 'Agendamento'},
      {clienteId: 8, endereco_origem: "Praça da Liberdade, 55", endereco_destino: 'Salvador Rua das Flores, 500', data_agendamento: DateTime.fromISO('2024-11-23'), status_entrega: 'A Caminho'},
      {clienteId: 9, endereco_origem: "Alameda das Orquídeas, 99", endereco_destino: 'Fortaleza Avenida Beira Mar, 600', data_agendamento: DateTime.fromISO('2024-11-24'), status_entrega: 'Entregue'},
      {clienteId: 10, endereco_origem: "Rua das Amoras, 60", endereco_destino: 'Florianópolis Rua das Pedras, 700', data_agendamento: DateTime.fromISO('2024-11-25'), status_entrega: 'Agendamento'},
      {clienteId: 1, endereco_origem: "Rua Mendes casa 14", endereco_destino: 'Goiânia Rua 88, 800', data_agendamento: DateTime.fromISO('2024-11-26'), status_entrega: 'A Caminho'}
    ])
  }
}
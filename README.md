# Projeto de Cadastro de Pacientes em Hospital 

## Sobre

Este projeto consiste realizar um cadastro de novos pacientes internados em um hospital.

## O Projeto

Este projeto consiste em cadastramentos de novos pacientes internados em um hospital por meio de uma API Rest utilizando Node.js, framework Express e o banco de dados MongoDB.


## Tecnologia Utilizadas

- ### [Node.js](https://nodejs.org/en)
- ### [JavaScript](https://www.javascript.com/)
- ### [MongoDB](https://www.mongodb.com/pt-br)
- ### [Express](https://expressjs.com/pt-br/)
- ### [Mongoose](https://mongoosejs.com/)

## Funcionalidades

- Cadastro de pacientes: Nome completo, CPF, telefone, data de nascimento, sexo, ala (A ou B), quarto (1 a 9);
- Registro de um novo paciente;
- Listagem de todos os registros;
- Edição das informações do paciente;
- Remoção de registro de um paciente;
- Listagem de pacientes por ala;
- Listagem de dados de um único paciente;
- Validação das entradas de dados.

## Execução do projeto

#### Como baixar o projeto

```bash
    $ git clone https://github.com/KelvindeLima/hospital
    $ cd hospital
```
#### Executar o projeto

```
$ node src/index.js
```

- A porta configurada neste projeto é a 2000 (http://localhost:2000/) e escolha o melhor framework para a execução dos testes de inserção do cadastros. Neste projeto foi testado no framework insomnia.

- ## Endpoints
    - Para cadastrar um novo paciente, utilize /hospital/cadastrar (http://localhost:2000/hospital/cadastrar)

    - Para listar todos os pacientes, utilize /hospital/listar (http://localhost:2000/hospital/listar)

    - Para editar alguma informação de pacientes, utilize /hospital/editar/:id (http://localhost:2000/hospital/editar/:id)
    
    - Para deletar a informação de paciente, utilize /hospital/remover/:id (http://localhost:2000/hospital/remover/:id)

    - Para buscar um determinado paciente, utilize /hospital/l/buscarpaciente/:id (http://localhost:2000/hospital/buscarpaciente/:id)

    - Para buscar pacientes por ala, utilize /hospital/ala/:ala (http://localhost:2000/hospital/ala/:ala)









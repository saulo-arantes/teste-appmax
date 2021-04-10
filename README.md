# Tecnologias e Versões

- PHP 8.0
- NPM 7.7.6
- MySQL 8.0
- Composer 2.0.12
- Docker 20.10.5
- Docker Compose 1.25.0
- Laravel 8.12
- Vue 2.6.12

# Iniciar o Projeto:

## Com Docker:

``` $ docker-compose up -d --build ```

Após instalar as imagens e containers, instale as dependências do projeto

### Composer

Caso não tenha o composer instalado, acesse o container do PHP para instalar as dependências:

``` $ docker exec -it teste-appmax_laravel.test_1 /bin/bash ```

E então: 

``` # composer install ```

### NPM

``` $ npm install ```

ou

``` $ yarn install ```

# Banco de Dados

Execute o comando para crair as tabelas e popular o banco de dados:

``` $ php artisan migrate --seed ```

# Login

- Email: appmax@appmax.com
- Senha: password

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

``` $ docker run --rm \-u "$(id -u):$(id -g)" \-v $(pwd):/opt \-w /opt \laravelsail/php80-composer:latest \composer install --ignore-platform-reqs ```

``` $ docker-compose up -d ```

Após instalar as imagens e containers, instale as dependências do projeto

### NPM

``` $ npm install ```

ou

``` $ yarn install ```

### Composer

Caso não tenha o composer instalado, acesse o container do PHP para instalar as dependências:

``` $ docker exec -it teste-appmax_laravel.test_1 /bin/bash ```

E então: 

``` # composer install ```

Aproveite e defina as permissões de pastas

``` # chmod -R 777 ./ ```

# Arquivo .env

Simplesmente crie uma cópia do arquivo .env.example como .env

``` $ cp .env.example .env  ```

# Banco de Dados

Execute o comando para criar as tabelas e popular o banco de dados:

``` $ php artisan migrate --seed ```

# Login

- Email: appmax@appmax.com
- Senha: password

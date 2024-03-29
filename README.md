# Desafio
## Requisitos
- `MongoDB`: É preciso criar um cluster ou utilizar o site MongoDB Atlas
- `NodeJS`: Foi utilizado o node v20.10.0

## Variáveis de Ambiente

Para rodar este projeto, é necessário adicionar as seguintes variáveis de ambiente no seu `.env` ou renomear o arquivo `.env.example` para `.env` e configurar as variáveis de acordo.

- `DATABASE_URL`: URL do MongoDB
- `PORT`: Porta do servidor (opcional)
- `KEY_FILENAME`: Nome do arquivo do Google Cloud Storage
- `PROJECT_ID`: Nome do id do projeto do Google Cloud Storage
- `BUCKET_NAME`: Nome do bucket do Google Cloud Storage

## Instalação

Para começar a utilizar o projeto, siga os passos abaixo:

1. Na pasta do projeto, abra um terminal.
2. Execute o comando abaixo para instalar as dependências:
   
   ```bash
   npm install
   ```
3. Escolha qual forma deseja inicializar: Produção ou Desenvolvedor(auto-refresh)
    ```bash
   npm run start
    ```
    
   ```bash     
   npm run start:dev 
   
## Tecnologias Utilizadas

Node.js, NestJS, MongoDB


    
## Documentação da API
### Documentação no Swagger está em inglês no endpoint: /api
- # Cardápio
  #### Criar um cardápio
    ```http
      POST /menu
    ```

    | Corpo   | Tipo       | Descrição                           |
    | :---------- | :--------- | :---------------------------------- |
    | `Turno` | `enum["DIURNO", "NOTURNO"]` | **Obrigatório**. Podendo cadastrar só um deles ou ambos |

  #### Retorna todos os cardápios
  ```http
    GET /menu
  ```


    #### Retornar de acordo com o horário. Diurno: 06h entre 18h
  ```http
    GET /menu/shift
  ```
    #### Retornar todos os cardápios com os produtos
  ```http
    GET /menu/products
  ```


    #### Retornar o cardápio pelo id
  ```http
    GET /menu/{id}
  ```
    | Parâmetro   | Tipo       | Descrição                           |
    | :---------- | :--------- | :---------------------------------- |
    | `id` | `string` | **Obrigatório**. Retornando o cardápio |

    #### Retornar todos os cardápios com os produtos
  ```http
    GET /menu/{id}/products
  ```
    | Parâmetro   | Tipo       | Descrição                           |
    | :---------- | :--------- | :---------------------------------- |
    | `id` | `string` | **Obrigatório**. Retornando o cardápio com os produtos|

  

    #### Modificar o cardápio 

    ```http
      PUT /menu/${id}
    ```
    **Obs:** Só é possível modificar se não houver o turno que deseja

    | Parâmetro   | Tipo       | Descrição                                   |
    | :---------- | :--------- | :------------------------------------------ |
    | `id`      | `string` | **Obrigatório**. O ID do cardápio que deseja modificar|
    
     | Corpo   | Tipo       | Descrição                                   |
    | :---------- | :--------- | :------------------------------------------ |
    | `shift`      | `enum["DIURNO","NOTURNO"]` | **Obrigatório**. |
    
    #### Deletar o cardápio 

    ```http
      DELETE /menu/${id}
    ```
    **Obs:** Deletar o cardápio apagará em cascada a associação com os produtos
    | Parâmetro   | Tipo       | Descrição                                   |
    | :---------- | :--------- | :------------------------------------------ |
    | `id`      | `string` | **Obrigatório**. O ID do cardápio que deseja deletar| 

- # Categoria

    #### Criar uma nova categoria 
    ```http
      POST /category
    ```
    | Corpo   | Tipo       | Descrição                                   |
    | :---------- | :--------- | :------------------------------------------ |
    | `name`      | `string` | **Obrigatório**. Nome da categoria

    #### Listar todas as categorias 
    ```http
      GET /category
    ```

    #### Listar todas as categorias com os seus produtos
    ```http
      GET /category/products
    ```
    #### Retorna o categorias pelo id
    ```http
      GET /category/{id}
    ```
    | Parâmetro   | Tipo       | Descrição                                   |
    | :---------- | :--------- | :------------------------------------------ |
    | `id`      | `string` | **Obrigatório**. O ID da categoria que deseja buscar| 


    #### Retorna o categorias pelo id com os seus produtos
    ```http
      GET /category/{id}/products
    ```
    | Parâmetro   | Tipo       | Descrição                                   |
    | :---------- | :--------- | :------------------------------------------ |
    | `id`      | `string` | **Obrigatório**. O ID da categoria que deseja buscar| 

    #### Modificar a categoria pelo id
    ```http
      PUT /category/{id}
    ```
    | Parâmetro   | Tipo       | Descrição                                   |
    | :---------- | :--------- | :------------------------------------------ |
    | `id`      | `string` | **Obrigatório**. O ID da categoria que deseja modificar| 

    #### Deletar a categoria pelo id
    **Obs:** Só é possível deletar a categoria se não houver produtos nela
    ```http
      DELETE /category/{id}
    ```
    
    | Parâmetro   | Tipo       | Descrição                                   |
    | :---------- | :--------- | :------------------------------------------ |
    | `id`      | `string` | **Obrigatório**. O ID da categoria que deseja deletar| 


- # Produtos
  #### Criar produto
  ```http
    POST /product
  ```


    | Corpo   | Tipo       | Descrição                                   |
    | :---------- | :--------- | :------------------------------------------ |
    | `name`      | `string` | **Obrigatório**. O nome do produto 
    | `price` | `number` | **Obrigatório**. O valor do produto
    | `image` | `binary` | Imagem do Produto
    | `description` | `string` | Descrição do produto
    | `categoryId` | `string` | **Obrigatório**. ID da categoria
    
  #### Listar produtos
  ```http
    GET /product
  ```

  #### Listar produtos com as categorias
  ```http
    GET /product/category
  ```

  #### Listar produto pelo id
  ```http
    GET /product/{id}
  ```
  | Parâmetro   | Tipo       | Descrição                                   |
    | :---------- | :--------- | :------------------------------------------ |
    | `id`      | `string` | **Obrigatório**. O ID do produto| 

  #### Listar produto pelo id com sua categoria
  ```http
    GET /product/{id}/category
  ```
  | Parâmetro   | Tipo       | Descrição                                   |
    | :---------- | :--------- | :------------------------------------------ |
    | `id`      | `string` | **Obrigatório**. O ID do produto| 

    #### Atualizar produto
  ```http
    PUT /product/{id}
  ```
  | Parâmetro   | Tipo       | Descrição                                   |
    | :---------- | :--------- | :------------------------------------------ |
    | `id`      | `string` | **Obrigatório**. O ID do produto| 

    | Corpo   | Tipo       | Descrição                                   |
    | :---------- | :--------- | :------------------------------------------ |
    | `name`      | `string` | O nome do produto 
    | `price` | `number` | O valor do produto
    | `image` | `binary` | Imagem do Produto
    | `description` | `string` | Descrição do produto
    | `categoryId` | `string` | ID da categoria

    #### Deletar o produto 

    ```http
      DELETE /product/${id}
    ```
    **Obs:** Deletar o produto apagará em cascada a associação com o cardápio 
    | Parâmetro   | Tipo       | Descrição                                   |
    | :---------- | :--------- | :------------------------------------------ |
    | `id`      | `string` | **Obrigatório**. O ID do produto que deseja deletar| 

- # CardapioProduto
  #### Criar produto
  ```http
    POST /menu-product/{menuId}/add-product
  ```
    | Parâmetro   | Tipo       | Descrição                                   |
    | :---------- | :--------- | :------------------------------------------ |
    | `menuId`      | `string` | **Obrigatório**. O ID do cardápio que deseja inserir| 

    | Corpo   | Tipo       | Descrição                                   |
    | :---------- | :--------- | :------------------------------------------ |
    | `ProductIds` | `string[]` | ID dos produtos

  #### Listar todos os produtos com o cardápio
  ```http
    GET /menu-product/{menuId}/products
  ```
    | Parâmetro   | Tipo       | Descrição                                   |
    | :---------- | :--------- | :------------------------------------------ |
    | `menuId`      | `string` | **Obrigatório**.O ID do cardápio que deseja visualizar| 

  #### Deletar vários produtos no cardápio
  ```http
    DELETE /menu-product/{menuId}/remove-product
  ```
    | Parâmetro   | Tipo       | Descrição                                   |
    | :---------- | :--------- | :------------------------------------------ |
    | `menuId`      | `string` | **Obrigatório**.O ID do cardápio que deseja remover os produtos| 
    
    | Corpo   | Tipo       | Descrição                                   |
    | :---------- | :--------- | :------------------------------------------ |
    | `ProductIds` | `string[]` | ID dos produtos

  #### Deletar todos os produtos associado ao cardápio
  ```http
    DELETE /menu-product/{menuId}/remove-all-product
  ```
  | Parâmetro   | Tipo       | Descrição                                   |
    | :---------- | :--------- | :------------------------------------------ |
    | `menuId`      | `string` | **Obrigatório**.O ID do cardápio que deseja remover todos os produtos| 
    

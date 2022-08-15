![LogoFord](https://user-images.githubusercontent.com/68918326/183781920-2a8375ab-11f3-4a78-a77e-78c1d2ab5e15.PNG)

<hr>
<h1 align="center">🎖️Desafio Técnico – Backend Ford Motor Company🎖️</h1>
<hr>
<br>


<h2 align="center">Objetivo</h2>
<p align="center">
  Desenvolver uma API com base no arquivo disney_movies.json respeitando o conceito REST e utilizando Node JS, Express, numa arquitetura MVC, bem como rotas para cada endpoint</p>
<br>
<br>


<h2 align="center">🚧Instruções necessárias para executar o projeto🚧</h2>
<br>

  #### Instalar um editor de código de sua preferência
    📌 Sugestão VSCode
  
  #### Clonar o repositório do github
    📌 Abra o editor de código
    📌 Entre no terminal do editor de código
    📌 Utilize o comando: git clone https://github.com/romulo-sobrinho/-Desafio-Tecnico-IEL-FORD.git

  #### Instalar o EXPRESS
    📌 No terminal do editor de código digite o comando: npm install express
    📌 A ação acima foi necessária devido ao não envio da pasta node_modules ao github

  #### Instalar o CORS - Cross-origin Resource Sharing
    📌 No terminal do editor de código digite o comando: npm install cors
    📌 A ação acima foi necessária  para facilitar os testes de qualquer origem
 
  #### Execute o projeto (Arquivo principal app.js)
    📌 No terminal execute o seguinte comando: node app.js
<br>
<br>


<h2 align="center">🚧Instruções necessárias para testar a API🚧</h2>
<br> 
    
  #### Abra o broswer ou outro aplicativo relacionado abaixo
    📌 INSOMNIA
    📌 POSTMAN
  
  #### Utilize os endpoints abaixo com o método GET
    📌 http://localhost:8000/filters
    📌 http://localhost:8000/movies

  #### Caso utilize o segundo endpoint é necessário passar um ou mais anos e um ou mais categorias de filmes em formato JSON	conforme o filtro abaixo sem espaços vazios entre os dados:
  ![formatoFiltro](https://user-images.githubusercontent.com/68918326/184650803-a115eacb-f3f9-46bd-8146-c89ec3096b2b.PNG)

  #### Caso realize o teste de outro computador ou celular, que não seja o servidor, utilize no lugar de localhost o IP do máquina servidor
    📌 http://ipDoServidor:8000/filters
    📌 http://ipDoServidor:8000/movies
<br>
<br>


<h2 align="center">🚨Informações importantes🚨</h2>
<br> 

  #### Habilitado CORS no projeto para qualquer origem
    ⚠️ Foi habilitado o CORS para qualquer origem para facilitar os testes

  #### O projeto segue estrutra MVC
    ⚠️ O arquivo disney_movies.json está na pasta models
    ⚠️ As rotas do projeto estão na pasta routes
    ⚠️ A lógica da aplicação está na pasta controllers

  #### A manipulação do arquivo disney_movies.json é realizada com o file system
    ⚠️ fs.readFile para leitura
    ⚠️ fs.writeFile para escrita

  #### Funções criadas para reutilização de código
    ⚠️ cutYear -> Essa função tem por objetivo extrair apenas o ano da variável release_date
    ⚠️ splitString -> Essa função tem por objetivo dividir a string
<br>
<br> 


<h2 align="center">🚀Resolução do Desafio Técnico🚀</h2>
<br> 

  #### API
    ✔️ Criar uma API com base no arquivo disney_movies.json

  #### Utilizar o endpoint "http://localhost:8000/filters"
    ✔️ Retornar um json com os anos dos filmes e os gêneros
    ✔️ Na resposta o ano e o gênero devem ser um array com informações únicas em cada posição

  #### Utilizar o endpoint "http://localhost:8000/movies"
    ✔️ Retornar todos os filmes de acordo com o filtro enviado no corpo da requisição
    ✔️ Ao fazer a requisição à api, o usuário pode selecionar um ou mais anos, um ou mais gêneros, e inclusive enviar tanto o ano quanto o gênero com strings vazias
    ✔️ Caso as strings estejam vazias em ambos os campos, deve se retornar todos os dados que está no json
    ✔️ Se o usuário requisitar um ano ou um gênero que não existe, a resposta deve retornar vazia
    ✔️ Segue abaixo um exemplo de uma resposta válida:
  ![respostaVálida](https://user-images.githubusercontent.com/68918326/184652945-bf5dd5a2-7f34-4071-a9a4-a0c919802dd2.PNG)
<br>
<br> 
<br> 
<br> 

    
<hr>
<h2 align="center">💡Demonstração em formato .GIF💡</h2>
<br> 

<h3 align="center">Testando o endpoint "http://localhost:8000/filters"</h3>
<br> 

![endPointFilters](https://user-images.githubusercontent.com/68918326/184658345-8ab32443-5011-4874-b54f-5101decd0f77.gif)
<br>
<br>
<br>

<h3 align="center">Testando o endpoint "http://localhost:8000/movies"</h3>
<br>

![endPointMovies](https://user-images.githubusercontent.com/68918326/184661890-7ffbfe0a-d276-41fb-b48d-47f5375b2e7b.gif)
<br>


<hr>
<br>
<br>


<h2 align="center">Dados do projeto</h2><br>

<h3 align="center">Divisão dos arquivos do projeto</h3>

![pastasProjeto](https://user-images.githubusercontent.com/68918326/184655144-d176f4a2-6a5f-469e-b630-f4a6762991c5.PNG)
<br>
<br>


<h3 align="center">Arquivo app.JS</h3>

![appJS](https://user-images.githubusercontent.com/68918326/184671337-013afa79-a43b-4c02-a808-5ae7befc4a1f.PNG)
<br>
<br>


<h3 align="center">Rotas do Projeto</h3>

![RotasProjeto](https://user-images.githubusercontent.com/68918326/184655434-e6e702b9-57ed-414b-9cce-4d2416d9b0bf.PNG)
<br>
<br>


<hr>
<h3 align="center">🎖️PROJETO FINALIZADO🎖️</h3>
<hr>
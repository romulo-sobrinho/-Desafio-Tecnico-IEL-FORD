![LogoFord](https://user-images.githubusercontent.com/68918326/183781920-2a8375ab-11f3-4a78-a77e-78c1d2ab5e15.PNG)

<hr>
<h1 align="center">🎖️Desafio Técnico – Backend Ford Motor Company🎖️</h1>
<hr>
<br>
<br>
<br>


<h2 align="center">Objetivo</h2>
<p align="center">
  Desenvolver uma API com base no arquivo disney_movies.json respeitando o conceito REST e utilizando Node JS, Express numa arquitetura MVC, bem como rotas para cada endpoint</p>
<br>
<br>
<br>


<h2 align="center">Instruções necessárias para executar o projeto</h2>

  #### Instalar VSCode ou outro editor de código de sua preferência
  
  #### Clonar o repositório do github
    📌 Abra o editor de código
    📌 Entre no terminal do editor de código
    📌 Utilize o comando: git clone https://github.com/romulo-sobrinho/-Desafio-Tecnico-IEL-FORD.git

  #### Instalar o EXPRESS
    📌 No terminal do editor de código digite o comando: npm install express
    📌 A ação acima foi necessária devido ao não envio da pasta node_modules ao github
 
  #### Execute o projeto (Arquivo principal app.js)
    📌 No terminal execute o seguinte comando: node app.js
<br>
<br>
<br>


<h2 align="center">Instruções necessárias para testar a API</h2>
    
  #### Abra o broswer ou outro aplicativo como INSOMNIA, POSTMAN
  
  #### Utilize os endpoints abaixo com o método GET
    📌 http://localhost:8000/filters
    📌 http://localhost:8000/movies
  
  #### Caso utilize o segundo endpoint é necessário passar um ou mais anos e um ou mais categorias de filmes em formato JSON	conforme o filtro abaixo sem espaços vazios entre os dados:
    📌 {   
			    "filter": {
        		"years": "2000,1995",
        		"genre": "Comedy"
    			}
		   }

<br>
<br>
<br>


<h2 align="center">Informações importantes</h2>

  #### O projeto segue estrutra MVC, assim:
    ⚠️ O arquivo disney_movies.json está na pasta models
    ⚠️ As rotas do projeto estão na pasta routes
    ⚠️ A lógica da aplicação está na pasta controllers

  #### A leitura do arquivo disney_moveis.json é realizada com o file system

  #### Funções criadas para reutilização de código
    ⚠️ cutYear -> Essa função tem por objetivo extrair apenas o ano da variável release_date
    ⚠️ splitString -> Essa função tem por objetivo dividir a string
<br>
<br>
<br>    
    
    
<hr>
<h2 align="center">Preview</h2>

<hr>
<br>



<h2 align="center">Dados do projeto</h2><br>

<h3 align="center">Divisão dos arquivos do projeto</h3>


<br>



<h3 align="center">Rotas do Projeto</h3>


<br>



<hr>
<h3 align="center">🎖️PROJETO EM CONSTRUÇÃO🎖️</h3>
<hr>

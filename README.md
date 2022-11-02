## 🔥 Projeto Site de Promocao
Projeto de página de login de uma promoção de empresa com integração a API do tipo POST,
o cadastro envia uma string JSON para a API de escolha, com todos os dados.
 Este projeto está adapatado para todos os tipos de dispositivos!
 
 ## 🌐 O site está atualmente em produção: 

- [Link da pagina de produção.](https://d1av.github.io/petshop-client/)


## ✏ Sobre o projeto
O objetivo do projeto foi aplicar os princípios da <strong>arquitetura SOLID</strong> e os <strong>princípios de POO</strong> em uma página de cadastro com foco no cliente.

## 🛸 Principais tecnologias utilizadas: 
- [React](https://reactjs.org/)
- [Docker](https://www.docker.com/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [TypeScript](https://www.typescriptlang.org/)
- [POO](https://www.devmedia.com.br/os-4-pilares-da-programacao-orientada-a-objetos/9264)
- [SOLID](https://medium.com/desenvolvendo-com-paixao/o-que-%C3%A9-solid-o-guia-completo-para-voc%C3%AA-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530)
- [React-Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html). </br>
- [SASS](https://sass-lang.com/). </br>

## ⚙ Como rodar o projeto na sua máquina

<strong>1. Faça o git clone na sua máquina e entre no diretório:</strong>
 - Lembre-se de clonar o repositório no diretório desejado na sua máquina!
 ```
 git clone https://github.com/d1av/petshop-client.git
 cd petshop-client
 ```
 
 <strong>2. Escolha por onde rodar a aplicação: Docker vs Local</strong>

<details>
  <summary><strong>🐳 Rodando no Docker</strong></summary> 
  </br>

  **:warning: Seu docker-compose precisa estar na versão 2.0 ou superior. [Veja aqui](https://mazer.dev/pt-br/docker/introducao/como-instalar-docker-e-compose-no-linux-ubuntu-mint-e-debian/) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo.**


 :warning: Lembre-se de parar qualquer aplicação que estiver usando localmente na porta padrão (`3000`), ou adapte, caso queria fazer uso da aplicação em containers;

  - Esses serviços irão inicializar um container chamado `petshot-client` ;

  - A partir daqui você pode rodar o container `petshop-client` via CLI ou abri-lo no VS Code;


  - ✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

</details>

<details>
  <summary><strong> 💻 Localmente</strong></summary> 
</br>

👉 <strong>2.1 Instale as dependências: </strong>
```
npm install
```

<!-- - **:warning: Atenção:** Não esqueça de renomear/configurar o arquivo `.env.example` para os testes locais funcionarem. -->
- **:warning: Atenção:** Para rodar o projeto desta forma, **obrigatoriamente** você deve ter o `Node.js` instalado em seu computador.
- **:warning: Atenção:** A versão do `Node.js` e `NPM` a ser utilizada é `"node": ">=16.0.0"` e `"npm": ">=7.0.0"`, como descrito a chave `engines` no arquivo `package.json`. Idealmente deve-se utilizar o Node.js na `versão 18+`, a versão na que esse projeto foi testado.

  <br/>
 </details>
 
 ---
 
https://user-images.githubusercontent.com/107776531/188292835-fd3e410a-571a-436c-9876-9804ec122e5d.mp4

 
 
© Desenvolvido por [Davi Alves](https://www.linkedin.com/in/d1av/) 

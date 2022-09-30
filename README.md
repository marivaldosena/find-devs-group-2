<!-- Badges -->

[gama-academy-badge]: https://img.shields.io/static/v1?label=Gama%20Academy&message=Dev%20For%20Tech&color=green
[react-native-badge]: https://img.shields.io/static/v1?label=React%20Native&message=0.69&color=blue
[acate-badge]: https://img.shields.io/static/v1?label=Acate&message=2022&color=blue

<!-- Links -->

[devfortech-url]: https://devfortech.corporate.gama.academy/
[react-native-url]: https://reactnative.dev/
[acate-url]: https://www.acate.com.br/

<!-- Content -->

[favorites-screen-image]: ./readme/favorites-screen.jpg
[filtered-devs-image]: ./readme/filtered-devs.jpg
[filtering-image]: ./readme/filtering.jpg
[forgot-password-screen-image]: ./readme/forgot-password-screen.jpg
[initial-page-image]: ./readme/initial-page.jpg
[login-screen-image]: ./readme/login-screen.jpg
[login-validation-image]: ./readme/login-validation.jpg
[saving-favorite-image]: ./readme/saving-favorite.jpg
[social-login-image]: ./readme/social-login.jpg
[splash-screen-image]: ./readme/splash-screen.jpg
[token-sent-image]: ./readme/token-sent.jpg
[token-validation-image]: ./readme/token-validation.jpg
[user-registration-image]: ./readme/user-registration.jpg
[demonstration-video]: ./readme/demonstration.mp4


# find-devs-group-2

[![Gama Academy][gama-academy-badge]][devfortech-url]
[![Acate][acate-badge]][acate-url]
[![React Native][react-native-badge]][react-native-url]

Este projeto é requerimento obrigatório para obter o certificado a respeito de Desenvolvimento Móvel com React Native. O curso foi patrocinado pela Acate e ministrado pela Gama Academy.

# Grade Curricular

A grade curricular do curso contempla:

- Javascript
- Typescript
- React Native
- Redux
- Testes Unitários com Jest
- Consumo de API
- Autenticação com AWS Cognito
- Entre outros

# Descrição

O projeto diz respeito a um aplicativo móvel desenvolvido usando React Native e o foco é a busca de desenvolvedores com integração a uma API remota.

# Funcionalidades Previstas

As funcionalidades previstas são:

- Autenticação usando AWS Cognito
- Busca de desenvolvedores
- Refinamento de busca
- Favoritar desenvolvedores.
- SDK publicado no Google Play Store (opcional)

# Requerimentos

Para executar a aplicação são necessários:

- Expo.io: +v46
- React: +v18
- React Native: +v0.69
- Babel: +v7.12
- Typescript: +v4.3

# Equipe de Desenvolvimento

Os membros da equipe de desenvolvimento são:

- [André Carvalho](https://github.com/andredecarvalh0)
- [Alison Lima](https://github.com/alisonglima)
- [Luciano dos Santos Bueno](https://github.com/Lucianoneo)
- [Marivaldo Sena](https://github.com/marivaldosena)

# Telas

Abaixo estão as telas desenvolvidas do aplicativo.

## Tela de Carregamento

A tela de carregamento ou Splash Screen é a tela visualizada durante o carregamento da aplicação e antes da interação do usuário propriamente dita.

![Tela de carregamento][splash-screen-image]

## Login

Permite ao usuário acessar o aplicativo.

![Tela de login][login-screen-image]

## Cadastro

Permite que pessoas possam se registrarem no sistema a partir de usuário, e-mail e senha.

![Tela de cadastro][user-registration-image]

## Validacao de Usuario

Abaixo um exemplo de validação de acesso onde o aplicativo nos obriga a fornecer e-mail e senha.

![Validação de acesso][login-validation-image]

## Token de Acesso

Após o cadastro, recebemos um token de acesso para garantir o uso de e-mail válido.

Envio de token:

![Envio de token][token-sent-image]

Validação de usuário:

![Validação de token][token-validation-image]

## Recuperação de Senha

Há a funcionalidade de recuperação de senha onde devemos fornecer nosso e-mail e usuário para receber o token em nosso e-mail.

![Recuperação de senha][forgot-password-screen-image]

## Login Social

É possível acessar o aplicativo usando o Single Sign-on (SSO), ou seja, login social do Google neste exemplo.

![Login social][social-login-image]

## Tela Inicial

A tela inicial é a tela que surge após o acesso com êxito. Nesta tela há uma lista com desenvolvedores disponíveis, mecanismo de busca e opção de filtro por categorias.

![Tela inicial][initial-page-image]

## Filtrar Desenvolvedores

É possível filtrar pessoas usando critérios. Os possíveis critérios são:

- Categoria - que é subdivida em Frontend, Backend e Full Stack.
- Estado - estão previstos os 26 Estados e o Distrito Federal.
- Stack - as tecnologias principais, tais como: React Native, Java, Angular, etc.

![Filtro de desenvolvedores][filtering-image]

## Filtro Aplicado

Abaixo um exemplo do filtro aplicado usando os critérios citados acima.

![Filtro aplicado][filtered-devs-image]

## Salvar Favoritos

Ao clicar no desenvolvedor surge uma tela para favoritá-lo. Após isso, os favoritos estão em uma tela à parte.

![Salvar favoritos][saving-favorite-image]

## Lista de Favoritos

Abaixo um exemplo de tela com todos os favoritos apresentados em forma de lista.

![Salvar favoritos][favorites-screen-image]

# Video de Demonstracao

O vídeo abaixo mostra as funcionalidades descritas acima.

<video width="600" height="600" controls>
  <source src="./readme/demonstration.mp4" type="video/mp4">
</video>
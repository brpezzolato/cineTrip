# 🎬 Cine Trip

O **Cine Trip** é uma aplicação web desenvolvida com **Next.js** que
permite descobrir filmes e séries de forma rápida, intuitiva e visual. A
plataforma reúne informações detalhadas sobre títulos e facilita a
navegação por conteúdos populares, tendências e buscas personalizadas.

## 🚀 Funcionalidades

-   🔎 Busca de filmes e séries
-   🎥 Exibição de detalhes (sinopse, avaliação, etc.)
-   📺 Indicação de onde assistir
-   🧭 Navegação por categorias e tendências
-   ⚡ Interface moderna, responsiva e performática

## 🛠️ Tecnologias

-   Next.js
-   React
-   JavaScript
-   Bootstrap 5 + CSS
-   Swiper
-   API do TMDB (The Movie Database)

## 📦 Instalação e uso

### 1. Clone o repositório

```bash
git clone https://github.com/brpezzolato/cinetrip.git
```

### 2. Acesse a pasta

```bash
cd cinetrip
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Pegue sua API Key

https://www.themoviedb.org/

### 5. Configure o `.env.local` na raiz do projeto

Copie o arquivo de exemplo e preencha **uma** das credenciais:

```bash
cp .env.example .env.local
```

```env
TMDB_READ_ACCESS_TOKEN=SEU_TOKEN   # recomendado
# ou
TMDB_API_KEY=SUA_CHAVE
```

> As chamadas ao TMDB são feitas no servidor, então a credencial nunca é
> exposta no navegador. Se você já usava `NEXT_PUBLIC_API_KEY`, renomeie para
> `TMDB_API_KEY` (o nome antigo ainda funciona, mas será removido).

### 6. Rode o projeto

```bash
npm run dev
```

### 7. Acesse

http://localhost:3000

## 🗂️ Estrutura

```
src/
├── app/          # Rotas (App Router). Páginas são Server Components.
├── components/   # Componentes reutilizáveis
├── data/         # Conteúdo editorial (notícias, Oscar, carrossel, streamings, categorias)
└── lib/
    ├── tmdb.js       # Cliente do TMDB (somente servidor, com cache)
    ├── dados.js      # Acesso aos JSONs de src/data
    ├── imagens.js    # URLs de imagens do TMDB
    └── formatacao.js # Datas, notas e valores
```

## 🤝 Contribuição

Pull requests são bem-vindos!

------------------------------------------------------------------------

⭐ Se curtir, deixe uma estrela!

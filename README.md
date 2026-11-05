# Site HS Performance

Site institucional e portfólio da HS Performance.

## Estrutura dos arquivos

```
index.html                  Estrutura e textos em português de todas as seções
assets/
  css/style.css             Cores, fontes, espaçamentos e layout responsivo
  js/main.js                Menu, abas, contadores, idioma PT/EN, formulário do WhatsApp
  img/
    logo.webp               Logo (monograma "hs") usada em todo o site
    logo-original.jpg       Arquivo original da logo, com fundo
    favicon.png             Ícone da aba do navegador
    apple-touch-icon.png    Ícone quando o site é salvo na tela do celular
    compartilhamento.jpg    Imagem que aparece ao compartilhar o link no WhatsApp e redes sociais
```

## Onde fica cada coisa

| Quero mudar... | Arquivo |
|---|---|
| A logo | Substituir `assets/img/logo.webp` (e gerar de novo o favicon e o ícone do celular) |
| Um texto em português | `index.html` |
| Um texto em inglês | `assets/js/main.js`, no bloco `EN` |
| Os textos das 5 abas de "O que entregamos" | `assets/js/main.js`, no bloco `FEAT` |
| A lista de segmentos da faixa animada | `assets/js/main.js`, no bloco `SEG` |
| WhatsApp, e-mail ou Instagram | `index.html` e `assets/js/main.js` (número usado no formulário) |
| Cores e fontes | Início de `assets/css/style.css`, no bloco `:root` |
| Projetos do portfólio | `index.html`, seção `id="portfolio"` |

## Cores da marca

| Nome | Código |
|---|---|
| Preto | `#0e0c0a` |
| Dourado | `#c49a4a` |
| Dourado claro | `#e2c487` |
| Marrom | `#3a281b` |
| Marfim | `#f6f2ea` |

## Contatos usados no site

- WhatsApp: +55 (31) 98869-1313
- E-mail: hsperformancedigital@gmail.com
- Instagram: @hsperformancedigital

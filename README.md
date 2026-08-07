# Mr Rei das Pedras — Site Institucional

Landing page one-page de alto padrão para a **Mr Rei das Pedras**, marmoraria especializada em mármores importados, granitos nobres, quartzos e superfícies sinterizadas (Dekton), atendendo o Rio de Janeiro e região.

🔗 **Site no ar:** _(cole aqui o link da Vercel/domínio próprio quando estiver definitivo)_
📸 **Instagram:** [@mr.reidaspedras](https://www.instagram.com/mr.reidaspedras/)
💬 **WhatsApp:** (21) 99162-8672

---

## 📋 Sobre o projeto

Site institucional em **uma única página** (one-page), com estética editorial de revista de arquitetura (inspirado em Architectural Digest / CASACOR), contendo:

- **Hero** de impacto com chamada principal e CTAs
- **Sobre** — pilares técnicos da empresa (medição 3D, corte CNC, acabamento artesanal, instalação) + contadores animados
- **Serviços & Materiais** — cards com hover revelando detalhes
- **Showroom Digital** — galeria com filtros por categoria (Cozinhas, Banheiros, Salas, Áreas Externas) e modal/lightbox ao clicar nas fotos
- **Avaliações do Google** — widget real (Elfsight) puxando as notas e comentários do Google da empresa
- **CTA final** + **Footer** completo
- **Botão flutuante do WhatsApp**, sempre visível

---

## 🗂️ Estrutura de arquivos

```
mr-rei-das-pedras/
├── index.html              → toda a estrutura e conteúdo do site
├── css/
│   └── styles.css          → estilos customizados (fora do Tailwind)
├── js/
│   ├── tailwind.config.js  → paleta de cores e fontes da marca
│   └── script.js           → toda a interatividade (menu, filtros, modal, contador, navbar)
├── images/                 → todas as imagens do site (logo, fotos de serviços, showroom)
└── README.md                → este arquivo
```

> ⚠️ **Atenção com nomes de pasta e arquivo:** o site é publicado em servidores (GitHub Pages / Vercel) que diferenciam maiúsculas de minúsculas — diferente do Windows. Sempre que adicionar uma imagem nova, o nome do arquivo precisa bater **exatamente** (letra por letra) com o que está escrito no `src=""` dentro do `index.html`. Exemplo: `images/logo.png` é diferente de `Imagens/Logo.PNG` para o servidor, mesmo que no seu computador pareça igual.

---

## 🎨 Identidade visual

| Elemento | Valor |
|---|---|
| Preto matte (fundo) | `#0B0B0A` |
| Nero marquina (cards) | `#161513` |
| Off-white travertino (texto claro) | `#F1EEE7` |
| Cinza granito (bordas) | `#3A3937` |
| **Dourado** (destaque/marca) | `#D4A017` |
| Dourado claro (hover) | `#E8BE4D` |
| Verde WhatsApp (botão flutuante) | `#36C637` |

Fontes: **Cormorant Garamond** (títulos, serifada) + **Plus Jakarta Sans** (corpo de texto).

Toda a paleta fica centralizada em `js/tailwind.config.js` — mudar uma cor lá atualiza o site inteiro automaticamente, sem precisar editar o `index.html`.

---

## ✏️ Como editar o conteúdo

O site é construído com **HTML + Tailwind CSS (via CDN) + JavaScript puro**, sem frameworks, sem processo de build — é só abrir e editar direto.

### Trocar textos
Basta abrir `index.html` no VS Code, localizar o texto (use `Ctrl+F`) e editar diretamente entre as tags.

### Trocar imagens
1. Salve a nova imagem dentro da pasta `images/`
2. No `index.html`, localize a tag `<img src="images/nome-antigo.jpg">` correspondente
3. Troque só o valor do `src=""` pelo caminho da nova imagem

### Trocar telefone/WhatsApp
Busque por `5521991628672` no `index.html` (`Ctrl+F`) — esse número aparece em vários links `wa.me/`. Substitua em todas as ocorrências pelo novo número, no formato `55` + DDD + número, sem espaços ou símbolos.

### Trocar cores
Edite `js/tailwind.config.js` — a cor `marmore-bronze` é o dourado principal usado em quase todo o site.

### Visualizar localmente
Recomendado usar a extensão **Live Server** do VS Code: clique com o botão direito no `index.html` → **"Open with Live Server"**. Isso abre o site no navegador e atualiza automaticamente a cada alteração salva.

---

## 🚀 Publicação (Deploy)

O site está publicado via **Vercel**, com o domínio próprio da cliente já configurado.

### Fluxo de atualização
Sempre que uma alteração for feita no código:

```bash
git add .
git commit -m "descreva o que mudou"
git push
```

A Vercel detecta o `push` automaticamente e publica a nova versão em poucos minutos — não é necessário nenhum passo manual adicional.

### Repositório
O código-fonte fica hospedado no GitHub, na conta da própria cliente, garantindo que ela tenha posse e controle total do projeto independente de quem o desenvolveu.

---

## 🔌 Integrações

- **Google Reviews (Elfsight):** widget incorporado na seção de depoimentos, puxando automaticamente as avaliações reais do Google da empresa. Não requer manutenção manual — atualiza sozinho.
- **WhatsApp:** todos os CTAs do site (botão flutuante, hero, CTA final, showroom) abrem conversa direta no WhatsApp já com mensagens pré-formatadas para cada contexto.

---

## 🛠️ Manutenção recomendada

- Atualizar periodicamente as fotos do Showroom com obras novas
- Revisar o texto de estatísticas ("+1.200 Obras", "15 Anos") conforme a empresa evoluir
- Conferir de tempos em tempos se os links do WhatsApp e Instagram continuam corretos

---

## 📄 Licença / Uso

Projeto desenvolvido sob encomenda para uso exclusivo da **Mr Rei das Pedras**. Imagens de placeholder (Unsplash) devem ser substituídas por fotos reais e autorais da empresa antes da publicação definitiva.

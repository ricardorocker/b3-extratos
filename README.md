#  Extrato de Movimentações B3 (Clone UI)

Este projeto simula fielmente a interface da tela de **Extratos de Movimentações** da Área do Investidor B3, com foco exclusivo em Frontend Angular. O objetivo foi replicar o layout e a experiência visual da tela, aplicando boas práticas de arquitetura e padrões de código modernos, com dados mockados via API fake (`json-server`).

> **Projeto Frontend 100% funcional**
>  
>  Não é um projeto oficial da B3.
>  
>  Feito apenas para fins de estudo e portfólio.

---

##  Funcionalidades Implementadas

- ✔️ Simulação fiel da interface da tela de extratos B3 (desktop e mobile)
- ✔️ Layout responsivo com **TailwindCSS**
- ✔️ Modal de filtros com animação responsiva (abre pela lateral no desktop e tela cheia no mobile)
- ✔️ Uso de **RxJS Avançado** com `BehaviorSubject`, `switchMap`, `tap`, entre outros
- ✔️ Suporte completo ao filtro por **período de datas**
- ✔️ Exibição da lista agrupada por dia e movimentações
- ✔️ Estados de carregamento e ausência de dados com mensagens amigáveis
- ✔️ Mock de dados via `json-server` simulando o endpoint real da B3

---

##  Arquitetura

O projeto segue uma **arquitetura modular e reativa**, com foco em manutenibilidade e separação de responsabilidades:

```
src/
├── app/
│   ├── components/               # Dump components como filtro-modal
│   ├── core/
│   │   ├── models/               # Models tipados (e.g., ExtratoResponse)
│   │   └── services/             # Serviços de integração (e.g., ExtratoService)
│   ├── pages/
│   │   └── extrato/              # ExtratoComponent standalone
│   └── app.component.ts
└── assets/
```

---

##  Tecnologias e Boas Práticas

| Categoria                  | Ferramentas / Técnicas                                               |
|---------------------------|-----------------------------------------------------------------------|
| ⚙️ Framework              | Angular 18 com Standalone Components (`standalone: true`)            |
| 🎨 Estilização            | TailwindCSS                                                          |
| 🔁 Reatividade            | RxJS (`BehaviorSubject`, `switchMap`, `tap`)                         |
| 📦 Mock API              | `json-server`                                                        |
| 🌐 HTTP Client           | `HttpClientModule` injetado via `provideHttpClient()`                |
| 📅 Internacionalização    | Locale `pt-BR` registrado (`registerLocaleData`)                    |
| 📁 Modularização         | Separação por domínio (pages, components, core)                      |
| ✅ Clean Code            | Lógica isolada, uso de services e boas práticas Angular               |

---

##  Prints do Projeto

| 💻 Desktop | 📱 Mobile |
|-----------|-----------|
| ![Desktop](./docs/desktop-preview.png) | ![Mobile](./docs/mobile-preview.png) |

---

##  Como rodar localmente

### 1. Clone o projeto

```bash
git clone https://github.com/seu-usuario/extrato-b3-clone.git
cd extrato-b3-clone
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie a API fake com `json-server`

```bash
npx json-server --watch db.json --port 3000
```

> O arquivo `db.json` está pronto com os dados mockados da API de extrato.

### 4. Inicie o projeto Angular

```bash
npm run dev
```

> Acesse via: `http://localhost:4200`

---

## 📂 Estrutura do JSON esperado pela API

Endpoint simulado:

```
GET http://localhost:3000/extrato-movimentacao?dataInicio=YYYY-MM-DD&dataFim=YYYY-MM-DD&pagina=1&cache-guid=... 
```

Response:

```json
{
  "paginaAtual": 1,
  "totalPaginas": 1,
  "itens": [
    {
      "data": "2020-11-04T00:00:00",
      "movimentacoes": [
        {
          "tipoOperacao": "Debito",
          "tipoMovimentacao": "Transferência - Liquidação",
          "nomeProduto": "MGLU3 - MAGAZINE LUIZA S/A",
          "instituicao": "CLEAR CORRETORA - GRUPO XP",
          "quantidade": 300,
          "valorOperacao": 7323,
          "precoUnitario": 24.41,
          "dataMovimentacao": "2020-11-04T00:00:00"
        }
      ]
    }
  ]
}
```

---

##  Aprendizados

- Estruturação de layout responsivo com Tailwind
- Controle total do ciclo de vida com Angular standalone
- Gerenciamento de estado reativo com RxJS
- Simulação de dados reais com `json-server`
- Criação de modais reutilizáveis e adaptativos

---

##  Pontos Técnicos

- `@if` e `@else` usados para renderização condicional
- Responsividade mobile-first com classes utilitárias
- Importação modular com `provideHttpClient()` no `main.ts`
- Organização de serviços seguindo padrão `core/services`

---

## 🧠 Autor

Desenvolvido por **Ricardo** — Frontend Angular Sênior  
📧 Entre em contato: [linkedin.com/in/ricardorocker](https://www.linkedin.com/in/ricardo-s-rocker)

---

## 📄 Licença

Este projeto é apenas para fins educacionais.  
Não possui vínculo com a B3 ou qualquer empresa oficial.
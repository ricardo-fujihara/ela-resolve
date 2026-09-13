# Ela Resolve 🏠✨

**Ela Resolve** é um aplicativo acadêmico em **React Native + Expo SDK 54 + TypeScript** para o trabalho final da disciplina de React Native.

A assistente virtual do app se chama **Manu** — um nome feminino que também faz referência a **manutenção**. A Manu ajuda a transformar pequenos problemas domésticos em orientações curtas, seguras e fáceis de acompanhar.

> **Ela Resolve** é o nome do aplicativo. **Manu** é a assistente virtual de reparos domésticos.

## Configuração da Gemini API

Crie um arquivo `.env.local` na raiz do projeto:

```env
GEMINI_API_KEY=SUA_CHAVE_GEMINI
GEMINI_MODEL=gemini-3.5-flash-lite
```

O `.env.local` está no `.gitignore` e **não deve ser enviado ao GitHub**.

O repositório contém somente `.env.example`, sem segredo real - copie ele como modelo .

Neste projeto a chave permanece no lado servidor.



## Proposta

O público principal são mulheres e mães com rotina corrida, trabalho, filhos e tarefas da casa, que querem tentar o básico com segurança antes de chamar outra pessoa.

A usuária informa apenas:

1. **Onde / o que é?** — exemplo: `torneira da cozinha`, `aspirador`, `máquina de lavar`.
2. **O que está acontecendo?** — exemplo: `a água está saindo fraca`.

A IA interpreta a situação e gera uma orientação com **no máximo 6 passos**.

Cada passo usa o mesmo componente visual e apresenta:

- contador de páginas, como `2/6`;
- uma única ação por vez;
- explicação simples do motivo;
- alerta de cuidado quando necessário;
- pergunta rápida para saber se funcionou;
- botão **Deu certo!**;
- botão **Ainda não** para avançar ao próximo passo;
- botão **Vou chamar ajuda** quando a usuária preferir parar.

Ao concluir, o app apresenta uma mensagem positiva. Se a usuária decidir chamar ajuda, a Manu reforça que saber a hora de parar também é uma boa decisão.

## Experiência em uma única tela

O aplicativo foi planejado para reutilizar a tela.

No estado inicial aparecem somente o cabeçalho, os dois campos e o botão da Manu.

```text
ELA RESOLVE
Manu • sua assistente virtual de reparos domésticos

Onde / o que é?
[ Torneira da cozinha ]

O que está acontecendo?
[ A água está saindo fraca... ]

[ ✨ Manu, me ajuda ]
```

Somente depois da resposta da IA, a região abaixo do botão é criada:

```text
┌────────────────────────────────┐
│ PODE TENTAR               2/5 │
│                                │
│ PASSO 2                        │
│ Limpe o arejador da torneira.  │
│                                │
│ Por que fazer isso?            │
│ A sujeira pode reduzir a vazão.│
│                                │
│ E aí, funcionou?               │
│ [🎉 Deu certo!] [Ainda não]    │
│ [🙋‍♀️ Vou chamar ajuda]          │
│                                │
│   ←          2 de 5         → │
└────────────────────────────────┘
```

O mesmo espaço também é reutilizado para mensagens de sucesso, decisão de chamar ajuda ou falhas de conexão/API.

Quando há uma resposta, o formulário fica automaticamente mais compacto para reservar espaço ao passo atual sem precisar de `ScrollView`.

## Exemplos de uso

### Torneira com pouca água

```text
Onde / o que é?
Torneira da cozinha

O que está acontecendo?
A água está saindo fraca mesmo com a torneira totalmente aberta.
```

A Manu pode começar verificando o arejador/filtro da ponta da torneira antes de sugerir hipóteses mais complexas.

### Aspirador perdeu sucção

```text
Onde / o que é?
Aspirador de pó

O que está acontecendo?
Perdeu bastante a sucção e o saco está bem cheio.
```

A Manu pode orientar a verificar o saco e os filtros acessíveis previstos pelo fabricante.

### Situação perigosa

```text
Onde / o que é?
Tomada da cozinha

O que está acontecendo?
Está saindo faísca e senti cheiro de queimado.
```

Nesse caso, a resposta deve usar **CHAME AJUDA** e não ensinar a abrir tomada ou mexer em fiação.

## Segurança

O app é limitado a pequenos afazeres e reparos domésticos simples, externos e reversíveis.

A IA é instruída a **não ensinar**:

- reparo interno de quadro elétrico ou fiação energizada;
- reparo de gás;
- desmontagem que exponha partes perigosas;
- trabalho em altura/telhado;
- reparo estrutural;
- burla de sensores ou proteções;
- mistura perigosa de produtos químicos.

Em situações com gás, fumaça, cheiro de queimado, faísca, choque, água próxima de eletricidade ou outro risco importante, a Manu deve orientar a interromper a tentativa e buscar ajuda profissional.

## Tecnologias

- **React Native**
- **Expo SDK 54** (`expo ~54.0.36`)
- **Expo Router**
- **TypeScript**
- **SWR Mutation**
- **Axios** (comunicação do servidor com a Gemini API)
- **Gemini API**
- **Expo API Routes**

O uso de `useSWRMutation` é adequado porque a consulta à IA acontece somente quando a usuária pressiona o botão, em vez de carregar automaticamente ao abrir a tela.

## Organização do projeto

```text
ela-resolve/
├── app/
│   ├── api/
│   │   └── ajuda+api.ts
│   ├── _layout.tsx
│   └── index.tsx
├── classes/
│   └── HomePromptBuilder.ts
├── components/
│   ├── AppHeader.tsx
│   ├── ErrorCard.tsx
│   ├── GuideCard.tsx
│   ├── HomeHelperScreen.tsx
│   ├── LabeledInput.tsx
│   ├── NavigationControls.tsx
│   ├── OutcomeCard.tsx
│   ├── PrimaryButton.tsx
│   ├── ProblemForm.tsx
│   ├── QuizActions.tsx
│   └── SafetyFooter.tsx
├── constants/
│   ├── app.ts
│   └── texts.ts
├── hooks/
│   ├── useHomeGuide.ts
│   └── useHomeIssueForm.ts
├── interfaces/
│   └── homeGuide.ts
├── services/
│   ├── homeHelpApi.ts
│   └── server/
│       └── geminiHomeService.ts
├── styles/
│   ├── componentStyles.ts
│   ├── screenStyles.ts
│   └── theme.ts
├── utils/
│   ├── parseGeminiJson.ts
│   └── validation.ts
├── docs/
│   └── ARCHITECTURE.md
├── .env.example
├── .gitignore
├── app.json
├── package.json
└── README.md
```

A rota principal permanece propositalmente pequena:

```tsx
import HomeHelperScreen from "@/components/HomeHelperScreen";

export default function Index() {
  return <HomeHelperScreen />;
}
```

Isso mantém a tela limpa e delega formulário, resultado, quiz, navegação e estilos para componentes reutilizáveis.

## Instalação

Requisitos principais:

- Node.js 20.19 ou superior;
- npm;
- Expo/Expo Go compatível com SDK 54;
- chave da Gemini API.

```bash
git clone URL_DO_REPOSITORIO
cd ela-resolve
npm install
```

## Configuração da Gemini API

Crie um arquivo `.env.local` na raiz do projeto:

```env
GEMINI_API_KEY=SUA_CHAVE_GEMINI
GEMINI_MODEL=gemini-3.5-flash-lite
```

O `.env.local` está no `.gitignore` e **não deve ser enviado ao GitHub**.

O repositório contém somente `.env.example`, sem segredo real.

Neste projeto a chave permanece no lado servidor.

Fluxo:

```text
React Native
    ↓
SWR Mutation + fetch
    ↓
POST /api/ajuda
    ↓
Expo API Route
    ↓
GEMINI_API_KEY no servidor
    ↓
Gemini API
```

Para uma publicação usando EAS, a mesma `GEMINI_API_KEY` deve ser configurada como variável secreta do ambiente servidor no projeto Expo/EAS. A chave real continua fora do GitHub.

## Executar

```bash
npx expo start --clear
```

Atalhos usuais:

- `i` — iOS Simulator;
- `a` — Android;
- `w` — web.

## Expo SDK 54

O projeto foi preparado especificamente para **Expo SDK 54**.

No `package.json`:

```json
"expo": "~54.0.36",
"react": "19.1.0",
"react-native": "0.81.5"
```

Para conferir as dependências na máquina onde o projeto for executado:

```bash
npx expo install --check
```

## Tratamento de erros

A mesma área inferior usada pelos passos também apresenta mensagens quando ocorrer, por exemplo:

- falta de internet;
- timeout;
- chave Gemini ausente ou recusada;
- modelo de IA não encontrado;
- limite de uso da API;
- resposta inesperada da IA;
- dados do formulário insuficientes.

Assim o usuário não precisa procurar uma mensagem fora da área visível da tela.

## Identidade visual

A interface utiliza preto, amarelo e branco como base visual, seguindo a proposta definida para o trabalho.

Os valores estão centralizados em:

```text
styles/theme.ts
```

Textos e identidade da aplicação ficam centralizados em:

```text
constants/app.ts
constants/texts.ts
```

## Autor

Projeto acadêmico individual — disciplina de React Native / UTFPR.

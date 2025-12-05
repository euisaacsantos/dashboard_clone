# Dashboard de Mídia - Meta & Google Ads

Dashboard interativo para visualização de métricas de campanhas de mídia paga (Meta Ads e Google Ads).

## 🚀 Funcionalidades

### Filtro por Campanha
- **Clique em qualquer campanha** na tabela para filtrar todos os dados do dashboard
- Os dados filtrados incluem:
  - Impressões totais
  - Investimento total
  - CTR médio
  - Gráfico de performance
  - Leads semanais
  - Distribuição de budget

### Indicadores Visuais
- Badge com nome da campanha selecionada no header
- Checkbox marcado na linha da campanha ativa
- Destaque visual (fundo azul claro) na linha selecionada
- Botão "X" para limpar o filtro

### Métricas Exibidas
- **Cards Superiores**: Impressões, Investimento, CTR
- **Gráfico Principal**: Performance mensal por plataforma
- **Gráfico Lateral**: Leads semanais
- **Gráfico Donut**: Distribuição de budget
- **Tabela**: Lista de campanhas ativas com ROAS e custos

## 🛠️ Tecnologias

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **TailwindCSS** (estilização)
- **Recharts** (gráficos)
- **Lucide React** (ícones)

## 📦 Instalação

```bash
npm install
```

## 🏃 Executar

```bash
npm run dev
```

O dashboard estará disponível em `http://localhost:5173`

## 📊 Campanhas Disponíveis

1. **Promoção Verão** (Meta Ads)
   - Impressões: 45.200
   - Investimento: R$ 650,00
   - CTR: 3.2%

2. **Search Institucional** (Google Ads)
   - Impressões: 52.100
   - Investimento: R$ 720,50
   - CTR: 4.1%

3. **Retargeting Catálogo** (Meta Ads)
   - Impressões: 27.150
   - Investimento: R$ 432,25
   - CTR: 1.8%

## 💡 Como Usar

1. Visualize os dados agregados de todas as campanhas
2. Clique em qualquer linha da tabela de campanhas para filtrar
3. Observe como todos os gráficos e métricas se atualizam automaticamente
4. Clique novamente na mesma campanha ou no botão "X" para remover o filtro

# 🚀 Guia de Deploy na Vercel

## ✅ Pré-requisitos Concluídos

- ✅ Projeto configurado com Vite
- ✅ Build testado e funcionando
- ✅ Arquivo `vercel.json` criado
- ✅ Código no GitHub: https://github.com/euisaacsantos/dashboard_clone.git

## 📋 Passos para Deploy

### Opção 1: Deploy via Vercel Dashboard (Recomendado)

1. **Acesse**: https://vercel.com
2. **Login** com sua conta GitHub
3. **Clique em "Add New Project"**
4. **Importe o repositório**: `euisaacsantos/dashboard_clone`
5. **Configure o projeto**:
   - Framework Preset: **Vite**
   - Build Command: `npm run build` (já detectado automaticamente)
   - Output Directory: `dist` (já detectado automaticamente)
   - Install Command: `npm install` (já detectado automaticamente)
6. **Clique em "Deploy"**
7. **Aguarde** ~2 minutos
8. **Pronto!** Seu dashboard estará no ar

### Opção 2: Deploy via Vercel CLI

```bash
# Instalar Vercel CLI (se ainda não tiver)
npm install -g vercel

# Na pasta do projeto, executar:
vercel

# Seguir as instruções:
# - Set up and deploy? Yes
# - Which scope? Sua conta
# - Link to existing project? No
# - Project name? dashboard-clone (ou o nome que preferir)
# - Directory? ./ (deixar padrão)
# - Override settings? No

# Para deploy em produção:
vercel --prod
```

## 🔧 Configurações Automáticas

O arquivo `vercel.json` já está configurado com:
- ✅ Comando de build otimizado
- ✅ Diretório de saída correto
- ✅ Rewrites para SPA (Single Page Application)
- ✅ Framework Vite detectado

## 🌐 Após o Deploy

Você receberá uma URL como:
- **Preview**: `https://dashboard-clone-xxx.vercel.app`
- **Production**: `https://dashboard-clone.vercel.app`

### Domínio Customizado (Opcional)

1. Vá em **Settings** > **Domains**
2. Adicione seu domínio personalizado
3. Configure os DNS conforme instruções

## 🔄 Deploy Automático

Após o primeiro deploy, **cada push** para a branch `main` fará um deploy automático!

```bash
# Fazer alterações
git add .
git commit -m "feat: nova funcionalidade"
git push

# Deploy automático será iniciado!
```

## 📊 Monitoramento

Após o deploy, você pode:
- Ver logs em tempo real
- Monitorar performance
- Ver analytics de acesso
- Configurar variáveis de ambiente (se necessário)

## ⚡ Performance

O build atual:
- **HTML**: 0.47 kB (gzip: 0.31 kB)
- **CSS**: 11.55 kB (gzip: 2.99 kB)
- **JS**: 559.04 kB (gzip: 157.42 kB)

## 🐛 Troubleshooting

### Erro de Build
- Verifique se todas as dependências estão no `package.json`
- Teste localmente: `npm run build`

### Página em branco
- Verifique o console do navegador
- Confirme que o `vercel.json` tem os rewrites corretos

### Erro 404
- Certifique-se que o arquivo `vercel.json` está no repositório
- Verifique se o diretório de output é `dist`

## 📞 Suporte

- Documentação Vercel: https://vercel.com/docs
- Documentação Vite: https://vitejs.dev/guide/

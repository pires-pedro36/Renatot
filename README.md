# Entre Raízes e Caminhos — estrutura do site

Projeto estático simples criado para replicar a estrutura do site de exemplo. Inclui HTML/CSS/JS básicos. Pronto para publicar no GitHub Pages.

Como usar (PowerShell):

1. Inicialize o repositório e adicione os arquivos

```powershell
cd 'C:\Users\Computador\Documents\site_EDS'
git init
git add .
git commit -m "Inicial site structure"
```

2. Crie um repositório no GitHub (pelo site) e conecte o remoto, depois envie para `main`:

```powershell
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git
git branch -M main
git push -u origin main
```

3. Habilitar GitHub Pages

- Vá em Settings → Pages do repositório GitHub e escolha a branch `main` e a pasta `/ (root)` como source. Salve.
- Aguarde alguns segundos e o site estará disponível em `https://SEU_USUARIO.github.io/SEU_REPO/`.

Opcional: você pode usar GitHub Actions para publicar de `main` para `gh-pages` automaticamente ou usar a pasta `/docs/` como source.

Personalize os textos em `index.html` e substitua imagens em `assets/images/`.

# Script para mover los componentes al directorio correcto en GitHub

# Clonar en un directorio temporal
Write-Host "Clonando el repositorio en un directorio temporal..." -ForegroundColor Cyan
New-Item -ItemType Directory -Path "temp_repo" -Force | Out-Null
Set-Location -Path "temp_repo"
git clone https://github.com/helden7452/uniform3_original.git .

# Crear directorios necesarios
Write-Host "Creando directorios si no existen..." -ForegroundColor Cyan
New-Item -ItemType Directory -Path "src/components" -Force | Out-Null

# Copiar los archivos desde temp_push al directorio correcto
Write-Host "Copiando los archivos a src/components..." -ForegroundColor Cyan
Copy-Item -Path "../temp_push/Breadcrumb.tsx" -Destination "src/components/Breadcrumb.tsx" -Force
Copy-Item -Path "../temp_push/BlogImage.tsx" -Destination "src/components/BlogImage.tsx" -Force
Copy-Item -Path "../temp_push/SmartImage.tsx" -Destination "src/components/SmartImage.tsx" -Force

# Agregar los archivos a Git
Write-Host "Agregando archivos a Git..." -ForegroundColor Cyan
git add src/components/*.tsx

# Verificar el estado
git status

# Hacer commit
Write-Host "Haciendo commit..." -ForegroundColor Cyan
git commit -m "Add components to the correct directory for Netlify build"

# Empujar a GitHub
Write-Host "Subiendo cambios a GitHub..." -ForegroundColor Cyan
git push origin master

# Volver al directorio original
Set-Location -Path ".."

# Limpiar
Write-Host "Limpiando archivos temporales..." -ForegroundColor Cyan
Remove-Item -Path "temp_repo" -Recurse -Force

Write-Host "¡Proceso completado! Los componentes han sido agregados al directorio correcto." -ForegroundColor Green 
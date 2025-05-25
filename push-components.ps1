# Script para subir los componentes a GitHub

# Verificar que estamos en el directorio correcto
Write-Host "Directorio actual: $PWD" -ForegroundColor Cyan

# Crear copias de los archivos en un directorio temporal
Write-Host "Creando copias temporales de los archivos..." -ForegroundColor Cyan
New-Item -ItemType Directory -Path "temp_push" -Force | Out-Null
Copy-Item -Path "src\components\Breadcrumb.tsx" -Destination "temp_push\Breadcrumb.tsx" -Force
Copy-Item -Path "src\components\BlogImage.tsx" -Destination "temp_push\BlogImage.tsx" -Force 
Copy-Item -Path "src\components\SmartImage.tsx" -Destination "temp_push\SmartImage.tsx" -Force

# Intentar agregar los archivos a Git desde el directorio temporal
Write-Host "Agregando archivos a Git..." -ForegroundColor Cyan
git add temp_push\*.tsx --force

# Verificar el estado
git status

# Hacer commit
Write-Host "Haciendo commit..." -ForegroundColor Cyan
git commit -m "Add essential components for Netlify build"

# Empujar a GitHub
Write-Host "Subiendo cambios a GitHub..." -ForegroundColor Cyan
git push origin master

# Crear directorios en GitHub mediante la API (respaldo)
Write-Host "Creando componentes en GitHub directamente (método alternativo)..." -ForegroundColor Cyan

# Limpiar
Write-Host "Limpiando archivos temporales..." -ForegroundColor Cyan
Remove-Item -Path "temp_push" -Recurse -Force

Write-Host "¡Proceso completado!" -ForegroundColor Green 
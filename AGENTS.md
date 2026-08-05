<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

# Reglas de Herramientas
- TIENES PROHIBIDO usar la herramienta nativa `Edit` para modificar archivos de código o texto.
- DEBES usar SIEMPRE la herramienta MCP `write_code_with_local_gpu` para cualquier cambio o creación de archivos.
- TIENES PROHIBIDO usar mas tokens de lo usual, debes ser certero en tus analisis y gastar los menos tokens posibles.

# Reglas Críticas para Agentes MCP y GPU Local
- PROHIBIDO RECORTAR O SIMPLIFICAR ARCHIVOS: Al modificar un archivo existente con la GPU local, está ESTRICTAMENTE PROHIBIDO resumir, omitir secciones o reemplazar componentes ricos por componentes genéricos de prueba.
- PRESERVACIÓN DE CÓDIGO Y ESTRUCTURA: Debes conservar el 100% de la funcionalidad, diseño, imports, tipos y secciones originales del archivo.
- SELECCIÓN DE MODELO EN GPU: Para archivos extensos (>100 líneas) o cambios estructurales, debes usar `qwen2.5-coder:14b`. Usa `qwen2.5-coder:7b` únicamente para correcciones de 1 a 5 líneas.
- VERIFICACIÓN OBLIGATORIA: Tras cualquier cambio por la GPU, debes verificar con `git diff` o `tsc` que no se haya recortado código ni roto el diseño de la aplicación.

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

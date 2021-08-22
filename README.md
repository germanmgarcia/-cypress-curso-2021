# cypress-curso-2021


1. ``npm init``

2. ``yarn add cypress --dev``

3. ``yarn cypress open``

4. ``yarn add -D cypress-plugin-tab``

5. ``yarn add cypress-xpath --dev``

6. ``yarn add cypress-file-upload --dev``

7. ``yarn add --dev @4tw/cypress-drag-drop``

8. TruePath / ChroPath

## consola cypress

- ``node_modules/.bin/cypress run`` Correrlo sin el navegador

- ``yarn cypress run --header`` Correrlo desde el navegador

- ``yarn cypress run --browser chrome`` Correr todos lo ejemplo con el navegador chrome

- ``yarn cypress run --spec "cypress\integration\seccion_2\asserts.spec.js"`` Correr una prueba en específico

- ``yarn cypress run --spec "cypress\integration\seccion_1\*"`` Correr todas las pruebas de una sola sección

## Plantilla Cypress (VSC)

- Ctrl + p

- > snippets - Configuration

- JavaScript

``
	"Plantilla_cypress": {
		"prefix": "c_plantilla_cypress",
		"body": [
			"/// <reference types='Cypress' />;",
			"",
			"require('cypress-xpath');",
			"require('cypress-plugin-tab');",
			"require('@4tw/cypress-drag-drop');",
			"require('cypress-file-upload');",
			"",
			"",
			"describe('${1:descripcion}', () => {",
			"\tit('${2:test}', () => {",
			"\tconst tiempo = 2000;",
			"\tcy.visit('${3:url}');",
			"\tcy.title().should('eq', '${4:titulo}');",
			"\tcy.wait(tiempo);",
			"\t})",
			"});"
		],
		"description": "Plantilla Cypress"
	}
``
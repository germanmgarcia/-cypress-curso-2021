Feature: Demo de Cucumber

    Esto es un demo de como utilizar cocumber

    Scenario: Demo de Cocumber
        Given Abrir el navegador principal
        When Cargando el nombre juan
        When Cargando el email demo@gmail.com
        And Cargando la Dirección demo dirección_uno
        And Cargando la Dirección Dos demo dirección_dos
        And Click en el botón
        Then Validar el nombre de la página

    Scenario: Demo de Cocumber dos
        Given Abrir el navegador principal
        When Cargando el nombre pedro
        When Cargando el email demo2@gmail.com
        And Cargando la Dirección demo dirección_uno2
        And Cargando la Dirección Dos demo dirección_dos2
        And Click en el botón
        Then Validar el nombre de la página
Feature: Demo de Cucumber

    Esto es un demo de como utilizar cocumber

    # Scenario: Demo de Cocumber
    #     Given Abrir el navegador principal
    #     When Cargando el nombre juan
    #     When Cargando el email demo@gmail.com
    #     And Cargando la Dirección demo dirección_uno
    #     And Cargando la Dirección Dos demo dirección_dos
    #     And Click en el botón
    #     Then Validar el nombre de la página

    Scenario Outline: Scenario Outline name: Demo de Cocumber dos
        Given Abrir el navegador principal
        When Cargando el nombre <username>
        When Cargando el email <email>
        And Cargando la Dirección demo <dir1>
        And Cargando la Dirección Dos demo <dir2>
        And Click en el botón
        Then Validar el nombre de la página

        Examples:
            | username | email           | dir1             | dir2             |
            | nombre1  | demo1@gmail.com | dirección_uno    | dirección_uno    |
            | nombre2  | demo2@gmail.com | dirección_dos    | dirección_dos    |
            | nombre3  | demo3@gmail.com | dirección_tres   | dirección_tres   |
            | nombre4  | demo4@gmail.com | dirección_cuatro | dirección_cuatro |
            | nombre5  | demo5@gmail.com | dirección_cinco  | dirección_cinco  |
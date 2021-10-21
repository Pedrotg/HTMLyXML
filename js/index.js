$(document).ready(function() {
    /*Usamos AJAX para poder leer el archivo XML, en JQuery podemos hacer uso del método "get",
    en este método debemos importar el archivo XML con el que vamos a trabajar*/
    $.get('../htmlyxml/xml/personajes.xml', function(xml) {
        
        /*Agregamos 2 etiquetas al archivo HTML, el primo es un simple h2,
        el segundo es una etiqueta donde estarán alojados nuestros elementos.
        Es importante declarar una etiqueta en donde nosotros queremos que aparezca el contenido */
        $('body').append('<h2>Mis personajes favoritos</h2>');
        $('body').append('<dl/>');
        
        /*Aquí haremos el ciclo para encontrar todas las etiquetas llamadas "personaje",
        de cada una de esas etiquetas obtendremos cierta información que guardaremos en variables
        y después esas variableas las concatenaremos a otras etiquetas que se añadirán al
        documento HTML*/
        $(xml).find('personaje').each(function () {

            /*Con el método "find" encontramos etiquetas hijos*/
            var nombre_personaje = $(this).find('nombre').text();
            /*Con la etiqueta "attr" encontramos atriburos de las etiquetas hijos,
            es importante recordar que en este ejemplo el atributo está en una etiqueta "nieto"
            es por eso que agregamos el método "children" (el hijo del hijo) */
            var imagen = $(this).children().attr('imagenurl');
            var descripcion = $(this).find('descripcion').text();
            
            /*Creamos la estructura de como queremos que aparezca nuestro contenido
            aquí pueden sustituir las etiquetas por tablas, etiquetas simples, etc, 
            de acuerdo a las necesidades*/
            var html = '<dt><p>'+nombre_personaje+'</p></dt>';
            
            html += '<dt><img src = '+imagen+' /> </dt>';
            
            html += '<p>'+descripcion+'</p>';
            
            /*Esta útima parte es simplemente para agregar las etiquetas que fuimos creando
            en la etiqueta "dl" que creamos en la línea 10 de este documento*/
            $('dl').append($(html));
            
        });
    });
});

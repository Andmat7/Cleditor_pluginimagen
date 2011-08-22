(function($) {
   //Constantes
  var FOLDER = location.pathname;
  // Definimos el boton imagen
  $.cleditor.buttons.imagen = {
    name: "imagen",
    image: "imagen.gif",
    title: "Insertar Imagen",
    command: "inserthtml",
    popupName: "imagen",
    popupClass: "cleditorPrompt",
    popupContent: "<form method=post enctype=multipart/form-data "+
	          "action="+FOLDER+"?p=plugin/Example target=iframeUpload> "+
                  "<input type=hidden name=phpMyAdmin />  "+
		  "Archivo: <input name=fileUpload type=file />"+
		  "<input type=submit value=enviar>"+
		  "  <iframe name=iframeUpload></iframe>:"+   
                  "</form>",






    buttonClick: imagenClick

  };
      
 
  // Add the button to the default controls before the bold button
  $.cleditor.defaultOptions.controls = $.cleditor.defaultOptions.controls
    .replace("bold", "imagen bold");
      
 
  // Handle the imagen button click event
  function imagenClick(e, data) {
      
 
    // Wire up the submit button click event
    $(data.popup).children(":button")
      .unbind("click")
      .bind("click", function(e) {
      
 
        // Get the editor
        var editor = data.editor;
      
 
        // Get the entered name
        var name = $(data.popup).find(":text").val();
      
 
        // Insert some html into the document
        var html = "Hello " + name;
        editor.execCommand(data.command, html, null, data.button);
      
 
        // Hide the popup and set focus back to the editor
        editor.hidePopups();
        editor.focus();
      
 
      });
      
 
  }
      
 
})(jQuery);

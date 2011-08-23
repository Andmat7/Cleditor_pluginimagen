(function($) {
   //Constantes
  var FOLDER = location.pathname;
  var IMG_CARGA  = $.cleditor.imagesPath() + "cargando.gif";
  $.cleditor.buttons.imagen = {
    name: "imagen",
    image: "imagen.gif",
    title: "Insertar Imagen",
    command: "inserthtml",
    popupName: "imagen",
    popupClass: "cleditorPrompt",
    popupContent: 		  "  <div id=carga ></div>:"+   
		  "  <iframe name=iframeUpload id=iframeUpload onload=carga() ></iframe>:"+   
			"<form id=form_envio method=post enctype=multipart/form-data "+
          "action="+FOLDER+"?p=plugin/SubidaImagenes target=iframeUpload> "+
		  "Archivo: <input name=fileUpload type=file />"+
                  "</form>"+
		  "<input type=button value=Submit>",
    buttonClick: imagenClick,
	

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
 	  //enviamos el formulario
	    $('#form_envio').submit();
	$('#carga').html('<img src="'+IMG_CARGA+'">');
		

        // Get the editor
        var editor = data.editor;
      
 
        // Get the entered name
        var name = $(data.popup).find(":text").val();
      
 
        // Insert some html into the document
        var html = "Hello " + name;
      
 /*
        // Hide the popup and set focus back to the editor
        editor.hidePopups();
        editor.focus();
      
 */
      });
      
 
  }
      
 
})(jQuery);

  function carga() {
		if ($('#iframeUpload').contents().find('#someID').length)
				{
				var html2=$('#iframeUpload').contents().find('#someID').html();
				ed.execCommand("inserthtml", html2, null, null);
				}
	  
  }


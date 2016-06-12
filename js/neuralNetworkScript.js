 draggableInputNo=0;
 draggableHiddenNo=0;
 draggableOutputNo=0;
 nodeNo=0;

$(function() {
    //set droppable as a droppable container
    $( "#droppable" ).droppable({
      drop: function(event, ui) {

        $element=ui.helper.clone();
        $element.draggable();
        $element.selectable();

        if(ui.draggable.attr('id')=='draggableInput'){
          draggableInputNo++;
          $element.attr("id",'draggableInput'+draggableInputNo);
          $element.appendTo(this);
        }
        else if(ui.draggable.attr('id')=='draggableHidden'){
          draggableHiddenNo++;
          $element.attr("id",'draggableHidden'+draggableHiddenNo);
          $element.appendTo(this);
          setting($element);   
        }

        else if(ui.draggable.attr('id')=='draggableOutput'){
          draggableOutputNo++;
          $element.attr("id",'draggableOutput'+draggableOutputNo);
          $element.appendTo(this);
        }   

        else if(ui.draggable.attr('id')=='nodes'){
          nodeNo++;
          $element.attr("id",'node'+nodeNo);
          $element.appendTo(this);
        }       
		}
    });

    //Set draggableInput as a draggable layer
    $(".draggableInput").draggable({
      containment: '#droppable',
      cursor: 'move',
   		helper: draggableInputHelper,
   	});

   	$(".draggableHidden").draggable({
   		containment: '#droppable',
   		cursor: 'move',
   		helper: draggableHiddenHelper,
   	});

   	$( ".draggableOutput" ).draggable({
   		containment: '#droppable',
   		cursor: 'move',
   		helper: draggableOutputHelper,
      stop: function( event, ui ) {
        dialogOut.dialog( "open" );
      }
   	});	 

    $( ".nodes" ).draggable({
      //containment: '#draggableInput1 #draggableHidden1 #draggableHidden2 #draggableHidden3 #draggableHidden4 #draggableHidden5 #draggableHidden6 #draggableOutput1',
      cursor: 'move',
      helper: nodeHelper,
    }); 

   	//set the title of the diagram
 	  $("#NameDiagram").each(function () {
        var label = $(this);
        label.after("<input type = 'text' style = 'display:none' />");
        var textbox = $(this).next();
        var id = this.id.split('_')[this.id.split('_').length - 1];
        textbox[0].name = id.replace("lbl", "txt");
        textbox.val(label.html());
        //When Label is clicked, hide Label and show TextBox.
        label.click(function () {
            $(this).hide();
            $(this).next().show();
        });
 
        //When focus is lost from TextBox, hide TextBox and show Label.
        textbox.focusout(function () {
            $(this).hide();
            $(this).prev().html($(this).val());
            $(this).prev().show();
        });
    });

  //Display dialog boxes seperately
  function setting(ui) {
        $x=ui.attr('id');
        dialogHidden.attr('id',"dialogHidden"+$x);

        if(dialogHidden.attr('id')=="dialogHiddendraggableHidden1"){
          dialogHidden.dialog( "open" );
        }

        else if(dialogHidden.attr('id')=="dialogHiddendraggableHidden2"){
          dialogHidden.dialog( "open" );
        }

       else if(dialogHidden.attr('id')=="dialogHiddendraggableHidden3"){
          dialogHidden.dialog( "open" );
        }

        else if(dialogHidden.attr('id')=="dialogHiddendraggableHidden4"){
          dialogHidden.dialog( "open" );
        }

        else if(dialogHidden.attr('id')=="dialogHiddendraggableHidden5"){
          dialogHidden.dialog( "open" );
        }

        else if(dialogHidden.attr('id')=="dialogHiddendraggableHidden6"){
          dialogHidden.dialog( "open" );
        }

    }

    // Dialog box save function for hidden layers
    function saveHidden() {
       if(dialogHidden.attr('id')=="dialogHiddendraggableHidden1"){
          dialogHidden.dialog( "close" );
        }
        else if(dialogHidden.attr('id')=="dialogHiddendraggableHidden2"){
          dialogHidden.dialog( "close" );
        }
       else if(dialogHidden.attr('id')=="dialogHiddendraggableHidden3"){
          dialogHidden.dialog( "close" );
        }
        else if(dialogHidden.attr('id')=="dialogHiddendraggableHidden4"){
          dialogHidden.dialog( "close" );
        }
        else if(dialogHidden.attr('id')=="dialogHiddendraggableHidden5"){
          dialogHidden.dialog( "close" );
        }
        else if(dialogHidden.attr('id')=="dialogHiddendraggableHidden6"){
          dialogHidden.dialog( "close" );
        }
    }
 
    dialogHidden = $( ".dialog-form-hidden" ).dialog({
      autoOpen: false,
      height: 300,
      width: 350,
      modal: true,
      buttons: {
        "Save": saveHidden,
        Cancel: function() {
          dialogHidden.dialog( "close" );
        }
      }
    });

    //Dialog Box save function for Outt layer
    function save() {
       dialogOut.dialog( "close" );
    }
 
    dialogOut = $( ".dialog-form-output" ).dialog({
      autoOpen: false,
      height: 300,
      width: 350,
      modal: true,
      buttons: {
        "Save": save,
        Cancel: function() {
          dialogOut.dialog( "close" );
        }
      },
      close: function() {
        form[ 0 ].reset();
        allFields.removeClass( "ui-state-error" );
      }
    });

 });

function draggableInputHelper(event){
  return '<div id="draggableInput'+draggableInputNo+'" class="draggableInputHelper" ></div>'
}

function draggableHiddenHelper(event){
	return '<div id="draggableHidden'+draggableHiddenNo+'" class="draggableHiddenHelper" ></div>'
}

function draggableOutputHelper(event){
	return '<div id="draggableOutput'+draggableOutputNo+'" class="draggableOutputHelper" ></div>'
}

function nodeHelper(event){
  return '<div class="nodes" ></div>'
}

//set a new function


//draw connectors
/*jsPlumb.ready(function() {
            jsPlumb.connect({
                connector: ["Straight"],
                source:"item_left",
                target:"item_right",
                anchor: ["Left", "Right"],
                endpoint:"Dot"
            });
        });*/

// $( "#nodes" ).click(function() {
//   alert( "Handler for .click() called." );
// });

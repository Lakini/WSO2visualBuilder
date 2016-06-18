     draggableInputNo=0;
     draggableHiddenNo=0;
     draggableOutputNo=0;
     nodeNo=0;

    $(function() {
        /*
         * set droppable as a droppable container
         */
        $( "#droppable" ).droppable({

          drop: function(event, ui) {

           $element=ui.helper.clone();

            if(ui.draggable.attr('id')=='draggableInput'){
              draggableInputNo++;
              $element.attr("id",'draggableInput'+draggableInputNo);
              $element.appendTo(this);
              inputDetails($element);

            }
            else if(ui.draggable.attr('id')=='draggableHidden'){
              draggableHiddenNo++;
              $element.attr("id",'draggableHidden'+draggableHiddenNo);
              $element.appendTo(this);
              settingHidden($element);   
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
        /*
         * Draw connections using jsPlumb
         */  
                jsPlumb.ready(function() {
                  var common = {
                  connector: ["Straight"],
                  anchor: ["Left", "Right"],
                  //anchor:"AutoDefault",
                  endpoint:[ "Dot", { radius:5 } ]
                 };

              /*
               * Connect Input layer to Hidden Layer 1
               */ 
                jsPlumb.connect({

                  source:"draggableInput1",
                  target:"draggableHidden1",
                  detachable:false,
                  paintStyle:{ strokeStyle:"lightgray", lineWidth:2 },
                  endpointStyle:{ fillStyle:"lightgray", outlineColor:"gray" },
                  overlays:[ 
                     ["Arrow" , { width:12, length:12, location:0.67 }]
                     ]
                   }, common);

              /*
               * Connect Hidden layer 1 to Hidden Layer 2
               */ 
                jsPlumb.connect({
                   
                  source:"draggableHidden1",
                  target:"draggableHidden2",
                  detachable:false,
                  paintStyle:{ strokeStyle:"lightgray", lineWidth:3 },
                  endpointStyle:{ fillStyle:"lightgray", outlineColor:"gray" },
                  overlays:[ 
                     ["Arrow" , { width:12, length:12, location:0.67 }]
                     ]
                   }, common);

              /*
               * Connect Hidden layer 2 to Hidden Layer 3
               */ 
                jsPlumb.connect({

                  source:"draggableHidden2",
                  target:"draggableHidden3",
                  detachable:false,
                  paintStyle:{ strokeStyle:"lightgray", lineWidth:3 },
                  endpointStyle:{ fillStyle:"lightgray", outlineColor:"gray" },
                   overlays:[ 
                     ["Arrow" , { width:12, length:12, location:0.67 }]
                     ]
                   }, common);

              /*
               * Connect Hidden layer 3 to Hidden Layer 4
               */ 
                jsPlumb.connect({

                  source:"draggableHidden3",
                  target:"draggableHidden4",
                  detachable:false,
                  paintStyle:{ strokeStyle:"lightgray", lineWidth:3 },
                  endpointStyle:{ fillStyle:"lightgray", outlineColor:"gray" },
                   overlays:[ 
                     ["Arrow" , { width:12, length:12, location:0.67 }]
                     ]
                   }, common);

              /*
               * Connect Hidden layer 4 to Hidden Layer 5
               */ 
                jsPlumb.connect({

                  source:"draggableHidden4",
                  target:"draggableHidden5",
                  detachable:false,
                  paintStyle:{ strokeStyle:"lightgray", lineWidth:3 },
                  endpointStyle:{ fillStyle:"lightgray", outlineColor:"gray" },
                   overlays:[ 
                     ["Arrow" , { width:12, length:12, location:0.67 }]
                     ]
                   }, common);

              /*
               * Connect Hidden layer5 to Hidden Layer 6
               */ 
                jsPlumb.connect({

                  source:"draggableHidden5",
                  target:"draggableHidden6",
                  detachable:false,
                  paintStyle:{ strokeStyle:"lightgray", lineWidth:3 },
                  endpointStyle:{ fillStyle:"lightgray", outlineColor:"gray" },
                   overlays:[ 
                     ["Arrow" , { width:12, length:12, location:0.67 }]
                     ]
                   }, common);

              /*
               * Connect Hidden layer 6 to Hidden Layer 7
               */ 
                jsPlumb.connect({

                  source:"draggableHidden6",
                  target:"draggableHidden7",
                  detachable:false,
                  paintStyle:{ strokeStyle:"lightgray", lineWidth:3 },
                  endpointStyle:{ fillStyle:"lightgray", outlineColor:"gray" },
                   overlays:[ 
                     ["Arrow" , { width:12, length:12, location:0.67 }]
                     ]
                   }, common);

              /*
               * Connect Hidden layer 7 to Hidden Layer 8
               */ 
                jsPlumb.connect({

                  source:"draggableHidden7",
                  target:"draggableHidden8",
                  detachable:false,
                  paintStyle:{ strokeStyle:"lightgray", lineWidth:3 },
                  endpointStyle:{ fillStyle:"lightgray", outlineColor:"gray" },
                   overlays:[ 
                     ["Arrow" , { width:12, length:12, location:0.67 }]
                     ]
                   }, common);

              /*
               * Connect Hidden layer 8 to Hidden Layer 9
               */ 
                jsPlumb.connect({

                  source:"draggableHidden8",
                  target:"draggableHidden9",
                  detachable:false,
                  paintStyle:{ strokeStyle:"lightgray", lineWidth:3 },
                  endpointStyle:{ fillStyle:"lightgray", outlineColor:"gray" },
                   overlays:[ 
                     ["Arrow" , { width:12, length:12, location:0.67 }]
                     ]
                   }, common);

              /*
               * Connect Hidden layer 9 to Hidden Layer 10
               */ 
                jsPlumb.connect({

                  source:"draggableHidden9",
                  target:"draggableHidden10",
                  detachable:false,
                  paintStyle:{ strokeStyle:"lightgray", lineWidth:3 },
                  endpointStyle:{ fillStyle:"lightgray", outlineColor:"gray" },
                   overlays:[ 
                     ["Arrow" , { width:12, length:12, location:0.67 }]
                     ]
                   }, common);

              /*
               * Connect last Hidden layer to Output Layer 1
               */ 
                jsPlumb.connect({

                  source:"draggableHidden"+draggableHiddenNo,
                  target:"draggableOutput1",
                  detachable:false,
                  paintStyle:{ strokeStyle:"lightgray", lineWidth:3 },
                  endpointStyle:{ fillStyle:"lightgray", outlineColor:"gray" },
                   overlays:[ 
                     ["Arrow" , { width:12, length:12, location:0.67 }]
                     ]
                   }, common);

                });

              /*
               * set cloned elements to draggable and selectable
               */ 
            $element.draggable();
            $element.selectable();

          }

        });

        /*
         * Set dragableInput as a draggable object
         */ 
        $(".draggableInput").draggable({
          containment: '#droppable',
          cursor: 'move',
       		helper: draggableInputHelper,
       	});

        /*
         * Set dragableIHidden as a draggable object
         */
       	$(".draggableHidden").draggable({
       		containment: '#droppable',
       		cursor: 'move',
       		helper: draggableHiddenHelper,
       	});

        /*
         * Set dragableOutput as a draggable object
         */
       	$( ".draggableOutput" ).draggable({
       		containment: '#droppable',
       		cursor: 'move',
       		helper: draggableOutputHelper,
          stop: function( event, ui ) {
            dialogOut.dialog( "open" );
          }
       	});	 

        /*
         * Set the title of the diagram
         */
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

        /*
         * Display dialog box for Hidden layers
         */
      function settingHidden(ui) {
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

            else if(dialogHidden.attr('id')=="dialogHiddendraggableHidden7"){
              dialogHidden.dialog( "open" );
            }

            else if(dialogHidden.attr('id')=="dialogHiddendraggableHidden8"){
              dialogHidden.dialog( "open" );
            }

            else if(dialogHidden.attr('id')=="dialogHiddendraggableHidden9"){
              dialogHidden.dialog( "open" );
            }

            else if(dialogHidden.attr('id')=="dialogHiddendraggableHidden10"){
              dialogHidden.dialog( "open" );
            }

        }

        /*
         * Dialog box save function for hidden layers
         */ 
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
            else if(dialogHidden.attr('id')=="dialogHiddendraggableHidden7"){
              dialogHidden.dialog( "close" );
            }
            else if(dialogHidden.attr('id')=="dialogHiddendraggableHidden8"){
              dialogHidden.dialog( "close" );
            }
            else if(dialogHidden.attr('id')=="dialogHiddendraggableHidden9"){
              dialogHidden.dialog( "close" );
            }
            else if(dialogHidden.attr('id')=="dialogHiddendraggableHidden10"){
              dialogHidden.dialog( "close" );
            }
        }

        /*
         * Dialog box open function for Input layer
         */ 
        function inputDetails(ui){
            $x=ui.attr('id');

            $("#draggableInput1").dblclick(function(){
              dialogInput.attr('id',"dialogInput"+$x);

            if(dialogInput.attr('id')=="dialogInputdraggableInput1"){
              dialogInput.dialog( "open" );
            }

            });
        }

        /*
         * Set dialog box for the Hidde Layer
         */ 
        dialogHidden = $( ".dialog-form-hidden" ).dialog({
          autoOpen: false,
          height: 350,
          width: 350,
          modal: true,
          buttons: {
            "Save": saveHidden,
            Cancel: function() {
              dialogHidden.dialog( "close" );
            }
          }
        });

        /*
         * Dialog Box save function for Outer layer
         */ 
        function save() {
           dialogOut.dialog( "close" );
        }

        /*
         * Dialog Box save function for Input layer
         */
        function saveInput() {
           dialogInput.dialog( "close" );
        }

        /*
         * Set dialog box for the Output Layer
         */ 
        dialogOut = $( ".dialog-form-output" ).dialog({
          autoOpen: false,
          height: 400,
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

        /*
         * Set dialog box for the Input Layer
         */ 
        dialogInput = $( ".dialog-form-input" ).dialog({
          autoOpen: false,
          height: 200,
          width: 300,
          modal: true,
          buttons: {
            "Save": saveInput,
            Cancel: function() {
              dialogInput.dialog( "close" );
            }
          },
          close: function() {
            form[ 0 ].reset();
            allFields.removeClass( "ui-state-error" );
          }
        });

     });

    /*
     * draggableInputHelper method
     */ 
    function draggableInputHelper(event){
      return '<div id="draggableInput'+draggableInputNo+'" class="draggableInputHelper" ></div>'
    }

      /*
     * draggableHiddenHelper method
     */ 
    function draggableHiddenHelper(event){
    	return '<div id="draggableHidden'+draggableHiddenNo+'" class="draggableHiddenHelper" ></div>'
    }

    /*
     * draggableOutputHelper method
     */ 
    function draggableOutputHelper(event){
    	return '<div id="draggableOutput'+draggableOutputNo+'" class="draggableOutputHelper" ></div>'
    }


    
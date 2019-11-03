$(function(){
    populateButtons(topics,'searchButton','#buttons-Div');
    console.log("page loaded");
})

var topics = ['Uranus','Mars','Venus'];

function populateButtons(topics,classToAdd,areaToAddTo){
    $(areaToAddTo).empty();
    for(var i=0;i<topics.length;i++){
        var a = $('<button>');
        a.addClass(classToAdd);
        a.attr('data-type', topics[i]);
        a.text(topics[i]);
        $(areaToAddTo).append(a);
    }
   }

   $(document).on('click','.searchButton',function(){
        var type = $(this).data('type');
        console.log('type');
   })
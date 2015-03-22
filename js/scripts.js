$(document).ready(function() {
  // page is now ready, initialize the calendar...

  $('#calendar').fullCalendar({
    // put your options and callbacks here
    dayClick: function() {
      console.log('day clicked');
    },
    events: [
      {
        title: 'My Event',
        start: '2015-03-03',
        description: 'I haz an event'
      }
    ],
    //eventRender: function(event, element) {
      //element.qtip({
        //content: event.description
      //});
    //}
  });

  $(".dropzone").droppable({
    accept: ".activated"
  });

  $( ".activated" ).draggable({
    addClasses: false,
    stop: function( event, ui ) {
      console.log('stopped');
    },
  });

});

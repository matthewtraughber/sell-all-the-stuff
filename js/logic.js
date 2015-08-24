// Loads content from external json
$.ajax({
  url : 'data/items.json',
  dataType : 'json',
  success : function( product ) {
    var source = $("#stuff").html();
    var template = Handlebars.compile(source);
    var context = product;

    $('#container').append(template({product:context}));
  }
});

// On load, run Masonry and Foggy
$(window).load(function() {
  // Masonry setup
  // -------------
  var $container = $('#container');

  $container.masonry({
    columnWidth: 60,
    itemSelector: '.item',
    containerStyle: null,
    isAnimated: true,
    gutter: 14,
    isFitWidth: true
  });

  // Foggy setup
  // -----------
  $(".img_container.sold").foggy({
   blurRadius: 8,
   opacity: 0.8,
   cssFilterSupport: true
 });

  $(".details.sold").foggy({
   blurRadius: 1,
   opacity: 0.8,
   cssFilterSupport: true
 });

  $(".sold.item").prepend("<span class='sold-text'>sold</span>");
});

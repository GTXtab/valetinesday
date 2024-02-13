jQuery(function($) {

  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.on('click', function() {
    open();
  })

  btn_open.on('click', function() {
    open();
  })

  btn_reset.on('click', function() {
    close();
  })

  function open() {
    envelope.addClass("open").removeClass("close");
  }

  function close() {
    envelope.addClass("close").removeClass("open");
  }
})

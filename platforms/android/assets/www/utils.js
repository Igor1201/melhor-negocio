/****************************************
* Utils
****************************************/

$().ready(function() {

  //Gambiarra para conseguir dar swipe na primeira pagina
  $.mobile.changePage(window.location.href,
    {
      allowSamePageTransition : true,
      transition              : 'none',
      showLoadMsg             : false,
      reloadPage              : true
    }
  );
  //Fim da gambiarra

  $(document).on("pageinit", ".ui-page", function() {
    var $page = $(this);
    $page.on("swipeleft swiperight", function(e) {
      if ($page.jqmData("panel") !== "open") {
        if (e.type === "swiperight") {
          $page.find("#menu").panel("open");
        }
      }
      if ($page.jqmData("panel") === "open") {
        if (e.type === "swipeleft") {
          $page.find("#menu").panel("close");
        }
      }
    });
  });

});

function isOnline() {
  return navigator.onLine;
}

function showLoading() {
  var interval = setInterval(function() {
        $.mobile.loading('show');
        clearInterval(interval);
    }, 1);
}

function hideLoading() {
  var interval = setInterval(function() {
      $.mobile.loading('hide');
      clearInterval(interval);
  }, 1);
}

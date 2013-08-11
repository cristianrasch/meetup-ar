//= require jquery
//= require foundation.min
//= require jquery-ui-1.9.2.custom.min
//= require jquery.ui.datepicker-es
//= require_self

$('.back').click(function(event) {
  event.preventDefault();
  history.go(-1);
});

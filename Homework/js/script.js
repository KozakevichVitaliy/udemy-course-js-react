$(document).ready(function() {
  let overlay = $('.overlay');
  let modal = $('.modal');
  let btnTimetable = $('li:odd a#timetable');
  let btnSelect = $('.main_btn');
  let btnClose = $('.close');

  function showModal() {
    $(overlay).fadeToggle('slow');
    $(modal).slideDown();
  }

  function closeModal() {
    $(modal).slideUp();
    $(overlay).fadeToggle('slow');
  }

  $(btnTimetable).on('click', showModal);
  $(btnSelect).on('click', showModal);

  $(btnClose).on('click', closeModal);
  $(overlay).on('click', closeModal);
});

function prev() {
  $('img.active').removeClass('active').prev().addClass('active');
  buttons();
}

function next() {
  $('img.active').removeClass('active').next().addClass('active');
  buttons();
}

function buttons() {
  if ($('img.active').is(':first-child')) {
    $('.left, .up').addClass('hidden');
  }
  else {
    $('.left, .up').removeClass('hidden');
  }
  if ($('img.active').is(':last-child')) {
    $('.right, .down').addClass('hidden');
  }
  else {
    $('.right, .down').removeClass('hidden');
  }
}

$(document).ready(() => {
  $('.container').on('click', '.left, .up', prev);
  $('.container').on('click', '.right, .down', next);
});

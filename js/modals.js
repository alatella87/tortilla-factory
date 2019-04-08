//default




$(document).on('click', '.open-default', function(event) {
  event.preventDefault();

  $('#modal-default').iziModal('open');
});

$('#modal-default').iziModal({
    title: 'Price List',
    subtitle: 'Tortilla Factory Products',
    headerColor: '#ffc107', //ヘッダー部分の色
    textColor: 'black',
    padding: 25,
    width: 1500,
    openFullscreen: false,
    overlayColor: 'rgba(0, 0, 0, 0.5)', //モーダルの背景色
    fullscreen: false, //全画面表示
    transitionIn: 'fadeInDown', //表示される時のアニメーション
    transitionOut: 'fadeOutDown' //非表示になる時のアニメーション
  });

  $(document).on('click', '.open-default2', function(event) {
    event.preventDefault();
  
    $('#modal-default2').iziModal('open');
  });
  
  $('#modal-default2').iziModal({
      title: 'Choose Country',
      subtitle: 'Please choose geographical location <br> (You are leaving this website)',
      headerColor: '#288b4c', //ヘッダー部分の色
      padding: 25,
      width: 600,
      openFullscreen: false,
      overlayColor: 'rgba(0, 0, 0, 0.5)', //モーダルの背景色

      transitionIn: 'fadeInDown', //表示される時のアニメーション
      transitionOut: 'fadeOutDown' //非表示になる時のアニメーション
    });



//options
$(document).on('click', '.open-options', function(event) {
  event.preventDefault();
  $('#modal-options').iziModal('open');
});

$('#modal-options').iziModal({
  headerColor: '#26A69A', //ヘッダー部分の色
  width: '20%', //横幅
  overlayColor: 'rgba(0, 0, 0, 0.5)', //モーダルの背景色
  fullscreen: true, //全画面表示
  transitionIn: 'fadeInUp', //表示される時のアニメーション
  transitionOut: 'fadeOutDown' //非表示になる時のアニメーション
});



//iframe
$(document).on('click', '.open-iframe', function(event) {
  event.preventDefault();
  $('#modal-iframe').iziModal('open', this);
});

$('#modal-iframe').iziModal({
  width: 400, //横幅
  iframe: true, //iframeを利用
  iframeHeight: 300, //iframeの高さ
  iframeURL: 'https://alimentaciongastromundo.com/categoria-producto/mexico-2/productos-tortilla-factory/' //iframe内に表示するurl
});

//alert
$('#modal-alert').iziModal({
  headerColor: '#d43838', //ヘッダー部分の色
  width: 400, //横幅
  timeout: 10000, //10秒で非表示
  pauseOnHover: true,　//マウスオーバーでカウントダウン停止
  timeoutProgressbar: true, //プログレスバーの表示
  attached: 'bottom' //アラートの表示位置 top or bottom or　指定なしで中央
});
$(document).on('click', '.open-alert', function (event) {
  event.preventDefault();
  $('#modal-alert').iziModal('open');
});
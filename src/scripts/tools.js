function setTheme(palette, name) {
  $('body').css('background', palette.background);
  $('body').css('color', palette.text);
  $('aside').css('background', palette.aside);
  $('body').css('transition', '0.3s');
  $('#tools').css('color', '#000000');
  $('code').css('background', '#ffffff');
  $('.prettyprint').css('background', '#ffffff');

  window.APP_SETTINGS.theme = name;
}


$('#toggle-light-mode').click(function () {
  const lightTheme = {
    text: '#000000',
    background: '#ffffff',
    aside: '#eeeeee'
  };

  const darkTheme = {
    text: '#ffffff',
    background: '#222222',
    aside: '#000000'
  };

  window.APP_SETTINGS.theme === 'light' 
    ? setTheme(darkTheme, 'dark') 
    : setTheme(lightTheme, 'light')
});

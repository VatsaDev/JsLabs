function copy(id) {
  var copyText = document.getElementById(id);
  copyText.select();
  copyText.setSelectionRange(0, 99999999);
  document.execCommand("copy");
}

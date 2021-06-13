var qrcode = new QRCode(document.getElementById("qrcode"), {
  text: "http://js-labs.js.org",
  width: 128,
  height: 128,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
});

if (document.location.hash != "") {
  var string = window.location.hash.slice(1);
  var json = JSON.parse(Base64.decode(string));

  editorhtml.setValue(json.html);
  editorcss.setValue(json.css);
  editorjs.setValue(json.js);
}

function url(htmlCode, cssCode, jsCode) {
  var data = {
    html: `${htmlCode}`,
    css: `${cssCode}`,
    js: `${jsCode}`,
  };

  window.location.hash = "#" + Base64.encode(JSON.stringify(data));
  history.replaceState({}, "", `${window.location.hash}`);
  window.frames[0].location.replace(`data:text/html;charset=utf-8;,<style>
  ${cssCode}
</style>
${normalizeCSS}
${htmlCode}
<script>
  ${jsCode}
<\/script>`);
  document.getElementById(
    "publish-link"
  ).href = `types/publish.html${window.location.hash}`;
  document.getElementById(
    "embed-link"
  ).href = `types/embed.html${window.location.hash}`;
  document.getElementById(
    "copyp"
  ).value = `js-labs.js.org/editor/types/publish.html${window.location.hash}`;
  document.getElementById(
    "copye"
  ).value = `js-labs.js.org/editor/types/embed.html${window.location.hash}`;
  document.getElementById(
    "copyd"
  ).value = `data:text/html;charset=utf-8;,<style>
  ${cssCode}
</style>
${normalizeCSS}
${htmlCode}
<script>
  ${jsCode}
<\/script>`;

  QR(location.href);
}

document.getElementById("editor-html").addEventListener("keyup", function () {
  url(document.getElementById("lab-title").value, editorhtml.getValue(), editorcss.getValue(), editorjs.getValue());
});

document.getElementById("editor-css").addEventListener("keyup", function () {
  url(document.getElementById("lab-title").value, editorhtml.getValue(), editorcss.getValue(), editorjs.getValue());
});

document.getElementById("editor-js").addEventListener("keyup", function () {
  url(document.getElementById("lab-title").value, editorhtml.getValue(), editorcss.getValue(), editorjs.getValue());
});

document.getElementById("lab-title").addEventListener("keyup", function () {
  url(document.getElementById("lab-title").value, editorhtml.getValue(), editorcss.getValue(), editorjs.getValue());
});

function QR(link) {
  qrcode.clear();
  qrcode.makeCode(link);
}

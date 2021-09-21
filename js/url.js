if (document.location.hash != "") {
  var string = window.location.hash.slice(1);
  var json = JSON.parse(Base64.decode(string));

  editorhtml.setValue(json.html);
  editorcss.setValue(json.css);
  editorjs.setValue(json.js);
  QR(`data:text/html;charset=utf-8;,<style>
  ${json.css}
  </style>
  ${json.html}
  <script>
  ${json.js}
  <\/script>`);
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
  QR(`data:text/html;charset=utf-8;,<style>
${cssCode}
</style>
${normalizeCSS}
${htmlCode}
<script>
${jsCode}
<\/script>`);
  mail(
    `https://js-labs.js.org/editor/types/publish.html${window.location.hash} `
  );
  run();
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
  QR(`data:text/html;charset=utf-8;,<style>
${cssCode}
</style>
${normalizeCSS}
${htmlCode}
<script>
${jsCode}
<\/script>`);
  mail(
    `https://js-labs.js.org/editor/types/publish.html${window.location.hash} `
  );
}

document.getElementById("editor-html").addEventListener("keyup", function () {
  url(editorhtml.getValue(), editorcss.getValue(), editorjs.getValue());
});

document.getElementById("editor-css").addEventListener("keyup", function () {
  url(editorhtml.getValue(), editorcss.getValue(), editorjs.getValue());
});

document.getElementById("editor-js").addEventListener("keyup", function () {
  url(editorhtml.getValue(), editorcss.getValue(), editorjs.getValue());
});

function QR(link) {
  new QRious({
    element: document.getElementById("qrcode"),
    background: "#000000",
    backgroundAlpha: 1,
    foreground: "#fff",
    foregroundAlpha: 1,
    level: "H",
    padding: 0,
    size: 128,
    value: link,
  });
}

function mail(link) {
  document.getElementById(
    "mail"
  ).href = `mailto:?subject=jslabs links&body=${link}`;
}

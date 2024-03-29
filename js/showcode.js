let htmlCode = editorhtml.getValue();
let cssCode = editorcss.getValue();
let normalizeCSS = `<style></style>`;
let prefix = `<script></script>`;
let jsCode = editorjs.getValue();
let runType = "off";

function nCssChange() {
  if (document.getElementById("NormCss").checked) {
    normalizeCSS = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />`;
  } else {
    normalizeCSS = `<style></style>`;
  }
}

function run() {
    window.frames[0].location.replace(`data:text/html;charset=utf-8;,<style>
  ${editorcss.getValue()}
</style>
${normalizeCSS}
${editorhtml.getValue()}
<script>
  ${editorjs.getValue()}
<\/script>`);
}

document.getElementById("editor-html").addEventListener("keyup", run());
document.getElementById("editor-css").addEventListener("keyup", run());
document.getElementById("editor-js").addEventListener("keyup", run());

function theme(name) {
  if (name === "monokai") {
    editorhtml.setTheme("ace/theme/monokai");
    editorcss.setTheme("ace/theme/monokai");
    editorjs.setTheme("ace/theme/monokai");
  }

  if (name === "dracula") {
    editorhtml.setTheme("ace/theme/dracula");
    editorcss.setTheme("ace/theme/dracula");
    editorjs.setTheme("ace/theme/dracula");
  }

  if (name === "github") {
    editorhtml.setTheme("ace/theme/github");
    editorcss.setTheme("ace/theme/github");
    editorjs.setTheme("ace/theme/github");
  }

  if (name === "chrome") {
    editorhtml.setTheme("ace/theme/chrome");
    editorcss.setTheme("ace/theme/chrome");
    editorjs.setTheme("ace/theme/chrome");
  }

  if (name === "chaos") {
    editorhtml.setTheme("ace/theme/chaos");
    editorcss.setTheme("ace/theme/chaos");
    editorjs.setTheme("ace/theme/chaos");
  }
}

function font(size) {
  if (size === "8") {
    editorhtml.setFontSize(8);
    editorcss.setFontSize(8);
    editorjs.setFontSize(8);
  }
  if (size === "12") {
    editorhtml.setFontSize(12);
    editorcss.setFontSize(12);
    editorjs.setFontSize(12);
  }
  if (size === "18") {
    editorhtml.setFontSize(18);
    editorcss.setFontSize(18);
    editorjs.setFontSize(18);
  }
  if (size === "24") {
    editorhtml.setFontSize(24);
    editorcss.setFontSize(24);
    editorjs.setFontSize(24);
  }
  if (size === "48") {
    editorhtml.setFontSize(48);
    editorcss.setFontSize(48);
    editorjs.setFontSize(48);
  }
}

var iframe = document.getElementById("output");

// add homepage

function makeFile() {
  let file = document.getElementById("file");
  let output = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    ${normalizeCSS}
    ${editorcss.getValue()}
  </style>
</head>
<body>
  ${editorhtml.getValue()}
  <script>
    ${editorjs.getValue()}
  <\/script>
</body>
</html>
`;

  (function () {
    var textFile = null,
      makeTextFile = function (text) {
        var data = new Blob([text], { type: "text/html" });

        // If we are replacing a previously generated file we need to manually revoke the object URL to avoid memory leaks.
        if (textFile !== null) {
          window.URL.revokeObjectURL(textFile);
        }

        textFile = window.URL.createObjectURL(data);

        return textFile;
      };

    file.addEventListener(
      "click",
      function () {
        var link = document.createElement("a");
        link.setAttribute("download", "jslabs-code.html");
        link.href = makeTextFile(output);
        document.body.appendChild(link);

        // wait for the link to be added to the document
        window.requestAnimationFrame(function () {
          var event = new MouseEvent("click");
          link.dispatchEvent(event);
          document.body.removeChild(link);
        });
      },
      false
    );
  })();
}

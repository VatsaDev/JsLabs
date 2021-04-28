let htmlCode = editorhtml.getValue();
let cssCode = editorcss.getValue();
let normalizeCSS = `<style></style>`;
let jslib = `<script></script>`;
let jsCode = editorjs.getValue();
let md = new Remarkable({ html: true });
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


function allowJS() {
  if (document.getElementById("RunJS").checked) {
    document.getElementById("output").sandbox =
      "allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation";
  } else {
    document.getElementById("output").sandbox =
      "allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-top-navigation-by-user-activation";
  }
}

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

var iframe = document.getElementById("output");

// add homepage

/*function saveLocal() {
  var script = document.getElementById("script-save");
  var scriptName = script.value;
  localStorage.setItem(scriptName + "-html", editorhtml.getValue());
  localStorage.setItem(scriptName + "-css", editorcss.getValue());
  localStorage.setItem(scriptName + "-js", editorjs.getValue());
}

function getLocal() {
  var script = document.getElementById("script-get");
  var askScriptName = script.value;
  var html = localStorage.getItem(askScriptName + "-html");
  var css = localStorage.getItem(askScriptName + "-css");
  var js = localStorage.getItem(askScriptName + "-js");

  //add in
  editorhtml.setValue(html);
  editorcss.setValue(css);
  editorjs.setValue(js);
}*/

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
        link.setAttribute("download", "code.html");
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

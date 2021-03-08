var queryParams = new URLSearchParams(window.location.search);
let htmlTypeCode = "Norm";
let cssTypeCode = "Norm";
let jsTypeCode = "Norm";
let htmlCode = editorhtml.getValue();
let cssCode = editorcss.getValue();
let normalizeCSS = `<style></style>`;
let jslib = `<script></script>`;
let jsCode = editorjs.getValue();
let md = new Remarkable({ html: true });
let runType = "off";

function runWjs() {
  if (htmlTypeCode === "Norm") {
    htmlCode = editorhtml.getValue();
  }

  if (htmlTypeCode === "Mark") {
    let MD = editorhtml.getValue();
    var md = new Remarkable({ html: true });
    var compiled = md.render(MD);
    htmlCode = compiled;
  }

  if (cssTypeCode === "Norm") {
    cssCode = editorcss.getValue();
  }

  if (jsTypeCode === "Norm") {
    jsCode = editorjs.getValue();
    jslib = ``;
  }

  if (jsTypeCode === "JSX_") {
    var jsx = Babel.transform(editorjs.getValue(), { presets: ["react"] });
    jsCode = jsx.code;
    jslib = `<script src="https://unpkg.com/react/umd/react.development.js"><\/script><script src="https://unpkg.com/react-dom/umd/react-dom.development.js"><\/script>`;
  }

  let output = document.querySelector("#output").contentWindow.document;
  output.open();
  output.write(
    `<style>
    ${cssCode}
  </style>
  ${normalizeCSS}
  ${htmlCode}
  ${jslib}
  <script>
    ${jsCode}
  <\/script>`
  );
  output.close();
}

function preview() {
  if (htmlTypeCode === "Norm") {
    htmlCode = editorhtml.getValue();
  }

  if (htmlTypeCode === "Mark") {
    let MD = editorhtml.getValue();
    var compiled = md.render(MD);
    htmlCode = compiled;
  }

  if (cssTypeCode === "Norm") {
    cssCode = editorcss.getValue();
  }

  if (jsTypeCode === "Norm") {
    jsCode = editorjs.getValue();
    jslib = ``;
  }

  if (jsTypeCode === "JSX_") {
    var jsx = Babel.transform(editorjs.getValue(), { presets: ["react"] });
    jsCode = jsx.code;
    jslib = `<script src="https://unpkg.com/react/umd/react.development.js"><\/script><script src="https://unpkg.com/react-dom/umd/react-dom.development.js"><\/script>`;
  }

  let output = document.querySelector("#output");
  output.contentDocument.body.innerHTML = `${htmlCode}<style>${cssCode}</style>${normalizeCSS}`;
}

function runChange() {
  if (document.getElementById("runJs").checked) {
    runType = "on";
  } else {
    runType = "off";
  }
}

function run() {
  if (runType === "on") {
    runWjs();
  }
  if (runType === "off") {
    preview();
  }
}

function nCssChange() {
  if (document.getElementById("NormCss").checked) {
    normalizeCSS = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />`;
  } else {
    normalizeCSS = `<style></style>`;
  }
}

document.querySelector("#editor-html").addEventListener("keyup", run);
document.querySelector("#editor-css").addEventListener("keyup", run);
document.querySelector("#editor-js").addEventListener("keyup", run);

function preprocessor(lang, type) {
  if (lang === "html" && type === "norm") {
    htmlTypeCode = "Norm";
    document.getElementById("html-p").innerHTML = "";
    editorhtml.session.setMode("ace/mode/html");
    queryParams.set("hP", `${htmlTypeCode}`);
    history.replaceState(null, null, "?" + queryParams.toString());
  }

  if (lang === "html" && type === "mark") {
    htmlTypeCode = "Mark";
    document.getElementById("html-p").innerHTML = "Markdown";
    editorhtml.session.setMode("ace/mode/markdown");
    queryParams.set("hP", `${htmlTypeCode}`);
    history.replaceState(null, null, "?" + queryParams.toString());
  }

  if (lang === "js" && type === "norm") {
    jsTypeCode = "Norm";
    document.getElementById("js-p").innerHTML = "";
    editorjs.session.setMode("ace/mode/javascript");
    queryParams.set("jP", `${jsTypeCode}`);
    history.replaceState(null, null, "?" + queryParams.toString());
  }

  if (lang === "js" && type === "JSX_") {
    jsTypeCode = "JSX_";
    document.getElementById("js-p").innerHTML = "JSX";
    editorjs.session.setMode("ace/mode/jsx");
    queryParams.set("jP", `${jsTypeCode}`);
    history.replaceState(null, null, "?" + queryParams.toString());
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
  ${jslib}
  <style>
    ${cssCode}
  </style>
</head>
<body>
  ${htmlCode}
  <script>
    ${jsCode}
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

let compValHtml;
let compValCss;
let compValJs;

function compile(lang, type) {
  if (lang == "html") {
    if (htmlTypeCode == "Norm") {
      alert("no preprocessor");
    }
  }

  if (lang == "html" && type == "mark") {
    let MD = editorhtml.getValue();
    var md = new Remarkable({ html: true });
    var compiled = md.render(MD);
    htmlCode = compiled;
  }

  if (lang == "js" && type == "norm") {
    alert("no preprocessor");
  }

  if (lang == "js" && type == "JSX_") {
    jsTypeCode = "JSX_";
    document.getElementById("js-p").innerHTML = "(JSX)";
    editorjs.session.setMode("ace/mode/jsx");
  }
}

var queryParams = new URLSearchParams(window.location.search);

if (
  queryParams.get("hP") ||
  queryParams.get("cP") ||
  queryParams.get("jP") != null
) {
  htmlTypeCode = queryParams.get("hP");
  cssTypeCode = queryParams.get("cP");
  jsTypeCode = queryParams.get("jP");

  if ((queryParams.get("hP") === "Norm")) {
    document.getElementById("html-p").innerHTML = "";
    editorhtml.session.setMode("ace/mode/html");
  }
  if ((queryParams.get("hP") === "Mark")) {
    document.getElementById("html-p").innerHTML = "Markdown";
    editorhtml.session.setMode("ace/mode/markdown");
  }

  if ((queryParams.get("jP") === "Norm")) {
    document.getElementById("js-p").innerHTML = "";
    editorjs.session.setMode("ace/mode/javascript");
  }

  if ((queryParams.get("jP") === "JSX_")) {
    document.getElementById("js-p").innerHTML = "JSX";
    editorjs.session.setMode("ace/mode/jsx");
  }
}

if (
  queryParams.get("html") ||
  queryParams.get("css") ||
  queryParams.get("js") != null
) {
  editorhtml.setValue(Base64.decode(queryParams.get("html")));
  editorcss.setValue(Base64.decode(queryParams.get("css")));
  editorjs.setValue(Base64.decode(queryParams.get("js")));
}

function url(htmlP, cssP, jsP, htmlCode, cssCode, jsCode) {
  queryParams.set("hP", `${htmlP}`);
  queryParams.set("cP", `${cssP}`);
  queryParams.set("jP", `${jsP}`);
  queryParams.set("html", `${htmlCode}`);
  queryParams.set("css", `${cssCode}`);
  queryParams.set("js", `${jsCode}`);
  history.replaceState(null, null, `?${queryParams.toString()}`);
  document.getElementById("debug-link").href = `../types/debug.html?${queryParams.toString()}`;
  document.getElementById("publish-link").href = `../types/publish.html?${queryParams.toString()}`;
  document.getElementById("embed-link").href = `../types/embed.html?${queryParams.toString()}`;
}

document.getElementById("editor-html").addEventListener("keyup", function () {
  url(
    htmlTypeCode,
    cssTypeCode,
    jsTypeCode,
    Base64.encode(editorhtml.getValue()),
    Base64.encode(editorcss.getValue()),
    Base64.encode(editorjs.getValue())
  );
});

document.getElementById("editor-css").addEventListener("keyup", function () {
  url(
    htmlTypeCode,
    cssTypeCode,
    jsTypeCode,
    Base64.encode(editorhtml.getValue()),
    Base64.encode(editorcss.getValue()),
    Base64.encode(editorjs.getValue())
  );
});

document.getElementById("editor-js").addEventListener("keyup", function () {
  url(
    htmlTypeCode,
    cssTypeCode,
    jsTypeCode,
    Base64.encode(editorhtml.getValue()),
    Base64.encode(editorcss.getValue()),
    Base64.encode(editorjs.getValue())
  );
});

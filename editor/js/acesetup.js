var Emmet = require("ace/ext/emmet");
//html
var editorhtml = ace.edit("editor-html");
editorhtml.setTheme("ace/theme/monokai");
editorhtml.session.setMode("ace/mode/html");
editorhtml.setOption("enableEmmet", true);
editorhtml.setOptions({
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true,
});
//css
var editorcss = ace.edit("editor-css");
editorcss.setTheme("ace/theme/monokai");
editorcss.session.setMode("ace/mode/css");
editorcss.setOption("enableEmmet", true);
editorcss.setOptions({
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true,
});
//js
var editorjs = ace.edit("editor-js");
editorjs.setTheme("ace/theme/monokai");
editorjs.session.setMode("ace/mode/javascript");
editorjs.setOption("enableEmmet", true);
editorjs.setOptions({
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true,
});

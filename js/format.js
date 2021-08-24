import prettier from "https://unpkg.com/prettier@2.2.1/esm/standalone.mjs";
import parserBabel from "https://unpkg.com/prettier@2.2.1/esm/parser-babel.mjs";
import parserHtml from "https://unpkg.com/prettier@2.2.1/esm/parser-html.mjs";
import parserCss from "https://unpkg.com/prettier@2.2.1/esm/parser-postcss.mjs";

function format(type) {
  if (type == "js") {
    var print = prettier.format(editorjs.getValue(), {
      parser: "babel",
      plugins: [parserBabel, parserHtml],
    });
    editorjs.setValue(print);
  }

  if (type == "html") {
    var print = prettier.format(editorhtml.getValue(), {
      parser: "html",
      plugins: [parserHtml],
    });
    editorhtml.setValue(print);
  }

  if (type == "css") {
    var print = prettier.format(editorcss.getValue(), {
      parser: "css",
      plugins: [parserCss],
    });
    editorcss.setValue(print);
  }
}

window.format = format;

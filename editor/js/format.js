import prettier from "https://unpkg.com/prettier@2.2.1/esm/standalone.mjs";
import parserBabel from "https://unpkg.com/prettier@2.2.1/esm/parser-babel.mjs";
import parserHtml from "https://unpkg.com/prettier@2.2.1/esm/parser-html.mjs";
import parserCss from "https://unpkg.com/prettier@2.2.1/esm/parser-postcss.mjs";
import parserMD from "https://unpkg.com/prettier@2.2.1/esm/parser-markdown.mjs";

function format(type) {
  if (type == "js" && jsTypeCode == "Norm") {
    var print = prettier.format(editorjs.getValue(), {
      parser: "babel",
      plugins: [parserBabel, parserHtml],
    });
    editorjs.setValue(print);
  }

  if (type == "js" && jsTypeCode == "JSX") {
    var print = prettier.format(editorjs.getValue(), {
      parser: "babel",
      plugins: [parserBabel, parserHtml],
    });
    editorjs.setValue(print);
  }

  if (type == "html" && htmlTypeCode == "Norm") {
    var print = prettier.format(editorhtml.getValue(), {
      parser: "html",
      plugins: [parserHtml],
    });
    editorhtml.setValue(print);
  }

  if (type == "html" && htmlTypeCode == "Markdown") {
    var print = prettier.format(editorhtml.getValue(), {
      parser: "markdown",
      plugins: [parserMD],
    });
    editorhtml.setValue(print);
  }

  if (type == "css" && cssTypeCode == "Norm") {
    var print = prettier.format(editorcss.getValue(), {
      parser: "css",
      plugins: [parserCss],
    });
    editorcss.setValue(print);
  }
}

window.format = format;

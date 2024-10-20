import * as cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

export function parseContent(content: string): string {
  const $ = cheerio.load(content);

  // コードブロックの処理
  $("pre").each((_, element) => {
    const parent = $(element).parent();
    const filename = parent.attr("data-filename");
    parent.addClass("my-5");

    $(element)
      .find("code")
      .each((_, codeElement) => {
        const codeText = $(codeElement).text();
        const className = $(codeElement).attr("class") || "";
        const languageMatch = className.match(/language-(\w+)/);
        const language = languageMatch ? languageMatch[1] : "plaintext";

        try {
          const result = hljs.highlight(codeText, { language });
          $(codeElement).html(result.value);
          $(codeElement).addClass("hljs");
        } catch (highlightError) {
          console.error("Highlight.js error:", highlightError);
          $(codeElement).text(codeText);
        }
      });

    if (filename) {
      $(element).before(
        `<div class="bg-[#0D1117] text-white py-1 px-3 text-sm inline-block">${filename}</div>`
      );
    }
  });

  // その他の要素にスタイルを適用
  $("code").addClass("bg-gray-100 py-1 px-2 text-sm");
  $("p").addClass("my-5");
  $("h1").addClass("text-3xl font-bold my-7 border-b pb-2");
  $("h2").addClass("text-2xl font-bold my-7");
  $("h3").addClass("text-xl font-bold my-6");
  $("h4").addClass("text-lg font-bold my-5");
  $("h5").addClass("text-md font-bold my-5");
  $("ul").addClass("list-disc ml-5 my-5");
  $("ol").addClass("list-decimal ml-5 my-5");
  $("blockquote").addClass("border-l-4 pl-4 italic my-5");
  $("table").addClass("table-auto border-collapse border my-5");
  $("th, td").addClass("border px-4 py-1");
  $("th").addClass("bg-gray-50");
  $("a").addClass("text-blue-500 underline");
  $("img").addClass("my-5");
  $("hr").addClass("my-5");

  return $.html();
}

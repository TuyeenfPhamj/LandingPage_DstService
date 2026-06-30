import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const distDir = resolve("dist-file");
const htmlPath = resolve(distDir, "index.html");

let html = await readFile(htmlPath, "utf8");

const inlineStylesheet = async (match, href) => {
  const cssPath = resolve(distDir, href);
  const css = await readFile(cssPath, "utf8");
  return `<style>\n${css}\n</style>`;
};

const inlineScript = async (match, src) => {
  const jsPath = resolve(distDir, src);
  const js = (await readFile(jsPath, "utf8")).replaceAll(
    "</script",
    "<\\/script",
  );
  return `<script>\n${js}\n</script>`;
};

const stylesheetMatches = [
  ...html.matchAll(/<link rel="stylesheet" crossorigin href="(.+?)">/g),
];
for (const [match, href] of stylesheetMatches) {
  const replacement = await inlineStylesheet(match, href);
  html = html.replace(match, () => replacement);
}

const scriptMatches = [
  ...html.matchAll(/<script type="module" crossorigin src="(.+?)"><\/script>/g),
];
for (const [match, src] of scriptMatches) {
  const replacement = await inlineScript(match, src);
  html = html.replace(match, () => replacement);
}

const inlineScriptMatch = html.match(/<script>\n[\s\S]*?\n<\/script>/);
if (inlineScriptMatch) {
  html = html.replace(inlineScriptMatch[0], "");
  const scriptAtEnd = `    ${inlineScriptMatch[0]}\n  </body>`;
  html = html.replace("</body>", () => scriptAtEnd);
}

html = html.replace(
  "<head>",
  "<head>\n    <!-- This build is prepared for direct file opening. Keep the assets folder beside this file for images. -->",
);

await writeFile(htmlPath, html);

console.log(`Inlined ${dirname(htmlPath)}\\index.html for direct file opening.`);

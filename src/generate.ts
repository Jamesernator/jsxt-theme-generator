import fs from "node:fs/promises";
import lightSemanticTheme from "./JSXT-light-theme-semantic.json";

/** @type {Record<string, string[]>}
const tokenMap = {
    class: [

    ],
    "class.declaration": [

    ],
    comment: [

    ],
    enum: [

    ],
    enumMember: [

    ],
    event: [],
    function: [

    ],
    "function.declaration": [

    ],
    interface: [

    ],
    keyword: [
        // "keyword.control",
        // "keyword.operator.expression",
        // "keyword.other",
        // "variable.language",
    ],
    "keyword.storage": [
        // "storage",
    ],
    label: [
        // "entity.name.label",
    ],
    macro: [],
    method: [],
    namespace: [],
    "namespace.declaration": [
        // TODO Figure out declarations
        // "entity.name.type.module",
    ],
    number: [
        // "constant.numeric",
    ],
    operator: [
        // "keyword.operator",
        // "punctuation.definition.group",
    ],
    parameter: [
        // "variable.parameter",
    ],
    "parameter.declaration": [],
    property: [
        // "variable.other.property",
        // "variable.object.property",
    ],
    regexp: [
        // "string.regexp",
    ],
    "regexp.characterClass": [
        // "punctuation.definition.character-class.regexp",
        // "constant.other.character-class.range.regexp",
    ],
    string: [
        // "string",
    ],
    "string.escape": [
        // "constant.character.escape",
    ],
    "string.terminator": [
        // "punctuation.definition.string",
        // "punctuation.definition.template-expression",
    ],
    struct: [],
    tomlArrayKey: [],
    tomlTableKey: [],
    type: [
        // "entity.name.type.alias",
        // "support.type",
    ],
    "type.declaration": [
        // TODO Declarations
    ],
    "type.primitive": [
        // "support.type.primitive",
    ],
    typeParameter: [
        // "entity.name.type",
    ],
    variable: [
        // "variable.other",
    ],
};
*/

/** @type {Record<string, string[]>} */
const tokenMap = {

};

/** @type {Array<{ scope: string[] | string, settings: { foreground?: string, fontStyle?: string } }>} */
const tokenColors = [];

for (const [textmateToken, semanticTokens]
    of Object.entries(tokenMap)) {

}

for (const [semanticToken, styles]
    of Object.entries(lightSemanticTheme.semanticTokenColors)) {
    const textMateScopes = tokenMap[semanticToken];
    if (!textMateScopes) {
        continue;
    }

    /** @type {string[]} */
    const fontVariants = [];
    if ("bold" in styles && styles.bold) {
        fontVariants.push("bold");
    }
    if ("italic" in styles && styles.italic) {
        fontVariants.push("italic");
    }
    if ("underline" in styles && styles.underline) {
        fontVariants.push("underline");
    }
    tokenColors.push({
        scope: textMateScopes,
        settings: {
            foreground: styles.foreground,
            fontStyle: fontVariants.join(" "),
        },
    });
}

const theme = JSON.stringify(
    {
        ...lightSemanticTheme,
        tokenColors,
    },
    null,
    4,
);

const file = new URL(
    "../themes/JSXT-light-theme.json",
    import.meta.url,
);

await fs.writeFile(file, theme);

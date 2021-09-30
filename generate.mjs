import fs from "node:fs/promises";
import lightSemanticTheme from "./JSXT-light-theme-semantic.json";

/** @type {Record<string, string[]>} */
const tokenMap = {
    class: [
        "entity.name.type.class",
    ],
    "class.declaration": [
        "entity.name.type.class",
    ],
    comment: [
        "comment",
    ],
    enum: [
        "entity.name.type.enum",
    ],
    enumMember: [
        "variable.other.enummember",
    ],
    event: [],
    function: [
        "entity.name.function",
    ],
    "function.declaration": [
        "entity.name.function",
    ],
    interface: [
        "entity.name.type.interface",
    ],
    keyword: [
        "keyword.control",
        "keyword.operator.expression",
        "keyword.other",
    ],
    "keyword.storage": [
        "storage",
    ],
    label: [
        "entity.name.label",
    ],
    macro: [],
    method: [],
    namespace: [],
    "namespace.declaration": [
        "entity.name.type.module",
    ],
    number: [
        "constant.numeric",
    ],
    operator: [
        "keyword.operator",
        "punctuation.definition.group",
    ],
    parameter: [
        "variable.parameter",
    ],
    property: [
        "variable.other.property",
        "variable.object.property",
    ],
    regexp: [
        "string.regexp",
    ],
    "regexp.characterClass": [
        "punctuation.definition.character-class.regexp",
        "constant.other.character-class.range.regexp",
    ],
    string: [
        "string",
    ],
    "string.escape": [
        "constant.character.escape",
    ],
    "string.terminator": [
        "punctuation.definition.string",
        "punctuation.definition.template-expression",
    ],
    struct: [],
    tomlArrayKey: [],
    tomlTableKey: [],
    type: [
        "entity.name.type.alias",
        "support.type",
    ],
    "type.primitive": [
        "support.type.primitive",
    ],
    typeParameter: [
        "entity.name.type",
    ],
    variable: [
        "variable.other",
    ],

    /*
    tomlArrayKey: {
        foreground: "#FF0000",
    },
    tomlTableKey: {
        foreground: "#FF0000",
    },
    type: {
        foreground: "#FF0000",
    },
    typeParameter: {
        foreground: "#FF0000",
    },
    variable: {
        foreground: "#FF0000",
    },
    */
};

/** @type {Array<{ scope: string[] | string, settings: { foreground?: string, fontStyle?: string } }>} */
const tokenColors = [];

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
    "./themes/JSXT-light-theme.json",
    import.meta.url,
);

await fs.writeFile(file, theme);

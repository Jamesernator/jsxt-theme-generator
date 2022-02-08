import colors from "./colors.json" assert { type: "json" };
import type { TokenStyle } from "./lib/TokenStyle.ts";
import type { WorkbenchTheme } from "./lib/WorkbenchTheme.ts";

/* eslint sort-keys: "error" */

const theme = {
    assignmentOperator: colors.black.bright,
    attribute: colors.black.bright,
    comment: colors.black.bright,
    expressionOrStorageKeyword: colors.purple.normal,
    functionLike: colors.black.bright,
    keyword: colors.blue.bright,
    label: colors.black.bright,
    literal: colors.black.bright,
    operator: colors.black.bright,
    primitiveType: colors.black.bright,
    propertyLike: colors.blue.bright,
    punctuation: colors.black.bright,
    regexpCharacterClass: colors.black.bright,
    stringEscapeLike: colors.black.bright,
    stringLike: colors.orange.bright,
    tag: colors.black.bright,
    text: colors.black.bright,
    typeLike: colors.green.bright,
    variableLike: colors.magenta.bright,
};

export const semanticTokenColors: Record<string, TokenStyle> = {
    attribute: {
        foreground: theme.attribute,
    },
    boolean: {
        foreground: theme.literal,
    },
    class: {
        bold: true,
        foreground: theme.typeLike,
    },
    "class.declaration": {
        underline: true,
    },
    comment: {
        foreground: theme.comment,
    },
    constant: {
        foreground: theme.literal,
    },
    enum: {
        bold: true,
        foreground: theme.typeLike,
    },
    "enum.declaration": {
        underline: true,
    },
    enumMember: {
        foreground: theme.propertyLike,
    },
    "enumMember.declaration": {
        underline: true,
    },
    function: {
        foreground: theme.functionLike,
    },
    "function.declaration": {
        underline: true,
    },
    interface: {
        bold: true,
        foreground: theme.typeLike,
    },
    "interface.declaration": {
        underline: true,
    },
    keyword: {
        bold: true,
        foreground: theme.keyword,
    },
    "keyword.expression": {
        foreground: theme.expressionOrStorageKeyword,
    },
    "keyword.operator": {
        bold: true,
        foreground: theme.operator,
    },
    "keyword.storage": {
        bold: true,
        foreground: theme.expressionOrStorageKeyword,
        italic: true,
    },
    label: {
        foreground: theme.label,
    },
    method: {
        foreground: theme.functionLike,
    },
    "method.declaration": {
        underline: true,
    },
    namespace: {
        bold: true,
        foreground: theme.typeLike,
    },
    "namespace.declaration": {
        underline: true,
    },
    number: {
        foreground: theme.literal,
    },
    operator: {
        bold: true,
        foreground: theme.operator,
    },
    "operator.assignment": {
        bold: true,
        foreground: theme.assignmentOperator,
    },
    parameter: {
        foreground: theme.variableLike,
    },
    "parameter.declaration": {
        underline: true,
    },
    property: {
        foreground: theme.propertyLike,
    },
    "property.declaration": {
        underline: true,
    },
    punctuation: {
        bold: true,
        foreground: colors.black.bright,
        underline: false,
    },
    regexp: {
        foreground: theme.stringLike,
    },
    "regexp.characterClass": {
        foreground: theme.regexpCharacterClass,
    },
    string: {
        foreground: theme.stringLike,
    },
    "string.escape": {
        foreground: theme.stringEscapeLike,
    },
    tag: {
        bold: true,
        foreground: theme.tag,
    },
    text: {
        foreground: theme.text,
    },
    type: {
        bold: true,
        foreground: theme.typeLike,
    },
    "type.declaration": {
        underline: true,
    },
    "type.primitive": {
        foreground: theme.primitiveType,
    },
    typeParameter: {
        bold: true,
        foreground: theme.typeLike,
    },
    "typeParameter.declaration": {
        underline: true,
    },
    variable: {
        foreground: theme.variableLike,
    },
    "variable.declaration": {
        underline: true,
    },
};

export const workbench: Partial<WorkbenchTheme> = {
    "activityBar.activeBackground": colors.white.bright,
    "activityBar.activeBorder": colors.blue.bright,
    "activityBar.background": colors.gray.bright,
    "activityBar.foreground": colors.black.dark,

    "editor.background": colors.white.normal,
    "editor.foreground": colors.black.dark,

    focusBorder: colors.gray.dull,
    foreground: colors.black.normal,

    "list.activeSelectionBackground": colors.blue.bright,

    "selection.background": colors.blue.bright,
    "statusBar.background": colors.blue.bright,
    "statusBar.foreground": colors.white.bright,

    "terminal.ansiBlack": colors.black.normal,
    "terminal.ansiBlue": colors.blue.normal,
    "terminal.ansiBrightBlack": colors.black.bright,
    "terminal.ansiBrightBlue": colors.blue.bright,
    "terminal.ansiBrightCyan": colors.cyan.bright,
    "terminal.ansiBrightGreen": colors.green.bright,
    "terminal.ansiBrightMagenta": colors.magenta.bright,
    "terminal.ansiBrightRed": colors.red.bright,
    "terminal.ansiBrightWhite": colors.white.bright,
    "terminal.ansiBrightYellow": colors.yellow.bright,
    "terminal.ansiCyan": colors.cyan.normal,
    "terminal.ansiGreen": colors.green.normal,
    "terminal.ansiMagenta": colors.magenta.normal,
    "terminal.ansiRed": colors.red.normal,
    "terminal.ansiWhite": colors.white.normal,
    "terminal.ansiYellow": colors.yellow.normal,
    "terminal.background": colors.white.normal,
    "terminal.foreground": colors.black.dull,
    "terminalCursor.background": colors.black.dark,
    "terminalCursor.foreground": colors.gray.normal,

    "widget.shadow": colors.black.medium,
};

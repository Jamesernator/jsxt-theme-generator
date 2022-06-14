import { writeFile } from "node:fs/promises";
import { semanticTokenColors, workbench } from "./JSXTLightTheme.js";
import SemanticToken from "./lib/SemanticToken.js";
import type { TextmateTokenStyle } from "./lib/TextmateTokenStyle.js";
import type { TokenStyle } from "./lib/TokenStyle.js";
import toTextmateStyles from "./lib/toTextmateStyles.js";
import tokenMap from "./tokenMap.json" assert { type: "json" };

function findStyles(semanticToken: SemanticToken): TokenStyle | undefined {
    let allStyles: TokenStyle | undefined;

    for (const candidateToken of semanticToken.subtokens()) {
        const candidateTokenName = candidateToken.toString();
        const styles = semanticTokenColors[candidateTokenName];
        if (styles) {
            allStyles = { ...allStyles, ...styles };
        }
    }
    return allStyles;
}

const tokenColors: Array<{
    scope: string,
    settings: TextmateTokenStyle,
}> = [];

for (const [semanticTokenName, textmateTokens] of Object.entries(tokenMap)) {
    const semanticToken = SemanticToken.fromString(semanticTokenName);
    for (const textmateToken of textmateTokens) {
        const styles = findStyles(semanticToken);
        if (!styles) continue;
        const textmateStyles = toTextmateStyles(styles);
        tokenColors.push({
            scope: textmateToken,
            settings: textmateStyles,
        });
    }
}

const theme = {
    $schema: "vscode://schemas/color-theme",
    name: "JSXT Light",
    type: "light",
    colors: workbench,
    semanticHighlighting: true,
    semanticTokenColors,
    tokenColors,
};

const file = new URL(
    "../jsxt-theme/JSXT-light-theme.json",
    import.meta.url,
);

await writeFile(file, JSON.stringify(theme, null, 4));

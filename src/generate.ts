import fs from "node:fs/promises";
import SemanticToken from "./SemanticToken.js";
import type { TextmateTokenStyle } from "./TextmateTokenStyle.js";
import type { TokenStyle } from "./TokenStyle.js";
import tokenMap from "./tokenMap.js";
import toTextmateStyles from "./toTextmateStyles.js";

const semanticTheme = JSON.parse(await fs.readFile(
    new URL("./JSXT-light-theme-semantic.json", import.meta.url),
    "utf8",
));

const { semanticTokenColors } = semanticTheme as {
    semanticTokenColors: Record<string, TokenStyle>,
};

function findStyles(semanticToken: SemanticToken): TokenStyle | undefined {
    for (const candidateToken of semanticToken.subtokens()) {
        const candidateTokenName = candidateToken.toString();
        const styles = semanticTokenColors[candidateTokenName];
        if (styles) {
            return styles;
        }
    }
    return undefined;
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

const theme = JSON.stringify(
    {
        ...semanticTheme,
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

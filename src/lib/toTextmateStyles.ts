import type { TextmateTokenStyle } from "./TextmateTokenStyle.ts";
import type { TokenStyle } from "./TokenStyle.ts";

export default function toTextmateStyles(
    tokenStyle: Readonly<TokenStyle>,
): TextmateTokenStyle {
    const fontVariants = [];
    if (tokenStyle.bold) {
        fontVariants.push("bold");
    }
    if (tokenStyle.italic) {
        fontVariants.push("italic");
    }
    if (tokenStyle.underline) {
        fontVariants.push("underline");
    }
    const textmateTokenStyle: TextmateTokenStyle = {};
    if (fontVariants.length > 0) {
        textmateTokenStyle.fontStyle = fontVariants.join(" ");
    }
    if (tokenStyle.foreground) {
        textmateTokenStyle.foreground = tokenStyle.foreground;
    }
    return textmateTokenStyle;
}

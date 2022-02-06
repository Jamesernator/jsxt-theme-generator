import assert from "./assert.ts";

type SemanticTokenOptions = {
    modifiers?: ReadonlyArray<string> | undefined,
    language?: string | null | undefined,
};

export default class SemanticToken {
    static fromString(descriptor: string): SemanticToken {
        const [core, language, ...extra] = descriptor.split(":");
        assert(core !== undefined);
        if (extra.length !== 0) {
            throw new RangeError("Only a single language allowed");
        }
        const [token, ...modifiers] = core.split(".");
        assert(token !== undefined);
        return new SemanticToken(token, {
            modifiers,
            language,
        });
    }

    readonly #token: string;
    readonly #modifiers: ReadonlyArray<string>;
    readonly #language: string | null;

    constructor(
        token: string,
        { modifiers=[], language=null }: SemanticTokenOptions={},
    ) {
        this.#token = token;
        this.#modifiers = Object.freeze([...new Set(modifiers)]);
        this.#language = language;
    }

    get token(): string {
        return this.#token;
    }

    get modifiers(): ReadonlyArray<string> {
        return this.#modifiers;
    }

    get language(): string | null {
        return this.#language;
    }

    * subtokens(): Generator<SemanticToken> {
        yield this;
        if (this.#language !== null) {
            const noLanguageSubtoken = new SemanticToken(
                this.#token,
                {
                    modifiers: this.#modifiers,
                    language: null,
                },
            );
            yield* noLanguageSubtoken.subtokens();
        }
        for (const modifier of this.#modifiers) {
            const newModifiers = new Set(this.#modifiers);
            newModifiers.delete(modifier);
            const withoutModifierSubtoken = new SemanticToken(
                this.#token,
                {
                    modifiers: [...newModifiers],
                    language: this.#language,
                },
            );
            yield* withoutModifierSubtoken.subtokens();
        }
    }

    isSubtoken(other: SemanticToken): boolean {
        return this.#token === other.#token
            && other.#modifiers.every(
                modifier => this.#modifiers.includes(modifier)
            )
            && (other.#language === null || other.#language === this.#language);
    }

    toString(): string {
        return this.#token
            + this.#modifiers.map((modifier) => `.${ modifier }`).join("")
            + (this.#language === null ? "" : `:${ this.#language }`);
    }
}

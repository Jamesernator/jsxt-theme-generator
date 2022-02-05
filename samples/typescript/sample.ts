
class ExampleClass {
    readonly #x: number;

    constructor(x: number) {
        this.#x = x;
    }

    get x(): number {
        return this.#x;
    }
}

/**
 * Example block comment
 * @example Example doc
 * @type {ExampleSubclass}
 */
export default class ExampleSubclass extends ExampleClass {
    static readonly x = 3;

    static baz(): string {
        return "baz";
    }

    #foo: number = 3;

    constructor() {
        super(12);
    }

    #fooBar(): void {
        console.log(this.#foo);
        this.exampleMethod();
    }

    exampleMethod(): string {
        return "example";
    }

    foo(): void {
        this.#fooBar();
    }
}

export const exampleInstance = new ExampleClass(3);

// Example comment
export enum ExampleEnum {
    BAZ = 3,
}

console.log(ExampleEnum.BAZ);

export function exampleFunction(): number {
    return 3;
}

console.log(exampleFunction());

interface ExampleInterface {
    foo(): 3;
}

export interface ExampleSubinterface extends ExampleInterface {
    bar(
        x: 10,
    ): "baz";
}

if (Math.random()) {
    console.log("Baz");
} else if (Math.random() > 0.1) {
    console.log("String");
} else {
    console.log("Banana");
}

switch (Math.random()) {
    case 1: {
        console.log(1);
        break;
    }
    default: {
        console.log("Fizzy buzzy");
    }
}

/* eslint-disable no-labels */
exampleLabel: for (const o of [1, 2, 3]) {
    for (const k of [1, 2, 3]) {
        if (o === 2 && k === 2) {
            break exampleLabel;
        } else if (o === 3) {
            continue;
        }
        console.log(k - o);
    }
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Foo {
    export class Bar {}
    // eslint-disable-next-line no-debugger
    debugger;
    const o: Record<string, number> = { x: 10 };
    delete o.y;
}

export const PI = 3.14;

export const GOOGOL = 10n ** 100n;

try {
    console.log("Foo");
} catch (err: unknown) {
    console.warn(err);
} finally {
    console.time("bizz");
}

for await (const item of new ReadableStream()) {
    console.log(item);
}

if ({} instanceof String) {
    console.log("Fizzybuzzy");
}

export const o = {
    x: 10,
    y: 20,
    "foo-bar": "30",
    get baz(): 12 {
        return 12;
    },

    get bizz(): 13 {
        return 13;
    },
};

export const ID = /^foo[^0-9axsA-Z]+(?:a|b){99}(?<foo>xxx)\p{White_Space}$/u;

export type ExampleType = {
    x: 10,
};

export const foo: ExampleType = { x: 10 };

// eslint-disable-next-line no-bitwise
export const bar = 1 >>> 3;

if (!Math.random()) {
    console.log("Hello");
}

let y = 2;

// eslint-disable-next-line no-plusplus
y++;

console.log(y);

export type ExampleParams<T> = T extends number ? string : 13;

export const exampleBooleans = [true, false];

console.log(import.meta);

export class Point {
    constructor() {
        console.log(new.target);
    }
}

export async function exampleA(
    paramExample: "blue",
): Promise<"blue" | 3> {
    return Promise.resolve(paramExample);
}

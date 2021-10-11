
class Vehicle {
    static readonly isVehicle = true;

    constructor(speed: number) {
        console.log(speed);
    }
}

/**
 * This is a foo class
 * @link https://example.com
 * @see {Vehicle}
 * @jType A bunch of stuff
 */
export default class Car extends Vehicle {
    /**
     * @deprecated
     */
    readonly intro: string;
    readonly #bar = 3;

    /**
     * @param speed The speed
     * @param costs The costs
     */
    constructor(speed: number, costs: Record<string, number>) {
        super(speed);

        var c = Symbol('cost');
        this[c] = costs;

        this.intro = `This is a car runs at ${ speed }.`;
    }

    get bar(): number {
        return this.#bar;
    }

    fizz(): number {
        return 12;
    }
}

export const speedyCar = new Car(10, {});

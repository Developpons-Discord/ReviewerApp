export default class Maybe<T, U> {
	private constructor(private _value?: T, private _error?: U) {}

	public static ok<T, U>(value: T) {
		return new Maybe<T, U>(value);
	}

	public static empty<U>(): Maybe<void, U> {
		return new Maybe<void, U>(undefined);
	}

	public static error<T, U>(error: U) {
		return new Maybe<T, U>(undefined, error);
	}

	public get value() {
		return this._value;
	}

	public get error() {
		return this._error;
	}
}

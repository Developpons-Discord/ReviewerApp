export declare interface User {
	id: number;
	email?: string;
	username: string;
	createdAt?: Date;
	updatedAt?: Date;
	roles?: string[];
	verified: boolean;
}

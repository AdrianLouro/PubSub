export interface Subscription {
    to(...types: string[]): void;
}
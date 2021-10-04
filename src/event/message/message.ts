export interface Message {
    readonly type: string;
    readonly timestamp: Date;
    readonly message: string;
}
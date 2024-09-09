export type AtLeastOneOf<T> = {
    [Key in keyof T]-?: Required<Pick<T, Key>> & Partial<Omit<T, Key>>
}[keyof T];

export interface CommonObject<valueType = any> {
    [key: string]: valueType // Add index signature
}


export interface ReduxAction<T> {
    type: string;
    payload?: T;
    error?: boolean;
    meta?: any;
}

export interface ReduxActionTypes {
    async: CommonObject<any>,
    sync: CommonObject<any>,
}

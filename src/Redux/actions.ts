export enum ACTIONS_TYPE {
    INCREASE_NUMBER = 'Counter/INCREASE_NUMBER',
    RESET_NUMBER = 'Counter/RESET_NUMBER',

    SET_VALUE = 'Counter/SET_VALUE',
    SET_MAX_VALUE = 'Counter/SET_MAX_VALUE',
    SET_MIN_VALUE = 'Counter/SET_MIN_VALUE',
}

export type CounterReducersTypes = SetValue | IncreaseNumber | ResetNumber |
    SetMaxValue | SetMinValue


//CounterDisplay
export type IncreaseNumber = {
    type: ACTIONS_TYPE.INCREASE_NUMBER
}
export const IncreaseNumberAC = (): IncreaseNumber => {
    return {
        type: ACTIONS_TYPE.INCREASE_NUMBER,
    };
};

export type ResetNumber = {
    type: ACTIONS_TYPE.RESET_NUMBER
}
export const ResetNumberAC = (): ResetNumber => {
    return {
        type: ACTIONS_TYPE.RESET_NUMBER,
    };
};


//CounterSettings
export type SetValue = {
    type: ACTIONS_TYPE.SET_VALUE
}
export const SetValueAC = (): SetValue => {
    return {
        type: ACTIONS_TYPE.SET_VALUE,
    };
};

export type SetMaxValue = {
    type: ACTIONS_TYPE.SET_MAX_VALUE
    payload: {
        inputValue: number
    }
}
export const SetMaxValueAC = (inputValue: number): SetMaxValue => {
    return {
        type: ACTIONS_TYPE.SET_MAX_VALUE,
        payload: {
            inputValue,
        },
    };
};

export type SetMinValue = {
    type: ACTIONS_TYPE.SET_MIN_VALUE
    payload: {
        inputValue: number
    }
}
export const SetMinValueAC = (inputValue: number): SetMinValue => {
    return {
        type: ACTIONS_TYPE.SET_MIN_VALUE,
        payload: {
            inputValue,
        },
    };
};

export type SaveSetValueToStorage = {
    type: ACTIONS_TYPE.SET_MIN_VALUE
    payload: {
        inputValue: number
    }
}
export const SaveSetValueToStorageAC = (inputValue: number): SetMinValue => {
    return {
        type: ACTIONS_TYPE.SET_MIN_VALUE,
        payload: {
            inputValue,
        },
    };
};
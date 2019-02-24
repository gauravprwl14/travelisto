import * as commonInterfaces from '../../utils/types/interface'

export const loginActionTypes: commonInterfaces.ReduxActionTypes = {
    async: {
        USER_LOGIN: 'USER_LOGIN',
    },
    sync: {
        USER_LOGIN_TEST_ACTION: 'USER_LOGIN_TEST_ACTION',
    },
}

export default loginActionTypes

// interface IUser {
//     data: {
//         user: null | object | string
//     },
//     error: IUserError | null
// }

// interface IUserError {
//     name: string,
//     status: number,
//     __isAuthError: boolean,
//     message: string
//     stack: string
// }

// export interface IAuthContext {
//     user?: User,
//     singUp: (email: string, password: string) => Promise<void>,
//     singIn: (email: string, password: string) => Promise<void>,
//     logout: () => Promise<void>
// }

export const object = {}

enum EnumState {
   IsLoading = 'IsLoading',
   IsError = 'IsError',
   IsSuccess = 'IsSuccess',
}

const checkStatus = (status: EnumState) => {
   return status
}

checkStatus(EnumState.IsLoading)

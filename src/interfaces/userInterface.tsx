export interface User {
    name: string;
    userName: string;
    email: string;
    rol: string;
    state: boolean;
    google: boolean;
    updatedAt: string;
    uid: string;
    img?: string;
    saveRoute: Array<string>;
    followers: Array<string>;
    following: Array<string>;
    lastConnection: Date;
    notifications: UserNotification[],
    violations: number
    createdAt: string;

}
export interface UserNotification {
    typeNotification: string,
    message: string,
    read: boolean,
    _id: string
}
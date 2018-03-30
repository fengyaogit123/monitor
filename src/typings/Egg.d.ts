//全局egg扩展
import * as Egg from 'egg';
import { Mongoose, Schema } from 'mongoose'
import LogService from '../service/log'
import ProjectService from '../service/project'
import UserService from '../service/users'
declare module 'egg' {
    export interface Application {
        middlewares: any;
        mongoose: Mongoose;
        passport: any;
        model: {
            Log: Log;
            Project: Project;
            Users: Users;
            Token:Token;
        };
    }
    export interface IController {
        v1: any;
    }
    export interface Context {
        model: {
            Log: Log;
            Project: Project;
            Users: Users;
            Token:Token
        };
        Message(data: any): void;
    }
    export interface IService {
        log: LogService;
        project: ProjectService;
        users: UserService;
    }
    export interface IHelper {
        sha256(...args: string[]): string;
        is(): any;
        error(ctx: any, obj: any): void;
        initUUID(): string;
        QueryPage(page: any, callback: Function): Promise<any>;
        validate(rules: Object, data: Object): any;
    }
}
export = Egg;
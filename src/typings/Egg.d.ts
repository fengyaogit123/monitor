//全局egg扩展
import * as Egg from 'egg';
import { Mongoose, Schema } from 'mongoose'
import LogService from '../service/log'
import ProjectService from '../service/project'
declare module 'egg' {
    export interface Application {
        middlewares: any;
        mongoose: Mongoose;
    }
    export interface IController {
        v1: any;
    }
    export interface IService {
        log:LogService;
        project:ProjectService;
    }
    export interface IHelper {
        sha256(...args: string[]): string;
        is(): any;
        error(ctx: any, obj: any): void;
        initUUID(): string;
        getPage(page: any, callback: Function): Promise<any>
        validate(rules: Object, data: Object): any;
    }
}
export = Egg;
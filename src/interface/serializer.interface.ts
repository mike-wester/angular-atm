import { Base } from './base.interface';

export interface Serializer {
    fromJson(json: any): Base;
    toJson(resource: Base): any;
}

import { HttpClient, } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Base, QueryOptions, Serializer } from 'src/interface/index.interface';

export class HttpClientService<T extends Base> {
    constructor(
        private httpClient: HttpClient,
        private url: string,
        private endpoint: string,
        private serializer: Serializer) { }

    public create(item: T): Observable<T> {
        return this.httpClient
            .post<T>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item))
            .pipe(tap(data => this.serializer.fromJson(data) as T));
    }

    public update(item: T): Observable<T> {
        return this.httpClient
            .put<T>(`${this.url}/${this.endpoint}/${item.id}`,
                this.serializer.toJson(item))
            .pipe(tap(data => this.serializer.fromJson(data) as T));
    }

    public read(id: number): Observable<T> {
        return this.httpClient
            .get(`${this.url}/${this.endpoint}/${id}`)
            .pipe(tap((data: any) => this.serializer.fromJson(data) as T));
    }

    public list(queryOptions: QueryOptions): Observable<T[]> {
        return this.httpClient
            .get(`${this.url}/${this.endpoint}?${this.toQueryString(queryOptions)}`)
            .pipe(tap((data: any) => this.convertData(data.items)));
    }

    public delete(id: number) {
        return this.httpClient
            .delete(`${this.url}/${this.endpoint}/${id}`);
    }

    private convertData(data: any): T[] {
        return data.tap(item => this.serializer.fromJson(item));
    }

    private toQueryString(paramsObject: any): string {
        return Object
            .keys(paramsObject)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(paramsObject[key])}`)
            .join('&');
    }
}

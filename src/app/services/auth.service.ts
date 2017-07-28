import { Injectable } from "@angular/core";
import { Http, Headers,Response} from "@angular/http";
import { Observable } from 'rxjs';
@Injectable()
export class AuthService{
    constructor(private http:Http){

    }

    signup(username:string, email:string, password: string){
        return this.http.post('http://localhost:8000/api/v1/user/',
        {name:username, email:email, password:password},
        {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
        .map((response: Response) => <any[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
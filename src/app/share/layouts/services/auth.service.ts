import { Injectable } from "@angular/core";
import { User } from '../../interface';
import {HttpClient} from "@angular/common/http";


@Injectable()
export class AuthService{

    constructor(private http:HttpClient){

    }
    login(user:User){

    }
}
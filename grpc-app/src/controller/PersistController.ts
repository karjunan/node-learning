import * as express from "express";
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, requestParam } from "inversify-express-utils";
import { injectable, inject } from "inversify";

@controller("/api")
export class PersistController implements interfaces.Controller {

    @httpGet("/all")
    getAll() {
        return  "Getting all users";
    }



}
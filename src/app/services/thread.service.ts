import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Thread } from "../../../shared/model/thread";
import { AllUserData } from "../../../shared/dto/all-user-data";

@Injectable()
export class ThreadService {

  constructor(private httpClient: HttpClient) { }

  loadUserThreads(): Observable<AllUserData> {
    return this.httpClient.get<AllUserData>("/api/threads");
  }
}

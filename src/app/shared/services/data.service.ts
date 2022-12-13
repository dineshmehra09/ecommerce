import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = environment.baseUrl;

  constructor(private http: HttpClient) {}
    //get List of meta field validation
    getMembershipList(payload: any) {
      return this.http.post(this.url + '/membership/list', payload);
    }
    //Add new Meta fields
    addMetaField(payload: any) {
      return this.http.post(this.url + '/metafield/create', payload);
    }
    // update meta status
    UpdateMetaStatus(payload: any) {
      return this.http.put(this.url + '/metafield/updateStatus', payload);
    }
    //Delete meta field
    deleteMeta(id: any) {
      return this.http.delete<any>(this.url + '/metafield/delete/' + id);
    }

    deleteAllMeta(logs: any) {
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: logs,
      };
      return this.http.delete<any>(this.url + '/metafield/delAll', options);
    }
    updateMultipleStatusOfMeta(payload: any) {
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body: payload,
      };
      return this.http.put<any>(this.url + '/metafield/updateAll', payload);
    }
    UpdateMetaById(payload: any) {
      return this.http.put(this.url + '/metafield/update', payload);
    }

}

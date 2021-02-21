import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
    providedIn: "root"
  })


export class services {
 


  constructor(protected httpClient: HttpClient) { }
  
  getTable(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/api_product/getAllPraduct');
  }


  // getPrice(): Observable<any> {
  //   return this.httpClient.get<any>('https://picsum.photos/v2/list?page=1&limit=5');
  // }

// addPost(uploadImageData): Observable<any> {
//     return this.httpClient.post('http://localhost:8080/post/upload', uploadImageData, { observe: 'response' });
// }
// // getPost(imageName): Observable<any> {
// //     return this.httpClient.get('http://localhost:8080/post/get/' + imageName)
// // }
// deletePost(id : string):Observable<any> {
//   return this.httpClient.delete('http://localhost:8080/post/delete/'+ id);
// }
// getAllPost(): Observable<any> {
//     return this.httpClient.get('http://localhost:8080/post/getall')
// }

//   updateLike(updateLike): Observable<any> {
//     return this.httpClient.post(`http://localhost:8080/post/updatelike` ,updateLike, { observe: 'response' });
// }

//   updateDislike(updateDisLike): Observable<any> {
//   return this.httpClient.post(`http://localhost:8080/post/updatedislike` ,updateDisLike, { observe: 'response' });
// }
}
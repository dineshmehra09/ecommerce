import { Injectable } from '@angular/core';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor() { }

  uploadfile(file: any, folder: any) {

    const bucket = new S3(
      {
        accessKeyId: 'AKIAVLBLVNUJ3IIGFKPX',
        secretAccessKey: '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',
        region: 'us-east-1'
      }
    );

    const params = {
      Bucket: 'picopay-project/' + folder,
      Key: file.name,
      Body: file
    };

    return new Promise(function(resolve, reject) {
      bucket.upload(params, function (err: any, data: any) {
        if (err) {
          console.log('There was an error uploading your file: ', err);
          reject(err);
          return false;
        }
        resolve(data);
        console.log(data);
        return true;
      });
    })
  }
}

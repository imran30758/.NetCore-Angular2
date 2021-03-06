﻿import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, BrowserXhr } from '@angular/http';
import { Subject } from "rxjs/Subject";


@Injectable()
export class ProgressService {
    private uploadProgress: Subject<any>;
   // downloadProgress: Subject<any> = new Subject();

    startTracking() {
        this.uploadProgress = new Subject();
        return this.uploadProgress;
    }

    notify(progress: any) {
        if (this.uploadProgress)
        this.uploadProgress.next(progress);
    }


    endTracking() {
        if (this.uploadProgress)
        this.uploadProgress.complete();
    }
}


@Injectable()
export class BrowserXhrWithProgress extends BrowserXhr {
   
    constructor(private service: ProgressService) { super() };

    build(): XMLHttpRequest  {
        var xhr: XMLHttpRequest = super.build();

        xhr.onprogress = (event) => {
          //  this.service.downloadProgress.next(this.CreateProgress(event));
        }


        xhr.upload.onprogress = (event) => {
            this.service.notify(this.CreateProgress(event));


            xhr.upload.onloadend = () => {               
                this.service.endTracking();              
            }
        }

        return xhr;
    }


    private CreateProgress(event:any) {
        return {
            total: event.total,
            percentage: Math.round(event.loaded / event.total * 100)
        };
    }

}
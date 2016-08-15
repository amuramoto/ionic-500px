import {Component} from '@angular/core';
import {Http} from '@angular/Http';
import {NavController} from 'ionic-angular';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {
  
  private request: Promise<Object>;
  private key: string = 'YnOuhuoNTp4QjOMdocZFWlVvoxVlju3yNExSifYo';
  private apiUrl: string = 'https://api.500px.com/v1/photos'
	private photos: Object;

  constructor(public navCtrl: NavController, private _http: Http) {
  	this.photos = this.getPhotos({feature: 'editors'});
  }

	private getPhotos(params: Object) {
		let queryString: string = '?consumer_key=${key}';
		for (let paramName in params) {
			let paramValue = params[paramName];
			queryString += '&${paramName}=${paramValue}'
		}
		this._http.get(this.apiUrl + queryString)
			.toPromise().then(
				response => this.photos = response,
				error => console.log(error)
			);
	}

}

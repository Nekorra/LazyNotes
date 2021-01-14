import { Component } from '@angular/core';
import { NavController, ActionSheetController, LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { createWorker } from 'tesseract.js';

@Component({
  selector: 'page-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  srcImage: string;
  OCRAD: any;

  worker: Tesseract.Worker;
  workerReady = false;
  ocrResult = '';
  summary = '';
  captureProgress = 0;
  showProgress: number;
  finished = false;

  constructor(
    public navCtrl: NavController,
    public actionSheetController: ActionSheetController,
    public loadingCtrl: LoadingController,
    private Camera: Camera,
  ) {
    this.loadWorker();
  }

  async loadWorker() {
    this.worker =  createWorker({
      logger: progress => {
        if (progress.status == 'recognizing text') {
          this.captureProgress = parseInt('' + progress.progress * 100);
          this.showProgress = parseInt('' + progress.progress)
        this.loadingCtrl.dismiss(); 
        }
      }
    });
    await this.worker.load();
    await this.worker.loadLanguage('eng');
    await this.worker.initialize('eng');
    this.workerReady = true;
  }
  //button image OCR
  async recognizeImage() {
    //TESSERACTJS
    this.finished = false;
    this.presentLoading();
    const result = await this.worker.recognize(this.srcImage);
    this.ocrResult = result.data.text;
    this.srcImage = "";
    this.finished = true;
    alert("Ur Welcome!")


  }

  getImage(sourceType: number) {
      this.Camera.getPicture({
        quality: 100,
        destinationType: 0, // DATA_URL
        sourceType,
        allowEdit: true,
        saveToPhotoAlbum: false,
        correctOrientation: true
      }).then((imageData) => {
        this.srcImage = `data:image/jpeg;base64,${imageData}`;
      }, (err) => {
        console.log(`ERROR -> ${JSON.stringify(err)}`);
      });
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();

  }

}
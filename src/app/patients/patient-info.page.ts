import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.page.html',
  styleUrls: ['./patient-info.page.scss'],
})
export class PatientInfoPage {
  @Input() paciente: any;

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }
}

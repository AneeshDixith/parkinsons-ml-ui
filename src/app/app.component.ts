import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'parkinsons-ml-ui';


  result: string = "";
  color: string = '#FFFFFF';

  fo = new FormControl(null);
  flo = new FormControl(null);
  fhi = new FormControl(null);
  shimmer = new FormControl(null);
  shimmerDb = new FormControl(null);
  jitterPercent = new FormControl(null);
  jitterAbs = new FormControl(null);
  rap = new FormControl(null);
  ppq = new FormControl(null);
  ddp = new FormControl(null);
  apq5 = new FormControl(null);
  apq = new FormControl(null);
  apq3 = new FormControl(null);
  dda = new FormControl(null);
  nhr = new FormControl(null);
  hnr = new FormControl(null);
  rpde = new FormControl(null);
  d2 = new FormControl(null);
  dfa = new FormControl(null);
  spread1 = new FormControl(null);
  spread2 = new FormControl(null);
  ppe = new FormControl(null);

  constructor(private parkinsonsFormBuilder: FormBuilder) {}

  parkinsonsForm: FormGroup = new FormGroup({
    fo: this.fo,
    flo: this.flo,
    fhi: this.fhi,
    shimmer: this.shimmer,
    shimmerDb: this.shimmerDb,
    jitterAbs: this.jitterAbs,
    jitterPercent: this.jitterPercent,
    rap: this.rap,
    ppe: this.ppe,
    spread2: this.spread2,
    spread1: this.spread1,
    dfa: this.dfa,
    d2: this.d2,
    nhr: this.nhr,
    hnr: this.hnr,
    rpde: this.rpde,
    dda: this.dda,
    apq: this.apq,
    apq5: this.apq5,
    apq3: this.apq3,
    ddp: this.ddp,
    ppq: this.ppq,
  });

  async onPredict() {

    console.log(this.parkinsonsForm.value);
    const data = this.parkinsonsForm.value;

    await axios
      .post(
        'http://localhost:5000/parkinsonsClassifier',

        data
      )
      .then( (response) => {
        console.log(response);
        this.result = response.data['result'];
        if (this.result == 'Positive') {
          this.color = '#FF0000';
        }
        else {
          this.color = '#00FF00';
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  ngOnInit(): void {
  }
}

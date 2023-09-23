import { Line } from './../../interfaces/line';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { Stop } from 'src/app/interfaces/stop';
import { LinesService } from 'src/app/services/lines.service';
import { StopsService } from 'src/app/services/stops.service';

@Component({
  selector: 'app-select-stops-form',
  templateUrl: './select-stops-form.component.html',
  styleUrls: ['./select-stops-form.component.scss'],
})
export class SelectStopsFormComponent implements OnInit {
 
  startStop = new FormControl('', Validators.required);
  endStop = new FormControl('', Validators.required);
  stopsForm = this._formBuilder.group({
    startStop: this.startStop,
    endStop: this.endStop,
  });

  stops: Stop[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _stopsService: StopsService,
    private _linesService: LinesService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this._stopsService.findAllStops().subscribe({
      next: (stops) => {
        this.stops = stops;
      },
      error: (err) => {
        console.log(err);

        this.stops = [
          { id: 0, name: 'stop1' },
          { id: 1, name: 'stop2' },
          { id: 2, name: 'stop3' },
        ];
      },
    });
  }

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });
  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
  searchLines() {
    if (this.stopsForm.valid) {
      this._router.navigate(['lines/info',this.stopsForm.value['startStop'],this.stopsForm.value['endStop']])
      // this._linesService
      //   .findAvaiableLines(
      //     this.stopsForm.value['startStop'] || '',
      //     this.stopsForm.value['startStop'] || ''
      //   )
      //   .subscribe({
      //     next:(lines: Line[]) =>{
      //       console.log(lines);
      //     },
      //     error:(err) =>{
      //       console.log(err);
            
      //     },
      //   });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { Stop } from 'src/app/interfaces/stop';
import { StopsService } from 'src/app/services/stops.service';

@Component({
  selector: 'app-select-stops-form',
  templateUrl: './select-stops-form.component.html',
  styleUrls: ['./select-stops-form.component.scss'],
})
export class SelectStopsFormComponent implements OnInit {
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  stops: Stop[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _stopsService: StopsService
  ) {}
  ngOnInit(): void {
    this._stopsService.findAllStops().subscribe({
      next: (stops) => {
        this.stops = stops;
      },
    });
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
}

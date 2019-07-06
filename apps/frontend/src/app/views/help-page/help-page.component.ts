import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HelpPageService, PeriodicElement } from './help-page.service';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  styleUrls: ['./help-page.component.scss']
})

export class HelpPageComponent implements OnInit {
  form: FormGroup;
  dataSource: PeriodicElement[] = [];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  constructor(private _fb: FormBuilder, private _helpService: HelpPageService) { }

  ngOnInit() {
    this._helpService.getElements().subscribe(res => {
      this.dataSource = res;
    })
    this.form = this._fb.group({
      name: [null, Validators.required],
      weight: [null, Validators.required],
      symbol: [null, Validators.required],
      position: [null]
    })
  }

  save() {
      this.form.get('position').setValue(this.dataSource.length + 1);
      this._helpService.createElement(this.form.value).subscribe(res => {
        this.dataSource = res;
      });
  }
}

import { Component, OnInit } from '@angular/core';
import {
	FormGroup,
	FormBuilder,
	Validators,
	FormControl,
	FormGroupDirective,
	NgForm
} from '@angular/forms';
import { HelpPageService, PeriodicElement } from './help-page.service';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
	isErrorState(
		control: FormControl | null,
		form: FormGroupDirective | NgForm | null
	): boolean {
		const isSubmitted = form && form.submitted;
		return !!(
			control &&
			control.invalid &&
			(control.dirty || control.touched || isSubmitted)
		);
	}
}

@Component({
	selector: 'app-help-page',
	templateUrl: './help-page.component.html',
	styleUrls: ['./help-page.component.scss']
})
export class HelpPageComponent implements OnInit {
	form: FormGroup;
	dataSource: PeriodicElement[] = [];
	displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
	matcher = new MyErrorStateMatcher();
	constructor(
		private _fb: FormBuilder,
		private _helpService: HelpPageService
	) {}

	ngOnInit() {
		this._helpService.getElements().subscribe(res => {
			this.dataSource = res;
		});
		this.form = this._fb.group({
			name: [null, Validators.required],
			weight: [null, Validators.required],
			symbol: [null, Validators.required],
			position: [null]
		});
	}

	save() {
		console.log('safsadf');
		this.form.get('position').setValue(this.dataSource.length + 1);
		if (this.form.valid) {
			this._helpService.createElement(this.form.value).subscribe(res => {
				this.dataSource = res;
			});
		}
	}
}

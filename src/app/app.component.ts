import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: Array<{
    id: string,
    name: string
  }>;

  form: FormGroup;

  constructor(
    private authService: AuthService
  ) {
    authService.list().subscribe(
      (data) => {
        this.data = data.result;
      }
    );
  }

  ngOnInit() {
    this.form = new FormGroup(
      {
        profileName: new FormControl('', Validators.required)
      }
    );
  }

  save(): void {
    const profile = {
      profileName: this.form.get('profileName').value
    };
    this.authService.create(profile).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  delete(): void {
    this.authService.delete('2c902464-38ff-488e-be2b-f2bc9ff864c5').subscribe(
      (data) => {
        console.log(data);
      }
    );
  }
}

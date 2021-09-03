import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-url-create',
  templateUrl: './url-create.component.html',
  styleUrls: ['./url-create.component.css']
})
export class UrlCreateComponent implements OnInit {

  urlShort: string;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.urlShort = '';
    this.form = this.formBuilder.group({
      urlFull: ['', Validators.required]
    })
  }

  createUrlShort(): void {
    if (this.form.valid) {

      this.apiService.save(this.form.value).subscribe((data) => {

        this.urlShort = data.urlShort;
      });

    } else {
      this.form.markAllAsTouched();
    }
  }
}

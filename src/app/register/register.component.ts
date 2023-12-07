import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IAddress } from '../interface/IAddress.modele';
import { AddressService } from '../service/address.service';
import { UserService } from '../service/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

interface RegisterFormModel {
  email: string;
  password: string;
  lastname: string;
  firstname: string;
  pseudo: string;
  birthDate: string;
  zipcode: string;
  profilPicture: File;
  address: {
    street: string;
    ZIPCode: string;
    city: string;
  };
  gender: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public addresses!: IAddress[];
  public registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private addressService: AddressService,
    private toast: ToastrService,
    private router: Router
  ) {
    this.registerForm = this.createRegisterForm();
  }

  ngOnInit(): void {
    this.addressService.getAddresses().subscribe(
      (addresses: IAddress[]) => {
        this.addresses = addresses['hydra:member'];
      }
    );
  }

  private createRegisterForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      pseudo: ['', Validators.required],
      birthDate: ['', Validators.required],
      zipcode: ['', Validators.required],
      profilPicture: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        ZIPCode: ['', Validators.required],
        city: ['', Validators.required],
      }),
      gender: ['', Validators.required],
    });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.registerForm.get('profilPicture')?.setValue(file);
      this.previewFile(file);
    }
  }

  previewFile(file: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // If you want to do something with the preview, you can add logic here
    };
  }

  onSubmit(): void {
    this.userService.addUser(this.registerForm)
      .subscribe(
        () => {
          this.toast.success('Inscription réussie');
          this.router.navigate(['/login']);
        },
        (err) => {
          let duplicateMail: string = err.error['hydra:description'].includes('1062 Duplicata du champ');
          if (duplicateMail) {
            this.toast.error("Echec de l'inscription, email déjà existant");
          } else {
            this.toast.error("Echec de l'inscription, veuillez vérifier vos informations");
          }
        }
      );
  }
}

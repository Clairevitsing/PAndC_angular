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

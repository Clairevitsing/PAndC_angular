export interface IUser {
  id: number,
  gender: boolean,
  email: string,
  roles: string[],
  password:string,
  pseudo: string,
  lastname: string,
  firstname: string,
  birthDate: Date,
  profilPicture: string
}

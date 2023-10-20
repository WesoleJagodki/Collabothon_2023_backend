//user_id
//first_name
//last_name
//email
//password
//date_of_birth
//sex

export class CreateUsersDto {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  date_of_birth: string;
  sex: string;
}
export class CreateUsersResponse {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: string;
  sex: string;
}
export class UpdateUserDto {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  date_of_birth: string;
  sex: string;
}
export class UpdateUserResponse {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: string;
  sex: string;
}
export class GetUsersDto {
  user_id: number;
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: string;
  sex: string;
}

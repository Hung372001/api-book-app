import { IsNotEmpty, IsEmail, IsString, Length } from 'class-validator';

export class AuthDto {
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 20, { message: 'Mat Khau dai tu 3 den 20 ky tu' })
  public password: string;

  @IsNotEmpty()
  @IsString()
  public FirstName: string;

  @IsNotEmpty()
  @IsString()
  public LastName: string;

  @IsNotEmpty()
  @IsString()
  public phoneNumber: string;
}
export class AuthDtoLogin {
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 20, { message: 'Mat Khau dai tu 3 den 20 ky tu' })
  public password: string;
}

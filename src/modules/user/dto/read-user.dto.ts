import { IsNumber, IsEmail, IsString } from 'class-validator';
import { ReadUserDetailsDto } from './read-user-details.dto';
import { Type, Exclude, Expose } from 'class-transformer';
import { type } from 'os';
import { ReadRoleDto } from 'src/modules/role/dtos';

@Exclude()
export class ReadUserDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsEmail()
  readonly email: string;

  @Expose()
  @IsString()
  readonly username: string;

  @Expose()
  @Type(type => ReadUserDetailsDto)
  readonly details: ReadUserDetailsDto;

  @Expose()
  @Type(type => ReadRoleDto)
  readonly roles: ReadRoleDto[];
}

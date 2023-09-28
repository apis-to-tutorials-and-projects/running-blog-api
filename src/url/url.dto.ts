import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsNumber,
  Min,
  IsArray,
  ArrayMinSize,
  IsBoolean,
  isNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ShortenURLDto {
  @IsString()
  @IsNotEmpty()
  longUrl: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(2)
  keywords: string[];

  @IsOptional()
  @IsBoolean()
  bookmark: boolean = false;
}

export class QueryParams {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  items?: number;

  @IsOptional()
  @Type(() => Boolean)
  @IsNumber()
  bookmark?: boolean;
}

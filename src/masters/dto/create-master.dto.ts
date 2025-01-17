import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, Length, Max, Min } from "class-validator";
import { DegreeType } from "../degree.enum";

export class CreateMasterDto {
    @IsString()
    @IsNotEmpty()
    @Length(2, 150)
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsNumber()
    @IsNotEmpty()
    @Min(30)
    @Max(70)
    age: number;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsBoolean()
    @IsOptional()
    isAcademic: boolean;

    @IsEnum(DegreeType)
    @IsNotEmpty()
    degree: DegreeType;
}

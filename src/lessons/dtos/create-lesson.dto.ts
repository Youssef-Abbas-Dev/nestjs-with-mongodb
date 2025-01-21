import { IsNotEmpty, IsString } from "class-validator";

export class CreateLessonDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    master: string;
}
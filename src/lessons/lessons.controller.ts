import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { CreateLessonDto } from './dtos/create-lesson.dto';

@Controller('api/lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) { }

  @Post()
  public createNewLesson(@Body() body: CreateLessonDto) {
    return this.lessonsService.createLesson(body);
  }

  @Get()
  public getAllLessons() {
    return this.lessonsService.findAll();
  }

  @Get("/:id")
  public getSingleLesson(@Param("id") id: string) {
    return this.lessonsService.findOne(id);
  }
}

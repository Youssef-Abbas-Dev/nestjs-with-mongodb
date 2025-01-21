import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Lesson } from './lesson.scehma';
import { Model } from 'mongoose';
import { CreateLessonDto } from './dtos/create-lesson.dto';

@Injectable()
export class LessonsService {
    constructor(@InjectModel(Lesson.name) private readonly lessonModel: Model<Lesson>) {}

    public async createLesson(createLessonDto: CreateLessonDto) {
      const lesson = await this.lessonModel.create(createLessonDto);
      return lesson;
    }

    public findAll() {
        return this.lessonModel.find().populate("master");
    }

    public findOne(lessonId: string) {
        return this.lessonModel.findById(lessonId).populate("master");
    }
}

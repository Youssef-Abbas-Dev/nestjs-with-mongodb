import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { StudentsModule } from './students/students.module';
import { MastersModule } from './masters/masters.module';
import { LessonsModule } from './lessons/lessons.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    EmployeesModule, 
    StudentsModule, 
    MastersModule, 
    LessonsModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: "mongodb://127.0.0.1:27017",
        dbName: "nest-db"
      })
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { MastersService } from './masters.service';
import { MastersController } from './masters.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Master, MasterSchema } from './master.schema';

@Module({
  controllers: [MastersController],
  providers: [MastersService],
  imports: [MongooseModule.forFeature([
    {
      name: Master.name,
      schema: MasterSchema
    }
  ])]
})
export class MastersModule { }

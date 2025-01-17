import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';
import { Master } from './master.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MastersService {

  constructor(@InjectModel(Master.name) private readonly masterModel: Model<Master>) {}

  public async create(createMasterDto: CreateMasterDto) {
    const master = await this.masterModel.create(createMasterDto);
    return master;
  }

  public findAll() {
    return this.masterModel.find();
  }

  public async findOne(masterId: string) {
    const master = await this.masterModel.findById(masterId);
    if(!master) throw new NotFoundException("master not found");
    return master
  }

  public async update(id: string, updateMasterDto: UpdateMasterDto) {
    const updatedMaster = await this.masterModel.findByIdAndUpdate(id, { $set: updateMasterDto }, { new: true });
    return updatedMaster;
  }

  public async remove(id: string) {
    await this.masterModel.findByIdAndDelete(id);
    return { message: 'master deleted' }
  }
}

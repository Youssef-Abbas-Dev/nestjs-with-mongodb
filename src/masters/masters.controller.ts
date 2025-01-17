import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { MastersService } from './masters.service';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';

@Controller('api/masters')
export class MastersController {
  constructor(private readonly mastersService: MastersService) {}

  @Post()
  create(@Body() createMasterDto: CreateMasterDto) {
    return this.mastersService.create(createMasterDto);
  }

  @Get()
  findAll() {
    return this.mastersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mastersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMasterDto: UpdateMasterDto) {
    return this.mastersService.update(id, updateMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mastersService.remove(id);
  }
}

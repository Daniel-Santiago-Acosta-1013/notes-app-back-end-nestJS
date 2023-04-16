import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserDataService } from '../services/userData.service';
import { CreateUserDataDto } from '../dto/create-user-data.dto';
import { UpdateUserDataDto } from '../dto/update-user-data.dto';

@Controller('users')
export class UserDataController {
  constructor(private readonly userService: UserDataService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDataDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDataDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}

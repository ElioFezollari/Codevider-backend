import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CatsService } from './cats.service';

import { CreateCatDto } from './cats.model';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService:CatsService){}

    @Get()
    async getAllCats(){
        return await this.catsService.getAllCats();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async addCat(@Body() catData: CreateCatDto) {
        return await this.catsService.insertCat(catData);
    }
}

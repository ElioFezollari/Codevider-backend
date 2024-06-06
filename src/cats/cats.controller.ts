import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CatsService } from './cats.service';

import { CreateCatDto } from './cats.model';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService:CatsService){}

    @Get()
    async getAllCats(){
        return await this.catsService.getAllCats();
    }

    @Get(':id')
    async getOneCat(@Param('id') catId:string){
        return await this.catsService.getOneCat(catId)
    }
    @Post()
    @UsePipes(new ValidationPipe())
    async addCat(@Body() catData: CreateCatDto) {
        return await this.catsService.insertCat(catData);
    }
}

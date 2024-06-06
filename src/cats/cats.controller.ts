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

    @Get(':breed')
    async getcatByBreed(@Param('breed') breedName:string){
        return await this.catsService.getCatByBreed(breedName)
    }
    @Post()
    @UsePipes(new ValidationPipe())
    async addCat(@Body() catData: CreateCatDto) {
        return await this.catsService.insertCat(catData);
    }
}

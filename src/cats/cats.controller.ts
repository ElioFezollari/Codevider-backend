import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
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
    async getCatByBreed(@Param('breed') breedName:string){
        return await this.catsService.getCatByBreed(breedName)
    }
    @Post()
    @UsePipes(new ValidationPipe())
    async addCat(@Body() catData: CreateCatDto) {
        return await this.catsService.addCat(catData);
    }
    
    @Patch(':id')
    async updateCat(@Param('id') catId:string,@Body() catData:CreateCatDto){
        return await this.catsService.updateCat(catId,catData)
    }

    @Delete(':id')
    async deleteCat(@Param('id') catId:string){
        return await this.catsService.deleteCat(catId);
    }
}
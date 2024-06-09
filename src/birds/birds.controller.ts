import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BirdsService } from './birds.service';
import { CreateBirdDto } from './birds.model';

@Controller('birds')
export class BirdsController {
    constructor(private readonly birdsService:BirdsService){}

    @Get()
    async getAllBirds(){
        return await this.birdsService.getAllBirds();
    }

    @Get(':species')
    async getBirdBySpecies(@Param('species') speciesName:string){
        return await this.birdsService.getBirdBySpecies(speciesName)
    }
    @Post()
    @UsePipes(new ValidationPipe())
    async addBird(@Body() birdData: CreateBirdDto) {
        return await this.birdsService.addBird(birdData);
    }
    
    @Patch(':id')
    async updateBird(@Param('id') birdId:string,@Body() birdData:CreateBirdDto){
        return await this.birdsService.updateBird(birdId,birdData)
    }

    @Delete(':id')
    async deleteBird(@Param('id') birdId:string){
        return await this.birdsService.deleteBird(birdId);
    }
}

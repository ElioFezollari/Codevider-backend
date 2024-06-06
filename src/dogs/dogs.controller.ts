import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dogs.model';


@Controller('dogs')
export class DogsController {
    constructor(private readonly dogService:DogsService){}

    @Get()
    async getAllDogs(){
        return await this.dogService.getAllDogs();
    }

    @Get(':breed')
    async getDogByBreed(@Param('breed') breedName:string){
        return await this.dogService.getDogByBreed(breedName)
    }
    @Post()
    @UsePipes(new ValidationPipe())
    async addCat(@Body() dogData: CreateDogDto) {
        return await this.dogService.addDog(dogData);
    }
    
    @Patch(':id')
    async updateDog(@Param('id') dogId:string,@Body() dogData:CreateDogDto){
        return await this.dogService.updateDog(dogId,dogData)
    }

    @Delete(':id')
    async deleteDog(@Param('id') dogId:string){
        return await this.dogService.deleteDog(dogId);
    }
}


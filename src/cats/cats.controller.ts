import { Body, Controller, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { CatsService } from './cats.service';

import { CreateCatDto } from './cats.model';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService:CatsService){}

    @Post()
    @UsePipes(new ValidationPipe())
    async addCat(@Body() catData: CreateCatDto) {
        return await this.catsService.insertCat(catData);
    }
}

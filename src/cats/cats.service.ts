import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {  CreateCatDto } from './cats.model';
import { Model } from 'mongoose';
import { Levels, Size } from 'src/enums';
@Injectable()
export class CatsService {
    constructor(
        @InjectModel('Cat') private readonly catModel: Model<any> 
    ) {}

    async insertCat(catData: CreateCatDto) {
        try {
            const newCat = new this.catModel(catData);
            const result = await newCat.save();
            return result.breed_name as string;
        } catch (error) {
            return { error: error.message }; 
        }
    }
}
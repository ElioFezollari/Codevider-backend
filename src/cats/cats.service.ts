import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCatDto } from './cats.model';
import { Model } from 'mongoose';
import { Levels, Size } from 'src/enums';
@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<any>) {}

  async insertCat(catData: CreateCatDto) {
    try {
      const newCat = new this.catModel(catData);
      const result = await newCat.save();
      return result.breed as string;
    } catch (error) {
      return { error: error.message };
    }
  }
  async getCatByBreed(breed: string) {
    const cat = await this.catModel.findOne({ breed:breed }).exec();
    if(!cat){
        throw new NotFoundException('Could not find cat')
    }
    return this.mapCat(cat)
  }
  async getAllCats() {
    const cats = await this.catModel.find().exec();
    return cats.map((cat)=>this.mapCat(cat))
  }


  // Utility
  private async findCat(id: string): Promise<CreateCatDto> {
    let cat: CreateCatDto;
    try {
      cat = await this.catModel.findById(id);
    } catch (error) {
      throw new NotFoundException("Could not find cat");
    }
    if (!cat) {
      throw new NotFoundException('Could not find cat');
    }
    return cat;
  }
  private mapCat(cat) {
    return {
        id: cat.id,
        breed: cat.breed,
        origin: cat.origin,
        description: cat.description,
        imageUrl: cat.imageUrl,
        size: cat.size,
        averageLifeSpan: cat.averageLifeSpan,
        coatColors: cat.coatColors,
        coatColorHex: cat.coatColorHex,
        averageWeightKg: cat.averageWeightKg,
        activityLevel: cat.activityLevel,
        groomingNeeds: cat.groomingNeeds,
        socializationNeeds: cat.socializationNeeds,
        healthIssues: cat.healthIssues,
        intelligenceLevel: cat.intelligenceLevel,
        childFriendly: cat.childFriendly,
        history: cat.history,
    };
}
}

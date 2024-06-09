import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCatDto } from './cats.model';
import { Model } from 'mongoose';
@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<any>) {}

  async addCat(catData: CreateCatDto) {
    try {
      const newCat = new this.catModel(catData);
      const result = await newCat.save();
      return {breed: result.breed};
    } catch (error) {
      return {message: "Cat added successfully!"}
    }
  }
  async getCatByBreed(breed: string) {
    const cat = await this.catModel.findOne({ breed: breed }).exec();
    if (!cat) {
      throw new NotFoundException('Could not find cat');
    }
    return this.mapCat(cat);
  }
  async getAllCats() {
    const cats = await this.catModel.find().exec();
    return cats.map((cat) => this.mapCat(cat));
  }

  async deleteCat(id: string) {
    const cat = await this.catModel.deleteOne({ _id: id }).exec();
    if (cat.deletedCount === 0) {
      throw new NotFoundException('Cat does not exist');
    } else {
      return { message: 'Cat deleted successfully' };
    }
  }

  async updateCat(id: string, data: CreateCatDto) {
    const cat = await this.catModel.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    if (!cat) {
      throw new NotFoundException('Could not find cat');
    }
    return {message: "Cat edited successfully!"}
  }

  // Utility
  private mapCat(cat ) {
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

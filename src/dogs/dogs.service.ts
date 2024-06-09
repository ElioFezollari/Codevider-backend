import {  NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dogs.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DogsService {
  constructor(@InjectModel('Dog') private readonly dogModel: Model<any>) {}
    async addDog(dogData: CreateDogDto) {
      try {
        const newDog = new this.dogModel(dogData);
        const result = await newDog.save();
        return {message: "Dog added successfully!"}
      } catch (error) {
        return { error: error.message };
      }
    }
    async getDogByBreed(breed: string) {
      const dog = await this.dogModel.findOne({ breed: breed }).exec();
      if (!dog) {
        throw new NotFoundException('Could not find dog');
      }
      return this.mapDog(dog);
    }
    async getAllDogs() {
      const dogs = await this.dogModel.find().exec();
      return dogs.map((dog) => this.mapDog(dog));
    }
  
    async deleteDog(id: string) {
      const dog = await this.dogModel.deleteOne({ _id: id }).exec();
      if (dog.deletedCount === 0) {
        throw new NotFoundException('Dog does not exist');
      } else {
        return { message: 'Dog deleted successfully' };
      }
    }
  
    async updateDog(id: string, data: CreateDogDto) {
      const dog = await this.dogModel.findOneAndUpdate({ _id: id }, data, {
        new: true,
      });
      if (!dog) {
        throw new NotFoundException('Could not find dog');
      }
      return {message: "Dog edited successfully!"}
    }
  
    // Utility
    private mapDog(dog ) {
      return {
        id: dog.id,
        breed: dog.breed,
        origin: dog.origin,
        description: dog.description,
        imageUrl: dog.imageUrl,
        size: dog.size,
        averageLifeSpan: dog.averageLifeSpan,
        coatColors: dog.coatColors,
        coatColorHex: dog.coatColorHex,
        averageWeightKg: dog.averageWeightKg,
        activityLevel: dog.activityLevel,
        groomingNeeds: dog.groomingNeeds,
        socializationNeeds: dog.socializationNeeds,
        healthIssues: dog.healthIssues,
        intelligenceLevel: dog.intelligenceLevel,
        childFriendly: dog.childFriendly,
        history: dog.history,
        preyDrive: dog.preyDrive,
        trainability:dog.trainability,
        temperament:dog.temperament
      };
    }
}

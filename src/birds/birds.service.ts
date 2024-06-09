import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBirdDto } from './birds.model';

@Injectable()
export class BirdsService {
  constructor(@InjectModel('Bird') private readonly birdModel: Model<any>) {}

  async addBird(birdData: CreateBirdDto) {
    try {
      const newBird = new this.birdModel(birdData);
      const result = await newBird.save();
      return { species: result.species };
    } catch (error) {
      return {message: "Bird added successfully!"}
    }
  }
  async getBirdBySpecies(species: string) {
    const bird = await this.birdModel.findOne({ species }).exec();
    if (!bird) {
      throw new NotFoundException('Could not find bird');
    }
    return this.mapBird(bird);
  }
  async getAllBirds() {
    const birds = await this.birdModel.find().exec();
    return birds.map((bird) => this.mapBird(bird));
  }

  async deleteBird(id: string) {
    const bird = await this.birdModel.deleteOne({ _id: id }).exec();
    if (bird.deletedCount === 0) {
      throw new NotFoundException('Bird does not exist');
    } else {
      return { message: 'Bird deleted successfully' };
    }
  }

  async updateBird(id: string, data: CreateBirdDto) {
    const bird = await this.birdModel
      .findOneAndUpdate({ _id: id }, data, {
        new: true,
      })
      .exec();
    if (!bird) {
      throw new NotFoundException('Could not find bird');
    }
    return {message: "Bird edited successfully!"}
  }

  // Utility
  private mapBird(bird) {
    return {
      id: bird.id,
      species: bird.species,
      commonName: bird.commonName,
      family:bird.family,
      order:bird.order,
      genus:bird.genus,
      description: bird.description,
      imageUrl:bird.imageUrl,
      colors:bird.colors,
      colorHex:bird.colorHex,
      wingspanInCm:bird.wingspanInCm,
      habitat:bird.habitat,
      diet:bird.diet,
      migration:bird.migration,
      locations:bird.locations,
      temperament:bird.temperament,
      predators:bird.predators,
      history:bird.history
    };
  }
}

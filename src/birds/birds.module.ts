import { Module } from '@nestjs/common';
import { BirdsController } from './birds.controller';
import { BirdsService } from './birds.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BirdSchema } from './birds.model';

@Module({
  imports:[MongooseModule.forFeature([{name:'Bird',schema:BirdSchema}])],
  controllers: [BirdsController],
  providers: [BirdsService]
})
export class BirdsModule {}

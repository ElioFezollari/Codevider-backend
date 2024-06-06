import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DogSchema } from './dogs.model';

@Module({
  imports:[MongooseModule.forFeature([{name:'Dog',schema:DogSchema}])],
  controllers: [DogsController],
  providers: [DogsService]
})
export class DogsModule {}

import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { BirdsModule } from './birds/birds.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // Config Module lejon perdorimin e  environment variables, ndersa MongooseModule lidhjen me mongodb nepermjet mongoose.
  imports: [CatsModule, DogsModule, BirdsModule,ConfigModule.forRoot(),MongooseModule.forRoot(process.env.MONGOCONNECTION)],
})
export class AppModule {}

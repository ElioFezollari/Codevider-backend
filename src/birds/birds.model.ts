import * as mongoose from 'mongoose'
import { Temperament } from 'src/enums'
import { IsNumber,IsString, IsOptional,IsUrl, IsEnum, } from 'class-validator'
export const BirdSchema = new mongoose.Schema({
    species:{type:String,required:true,unique:true},
    commonName:{type:String,required:true},
    family:{type:String,required:true},
    order:{type:String,required:true},
    genus:{type:String,required:true},
    description:{type:String,required:true},
    imageUrl:{type:String,required:true},
    locations:{type:[String],required:true},
    colors:[String],
    colorHex:[String],
    wingspanInCm:String,
    habitat:String,
    diet:String,
    migration:String,
    temperament:{type:String,enum:Temperament},
    predators:String,
    history:String,
})

export class CreateBirdDto {
    @IsString({message:'Please enter a valid bird species'})
    species: string;

    @IsString({message:'Please enter a valid bird common name'})
    commonName: string;

    @IsString({message:'Please enter a valid bird family '})
    family: string;

    @IsString({message:'Please enter a valid bird order'})
    order: string;
    
    @IsString({message:'Please enter a valid bird genus'})
    genus: string;

    @IsString({message:'Please enter a valid description'})
    description: string;
    
    @IsUrl()
    imageUrl:string;

    @IsOptional()
    @IsString()
    colors: string[];

    @IsOptional()
    @IsString()
    colorHex: string[];

    @IsOptional()
    @IsNumber()
    wingspanInCm: number;

    @IsOptional()
    @IsString()
    habitat:string;

    @IsOptional()
    @IsString()
    diet:string;
    
    @IsOptional()
    @IsString()
    migration:string
    
    @IsString()
    locations:string[]

    @IsOptional()
    @IsEnum(Temperament)
    temperament:Temperament

    @IsOptional()
    @IsString()
    predators:String

    @IsOptional()
    @IsString()
    history:String
    
}

import * as mongoose from 'mongoose'
import { Difficulty, Levels, Temperament } from 'src/enums'
import { Size  } from 'src/enums'
import { IsNumber,IsString,IsEnum,IsBoolean, IsOptional,IsUrl, IsArray, } from 'class-validator'
export const DogSchema = new mongoose.Schema({
    breed:{type:String,required:true,unique:true},
    origin:{type:String,required:true},
    description:{type:String,required:true},
    imageUrl:{type:String,require:true},
    size:{type:String,enum:Size,default:'Medium'},
    averageLifeSpan:Number,
    coatColors:[String],
    coatColorHex:[String],
    averageWeightKg:Number,
    activityLevel:{type:String,enum:Levels},
    groomingNeeds:{type:String,enum:Levels},
    socializationNeeds:{type:String,enum:Levels},
    healthIssues:{type:String,enum:Levels},
    intelligenceLevel:{type:String,enum:Levels},
    childFriendly:Boolean,
    history:String,
    preyDrive:{type:String,enum:Levels},
    trainability:{type:String,enum:Difficulty},
    temperament:{type:String,enum:Temperament,required:true},
})

export class CreateDogDto {
    @IsString({message:'Please enter a valid breed name'})
    breed: string;

    @IsString({message:'Please enter a valid origin'})
    origin: string;

    @IsString({message:'Please enter a valid description'})
    description: string;
    
    @IsOptional()
    @IsEnum(Size)
    size: Size;

    @IsUrl()
    imageUrl:string;

    @IsOptional()
    @IsNumber()
    averageLifeSpan: number;

    @IsOptional()
    @IsArray({message:"Colors must be a string"})
    coatColors: string[];

    @IsOptional()
    @IsArray({message:"ColorHex must be a string"})
    coatColorHex: string[];

    @IsOptional()
    @IsNumber()
    averageWeightKg: number;

    @IsOptional()
    @IsEnum(Levels)
    activityLevel: Levels;

    @IsOptional()
    @IsEnum(Levels)
    groomingNeeds: Levels;

    @IsOptional()
    @IsEnum(Levels)
    socializationNeeds: Levels;

    @IsOptional()
    @IsEnum(Levels)
    healthIssues: Levels;

    @IsOptional()
    @IsEnum(Levels)
    intelligenceLevel: Levels;

    @IsOptional()
    @IsBoolean()
    childFriendly: boolean;

    @IsOptional()
    @IsString()
    history: string;

    @IsOptional()
    @IsEnum(Levels)
    preyDrive:Levels;
    
    @IsOptional()
    @IsEnum(Difficulty)
    trainability:Difficulty;
    
    @IsEnum(Temperament)
    temperament:Temperament
    
}

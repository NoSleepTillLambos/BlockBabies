import {prop, getModelForClass} from '@typegoose/typegoose';


// create model from class
class Locations {

    @prop({required: true})
    public location?: string;

    @prop({required: true})
    public address?: string;

}

export const LocationModel = getModelForClass(Locations);
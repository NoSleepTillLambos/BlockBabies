import {prop, getModelForClass} from '@typegoose/typegoose';


// create model from class
class Materials {

    @prop({required: true})
    public name?: string;

    @prop({required: true})
    public category?: [string];

    @prop({required: true})
    public height?: number;

    @prop({required: true})
    public type?: string;

    @prop({required: true})
    public image?: string;
}

export const MaterialCategory = getModelForClass(Materials);
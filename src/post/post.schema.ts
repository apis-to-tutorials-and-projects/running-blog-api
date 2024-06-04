
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UrlDocument = Url & Document;

@Schema()
export class Url {
    @Prop()
    id: number;

    @Prop()
    urlCode: string;

    @Prop()
    longUrl: string;

    @Prop()
    shortUrl: string;

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    keywords: string[];

    @Prop()
    bookmark: boolean;
}

export const UrlSchema = SchemaFactory.createForClass(Url); 
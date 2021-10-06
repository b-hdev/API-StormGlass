import config, { IConfig } from 'config';
import mongoose, { Mongoose } from 'mongoose';

const dbConfig: IConfig = config.get('App.database');

export const connect = async (): Promise<Mongoose> => 
    await mongoose.connect(dbConfig.get('mongoURL'), {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 10000,
        autoIndex: false,
		poolSize: 5,
    });

export const close = (): Promise<void> => mongoose.connection.close();
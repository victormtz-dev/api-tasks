import {config} from 'dotenv'
config();

export default {
    port: process.env.PORT || 4000,
    db: process.env.MONGODB_URI || 'mongodb://localhost/taskapi',
}
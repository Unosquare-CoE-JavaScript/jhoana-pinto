import { MongoClient } from 'mongodb'
import { MONGO_PW, MONGO_USER } from '../../keys';

// in API files you don't return components
// /api/new-meetup

async function handler(req, res){
    if(req.method==='POST'){
        const data = req.body;

        const client = await MongoClient.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PW}@cluster0.ntpvn.mongodb.net/meetups?retryWrites=true&w=majority`)
        const db = client.db();

        const meetupsCollections = db.collection('meetups');

        const result = await meetupsCollections.insertOne(data);
        console.log(result);
        client.close();

        res.status(201).json({message: 'Meetup inserted!'});
    }
}

export default handler;
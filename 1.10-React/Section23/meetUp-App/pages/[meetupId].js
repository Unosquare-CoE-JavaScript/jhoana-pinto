import { MongoClient, ObjectId } from 'mongodb'; 
import { Fragment, useContext } from "react";
import { MONGO_PW, MONGO_USER } from '../keys';
import MeetupDetail from "../components/meetups/MeetUpDetail";

function MeetupDetails(props){
    return (
        <MeetupDetail 
            image={props.meetupData.image}
            title={props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}/>
    )
}

export async function getStaticPaths(){

    const client = await MongoClient.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PW}@cluster0.ntpvn.mongodb.net/meetups?retryWrites=true&w=majority`)
    const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context){
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PW}@cluster0.ntpvn.mongodb.net/meetups?retryWrites=true&w=majority`)
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    console.log(meetupsCollection)

     const selectedMeetup = await meetupsCollection.findOne({
        _id: ObjectId(meetupId),
    });

    client.close();

    return {
        // this will set the props required as a parametter in the HomePage component
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            },
        // expects a number which is the number of seconds nextjs will wait until it regenerates this page for an incoming request
        //revalidate:1
        }
    }
}

export default MeetupDetails;
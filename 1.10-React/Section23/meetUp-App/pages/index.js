import { MongoClient } from 'mongodb'; 
import MeetupList from '../components/meetups/MeetupList';
import { MONGO_PW, MONGO_USER } from '../keys';
import Head from 'next/head';
import { Fragment } from 'react';

function HomePage(props){
  // THIS IS NO LONGER NECESSARY BC OF getStaticProps()
  /* const [loadedMeetups, setLoadedMeetups] = useState([]);
  // this is done bc nextjs doesn't wait for the data to be fetched
  useEffect(()=>{
    //send a http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []) 
    return <MeetupList meetups={loadedMeetups}/>*/
    return <Fragment>
      <Head>
        <title>Meetups</title>
        <meta name='description' content='Cool meetups'/>
      </Head>
      <MeetupList meetups={props.meetups}/>
      </Fragment>
}

/* export async function getServerSideProps(context){
  const req = context.req;
  const res = context.res;

  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
} */

 
// this is a reserved name. Nextjs will look for this function in the main page file and if founded it'll be executed during the pre-rendering process (before all other functions)
// it expects a promise
export async function getStaticProps(){

  const client = await MongoClient.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PW}@cluster0.ntpvn.mongodb.net/meetups?retryWrites=true&w=majority`)
  const db = client.db();
  const meetupsCollections = db.collection('meetups');

  const meetups = await meetupsCollections.find().toArray();

  client.close();
  console.log(meetups)

  return {
    // this will set the props required as a parametter in the HomePage component
      props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    // expects a number which is the number of seconds nextjs will wait until it regenerates this page for an incoming request
    revalidate:1
  }
}

export default HomePage
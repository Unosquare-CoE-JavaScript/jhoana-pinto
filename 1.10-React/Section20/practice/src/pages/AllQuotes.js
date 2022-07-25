import { useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList'
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound'
import useHttp from '../hooks/use-http'
import { getAllQuotes } from '../lib/api'

export function AllQuotes(){

    const { sendRequest, status, data:loadedQuotes, error } = useHttp(getAllQuotes, true);

    useEffect(()=>{ //this will execute the request whenever this component renders
        sendRequest();
    }, [sendRequest]);

    if(status === 'pending'){
        return ( 
        <div className='centered'>
            <LoadingSpinner />
        </div>)
    }

    if(error){
        return <p className='centred focused'>{error}</p>
    }

    if(status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)){
        return <NoQuotesFound />
    }

    return (
        <QuoteList quotes={loadedQuotes}/>
    )
}
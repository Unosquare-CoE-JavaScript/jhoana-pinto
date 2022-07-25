import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm'
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';


export function NewQuote(){
    const {sendRequest, status} = useHttp(addQuote);
    const history = useHistory();   // useHistory aloows us to change the browser history

    useEffect(()=>{
        if(status === 'completed'){
            history.push('/quotes');// the push methon will allow the user to go bakc in their browser history
        }
    },[status, history])

    function addQuoteHandler(quoteData){
        // with this code a new comment will be submitted but the browser will authomatically go back to 'quotes'
        sendRequest(quoteData);
    }
    return <QuoteForm isLoading={status==='pending'} onAddQuote={addQuoteHandler}/>
}
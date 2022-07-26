import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe('Async component', () => {
    test('renderposts if req succeds', async () => {
        //this will act as a mock of the fetch function of the Async.js file
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            // this emulates the reponse of the desired function
            json: async () => [{id:'1', title: 'First mock'}]
        });
        render(<Async/>);

       // const listItemElements = screen.getAllByRole('listitem');
       // find methods returns a promise
       const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    })
})
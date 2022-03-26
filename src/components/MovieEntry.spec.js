import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import { configure } from '@testing-library/dom';
import MovieEntry from "./MovieEntry";

configure({
    testIdAttribute: 'data-hook',
});

describe.skip('MovieEntry', () => {
    it('should open modal when clicking on one of the movies', async () => {
        const movie = createMovie({title: 'Armageddon'})
        // TODO encapsulate everything in a driver
        render(<MovieEntry movie={movie} />)
        fireEvent.click(screen.getByTestId(`movie-entry-read-more-${movie.id}`))
        await waitFor(screen.getByTestId('movie-modal').toExist())

        expect(screen.getByTestId('movie-modal-title')).toEqual(movie.title)
    });
});


/////// THIS SHOULD BE IN A DIFFERENT AREA (I'd call in context)

const createMovie = ({title = "2001: A Space Odyssey"}) => {
    return {"id":"207856",title,"image":"https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd8H3yW84QBZ7bXkGlzSmeKjpS8gUEV7S_zPN4qVOX7mQ0SNpyHlOkh0WGGlrARjpOZPFlZXyU4t5E8phADO9rq80g.jpg?r=43c","synopsis":"While investigating the appearance of mysterious monoliths throughout the universe, two astronauts battle their ship's intelligent computer system.New on 2020-06-18","rating":"8.3","type":"movie","released":"1968","runtime":"2h28m","largeimage":"https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbjUFYCF6qVcxBNZXhL_HIGhaNXLosDyYyg6v3WP9H1FLsGMBtJx1uy9R8pEMgz0gGzPLlcF9lgH5WjpB_jl4p6DmlDw.jpg?r=43c","unogsdate":"2020-06-18","imdbid":"tt0062622","download":"0"}
}
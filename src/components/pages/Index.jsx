import Hero from '../Hero';
import Carousel from '../Carousel';
import Ubication from '../Ubication';

function Index() {
    //pagina principal retorna tres componentes
    return (
        <div>
            <Hero/>
            <Carousel/>
            <Ubication/>
        </div>
    );
}

export default Index;
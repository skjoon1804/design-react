import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import Menu from '../src/components/Menu/Menu'
import SpeakerSearchBar from '../src/components/SpeakerSearchBar/SpeakerSearchBar'
import Speakers from '../src/components/Speakers/Speakers'

function Page() {
    return (
        <div>
            <Header />
            <Menu />
            <SpeakerSearchBar />
            <Speakers />
            <Footer />
        </div>
    );
}
export default Page;
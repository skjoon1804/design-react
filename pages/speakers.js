import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'
import Menu from '../src/components/Menu/Menu'
import SpeakerSearchBar from '../src/components/SpeakerSearchBar/SpeakerSearchBar'
import Speakers from '../src/components/Speakers/Speakers'
import Layout from '../src/components/Layout/Layout'

function Page() {
    return (
        <Layout>
            <Speakers />
        </Layout>
    );
}
export default Page;
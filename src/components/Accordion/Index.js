import Layout from '../Layout/Layout';
import Answers from './Answers';

import './styles.css';
import '../../assets/icons/fontAwesome/all.min.css';

export default function Index() {
  return (
    <main>
      <Layout className="accordionSection">
        <h3 className="title">Questions And Answers About Login</h3>
        <Answers />
      </Layout>
    </main>
  );
}

import Reviews from './Reviews';
import './styles.css';
import '../../assets/icons/fontAwesome/all.min.css';

export default function Index() {
  return (
    <main>
      <section className="sectionCenter">
        <section className="title">
          <h2 className="titleReviews">our reviews</h2>
          <span className="underline"></span>
        </section>
        <Reviews />
      </section>
    </main>
  );
}

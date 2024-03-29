import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <p className="font-light">
        This site was created to demonstrate: Look on my works, ye mighty, and
        despair!
      </p>
      <Link to={routes.home()}>Return home</Link>
    </>
  );
};

export default AboutPage;

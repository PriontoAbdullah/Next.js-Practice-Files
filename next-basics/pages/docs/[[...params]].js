import { useRouter } from 'next/router';
import NavBar from '../../components/Navbar';

const Docs = () => {
  const router = useRouter();
  const { params = [] } = router.query;

  {
    /* Catch all routes  */
  }
  console.log(params);
  const [feature, concept, example] = params;
  console.log(feature, concept, example);

  if (params.length === 3) {
    return (
      <>
        <NavBar />
        <h1>
          Docs Features {feature} of Concept {concept} of Example {example}.
        </h1>
      </>
    );
  } else if (params.length === 2) {
    return (
      <>
        <NavBar />
        <h1>
          Docs Features {feature} of Concept {concept}.
        </h1>
      </>
    );
  } else if (params.length === 1) {
    return (
      <>
        <NavBar />
        <h1>Docs Features {feature}.</h1>
      </>
    );
  } else {
    return (
      <>
        <NavBar />
        <h1>Docs Home Page.</h1>
      </>
    );
  }
};

export default Docs;

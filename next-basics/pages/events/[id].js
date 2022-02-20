import NavBar from '../../components/navbar';

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { id } = params;

  const response = await fetch(`http://localhost:4000/events/${id}`);

  const data = await response.json();
  console.log(`Pre-rendering category ${id}`);

  return {
    props: {
      eventData: data,
    },
  };
};

const EventDetails = ({ eventData }) => {
  return (
    <>
      <NavBar />
      <h1> Showing Event Details: {eventData.id}</h1>

      <div key={eventData.id}>
        <h2>{eventData.title}</h2>
        <p>{eventData.description}</p>
        <p>{eventData.category}</p>
        <p>{eventData.date}</p>
      </div>
    </>
  );
};

export default EventDetails;

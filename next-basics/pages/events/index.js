import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const getServerSideProps = async (context) => {
  const { category } = context.query;

  // Pre-Rendering with CSR
  const querystring = category ? 'category=sports' : '';

  const response = await fetch(`http://localhost:4000/events?${querystring}`);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
};

export default function Events({ eventList }) {
  const router = useRouter();
  const [event, setEvent] = useState(eventList);

  // Client Side Data Fetching - SSR + CSR
  const fetchSportsEvents = async () => {
    const response = await fetch(
      'http://localhost:4000/events?category=sports'
    );
    const data = await response.json();
    setEvent(data);
    router.push('/events?category=sports', undefined, { shallow: true });
  };

  return (
    <>
      <h2>List of Events</h2>
      <button onClick={fetchSportsEvents}>Events Filter - Sports</button>
      <ul>
        {event?.map((event) => (
          <li key={event.id}>
            <Link href="/events/[id]" as={`/events/${event.id}`}>
              <a>
                <h2>{event.title}</h2>
              </a>
            </Link>
            <p>{event.description}</p>
            <p>{event.category}</p>
            <small>{event.date}</small>
          </li>
        ))}
      </ul>
    </>
  );
}

import { useEffect } from "react"

const Events = (props) => {
  const [events, setEvents] = props.evtState;

  useEffect(() => {
    const getEventsByMonth = async () => {
      if (events.length < 1) {
        const eventsFromAPI = await fetchEvents();
        setEvents(eventsFromAPI);
      }
    }

    getEventsByMonth();
  }, []);

  // Fetch events
  const fetchEvents = async () => {
    const res = await fetch('/events/json');
    const data = await res.json();

    return data
  }

  return (
    <>
      <section className="bg-dark text-light p-5 text-center">
        <h1>News and Events</h1>
      </section>
      <section id="eventSection" className="bg-light text-dark p-5 text-center">
        {(events.length < 1) ? 
          (<h1>Loading...</h1>) :
          events.map((monthlyEvents) => {
            return(
              <div className="container align-items-left">
                <div className="row" id={monthlyEvents.month.replace(/ /g, "").toLowerCase()}>
                  <h1>{monthlyEvents.month}</h1>
                  <br />
                  {monthlyEvents.events.map((evt) => {
                    return(
                      <div className="col-sm-12 col-md-3">
                        <img style={{width: "30vh", height: "30vh", overflow: "hidden", position: "relative"}} 
                          src={evt.image} alt={evt.description}/>
                        <h5>{evt.name}</h5>
                        <p>{evt.description}</p>
                      </div>
                    )
                  })}
                </div>
                <hr />
              </div>
            )
          })
        }       
      </section>
    </>
  )
}

export default Events
import { T, Var, Currency, Num, DateTime, Branch, Plural } from "gt-next";
import Header from "@/components/Header";

const flights = [
  {
    id: 1,
    airline: "Pacific Airways",
    from: "San Francisco",
    fromCode: "SFO",
    to: "Tokyo",
    toCode: "NRT",
    departure: new Date("2026-04-12T08:30:00"),
    arrival: new Date("2026-04-13T12:45:00"),
    durationMin: 675,
    fare: 1245,
    class: "economy" as const,
    stops: 0,
  },
  {
    id: 2,
    airline: "Atlantic Express",
    from: "New York",
    fromCode: "JFK",
    to: "London",
    toCode: "LHR",
    departure: new Date("2026-04-12T19:15:00"),
    arrival: new Date("2026-04-13T07:30:00"),
    durationMin: 435,
    fare: 3890,
    class: "business" as const,
    stops: 0,
  },
  {
    id: 3,
    airline: "Sierra National",
    from: "Los Angeles",
    fromCode: "LAX",
    to: "Mexico City",
    toCode: "MEX",
    departure: new Date("2026-04-14T06:00:00"),
    arrival: new Date("2026-04-14T11:45:00"),
    durationMin: 225,
    fare: 389,
    class: "economy" as const,
    stops: 1,
  },
  {
    id: 4,
    airline: "Meridian First",
    from: "Chicago",
    fromCode: "ORD",
    to: "Paris",
    toCode: "CDG",
    departure: new Date("2026-04-15T17:00:00"),
    arrival: new Date("2026-04-16T08:20:00"),
    durationMin: 500,
    fare: 8750,
    class: "first" as const,
    stops: 0,
  },
  {
    id: 5,
    airline: "Coastal Connect",
    from: "Miami",
    fromCode: "MIA",
    to: "Bogota",
    toCode: "BOG",
    departure: new Date("2026-04-13T14:20:00"),
    arrival: new Date("2026-04-13T18:55:00"),
    durationMin: 275,
    fare: 542,
    class: "economy" as const,
    stops: 2,
  },
  {
    id: 6,
    airline: "Northern Star",
    from: "Seattle",
    fromCode: "SEA",
    to: "Shanghai",
    toCode: "PVG",
    departure: new Date("2026-04-16T10:45:00"),
    arrival: new Date("2026-04-17T15:10:00"),
    durationMin: 725,
    fare: 4200,
    class: "business" as const,
    stops: 1,
  },
];

function formatDuration(min: number) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  return { h, m };
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Disclaimer */}
      <div className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <p className="text-sm text-zinc-400 text-center">
            <T>
              This is an example application. These are not real flights.
            </T>
          </p>
        </div>
      </div>

      <main className="flex-1 max-w-6xl mx-auto px-6 py-10 w-full">
        {/* Search Summary */}
        <section className="mb-8">
          <h1 className="text-2xl font-bold text-zinc-100 mb-2">
            <T>Flight Search Results</T>
          </h1>
          <p className="text-sm text-zinc-400">
            <T>
              <Plural
                n={flights.length}
                singular={<><Num>{flights.length}</Num>{" flight found"}</>}
                plural={<><Num>{flights.length}</Num>{" flights found"}</>}
              />
            </T>
          </p>
        </section>

        {/* Flights */}
        <div className="flex flex-col gap-4">
          {flights.map((flight) => {
            const dur = formatDuration(flight.durationMin);
            return (
              <article
                key={flight.id}
                className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition"
              >
                <T>
                  {/* Top row: airline + class badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-zinc-300 font-medium">
                      <Var>{flight.airline}</Var>
                    </span>
                    <span className="text-xs font-medium px-2.5 py-1 rounded border uppercase tracking-wide bg-zinc-800 border-zinc-700 text-zinc-400">
                      <Branch
                        branch={flight.class}
                        economy="Economy"
                        business="Business"
                        first="First Class"
                      />
                    </span>
                  </div>

                  {/* Route and times */}
                  <div className="grid grid-cols-3 gap-4 items-center mb-4">
                    {/* Departure */}
                    <div>
                      <p className="text-xl font-bold text-zinc-100">
                        <DateTime
                          options={{ timeStyle: "short" }}
                        >
                          {flight.departure}
                        </DateTime>
                      </p>
                      <p className="text-sm text-zinc-400">
                        <Var>{flight.fromCode}</Var>
                      </p>
                      <p className="text-xs text-zinc-500">
                        <Var>{flight.from}</Var>
                      </p>
                    </div>

                    {/* Duration + stops */}
                    <div className="text-center">
                      <p className="text-sm text-zinc-400">
                        <Num>{dur.h}</Num>{"h "}
                        <Num>{dur.m}</Num>{"m"}
                      </p>
                      <div className="border-t border-zinc-700 my-1.5 mx-4" />
                      <p className="text-xs text-zinc-500">
                        <Plural
                          n={flight.stops}
                          zero="Nonstop"
                          singular={<><Num>{flight.stops}</Num>{" stop"}</>}
                          plural={<><Num>{flight.stops}</Num>{" stops"}</>}
                        />
                      </p>
                    </div>

                    {/* Arrival */}
                    <div className="text-right">
                      <p className="text-xl font-bold text-zinc-100">
                        <DateTime
                          options={{ timeStyle: "short" }}
                        >
                          {flight.arrival}
                        </DateTime>
                      </p>
                      <p className="text-sm text-zinc-400">
                        <Var>{flight.toCode}</Var>
                      </p>
                      <p className="text-xs text-zinc-500">
                        <Var>{flight.to}</Var>
                      </p>
                    </div>
                  </div>

                  {/* Fare */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                    <p className="text-xs text-zinc-500">
                      <DateTime options={{ dateStyle: "medium" }}>
                        {flight.departure}
                      </DateTime>
                    </p>
                    <p className="text-2xl font-bold text-zinc-100">
                      <Currency currency="USD">{flight.fare}</Currency>
                    </p>
                  </div>
                </T>
              </article>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-zinc-500">
          <T>Built with General Translation</T>
        </div>
      </footer>
    </div>
  );
}

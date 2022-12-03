import Link from "next/link";
import PriestLeaderCard from "./PriestLeadersCard";

import data from "../data/testimonial.json";

const Testimonial = () => {
  return (
    <main className="ml-36 mt-8">
      {data.map((d) => (
        <PriestLeaderCard
          img={d.img}
          name={d.name}
          post={d.post}
          bibleVerse={d.bibleVerse}
          quote={d.quote}
        />
      ))}
    </main>
  );
};

export default Testimonial;

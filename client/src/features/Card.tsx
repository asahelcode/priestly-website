import Image from "next/image";

interface LeaderCardDetail {
  name: String;
  post: String;
  generation: String;
  img: String;
  bibleVerse: String;
}

const Card = ({
  name,
  post,
  generation,
  image,
  bibleVerse,
  department,
  dob,
  stateOfOrigin,
  level,
  unit,
  personality,
  mentor,
  general,
}) => {
  return (
    <>
      {general && (
        <>
          <main className="m-10 mx-auto w-4/6 flex-col items-center justify-center rounded-lg p-4 shadow-md">
            <img
              src={image}
              alt=""
              className="mx-auto rounded-md object-contain w-full"
            />
            <section className="mt-4 w-full flex-col text-sm font-bold capitalize leading-6">
              <div>Name : {name}</div>
              <div>Unit : {unit}</div>
              <div>Level : {level}</div>
              <div>Department : {department}</div>
              <div>State: {stateOfOrigin}</div>
            </section>
          </main>
        </>
      )}

      {!general && (
        <>
          <main className="m-10 mx-auto w-4/6 flex-col items-center justify-center rounded-lg p-4 shadow-md">
            <img
              src={image}
              alt=""
              className="mx-auto rounded-md object-contain"
            />
            <section className="mt-4 w-full flex-col text-sm font-bold capitalize leading-6">
              <div>Name : {name}</div>
              <div>Post : {post}</div>
              <div>Generation : {generation}</div>
              <div>Bible Verse : {bibleVerse}</div>
              <div>Department : {department}</div>
            </section>
          </main>
        </>
      )}
    </>
  );
};

export default Card;

import { NextPage } from "next";
import Image from "next/image";

interface CardDetail {
  img: string;
  name: string;
  post: string;
  bibleVerse: string;
}

const PriestLeaderCard = ({ img, name, post, bibleVerse, quote }) => {
  return (
    <main className="items-top my-4 mr-10 flex w-fit items-center justify-center rounded-lg p-4">
      <img
        src={img}
        alt=""
        className="h-2/5 w-1/6 rounded-md object-cover shadow-lg"
      />
      <div className="mt-6 ml-10 w-2/5 ">
        <section className="text-2xl text-gray-600">"{quote}"</section>
        <div className="mt-4 leading-8">
          <section>Name: {name}</section>
          <section>Post: {post}</section>
          <section>Bible Verse: {bibleVerse}</section>
        </div>
      </div>
    </main>
  );
};

export default PriestLeaderCard;

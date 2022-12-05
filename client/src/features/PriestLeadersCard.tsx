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
    <main className="my-4 flex-col w-5/6 rounded-lg p-4 mx-auto">
      <img
        src={img}
        alt=""
        className="h-4/5 w-full object-cover rounded-md shadow-lg"
      />
      <div className="mt-6 shadow-md p-4 rounded-sm">
        <section className="text-xl font-bold text-gray-600">"{quote}"</section>
        <div className="mt-4 leading-8 text-sm italic font-bold">
          <section>Name : {name}</section>
          <section>Post : {post}</section>
          <section>Bible Verse : {bibleVerse}</section>
        </div>
      </div>
    </main>
  );
};

export default PriestLeaderCard;

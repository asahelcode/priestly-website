import Image from 'next/image';

import FamilyPic from '/public/images/family.webp';

const GroupPic = () => {
  return <main className=" w-5/6 rounded-lg p-4 mx-auto object-contain">
    <Image src={FamilyPic} alt="" height={100} width={300}/>
  </main>;
};

export default GroupPic;

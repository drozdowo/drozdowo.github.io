import cypherheadImage from '../assets/cypherhead.png';

const InfoHeader = () => {
  return (
    <div className="mb-4 flex w-full">
      <div className="flex flex-[4] justify-center flex-col">
        <h1 className="text-4xl font-bold text-matrix-primary mb-2 text-left text-shadow-matrix-glow md:text-3xl sm:text-2xl">Oliver Drozdowski</h1>
        <h2 className="text-xl font-thin text-matrix-secondary text-left text-shadow-matrix-glow-sm md:text-lg">Software Engineer</h2>
        <span className="text-[12px] font-thin text-matrix-secondary text-left text-shadow-matrix-glow-sm">Windsor, Ontario, Canada</span>
      </div>
      <div className="flex flex-[2] justify-self-end items-center justify-end">
        <img
          src={cypherheadImage}
          alt="Oliver Drozdowski profile picture"
          className="w-24 h-24 rounded-full border-4 border-matrix-primary shadow-matrix-glow object-cover"
        />
      </div>
    </div>
  );
}

export default InfoHeader;
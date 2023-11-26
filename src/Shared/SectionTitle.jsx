const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-10 w-[400px] bg-slate-100 to-pink-500 mx-auto text-center items-center px-2 py-3 text-white">
      <h2 className="uppercase text-4xl font-bold mb-3 text-black">{title}</h2>
      <p className="text-black font-semibold">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;

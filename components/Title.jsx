const Title = ({ text1, text2 }) => {
  return (
    <div className="py-8">
      {/* <h1>{text}</h1> */}
      <h1 class="mb-4 text-2xl text-center font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
        <span class="text-transparent  bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          {text1}
        </span>{" "}
        {text2}
      </h1>
    </div>
  );
};
export default Title;

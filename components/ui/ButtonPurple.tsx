export const ButtonPurple = ({
  text,
  icon,
}: {
  text: string;
  icon?: string;
}) => {
  return (
    <div>
      <button
        className={`relative inline-flex overflow-hidden rounded-full max-sm:scale-75 p-[1px] `}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

        <span className="inline-flex gap-1 h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 pr-6 pl-4 py-2 text-purple backdrop-blur-3xl text-xl">
          {icon ? (
            <div className="lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center">
              <img src={icon} alt={icon} />
            </div>
          ) : (
            <div className="w-2 lg:h-10 h-8" />
          )}

          {text}
        </span>
      </button>
    </div>
  );
};

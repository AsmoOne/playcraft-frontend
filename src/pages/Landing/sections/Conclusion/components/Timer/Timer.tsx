export const Timer = () => {
  const renderTimerItem = (value: string, unit: string) => (
    <div className="flex flex-col items-center">
      <p className="leading-none font-main text-h1-mobile md:text-h1-desktop text-primary">{value}</p>
      <p className="font-main text-h2-mobile md:text-h2-desktop">{unit}</p>
    </div>
  );

  return (
    <div className="flex justify-between w-full md:w-auto md:gap-15">
      {renderTimerItem("11", "років")}
      {renderTimerItem("9", "місяців")}
      {renderTimerItem("21", "день")}
    </div>
  );
};

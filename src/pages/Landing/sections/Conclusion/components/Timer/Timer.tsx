export const Timer = () => {
  const renderTimerItem = (value: string, unit: string) => (
    <div className="flex flex-col items-center">
      <p className="leading-none font-main text-h1-mobile md:text-h1-desktop text-secondary">{value}</p>
      <p className="font-main text-h2-mobile md:text-h2-desktop">{unit}</p>
    </div>
  );

  const startDate = new Date(2012, 3, 0);
  const currentDate = new Date();

  const difference = currentDate.getTime() - startDate.getTime();
  const allDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  const allMonths = Math.floor(allDays / 30);
  const years = Math.floor(allMonths / 12);
  const days = allDays % 30;
  const months = allMonths % 12;

  const yearSuffixes = {
    one: "рік",
    few: "років",
    many: "років",
  };

  const monthSuffixes = {
    one: "місяць",
    few: "місяці",
    many: "місяців",
  };

  const daySuffixes = {
    one: "день",
    few: "дні",
    many: "днів",
  };

  return (
    <div className="flex justify-between w-full md:w-auto md:gap-15">
      {renderTimerItem(years.toString(), yearSuffixes[years === 1 ? 'one' : (years % 10 === 2 || years % 10 === 3 || years % 10 === 4) && (years % 100 < 10 || years % 100 > 20) ? 'few' : 'many'])}
      {renderTimerItem(months.toString(), monthSuffixes[months === 1 ? 'one' : (months % 10 === 2 || months % 10 === 3 || months % 10 === 4) && (months % 100 < 10 || months % 100 > 20) ? 'few' : 'many'])}
      {renderTimerItem(days.toString(), daySuffixes[days === 1 ? 'one' : (days % 10 === 2 || days % 10 === 3 || days % 10 === 4) && (days % 100 < 10 || days % 100 > 20) ? 'few' : 'many'])}
    </div>
  );
};

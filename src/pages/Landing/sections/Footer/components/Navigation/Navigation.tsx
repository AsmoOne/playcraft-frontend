import { links } from "../../../../../../content/links";

export const Navigation = () => {
  return (
    <section className="flex flex-wrap lg:flex-row gap-20">
      {Object.keys(links).map((key) => {
        const linkGroup = links[key];

        const gridStyles = Object.keys(linkGroup).length > 5 ? 'grid grid-cols-2 gap-x-9 text-lg' : '';

        return (
          <div key={key}>
            <h3 className="font-main text-h3-mobile md:text-h3-desktop mb-8 lg:mb-10">{key}</h3>

            <nav>
              <ul className={`${'grid gap-4 text-lg'} ${gridStyles}`}>
                {Object.keys(linkGroup).map((subKey) => (
                  <li key={subKey}>
                    <a href={linkGroup[subKey].url}>
                      {linkGroup[subKey].title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        );
      })}
    </section>
  );
};

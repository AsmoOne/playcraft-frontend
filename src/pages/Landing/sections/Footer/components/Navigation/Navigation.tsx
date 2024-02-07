import { links } from "../../../../../../content/links";

export const Navigation = () => {
  return (
    <section className="flex gap-20">
      {Object.keys(links).map((key) => {
        const linkGroup = links[key];

        return (
          <div key={key}>
            <h3 className="font-main text-h3-mobile md:text-h3-desktop mb-10">{key}</h3>

            <nav>
              <ul className="flex flex-col gap-4 text-lg">
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


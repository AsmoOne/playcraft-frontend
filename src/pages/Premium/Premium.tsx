import { Container } from "../../components/Layout/Container";

import { services } from "./services";
import { prices } from "./prices";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export const Premium = () => {
  const navigate = useNavigate();
  const baseDivClasses = 'px-5 py-5 shadow rounded border-b';

  const handleClick = () => {
    navigate('/donate');
  };

  return (
    <Container>
      <table className="min-w-full sm:border-separate sm:border-spacing-5">
        <thead className="w-full">
          <tr className="bg-slate-300 text-base sm:text-xl font-semibold">
            <th className={`${baseDivClasses} gap-4 text-left w-full sm:w-1/4`}>
              Послуги
            </th>
            <th className={`${baseDivClasses} text-left w-full sm:w-1/4`}>Селянин</th>
            <th className={`${baseDivClasses} bg-primary text-left w-full sm:w-1/4`}>Козак</th>
            <th className={`${baseDivClasses} flex justify-between bg-[#AA00AA] text-white text-left w-full`}>
              <span className="block">Гетьман</span>
              <img src="/assets/crown.png" className="w-8 block"/>
            </th>
          </tr>
        </thead>

        <tbody>
          {services.map(({ service, villager, cosak, hetman }, index) => (
            <tr key={index}>
              <td className={`${baseDivClasses} bg-slate-100 text-base sm:text-xl w-auto text-wrap break-words font-semibold`}>
                { service }
              </td>

              <td className={`${baseDivClasses} bg-white text-base`}>
                { villager }
              </td>

              <td className={`${baseDivClasses} bg-primary bg-opacity-50 text-base font-medium`}>
                { cosak }
              </td>

              <td className={`${baseDivClasses} bg-[#aa00aa80] text-base font-semibold`}>
                { hetman }
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className="min-w-full sm:border-separate sm:border-spacing-5 mt-10 mb-10">
        <thead className="w-full">
          <tr className="bg-slate-300 text-base sm:text-xl font-semibold">
            <th className={`${baseDivClasses} text-left w-full sm:w-1/4`}>Ціни</th>
            <th className={`${baseDivClasses} text-left w-full sm:w-1/4`}>Селянин</th>
            <th className={`${baseDivClasses} bg-primary text-left w-full sm:w-1/4`}>Козак</th>
            <th className={`${baseDivClasses} bg-[#AA00AA] text-white text-left w-full sm:w-1/4`}>Гетьман</th>
          </tr>
        </thead>

        <tbody>
          {prices.map(({ period, villager, cosak, hetman }, index) => {
            let discount;

            switch (period) {
              case '3 місяці':
                discount = '-5%';
                break;
              case '6 місяців':
                discount = '-10%';
                break;
              case '12 місяців':
                discount = '-15%';
                break;
            }

            return (
              <tr key={`${period}-${index}`}>
                <td className={`${baseDivClasses} bg-slate-100 text-base sm:text-xl w-auto text-wrap break-words font-semibold`}>
                  { period } <span className="ml-2 text-red-700">{ discount }</span>
                </td>

                <td className={`${baseDivClasses} bg-white text-base`}>
                  { villager }
                </td>

                <td className={`${baseDivClasses} bg-primary bg-opacity-50 text-base font-medium`}>
                  { cosak }
                </td>

                <td className={`${baseDivClasses} bg-[#aa00aa80] text-base font-semibold`}>
                  { hetman }
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <p className="text-center">ПРИДБАТИ ДАНІ ПАКЕТИ МОЖНА НА СЕРВЕРІ ЗА ДОПОМОГОЮ КОМАНДИ /DONATE. УСІ СУМИ СУМИ ВКАЗАНІ У ГРИВНЯХ</p>
      <Button variant="primary" rootClassNames="mx-auto mt-4" onClick={handleClick}>
          Поповнити рахунок
      </Button>
    </Container>
  )
}

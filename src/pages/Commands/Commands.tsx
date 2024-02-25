import { Container } from "../../components/Layout/Container";

import { commandList } from "./commandList";

export const Commands = () => {
  const baseDivClasses = 'px-5 py-5 shadow rounded border-b';

  return (
    <Container rootClassNames="mt-20 mb-28">
      <table className="min-w-full sm:border-separate sm:border-spacing-5">
        <thead className="w-full">
          <tr className="bg-primary text-base sm:text-xl font-semibold">
            <th className={`${baseDivClasses} text-left w-full sm:w-1/3`}>Команда</th>
            <th className={`${baseDivClasses} text-left w-full`}>Опис</th>
          </tr>
        </thead>
        <tbody>
          {commandList.map(({ value, description }, index) => (
            <tr key={index}>
              <td className={`${baseDivClasses} bg-white text-base sm:text-xl w-auto text-wrap break-words sm:w-1/3 font-semibold`}>{value}</td>
              <td className={`${baseDivClasses} bg-white text-base`}>{description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-right mt-12 text-lg font-semibold mr-5">Певні команди доступні лише певним категоріям гравців</p>
    </Container>
  )
}

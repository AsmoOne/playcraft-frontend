import { Fragment } from "react";
import { Container } from "../../components/Layout/Container";

import { ruleList } from "./ruleList";

export const Rules = () => {
  return (
    <Container>
      {ruleList.map((ruleSection, indexT) => (
        <Fragment key={indexT}>
          <h2 className="mb-10 mt-20 text-h2-mobile md:text-h2-desktop font-main">{`${indexT !== ruleList.length - 1 ? `${indexT + 1}.` : ''} ${ruleSection.title}`}</h2>

          {ruleSection.rules.map((rule, indexR) => (
            <div className={`px-5 py-10 shadow rounded w-auto mb-4 text-xl font-semibold leading-normal ${rule.includes('виключно') && 'bg-[#FF9494]'}`} key={`${indexR}-${rule.charAt(0)}`}>
              {`${indexT !== ruleList.length - 1 ? `${indexT + 1}.${indexR + 1}.` : ''} ${rule}`}
            </div>
          ))}
        </Fragment>
      ))}

      <p className="text-lg text-right mt-15 mb-28">Останні зміни в правилах: 22.10.2022</p>
    </Container>
  )
}

import { Container } from "../../../../components/Layout/Container"
import { STYLES } from "../../../../utils/constants"

export const BestWorks = () => {
  const works = [
    {
      author: 'Work 1',
      image: {
        src: 'https://via.placeholder.com/150',
        alt: 'Work 1',
      },
    },
    {
      author: 'Work 2',
      image: {
        src: 'https://via.placeholder.com/150',
        alt: 'Work 2',
      },
    },
    {
      author: 'Work 3',
      image: {
        src: 'https://via.placeholder.com/150',
        alt: 'Work 3',
      },
    },
    {
      author: 'Work 3',
      image: {
        src: 'https://via.placeholder.com/150',
        alt: 'Work 3',
      },
    },
    {
      author: 'Work 3',
      image: {
        src: 'https://via.placeholder.com/150',
        alt: 'Work 3',
      },
    },
  ]

  return (
    <Container rootClassNames="pt-20">
      <h2 className={`${STYLES.H2} mb-7 md:mb-10`}>
        Найкращі роботи
      </h2>

      <div className="flex flex-wrap gap-16 lg:justify-center">
        {works.map((work, index) => (
          <div key={`${work} ${index}`} className="w-full bg-slate-200 max-w-[500px] lg:w-[350px] h-[190px] rounded" />
        ))}
      </div>
    </Container>
  )
}

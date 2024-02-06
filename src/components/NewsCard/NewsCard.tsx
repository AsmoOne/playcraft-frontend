export const NewsCard = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between w-full h-auto md:h-[280px] max-w-[680px] shadow-md rounded">
      <div className="flex flex-col justify-between px-6 py-5 w-full max-w-[340px]">
        <div>
          <h3 className="text-h3-mobile md:text-h3-desktop mb-3 font-semibold">Заголовок новини</h3>
          <p>Великий, або не дуже, опис цієї новини, великий, або не дуже, опис цієї новини великий, або не дуже</p>
        </div>

        <div className="flex gap-4">
          <p>24.01.2024</p>
          <p>20:31</p>
        </div>
      </div>

      <div className="bg-[#d9d9d9] w-full h-[150px] md:h-full rounded"/>
    </div>
  )
}

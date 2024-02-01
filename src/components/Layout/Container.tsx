type PropsT = {
  children: React.ReactNode,
};

export const Container = ({ children }: PropsT) => {
  return (
    <div className="container mx-auto px-36">
      { children }
    </div>
  )
}

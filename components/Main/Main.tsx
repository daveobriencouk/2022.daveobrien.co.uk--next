type MainProps = {
  children: React.ReactNode
}

export default function Main({ children }: MainProps) {
  return <main className="mx-one md:mx-one-and-half">{children}</main>
}

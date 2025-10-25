import Counter from "@/components/Counter";

export default function Page() {
  return (
    <main className="container">
      <h1 className="heading">Button Counter</h1>
      <section className="section">
        <h2 className="subheading">Press one of the Options below to do your COUNTING</h2>
        <Counter />
      </section>
      
    </main>
  )

}
import Clock from "../components/Clock";

export default function Landing() {
  return (
    <section className="w-[50%] mx-auto px-6">
      <h1 className="text-2xl font-bold text-(--highlight)">
        Jobert Poylan Jr
      </h1>
      <Clock />
    </section>
  );
}

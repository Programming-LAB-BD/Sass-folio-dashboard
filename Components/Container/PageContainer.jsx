export default function PageContainer({ children, header }) {
  return (
    <section className="md:pl-6">
      <div className="heading_area text-2xl font-medium text-center block w-full md:text-3xl">
        <h1>{header}</h1>
      </div>
      {children}
    </section>
  );
}

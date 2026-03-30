interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/og-image.jpg)' }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg text-green-100 max-w-3xl mx-auto">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

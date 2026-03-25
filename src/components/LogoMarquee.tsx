const logos = [
  "Bloomberg", "CoinDesk", "CNBC", "Forbes", "The Block", "Fortune",
  "Bitcoin Magazine", "Decrypt", "MarketWatch", "BeInCrypto"
];

const LogoMarquee = () => (
  <section className="bg-background py-16 overflow-hidden border-y border-border">
    <p className="text-center font-display text-sm font-medium text-muted-foreground mb-8">
      Regularly published in
    </p>
    <div className="relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...logos, ...logos].map((name, i) => (
          <div key={i} className="mx-8 md:mx-12 flex items-center">
            <span className="font-display text-xl md:text-2xl font-bold text-foreground/30">{name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LogoMarquee;

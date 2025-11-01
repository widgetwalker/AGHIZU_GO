const stats = [
  { value: "50K+", label: "Happy Patients" },
  { value: "500+", label: "Expert Doctors" },
  { value: "100K+", label: "Consultations" },
  { value: "99.9%", label: "Satisfaction Rate" }
];

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/90 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

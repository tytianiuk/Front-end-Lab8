const SectionTitle = ({ children, className }) => {
  return (
    <div className={`font-merriweather font-bold text-6xl ${className}`}>
      {children}
    </div>
  );
};

export default SectionTitle;

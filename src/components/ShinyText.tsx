const ShinyText = ({ text, disabled = false, speed = 5, className = '', color = 'white' }) => {
  const animationDuration = `${speed}s`;

  // Convert color name to RGB values
  const colorMap = {
    white: '255, 255, 255',
    black: '0, 0, 0'
  };
  const rgb = colorMap[color] || colorMap.white;

  return (
    <span
      className={`bg-clip-text ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        backgroundImage:
          `linear-gradient(120deg, rgb(${rgb}) 0%, rgb(${rgb}) 40%, rgba(255, 255, 255, 0.9) 50%, rgb(${rgb}) 60%, rgb(${rgb}) 100%)`,
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animationDuration: animationDuration,
        willChange: 'background-position'
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;

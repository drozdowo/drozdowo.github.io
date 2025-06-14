import { useEffect, useRef } from 'react';

interface MatrixBackgroundProps {
  className?: string;
}

const MatrixBackground: React.FC<MatrixBackgroundProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Matrix characters (including some Japanese katakana for authenticity)
    const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()+-=[]{}|;:,.<>?アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 16;
    let drops: number[] = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Reinitialize drops when canvas is resized
      const columns = Math.floor(canvas.width / fontSize);
      drops.length = 0;
      for (let x = 0; x < columns; x++) {
        drops[x] = Math.random() * -100; // Start with random positions above screen
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Fill canvas with black initially
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const draw = () => {
      // Semi-transparent black to create trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        
        // Different shades of green for depth effect
        const intensity = Math.random();
        if (intensity > 0.7) {
          ctx.fillStyle = '#0ff'; // Bright cyan-green
        } else if (intensity > 0.4) {
          ctx.fillStyle = '#0f0'; // Bright green
        } else {
          ctx.fillStyle = '#060'; // Dark green
        }
        
        // Draw character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Move drop down and reset when it goes off screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 25);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-screen h-screen z-[1] bg-matrix-dark pointer-events-none ${className}`}
    />
  );
};

export default MatrixBackground;

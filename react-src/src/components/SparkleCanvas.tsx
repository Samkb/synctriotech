import React, { useEffect, useRef } from "react";

const SparkleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const codeLines = [
    'const idea = "💡";',
    "const product = build(idea);",
    "growBusiness(product);",
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const colors = ["#0099cc", "#00b386", "#3a3a3a"]; // Softer brand tones
    const fontSize = 16;

    class CodeLine {
      text: string;
      x: number;
      y: number;
      speedY: number;
      color: string;
      opacity: number;

      constructor(text: string) {
        this.text = text;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.speedY = Math.random() * 0.15 + 0.05; // Slower floating
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.4 + 0.2; // Softer visibility
      }

      update() {
        this.y -= this.speedY;
        if (this.y < -20) this.y = height + 20;
      }

      draw() {
        if (!ctx) return;
        ctx.font = `${fontSize}px 'Courier New', monospace`;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 4;
        ctx.fillText(this.text, this.x, this.y);
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }
    }

    const lines: CodeLine[] = [];
    for (let i = 0; i < 25; i++) {
      const text = codeLines[i % codeLines.length];
      lines.push(new CodeLine(text));
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      lines.forEach((line) => {
        line.update();
        line.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default SparkleCanvas;

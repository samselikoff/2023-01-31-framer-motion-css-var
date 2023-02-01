import { motion } from "framer-motion";

export default function App() {
  return (
    <div style={{ gap: "10px", display: "flex", flexDirection: "column" }}>
      <p>Hover to animate</p>

      <motion.div
        whileHover={{ backgroundColor: "rgb(255 0 0 / 0)" }}
        style={{ backgroundColor: "rgb(255 0 0 / 1)" }}
        className="box"
      />

      <motion.div
        whileHover={{ backgroundColor: "rgb(var(--red) / 0)" }}
        style={{ backgroundColor: "rgb(var(--red) / 1)" }}
        className="box"
      />
    </div>
  );
}

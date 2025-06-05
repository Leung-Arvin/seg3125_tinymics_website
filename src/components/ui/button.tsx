interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const Button = ({ label, onClick, variant = "primary" }: ButtonProps) => {
  const base = "px-10 py-4 font-semibold rounded-md transition";
  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-gray-200"
      : "bg-black text-white border border-white hover:bg-gray-800";

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {label}
    </button>
  );
};

export default Button;

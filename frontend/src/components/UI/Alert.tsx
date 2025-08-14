interface AlertProps {
  type: "success" | "error";
  children: React.ReactNode;
}

export default function Alert({ type, children }: AlertProps) {
  const styles =
    type === "success"
      ? "bg-green-50 text-green-800 border border-green-300"
      : "bg-red-50 text-red-800 border border-red-300";

  return <div className={`p-2 rounded-lg mt-3 text-sm ${styles}`}>{children}</div>;
}

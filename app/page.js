import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ fontSize: "50px" }}>Welcome to Redapicorp</h1>
    </div>
  );
}

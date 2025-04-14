import Link from "next/link";

export default function CategorySelection() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "20px",
      }}
    >
      <Link href="/static?category=10" style={{ textDecoration: "none" }}>
        <div
          style={{
            padding: "20px 40px",
            backgroundColor: "#e0e0e0",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "transform 0.2s, box-shadow 0.2s",
            textAlign: "center",
            fontSize: "18px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          After 10th std
        </div>
      </Link>
      <Link href="/static?category=12" style={{ textDecoration: "none" }}>
        <div
          style={{
            padding: "20px 40px",
            backgroundColor: "#e0e0e0",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "transform 0.2s, box-shadow 0.2s",
            textAlign: "center",
            fontSize: "18px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          After 12th std
        </div>
      </Link>
    </div>
  );
}
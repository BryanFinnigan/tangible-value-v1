export default function HomePage() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "80px 24px",
        fontFamily: "Georgia, serif",
      }}
    >
      <p
        style={{
          color: "#8A6F3D",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        Knowledge • Value • Confidence
      </p>

      <h1
        style={{
          fontSize: "4rem",
          lineHeight: 1,
          marginBottom: "24px",
        }}
      >
        Accessible knowledge for tangible assets.
      </h1>

      <p
        style={{
          fontSize: "1.3rem",
          lineHeight: 1.8,
          color: "#555",
          maxWidth: "700px",
        }}
      >
        Tangible Value helps people learn about metals, coins, jewelry,
        antiquities, and other tangible assets through trusted education,
        thoughtful curation, and ethical source recommendations.
      </p>
    </main>
  );
}
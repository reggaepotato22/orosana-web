import starlingBird from "@/assets/starling-bird.png";

const FlyingStarling = () => {
  return (
    <div className="fixed top-20 left-0 z-50 pointer-events-none">
      <img
        src={starlingBird}
        alt="Superb Starling"
        className="w-20 h-auto animate-fly-across drop-shadow-lg"
        style={{
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
        }}
      />
    </div>
  );
};

export default FlyingStarling;

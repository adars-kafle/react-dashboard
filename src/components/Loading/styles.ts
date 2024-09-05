export const styles = {
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Optional
    zIndex: 9999, // Optional
  },
  circularProgressFirst: {
    color: "#1a90ff",
    animationDuration: "550ms",
    size: 40,
    thickness: 4,
  },
  circularProgressSecond: {
    color: "transparent",
    position: "absolute",
    size: 40,
    thickness: 4,
    value: 100,
  },
};

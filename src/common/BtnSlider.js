export default function BtnSlider({ direction, moveSlide }) {
  return (
    <div
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? (
        <i className="bi control bi-arrow-right-circle-fill"></i>
      ) : (
        <i className="bi control bi-arrow-left-circle-fill"></i>
      )}
    </div>
  );
}

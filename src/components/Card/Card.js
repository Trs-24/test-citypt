import PropTypes from "prop-types";

Card.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary"]),
  children: PropTypes.node,
};

const bgColorClassNameData = {
  primary: "bg-primary",
  secondary: "bg-secondary",
};

const textColorClassNameData = {
  primary: "text-white",
  secondary: "text-primary",
};

export default function Card({ color = "primary", children }) {
  return (
    <div
      className={`${bgColorClassNameData[color]} ${textColorClassNameData[color]} w-[440px] h-[440px] text-center flex flex-col items-center justify-center gap-2 p-12 shadow-lg`}
    >
      {children}
    </div>
  );
}

import { memo } from "react";
import PropTypes from "prop-types";

const Button = memo(({ text, className, onClick }) => {
  return (
    <a onClick={onClick} className={`${className ?? ""} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img
            src="/images/arrow-down.svg"
            alt="arrow"
            loading="lazy"
            width={20}
            height={20}
          />
        </div>
      </div>
    </a>
  );
});

Button.displayName = "Button";

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

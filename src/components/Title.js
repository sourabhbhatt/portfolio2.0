import React from "react";
import PropTypes from "prop-types";

export default function Title({
  title = "",
  level = 4,
  className = "",
  style = {},
  ariaLabel = "",
}) {
  const HeadingTag = `h${level}`; // Dynamically set the heading level (h1, h2, etc.)

  return (
    <HeadingTag
      className={`text-yellow-500/90 font-medium font-mono ${className}`}
      style={style}
      aria-label={ariaLabel || title} // Use `aria-label` for accessibility
    >
      {title}
    </HeadingTag>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired, // Title text is required
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]), // Allow heading levels from h1 to h6
  className: PropTypes.string, // Optional additional class names
  style: PropTypes.object, // Inline styles
  ariaLabel: PropTypes.string, // Accessibility label
};

Title.defaultProps = {
  level: 4, // Default heading level
  className: "", // No additional classes by default
  style: {}, // No inline styles by default
  ariaLabel: "", // Default to an empty label
};

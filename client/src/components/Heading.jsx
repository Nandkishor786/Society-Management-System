import PropTypes from "prop-types";

export function Heading({ label }) {
  return <div className="font-bold text-4xl pt-6 font-serif">{label}</div>;
}

// PropTypes validation
Heading.propTypes = {
  label: PropTypes.string.isRequired, // Ensures 'label' is a required string
};

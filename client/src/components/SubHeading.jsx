import PropTypes from "prop-types"; // Import PropTypes

export function SubHeading({ label }) {
  return <div className="font-bold text-2xl pt-6">{label}</div>;
}

// PropTypes validation
SubHeading.propTypes = {
  label: PropTypes.string.isRequired, // 'label' should be a string and is required
};

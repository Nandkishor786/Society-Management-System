import PropTypes from "prop-types"; // Import PropTypes

export function Button({ label, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-3 mb-1"
      disabled={disabled}
    >
      {label}
    </button>
  );
}

// Define prop types
Button.propTypes = {
  label: PropTypes.string.isRequired, // label should be a string and is required
  onClick: PropTypes.func.isRequired, // onClick should be a function and is required
  disabled: PropTypes.bool, // disabled is optional and should be a boolean
};

// Default props for optional props
Button.defaultProps = {
  disabled: false, // Default to false if not provided
};

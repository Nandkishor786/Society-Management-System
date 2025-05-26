import PropTypes from "prop-types";

export function InputBox({ type, label, placeholder, onChange }) {
  const isTime = type === "time";

  return (
    <div>
      <div className="text-[16px] font-serif text-left py-2 text-neutral-200 font-extrabold">
        {label}
      </div>
      <input
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        className={`w-full px-2 py-1 border-2 border-nilla bg-black bg-opacity-40 
          text-white font-medium font-serif
          placeholder:${isTime ? "text-white" : "text-neutral-400"} 
          ${isTime ? "pr-2" : ""}`}
        style={isTime ? { colorScheme: "dark" } : {}}
      />
    </div>
  );
}

InputBox.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

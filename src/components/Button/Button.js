"use client";

export default function Button({
  classn = "",
  text,
  icon: Icon,
  type,
  onClick,
}) {
  return (
    <button onClick={onClick} type={type} className={`button ${classn}`}>
      <p className="p-important">{text}</p>
      {Icon && <Icon className="icon-button" />}
    </button>
  );
}

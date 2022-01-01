import React from "react";
export default function DeleteButton({ handleDelete }) {
  return (
    <button name="delete" onClick={handleDelete}>
      Delete
    </button>
  );
}

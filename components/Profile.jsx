import React from "react";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue-gradient">{name} Profile</span>
      </h1>
      <p>{desc}</p>
    </section>
  );
};

export default Profile;

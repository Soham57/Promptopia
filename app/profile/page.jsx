"use client";

import { useEffect } from "react";
import Profile from "@components/Profile";

const MyProfile = () => {
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);
};

export default MyProfile;

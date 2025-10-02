import axios from "axios";

const getLoggedInUser = async () => {
  try {
    const token = localStorage.getItem("token");

    console.log("token", token);

    if (!token) return null;

    const res = await axios.get("http://localhost:4000/api/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res.data;
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

export { getLoggedInUser };

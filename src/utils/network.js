export const getApiResource = async () => {
  try {
    const res = await fetch("https://api.sampleapis.com/wines/reds");
    if (!res.ok) {
      console.log("Could not fetch.", res.status);
      return false;
    }
    return await res.json();
  } catch (error) {
    console.log(error.message);
    return false;
  }
};

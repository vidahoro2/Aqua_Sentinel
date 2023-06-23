const apiKey = "AIzaSyD1MIdnWt1UKTn6tBgqk7OaktVjMP529UE";

export const loadGoogleMaps = (callback: () => void) => {
  const existingScript = document.getElementById("googleMaps");

  if (!existingScript) {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.id = "googleMaps";
    document.body.appendChild(script);

    script.onload = () => {
      if (callback) callback();
    };
  }

  if (existingScript && callback) callback();
};
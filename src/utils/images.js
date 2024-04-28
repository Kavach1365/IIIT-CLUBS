import axios from "axios";
// const imagesList = [
//   "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Fnginx%2Fstatic%2Fgallery%2F1.jpg&w=1920&q=75",
//   "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Fnginx%2Fstatic%2Fgallery%2F11.jpg&w=1920&q=75",
//   "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Fnginx%2Fstatic%2Fgallery%2F13.jpg&w=1920&q=75",
//   "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Fnginx%2Fstatic%2Fgallery%2F2.jpg&w=1920&q=75",
//   "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Fnginx%2Fstatic%2Fgallery%2F3.jpg&w=1920&q=75",
//   "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Fnginx%2Fstatic%2Fgallery%2F4.jpg&w=1920&q=75",
//   "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Fnginx%2Fstatic%2Fgallery%2F5.jpg&w=1920&q=75",
//   "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Fnginx%2Fstatic%2Fgallery%2F6.jpg&w=1920&q=75",
// ];
const images = async () => {
  let imagesList = [];
  // console.log("In Utils Images");
  try {
    const response = await axios.get("http://localhost:8000/get-images");
    imagesList = response.data;
  } catch (e) {
    console.log(e);
  }
  return imagesList;
};

export default images;

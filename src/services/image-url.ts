import react from '../assets/react.svg'
const getCroppedImage = (url: String) => {
  if(!url) return react
  const target = "media/";
  const index = url.indexOf(target) + target.length;

   return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImage;

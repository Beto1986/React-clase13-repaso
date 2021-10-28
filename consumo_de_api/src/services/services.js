import Axios from "axios";

const getallposts = async (setData) => {
  const respuesta = await Axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  setData(respuesta.data);
};

export default getallposts;

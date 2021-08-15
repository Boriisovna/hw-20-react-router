import PostComponent from '../Post/PostComp';

const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
const postPhoto = "https://pbs.twimg.com/media/E2ym_7VWYAY_RFU?format=jpg&name=large"


const avatarPhoto = "https://pbs.twimg.com/profile_images/1348509746106671105/STdnNKB6_400x400.jpg"


const posts=[
{
    name: "Anakin skywalker",
    photo: ANAKIN_IMAGE,
    nickname: "@dart_vader",
    content:"WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image:RAY_IMAGE,
    date:"26 февр."
},
 {
  name: "Typical programmer",
  photo: avatarPhoto,
  nickname: "@tproger",
  content:"When you try to choose a meaningful variable name:",
  image:postPhoto,
  date:" 15 сент."
}
]


function Post() {

  return ( 
    <div>
      {posts.map((post)=><PostComponent name={post.name} photo={post.photo} nickname={post.nickname} content={post.content} image={post.image} date={post.date} key={post.name}/>)}
    </div>
  );
  }

export default Post;
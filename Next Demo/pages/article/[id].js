import CSSMO from "./index.module.scss";
function About({ posts }) {
  return <div className={CSSMO.aboutCss}>id {posts}</div>;
}

// 此函数在构建时被调用
export async function getStaticProps({ params }) {
  console.log("{ params }", params.id);
  // 调用外部 API 获取博文列表
  const res = await new Promise((res) => {
    setTimeout(() => {
      res(JSON.stringify([{ a: 2, b: 4 }]));
    }, 2000);
  });

  console.log("res", res);

  // 通过返回 { props: { posts } } 对象，Blog 组件
  // 在构建时将接收到 `posts` 参数
  return {
    props: {
      posts: res,
    },
  };
}

// 此函数在构建时被调用
export async function getStaticPaths() {
  // 调用外部 API 获取博文列表
  const posts = await new Promise((res) => {
    setTimeout(() => {
      res([{ id: 2 }, { id: 4 }, { id: 5 }, { id: 6 }]);
    }, 2000);
  });

  // 据博文列表生成所有需要预渲染的路径
  const paths = posts.map((post) => ({
    params: { id: `${post.id}` },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
export default About;

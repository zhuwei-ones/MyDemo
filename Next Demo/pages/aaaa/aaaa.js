import Image from "next/image";
import cat from "../../public/cat.jpg";
import CSSMODULE from "./index.module.scss";

function About({ posts }) {
  return (
    <>
      <div className={CSSMODULE.hohohooCss}>About {posts}</div>;
      <Image
        src={cat}
        alt="Picture of the author  aaa"
        width={500}
        height={11}
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <Image
        src="https://cdn2.ones-ai.cn/images/index/scene-solution4X3-ddcce2ff6a.png"
        width={300}
        height={300}
        alt=""
      />
      <Image
        src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
        width={300}
        height={300}
        alt=""
      ></Image>
    </>
  );
}

// 此函数在构建时被调用
export async function getStaticProps() {
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

export default About;

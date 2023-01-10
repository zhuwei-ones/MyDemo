import Image from "next/image";
import cat from "../../public/cat.jpg";
import Style from "./index.module.scss";

const url = "http://127.0.0.1:5501/public/cat.jpg";
const url2 = "http://127.0.0.1:5501/public/1.jpeg";
const url3 = "http://127.0.0.1:5501/public/2.jpeg";
const url4 = "http://127.0.0.1:5501/public/left_shadow.png";
export default function ImgSize() {
  return (
    <>
      <p>父级</p>
      {/* <div className={Style["parent-hw"]}>
        <Image
          src={url}
          layout="responsive"
          width={"100%"}
          height={"100%"}
          alt=""
        ></Image>
      </div> */}
      {/* <p>父级 h</p>
      <div className={Style["parent-h"]}>
        <Image src={cat} layout="responsive" alt=""></Image>
      </div> */}
      {/* <p>父级 w</p>
      <div className={Style["parent-w"]}>
        <Image src={cat} layout="responsive" alt=""></Image>
      </div> */}
      {/* <p>百分比</p>
      <div className={Style["parent-hw"]}>
        <Image src={url} alt=""></Image>
      </div> */}
      <p>px</p>
      {/* <Image src={url} width="100" height="200" alt=""></Image> */}
      <p>媒体查询</p>
      {/* <Image
        src={url}
        width={100}
        height={50}
        sizes="(max-width: 768px) 50px,
              (max-width: 1200px) 100px,
              30px"
        alt=""
      ></Image> */}
      {/* <div className={Style["parent-hw"]}>
        <Image
          src={url}
          alt=""
          layout="responsive"
          width={"80%"}
          height={"100%"}
          sizes="(max-width: 768px) 80%,
              (max-width: 1200px) 100%,
              50%"
        ></Image>
      </div> */}
      {/* <div className={Style["parent-hw"]}>
        <ImageResposive
          src={url}
          alt=""
          sizes="xs_screen 100px 80px, s_screen 80px 50px,  100px 80px"
        ></ImageResposive>
      </div> */}
      {/* <Image
        alt=""
        src={url}
        width="20vw"
        height="10vw"
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        srcSet={`${url2} 350w,
        ${url3} 750w,
        ${url} 1000w`}
      /> */}

      {/* <img
        alt=""
        src={url}
        srcset={`${url2} 320w,
        ${url3} 640w,
        ${url} 1000w`}
        sizes="(max-width: 768px) 30vw,
              (max-width: 1200px) 50vw,
             100vw"
      ></img> */}

      {/* <img
        alt=""
        src={url}
        srcset={`
            ${url2} 300w,
            ${url3} 500w,
            ${url} 700w
        `}
        sizes="
            (max-width: 500px) 500px,
            (max-width: 1000px) 1000px,
            700px
        "
      ></img> */}

      <div className={Style.baifenbi}>
        {/* <ImageResponsive
          src={url4}
          sizes=""
          alt=""
          layout="xs_screen 140% "
        ></ImageResponsive> */}
      </div>

      <div className={Style.baifenbi}>
        <Image
          src={url4}
          width={140}
          height={120}
          layout="responsive"
          alt=""
        ></Image>
      </div>

      <div className={Style.baifenbi}>
        <Image src={url4} alt=""></Image>
      </div>
    </>
  );
}

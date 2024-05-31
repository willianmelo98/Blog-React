import React, { useState } from "react";
import "./BlogPost.css";
import BlogPostModel from "../../models/BlogPostModel";
import ContadorCompartilhamento from "./ContadorDeCompartilhamento/Contador";
import { Checkbox } from "@mui/material";
/**
 * BlogPost Component
 * @param {{post:BlogPostModel}} props
 * @returns
 */
function BlogPost(props) {
  const [post,setPost] = useState(props.post);

  function changeCheckBox(event)
{
  setPost({...post,exibirImagem: !post.exibirImagem });
}  

  return (
    <article className="blogPost">
      <h2>{post.titulo}</h2>
      <div> <Checkbox type="checkbox" onClick={changeCheckBox} defaultChecked={post.exibirImagem} /></div>
      {post.exibirImagem ? <img src={post.imagem} alt={post.titulo} /> : null}
      <p>{post.texto}</p>
      <ContadorCompartilhamento></ContadorCompartilhamento>
    </article>
  );
}
export default BlogPost;

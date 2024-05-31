import { useState } from "react";
import BlogPostModel from "../../models/BlogPostModel";
import BlogPost from "../BlogPost";
import "./BlogPage.css";
import * as React from 'react';
import Button from '@mui/material/Button';


/**
 * BlogPost Component
 * @param {{listagemPosts:BlogPostModel[]}} props
 * @returns
 */

function BlogPage(props) {
  const [listagemPosts, setListagemPosts] = useState(props.listagemPosts ?? []);
  const [exibirForm, setExibirForm] = useState(false);

  function cadastrarPost() {
    let titulo = document.getElementById("titulo").value;
    let texto = document.getElementById("texto").value;
    let urlImagem = document.getElementById("urlImagem").value;
    let newPost = new BlogPostModel(titulo, urlImagem, texto);
    setListagemPosts([...listagemPosts,newPost]);
    setExibirForm(false);
  }

  function handleExibirForm(event) {
    setExibirForm(true);
  }

  return (
    <div className="pagePost">
      {!exibirForm ? (
        listagemPosts.map((blogPost, key) => (
          <BlogPost key={key} post={blogPost}></BlogPost>
        ))
      ) : (
        <div className="formPost">
          <input id="titulo" placeholder="Titulo"></input>
          <input id="urlImagem" placeholder="Imagem Url"></input>
          <input id="texto" placeholder="Digite seu texto"></input>
          <Button  variant="contained" onClick={cadastrarPost}>Salvar</Button>
        </div>
      )}
      {!exibirForm && (
        <button className="buttonCadastro" onClick={handleExibirForm}>
          Cadastrar Post
        </button>
      )}
    </div>
  );
}
export default BlogPage;

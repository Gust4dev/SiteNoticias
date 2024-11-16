import Noticia from "../models/noticias";

export const listarNoticias = async (req, res) => {
  try {
    const noticias = await Noticia.find();
    res.status(200).json(noticias);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar as notícias" });
  }
};

export const criarNoticia = async (req, res) => {
  try {
    const { titulo, conteudo, autor, dataPublicacao } = req.body;
    const noticia = new Noticia({ titulo, conteudo, autor, dataPublicacao });
    await noticia.save();
    res.status(201).json(noticia);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar a notícia" });
  }
};

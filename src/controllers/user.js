import User from "../models/user";

// Criar usuário
export const criarUsuario = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const user = new User({ nome, email, senha });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o usuário" });
  }
};

// Atualizar usuário
export const atualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    const user = await User.findByIdAndUpdate(
      id,
      { nome, email, senha },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar o usuário" });
  }
};

// Listar usuários
export const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await User.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar os usuários" });
  }
};

// Excluir usuário
export const excluirUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }
    res.status(200).json({ message: "Usuário excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir o usuário" });
  }
};

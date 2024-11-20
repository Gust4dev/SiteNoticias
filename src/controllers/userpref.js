import UserPref from "../models/userpref";

// Criar preferências
export const criarPreferencias = async (req, res) => {
  try {
    const { userId, preferencias } = req.body;
    const novaPreferencia = new UserPref({ userId, preferencias });
    const savedPreferencia = await novaPreferencia.save();
    res.status(201).json(savedPreferencia);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar preferências", error });
  }
};

// Atualizar preferências
export const atualizarPreferencias = async (req, res) => {
  try {
    const { id } = req.params;
    const atualizacoes = req.body;
    const preferenciasAtualizadas = await UserPref.findByIdAndUpdate(id, atualizacoes, { new: true });
    if (!preferenciasAtualizadas) {
      return res.status(404).json({ message: "Preferências não encontradas" });
    }
    res.status(200).json(preferenciasAtualizadas);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar preferências", error });
  }
};

// Listar preferências
export const listarPreferencias = async (req, res) => {
  try {
    const { userId } = req.query;
    const preferencias = await UserPref.find(userId ? { userId } : {});
    res.status(200).json(preferencias);
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar preferências", error });
  }
};

// Excluir preferências
export const excluirPreferencias = async (req, res) => {
  try {
    const { id } = req.params;
    const preferenciaRemovida = await UserPref.findByIdAndDelete(id);
    if (!preferenciaRemovida) {
      return res.status(404).json({ message: "Preferências não encontradas" });
    }
    res.status(200).json({ message: "Preferências excluídas com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao excluir preferências", error });
  }
};

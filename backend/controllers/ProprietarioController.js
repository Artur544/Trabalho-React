const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

module.exports = {
    async listarProprietarios(req,res){
        try {
            const proprietarios = await prisma.proprietarios.findMany();
            res.status(200).json(proprietarios);

        }catch(error){
            res.status(500).json({ error: "Erro ao listar os funcionarios"})
        }
    },

    async buscaProprietario(req,res){
        try {
            const {id} = req.params;
            const proprietario = await prisma.proprietarios.findUnique({
                where: { id: Number(id) }
            });
            if (!proprietario){
                return res.status(404).json( 
                    {
                        error: "Proprietário não encontrado"}
                    );
            }
            res.status(200).json(proprietario)

        }catch(error){
            res.status(500).json({ error: "Erro de acesso aos dados do proprietário" });
        }
    },

    async criarProprietarios(req,res){
        try {
            const {
                nome, email, endereco  
            } = req.body;

            const novoProprietario = await prisma.proprietarios.create({
                data: {
                    nome, email, endereco 
            }})

            res.status(201).json(novoProprietario);

        }catch(error){
            res.status(500).json({ error: "Erro ao criar o proprietário" });

        }
    },

    async atualizarProprietario(req,res){
        try{
            const { id } = req.params;
            const { nome, email, endereco  } = req.body;
            const proprietario = await prisma.proprietarios.update({
                where: { id: Number(id) },
                data: { 
                    nome,
                    email,
                    endereco 
                }
            })
            res.status(200).json({ message: "Atualização realizada com sucesso" });

        }catch(error){
            res.status(500).json({ error: "Erro ao atualizar o proprietário" });
        }

    },

    async deletarProprietario(req,res){
        try {
            //const id = req.params.id;
            const { id } = req.params;
            await prisma.proprietarios.delete(

                {
                    where: { id: Number(id) }
                }

            )
            res.status(204).json({ message: "Produto removido com sucesso." } )

        }catch(error){
            res.status(500).json({ error: "Erro ao remover o produto" });
        }
    },

    async buscaNome(req, res) {
        try {
            const nome = req.params.nome;
            const proprietario = await prisma.proprietarios.findMany({
                where: {
                    nome: {
                        contains: nome
                    }
                }
            });
            if ((!proprietario) || (proprietario == 0)) {
                return res.status(404).json(
                    {
                        error: "Proprietario não encontrado"
                    }
                );
            }
            res.status(200).json(proprietario)

        } catch (error) {
            res.status(500).json({ error: "Erro de acesso aos dados do proprietario" });
        }
    },

    async proprietarioMaisProdutos(req, res) {
        try {
            const proprietario = await prisma.proprietarios.findMany({
                include: {
                    _count: {
                        select: {produtos:true}
                    }
                },
                orderBy: {
                    produtos: {
                        _count: 'desc'
                    }
                },
                take: 1
            });
            if (!proprietario) {
                return res.status(404).json(
                    {
                        error: "Produtos não encontrados"
                    }
                );
            }
            res.status(200).json(proprietario)

        } catch (error) {
            res.status(500).json({ error: "Erro de acesso aos dados do proprietario" });
        }
    }
};
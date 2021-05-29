const db = require("../config/db")

module.exports = class Contato{
  constructor(obj = {id: 0}){
    this.id = obj.id
    if(!this.id) this.id = 0
    this.nome = obj.nome
    this.email = obj.email
    this.comentario = obj.comentario
  }

  async salvar(){
    if(this.id === 0){
      await db.exec("insert into contatos(nome, email, comentario)values(?,?,?)", [
        this.nome,
        this.email,
        this.comentario
      ]);
    }
    else{
      await db.exec("update contatos set nome=?, email=?, comentario=? where id=?", [
        this.nome,
        this.email,
        this.comentario,
        this.id
      ]);
    }
  }

  static async todos(){
    return await db.exec("select * from contatos")
  }

  static async excluir(id){
    return await db.exec("delete from contatos where id = ?", [id])
  }
}
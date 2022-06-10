import React from "react";

class AdicionarUsuario extends React.Component{
    state = {

        pessoa: [
            {
                nomeUsuario: 'paulinha',
                fotoUsuario: 'https://picsum.photos/50/50',
                fotoPost: 'https://picsum.photos/200/150'
            },

            {
                nomeUsuario: 'marcelo',
                fotoUsuario: 'https://www.albumdunyasi.com/application/uploads/2019/06/50x50-1-700x700.jpg',
                fotoPost: 'https://i.redd.it/6ihl9vurecz01.png'
            },

            {
                nomeUsuario: 'felipe',
                fotoUsuario: 'https://www.fotodeky.cz/files/catalog-item/2003/2003324/catalog-item_2003324_img_15043899324935.jpg',
                fotoPost: 'https://www.mall.cz/i/42535317/550/550'
            }
        ],

        valorInputPessoa: "",
        valorInputFotoPerfil: "",
        valorInputFoto: ""
    }

    adicionarPessoa = () => {
        const novaPessoa = {
            nome: this.state.valorInputPessoa,
            perfil: this.state.valorInputFotoPerfil,
            foto: this.state.valorInputFoto
        }

        const novoPessoas = [...this.state.pessoa, novaPessoa];

        this.setState({ pessoa: novoPessoas});
    };

    onChangeInputPessoa = (event) => {
        this.setState({ valorInputPessoa: event.target.value});
    };

    onChangeInputFotoPerfil = (event) => {
        this.setState({ valorInputFotoPerfil: event.target.value});
    };

    onChangeInputFoto = (event) => {
        this.setState ({valorInputFoto: event.target.value});
    };
    
    render() {

        const listaDosUsuario = this.state.pessoa.map((pessoa) => {
            return (
                <section>
                    {pessoa.nomeUsuario} - {pessoa.fotoUsuario} - {pessoa.fotoPost}
                </section>
            );
        });

        return(
            <div>
                {listaDosUsuario};
            <input
             value={this.state.valorInputPessoa}
             onChange={this.onChangeInputPessoa}
             placeholder={"Nome"}
             />
             <input 
             value={this.state.valorInputFotoPerfil}
             onChange={this.onChangeInputFotoPerfil}
             placeholder={"Foto De Perfil"}
             />
             <input
             value={this.state.valorInputFoto}
             onChange={this.onChangeInputFoto}
             placeholder={"Publicação"}
             />
             <button onClick={this.adicionarPessoa}> Adicionar</button>
             <div> {listaDosUsuario}</div>
             </div>
        )

    }
}

export default AdicionarUsuario
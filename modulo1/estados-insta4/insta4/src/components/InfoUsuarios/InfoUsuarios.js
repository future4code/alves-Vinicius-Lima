import React from "react";

class InfoUsuario extends React.Component {

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
        ]
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
                {listaDosUsuario}
            </div>
        )
    }
}

export default InfoUsuario
<<<<<<< HEAD
export default class FotoService{

    constructor(resource){
=======
export default class FotoService {
    constructor(resource) {
>>>>>>> bb76b331b697efebd8c230502265b83f2018b93c

        this._resource = resource('v1/fotos{/id}');
    }

<<<<<<< HEAD
    lista(){


    }

    cadastra(foto){


    }

    apaga(id){


    }
=======
    lista() {
        return this._resource
            .query()
            .then(res => res.json(), err => {
                console.log(err);
                throw new Error('Não foi possivel obter as fotos!')
            });

    }

    cadastra(foto) {
        if(foto._id) {
            return this._resource
                .update({ id: foto._id}, foto);

        } else {

            return this._resource
                .save(foto);

        }
    }

    apaga(id) {

        return this._resource
        .delete({ id })
        .then(null, err =>{ 
            console.log(err);
            throw new Error('Não foi possivel Remover a foto!')
        })
    }

    busca(id) {

        return this._resource
            .get({ id })
            .then(res =>  res.json());
    }           
>>>>>>> bb76b331b697efebd8c230502265b83f2018b93c
}
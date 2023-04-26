import { useState } from 'react'
import './Form.css'
import TextField from '../TextField'
import DropDown from '../DropDown'
import Button from '../Button'

const Form = (props) => {

    const [name, setName] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [team, setTeam] = useState('')

    const aoSalvar = (event) => {
        event.preventDefault()
        props.aoColaboradorCadastrado({
            name,
            cargo,
            imagem,
            team
        })
        setName('')
        setCargo('')
        setImagem('')
        setTeam('')
    }

    return (
        <section className='form'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    required={true}
                    label="name"
                    placeholder="Digite seu name"
                    value={name}
                    aoAlterado={value => setName(value)}
                />
                <TextField
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={cargo}
                    aoAlterado={value => setCargo(value)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={imagem}
                    aoAlterado={value => setImagem(value)}
                />
                <DropDown
                    required={true}
                    label="Time"
                    itens={props.teams}
                    value={team}
                    aoAlterado={value => setTeam(value)}
                />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form
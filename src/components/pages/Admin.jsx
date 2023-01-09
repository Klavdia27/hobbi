import React, {useState} from 'react';
import styles from '../../styles/Admin-panel.module.scss'
import {cardApi} from "../../shared/api/cardApi";

export const Admin = () => {
    const [name, setName] = useState('')
    const [section, setSection] = useState('')
    const [subsection, setSubsection] = useState('')
    const [description, setDescription] = useState('')
    const [shortDescription, setShortDescription] = useState('')
    const [author, setAuthor] = useState('')
    const [material, setMaterial] = useState('')
    const [conventions, setConventions] = useState('')
    const [instruction, setInstruction] = useState([
        {title: '', description: '', image: ''},
        {title: '', description: '', image: ''},
    ])
    const [link, setLink] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const result = {}

        result.name = name
        result.section = section
        result.subsection = subsection
        result.description = description
        result.shortDescription = shortDescription
        result.author = author
        result.material = material
        result.conventions = conventions
        result.instruction = instruction
        result.link = link
        result.image = image

        await cardApi.createCard(result)
    }

    const handleChangeInstruction = (text, index, field) => {
        setInstruction(prev => {
            return prev.map((item, i) => {
                if (i === index) {
                    item[field] = text
                }

                return item
            })
        })
    }

    const handleAddInstruction = () => {
        setInstruction(prev => [...prev, {title: '', description: '', image: ''}])
    }

    return (
        <div>
            <h1>Admin page</h1>

            <div className={styles.admin__form}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={'Имя'}/>
                    </div>

                    <div>
                        <input type="text" value={section} onChange={(e) => setSection(e.target.value)} placeholder={'Секция'}/>
                    </div>

                    <div>
                        <input type="text" value={subsection} onChange={(e) => setSubsection(e.target.value)} placeholder={'Подсекция'}/>
                    </div>

                    <div>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder={'Описание'}/>
                    </div>

                    <div>
                        <textarea value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} placeholder={'Короткое описание'}/>
                    </div>

                    <div>
                        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder={'Автор'}/>
                    </div>

                    <div>
                        <textarea value={material} onChange={(e) => setMaterial(e.target.value)} placeholder={'Материалы'}/>
                    </div>

                    <div>
                        <textarea value={conventions} onChange={(e) => setConventions(e.target.value)} placeholder={'Условности'}/>
                    </div>

                    <div>
                        <p>Инструкция</p>

                        <button type={'button'} onClick={handleAddInstruction}>+</button>

                        <br/>
                        <br/>

                        {instruction.map((item, index) => (
                            <div key={item.title + index}>
                                <input type="text" value={item.title} onChange={e => handleChangeInstruction(e.target.value, index, 'title')} placeholder={'Имя'}/>
                                <input type="text" value={item.description} onChange={e => handleChangeInstruction(e.target.value, index, 'description')} placeholder={'Описание'}/>
                                <input type="text" value={item.image} onChange={e => handleChangeInstruction(e.target.value, index, 'image')} placeholder={'Картинка'}/>
                            </div>
                        ))}

                    </div>

                    <br/>

                    <div>
                        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder={'Ссылка'}/>
                    </div>

                    <div>
                        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder={'Картинка'}/>
                    </div>

                    <br/>

                    <button>Создать</button>
                </form>
            </div>

        </div>
    )
}
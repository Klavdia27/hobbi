import React, {useState} from 'react';
import styles from '../../styles/Admin-panel.module.scss'
import {cardApi} from "../../shared/api/cardApi";
import {validation} from "../../helpers/validation";
import {generateHtml} from "../../helpers/generateHtml";

export const Admin = () => {
    const [name, setName] = useState('')
    const [section, setSection] = useState('')
    const [subsection, setSubsection] = useState('')
    const [description, setDescription] = useState('')
    const [shortDescription, setShortDescription] = useState('')
    const [author, setAuthor] = useState('')
    const [material, setMaterial] = useState([''])
    const [conventions, setConventions] = useState([''])
    const [instruction, setInstruction] = useState([{title: '', description: '', image: ''}])
    const [link, setLink] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (validation({name, section, subsection, description, shortDescription, author, material, conventions, instruction, link, image})) {
            const result = {}

            result.name = name
            result.section = section
            result.subsection = subsection
            result.description = description
            result.shortDescription = shortDescription
            result.author = author
            result.material = generateHtml(material.slice(0, material.length - 1))
            result.conventions = generateHtml(conventions.slice(0, conventions.length - 1))
            result.instruction = instruction.slice(0, instruction.length - 1)
            result.link = link
            result.image = image

            setName('')
            setSection('')
            setSubsection('')
            setDescription('')
            setShortDescription('')
            setAuthor('')
            setMaterial([''])
            setConventions([''])
            setInstruction([{title: '', description: '', image: ''}])
            setLink('')
            setImage('')

            await cardApi.createCard(result)
        }



        else alert('No')


    }

    const handleChangeInstruction = (text, index, field) => {
        setInstruction(prev => {
            prev = prev.map((item, i) => {
                if (i === index) {
                    item[field] = text
                }

                return item
            })

            if (text.length !== 0) {
                if (prev[prev.length - 1].title.length !== 0 || prev[prev.length - 1].description.length !== 0 || prev[prev.length - 1].image.length !== 0) {
                    prev.push({title: '', description: '', image: ''})
                }
            } else {
                prev.pop()
            }

            return prev
        })
    }

    const handleChangeMaterial = (text, index) => {
        setMaterial(prev => {
            prev = prev.map((item, i) => {
                if (i === index) {
                    item = text
                }

                return item
            })

            if (text.length !== 0) {
                if (prev[prev.length - 1].length !== 0) {
                    prev.push('')
                }
            } else {
                prev.pop()
            }

            return prev
        })
    }

    const handleChangeConventions = (text, index) => {
        setConventions(prev => {
            prev = prev.map((item, i) => {
                if (i === index) {
                    item = text
                }

                return item
            })

            if (text.length !== 0) {
                if (prev[prev.length - 1].length !== 0) {
                    prev.push('')
                }
            } else {
                prev.pop()
            }

            return prev
        })
    }

    return (
        <div>
            <h1>Admin page</h1>

            <div className={styles.admin__form}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.name}>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={'Имя'}/>
                    </div>

                    <div className={styles.section}>
                        <input type="text" value={section} onChange={(e) => setSection(e.target.value)} placeholder={'Секция'}/>
                    </div>

                    <div className={styles.subsection}>
                        <input type="text" value={subsection} onChange={(e) => setSubsection(e.target.value)} placeholder={'Подсекция'}/>
                    </div>

                    <div className={styles.description}>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder={'Описание'}/>
                    </div>

                    <div className={styles.description}>
                        <textarea value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} placeholder={'Короткое описание'}/>
                    </div>

                    <div className={styles.author}>
                        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder={'Автор'}/>
                    </div>

                    <div className={styles.material}>
                        <p>Материалы</p>

                        {material.map((item, index) => (
                            <div key={index}>
                                <input
                                    value={item}
                                    onChange={(e) => handleChangeMaterial(e.target.value, index)}
                                    type="text"
                                    placeholder={'Материал ' + (index + 1)}
                                />
                            </div>
                        ))}
                    </div>

                    <br/>

                    <div className={styles.conventions}>
                        <p>Условности</p>

                        {conventions.map((item, index) => (
                            <div key={index}>
                                <input
                                    value={item}
                                    onChange={(e) => handleChangeConventions(e.target.value, index)}
                                    type="text"
                                    placeholder={'Условность ' + (index + 1)}
                                />
                            </div>
                        ))}
                    </div>

                    <br/>

                    <div className={styles.instruction}>
                        <p>Инструкция</p>

                        {instruction.map((item, index) => (
                            <div key={index}>
                                <input type="text"
                                       value={item.title}
                                       onChange={e => handleChangeInstruction(e.target.value, index, 'title')}
                                       placeholder={'Подзаголовок'}
                                />

                                <input type="text"
                                       value={item.description}
                                       onChange={e => handleChangeInstruction(e.target.value, index, 'description')}
                                       placeholder={'Описание'}
                                />

                                <input type="text"
                                       value={item.image}
                                       onChange={e => handleChangeInstruction(e.target.value, index, 'image')}
                                       placeholder={'Картинка'}
                                />

                            </div>
                        ))}

                    </div>

                    <br/>

                    <div className={styles.link}>
                        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder={'Ссылка'}/>
                    </div>

                    <div className={styles.image}>
                        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder={'Картинка'}/>
                    </div>

                    <br/>

                    <button>Создать</button>
                </form>
            </div>

        </div>
    )
}
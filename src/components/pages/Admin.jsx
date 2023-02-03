import React, {useState} from 'react';
import styles from '../../styles/Admin-panel.module.scss'
import {cardApi} from "../../shared/api/cardApi";
import {validation} from "../../helpers/validation";
import {generateHtml} from "../../helpers/generateHtml";

export const Admin = () => {
    const [name, setName] = useState('')
    const [section, setSection] = useState('Узоры вязания')
    const [subsection, setSubsection] = useState('Узоры спицами')
    const [description, setDescription] = useState('')
    const [shortDescription, setShortDescription] = useState('')
    const [author, setAuthor] = useState('')
    const [material, setMaterial] = useState([''])
    const [conventions, setConventions] = useState([''])
    const [instruction, setInstruction] = useState([{title: '', description: '', image: ''}])
    const [link, setLink] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

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
            setSection('Узоры вязания')
            setSubsection('Узоры спицами')
            setDescription('')
            setShortDescription('')
            setAuthor('')
            setMaterial([''])
            setConventions([''])
            setInstruction([{title: '', description: '', image: ''}])
            setLink('')
            setImage('')

            await cardApi.createCard(result)

            e.target.reset()
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
                    <div>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={'Имя'}/>
                    </div>

                    <div>
                        <select name="section" id="" onChange={(e) => setSection(e.target.value)} defaultValue={'Узоры вязания'}>
                            <option value="Узоры вязания">Узоры вязания</option>
                            <option value="Вязание для детей">Вязание для детей</option>
                            <option value="Вязание для женщин">Вязание для женщин</option>
                            <option value="Вязание для мужчин">Вязание для мужчин</option>
                            <option value="Вязание для дома">Вязание для дома</option>
                        </select>
                    </div>

                    <div>
                        <select name="subsection" id="" onChange={(e) => setSubsection(e.target.value)} defaultValue={'Узоры спицами'}>
                            {section === 'Узоры вязания' && (
                                <>
                                    <option value="Узоры спицами">Узоры спицами</option>
                                    <option value="Узоры крючком">Узоры крючком</option>
                                </>
                            )}

                            {section === 'Вязание для детей' && (
                                <>
                                    <option value="Комбинезон, боди, песочник">Комбинезон, боди, песочник</option>
                                    <option value="Безрукавка, жилет">Безрукавка, жилет</option>
                                    <option value="Свитер, полувер, жакет">Свитер, полувер, жакет</option>
                                    <option value="Пончо, болеро, накидка">Пончо, болеро, накидка</option>
                                    <option value="Крестильный набор ">Крестильный набор </option>
                                    <option value="Топ, ажурная кофточка">Топ, ажурная кофточка</option>
                                    <option value="Платье, сарафан">Платье, сарафан</option>
                                    <option value="Перчатки, варежки">Перчатки, варежки</option>
                                    <option value="Шапка, шарфик, берет">Шапка, шарфик, берет</option>
                                    <option value="Штаны, шорты">Штаны, шорты</option>
                                    <option value="Юбка">Юбка</option>
                                </>
                            )}

                            {section === 'Вязание для женщин' && (
                                <>
                                    <option value="Комбинезон, боди, песочник">Комбинезон, боди, песочник</option>
                                    <option value="Безрукавка, жилет">Безрукавка, жилет</option>
                                    <option value="Свитер, полувер, жакет">Свитер, полувер, жакет</option>
                                    <option value="Пончо, болеро, накидка">Пончо, болеро, накидка</option>
                                    <option value="Топ, ажурная кофточка">Топ, ажурная кофточка</option>
                                    <option value="Платье, сарафан">Платье, сарафан</option>
                                    <option value="Перчатки, варежки">Перчатки, варежки</option>
                                    <option value="Шарф, снуд, палантин">Шарф, снуд, палантин</option>
                                    <option value="Юбка, штаны, шорты">Юбка, штаны, шорты</option>
                                    <option value="Шапка, берет">Шапка, берет</option>
                                    <option value="Пальто, кардиган">Пальто, кардиган</option>
                                    <option value="Носки, тапки">Носки, тапки</option>
                                    <option value="Вязание полным">Вязание полным</option>
                                </>
                            )}

                            {section === 'Вязание для мужчин' && (
                                <>
                                    <option value="Безрукавка, жилет">Безрукавка, жилет</option>
                                    <option value="Свитер, полувер, жакет">Свитер, полувер, жакет</option>
                                    <option value="Шапка, шарф, берет">Шапка, шарф, берет</option>
                                    <option value="Носки, тапки">Носки, тапки</option>
                                </>
                            )}

                            {section === 'Вязание для дома' && (
                                <>
                                    <option value="Покрывало, плед">Покрывало, плед</option>
                                    <option value="Подушки">Подушки</option>
                                    <option value="Коврики, сидушки">Коврики, сидушки</option>
                                    <option value="Салфетки, скатерти">Салфетки, скатерти</option>
                                    <option value="Корзинки, шкатулки">Корзинки, шкатулки</option>
                                    <option value="Цветы">Цветы</option>
                                    <option value="Вяжем к празднику">Вяжем к празднику</option>
                                    <option value="Игрушки">Игрушки</option>
                                    <option value="Вязание для животных">Вязание для животных</option>
                                    <option value="Другие полезные вещи">Другие полезные вещи</option>
                                </>
                            )}
                        </select>
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

                    <div>
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

                    <div>
                        <p>Инструкция</p>

                        {instruction.map((item, index) => (
                            <div key={index}>
                                <input type="text"
                                       value={item.title}
                                       onChange={e => handleChangeInstruction(e.target.value, index, 'title')}
                                       placeholder={'Имя'}
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
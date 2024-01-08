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
    const [link, setLink] = useState('')
    const [image, setImage] = useState('')

    const [material, setMaterial] = useState([''])
    const [conventions, setConventions] = useState([''])
    const [instruction, setInstruction] = useState([{title: '', description: '', image: ''}, {title: '', description: '', image: ''}])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (validation({name, section, subsection, description, shortDescription, author, material, conventions, instruction, link, image})) {
            const formData = new FormData()

            formData.append('name', name)
            formData.append('section', section)
            formData.append('subsection', subsection)
            formData.append('description', description)
            formData.append('shortDescription', shortDescription)
            formData.append('author', author)
            formData.append('material', generateHtml(material.slice(0, material.length - 1)))
            formData.append('conventions', generateHtml(conventions.slice(0, conventions.length - 1)))
            formData.append('link', link)

            const ins = instruction.slice(0, instruction.length - 1)

            formData.append('ins_image', image)

            for (let i = 0; i < ins.length; i++) {
                formData.append('ins_title', ins[i].title)
                formData.append('ins_description', ins[i].description)
                formData.append('ins_image', ins[i].image)
            }

            const res = await cardApi.createCard(formData)


            if (res === 'Создалось') alert('Создалось')

            // setName('')
            // setSection('')
            // setSubsection('')
            // setDescription('')
            // setShortDescription('')
            // setAuthor('')
            // setMaterial([''])
            // setConventions([''])
            // setInstruction([{title: '', description: '', image: ''}, {title: '', description: '', image: ''}])
            // setLink('')
            // setImage('')
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
        <div style={{width: '100%'}}>
            <h1>Панель администратора</h1>

            <div className={styles.admin__form_wrapper}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.admin__form}>
                        <div className={styles.name}>
                            <p>Название</p>

                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={'Название'}/>
                        </div>

                        <div className={styles.section}>
                            <p>Секция</p>

                            <select onChange={(e) => setSection(e.target.value)} name="" id="">
                                <option value="none" selected disabled hidden>Выберите секцию</option>
                                <option value="Узоры вязания">Узоры вязания</option>
                                <option value="Вязание для детей">Вязание для детей</option>
                                <option value="Вязание для женщин">Вязание для женщин</option>
                                <option value="Вязание для мужчин">Вязание для мужчин</option>
                                <option value="Вязание для дома">Вязание для дома</option>
                            </select>
                        </div>

                        <div className={styles.author}>
                            <p>Автор</p>

                            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder={'Автор'}/>
                        </div>

                        <div className={styles.subsection}>
                            <p>Подсекция</p>

                            <select onChange={(e) => setSubsection(e.target.value)} name="" id="">
                                {section === '' && (
                                    <>
                                        <option value="none" selected disabled hidden>Выберите подсекцию</option>
                                        <option value="Узоры спицами">Узоры спицами</option>
                                        <option value="Узоры крючком">Узоры крючком</option>
                                        <option value="Комбинезон, боди, песочник">Комбинезон, боди, песочник</option>
                                        <option value="Безрукавка, жилет">Безрукавка, жилет</option>
                                        <option value="Свитер, полувер, жакет">Свитер, полувер, жакет</option>
                                        <option value="Пончо, болеро, накидка">Пончо, болеро, накидка</option>
                                        <option value="Крестильный набор">Крестильный набор</option>
                                        <option value="Топ, ажурная кофточка">Топ, ажурная кофточка</option>
                                        <option value="Платье, сарафан">Платье, сарафан</option>
                                        <option value="Перчатки, варежки">Перчатки, варежки</option>
                                        <option value="Шапка, шарфик, берет">Шапка, шарфик, берет</option>
                                        <option value="Штаны, шорты">Штаны, шорты</option>
                                        <option value="Юбка">Юбка</option>
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
                                        <option value="Безрукавка, жилет">Безрукавка, жилет</option>
                                        <option value="Свитер, полувер, жакет">Свитер, полувер, жакет</option>
                                        <option value="Шапка, шарф, берет">Шапка, шарф, берет</option>
                                        <option value="Носки, тапки">Носки, тапки</option>
                                        <option value="Покрывало, плед">Покрывало, плед</option>
                                        <option value="Подушки">Подушки</option>
                                        <option value="Коврики">Коврики</option>
                                        <option value="Салфетки, скатерти">Салфетки, скатерти</option>
                                        <option value="Корзинки, шкатулки">Корзинки, шкатулки</option>
                                        <option value="Цветы">Цветы</option>
                                        <option value="Вяжем к празднику">Вяжем к празднику</option>
                                        <option value="Игрушки">Игрушки</option>
                                        <option value="Вязание для животных">Вязание для животных</option>
                                        <option value="Другие полезные вещи">Другие полезные вещи</option>
                                    </>
                                )}

                                {section === 'Узоры вязания' && (
                                    <>
                                        <option value="none" selected disabled hidden>Выберите подсекцию</option>
                                        <option value="Узоры спицами">Узоры спицами</option>
                                        <option value="Узоры крючком">Узоры крючком</option>
                                    </>
                                )}

                                {section === 'Вязание для детей' && (
                                    <>
                                        <option value="none" selected disabled hidden>Выберите подсекцию</option>
                                        <option value="Комбинезон, боди, песочник">Комбинезон, боди, песочник</option>
                                        <option value="Безрукавка, жилет">Безрукавка, жилет</option>
                                        <option value="Свитер, полувер, жакет">Свитер, полувер, жакет</option>
                                        <option value="Пончо, болеро, накидка">Пончо, болеро, накидка</option>
                                        <option value="Крестильный набор">Крестильный набор</option>
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
                                        <option value="none" selected disabled hidden>Выберите подсекцию</option>
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
                                        <option value="none" selected disabled hidden>Выберите подсекцию</option>
                                        <option value="Безрукавка, жилет">Безрукавка, жилет</option>
                                        <option value="Свитер, полувер, жакет">Свитер, полувер, жакет</option>
                                        <option value="Шапка, шарф, берет">Шапка, шарф, берет</option>
                                        <option value="Носки, тапки">Носки, тапки</option>
                                    </>
                                )}

                                {section === 'Вязание для дома' && (
                                    <>
                                        <option value="none" selected disabled hidden>Выберите подсекцию</option>
                                        <option value="Покрывало, плед">Покрывало, плед</option>
                                        <option value="Подушки">Подушки</option>
                                        <option value="Коврики">Коврики</option>
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

                        <div className={styles.link}>
                            <p>Ссылка</p>

                            <input type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder={'Ссылка'}/>
                        </div>

                        <div className={styles.image}>
                            <p>Картинка</p>

                            <input type="file" onChange={(e) => setImage(e.target.files[0])} placeholder={'Картинка'}/>
                        </div>

                        <div className={styles.description}>
                            <p>Длинное описание</p>

                            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder={'Описание'}/>
                        </div>

                        <div className={styles.description}>
                            <p>Короткое описание</p>

                            <textarea value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} placeholder={'Короткое описание'}/>
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

                        <div className={styles.instruction}>
                            <p>Инструкция</p>

                            <div>
                                {instruction.map((item, index) => (
                                    <div key={index}>
                                        <input type="text"
                                               value={item.title}
                                               onChange={e => handleChangeInstruction(e.target.value, index, 'title')}
                                               placeholder={'Подзаголовок'}
                                        />

                                        <textarea
                                            value={item.description}
                                            onChange={e => handleChangeInstruction(e.target.value, index, 'description')}
                                            placeholder={'Описание'}
                                        />

                                        <input type="file"
                                               onChange={e => handleChangeInstruction(e.target.files[0], index, 'image')}
                                               placeholder={'Картинка'}/>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                    <button>Создать</button>
                </form>
            </div>

        </div>
    )
}
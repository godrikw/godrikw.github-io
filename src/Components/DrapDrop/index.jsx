import React, {useState} from 'react';
import styles from './index.module.css'
import classNames from "classnames";

export const DrapDrop = () => {

    const plaseholderData = [
        [1],
        [2],
        [3]
    ]

    const [hold, setHold] = useState(false)
    const [hide, setHide] = useState(false)
    const [hovered, setHovered] = useState(false)
    const [indexSlide, setIndexSlide] = useState(0)

    function dragover(event) {
    event.preventDefault()
    }
    function dragenter() {
        setHovered(!hovered)
    }
    function dragleave() {
        setHovered(!hovered)
    }
    function drop(event) {
        setIndexSlide(Number(event.target.id))
        setHovered(!hovered)
    }

    return (
        <div>
            <div className={styles.row}>
                <div className={classNames(styles.col_header, styles.start)}>Начать</div>
                <div className={classNames(styles.col_header, styles.progress)}>В процессе</div>
                <div className={classNames(styles.col_header, styles.done)}>Готовы</div>
            </div>

            <div className={styles.row}>
                {plaseholderData.map(function (value, index) {
                    return (
                        <div
                            key={index}
                            id={index}
                            className={classNames(
                                styles.placeholder,
                                hovered && indexSlide !== index ? styles.hovered : styles.placeholder
                            )}
                            onDragOver={dragover}
                            onDragEnter={dragenter}
                            onDragLeave={dragleave}
                            onDrop={drop}
                        >
                            <div
                                className={classNames(
                                    styles.item,
                                    indexSlide !== index ? styles.active : styles.item,
                                    hold ? styles.hold : styles.item,
                                    hide ? styles.hide : styles.item
                                )}
                                draggable={"true"}
                                onDragStart={(() => {
                                    setHold(!hold)
                                    setTimeout(() => setHide(!hide),0)
                                })
                                }
                                onDragEnd={ () => {
                                    setHold(!hold)
                                    setTimeout(() => setHide(!hide),0)
                                }}
                            >
                                Перетащи меня
                            </div>
                        </div>

                    )
                })}
            </div>



            {/*<div className={styles.row}>*/}
            {/*    <div*/}
            {/*        className={classNames(*/}
            {/*            styles.placeholder,*/}
            {/*            hovered ? styles.hovered : styles.placeholder*/}
            {/*            )}*/}
            {/*        onDragOver={dragover}*/}
            {/*        onDragEnter={dragenter}*/}
            {/*        onDragLeave={dragleave}*/}
            {/*        onDrop={drop}*/}
            {/*    >*/}
            {/*        <div*/}
            {/*            className={classNames(*/}
            {/*                styles.item,*/}
            {/*                hold ? styles.hold : styles.item,*/}
            {/*                hide ? styles.hide : styles.item*/}
            {/*            )}*/}
            {/*            draggable={"true"}*/}
            {/*            onDragStart={(event => {*/}
            {/*                setHold(!hold)*/}
            {/*                setTimeout(() => setHide(!hide),0)*/}
            {/*            })*/}
            {/*            }*/}
            {/*            onDragEnd={ event => {*/}
            {/*                setHold(!hold)*/}
            {/*                setTimeout(() => setHide(!hide),0)*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            Перетащи меня*/}
            {/*        </div>*/}
            {/*    </div>*/}



            {/*    <div*/}
            {/*        className={classNames(*/}
            {/*            styles.placeholder,*/}
            {/*            hovered ? styles.hovered : styles.placeholder*/}
            {/*        )}*/}
            {/*        onDragOver={dragover}*/}
            {/*        onDragEnter={dragenter}*/}
            {/*        onDragLeave={dragleave}*/}
            {/*        onDrop={drop}*/}
            {/*    >s</div>*/}
            {/*    <div*/}
            {/*        className={classNames(*/}
            {/*            styles.placeholder,*/}
            {/*            hovered ? styles.hovered : styles.placeholder*/}
            {/*        )}*/}
            {/*        onDragOver={dragover}*/}
            {/*        onDragEnter={dragenter}*/}
            {/*        onDragLeave={dragleave}*/}
            {/*        onDrop={drop}*/}
            {/*    >s</div>*/}

            {/*</div>*/}
        </div>
    );
};

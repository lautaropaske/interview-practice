import { useState, memo } from 'react'
import styles from './styles.module.css'

const Directory = ({name, children}) => {
    const id = `dir-${name}`
    const [isOpen, setIsOpen] = useState(false)

    const childrenElements = children.map((c) => {
        if(isDirectory(c)) return <Directory key={c.name} name={c.name} children={c.children}/>
        return <File key={c.name} name={c.name}></File>
    })

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return <>
        <div id={id} aria-label={`${name} Directory`} className={styles.directory}>
            <span onClick={handleToggle}>{name}</span>
            <ul className={styles.children}>
                {isOpen && childrenElements}
            </ul>
        </div>
    </>
}

const File = ({name}) => {
    const id = `file-${name}`

    return <div id={id} aria-label={`${name} File`} className={styles.file}>
        <span>{name}</span>
    </div>
}

const FileTreeViewer = () => {
    return <>
        <h1>File tree viewer</h1>
        <Directory name={INITIAL_TREE.name} children={INITIAL_TREE.children}/>
    </>
}

export default FileTreeViewer

const INITIAL_TREE = {
    name: 'src',
    children: [
        {
            name: 'frontend',
            children: [
                {
                    name: 'solutions',
                    children: [
                        {
                            name: 'solution_a'
                        },
                        {
                            name: 'solution_b'
                        }
                    ]
                }
            ]
        },
        {
            name: 'backend',
            children: [
                {
                    name: 'solutions',
                    children: [
                        {
                            name: 'solution_c'
                        },
                        {
                            name: 'solution_d'
                        }
                    ]
                }
            ]
        }
    ]
}

const isDirectory = (tree) => !!tree.children
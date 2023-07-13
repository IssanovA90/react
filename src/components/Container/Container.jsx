import styles from './Container.module.css'

function Container({ children }) {
    return (
        <div className="container">
            {children}
        </div>
    )
}
export default Container;
import {PencilLine} from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
       <aside className={styles.sidebar}>
            <img
            className={styles.cover}
            src='https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40'
            />

            <div className={styles.profile}>
                <Avatar
                hasBorder
                src="https://avatars.githubusercontent.com/u/4925220?v=4"
                
                />
                <strong>Andre Lino</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu Perfil
                </a>
            </footer>

       </aside>
    );
}
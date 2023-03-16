import { useState } from 'react';
import styles from '@/styles/components/SearchBar.module.css'

export const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log(`Searching for "${searchTerm}"`);
    };

    return (
        <form className={styles.search_bar_form}>
            <input
                type="text"
                placeholder="Search for an issue"
                className={styles.search_bar_input}
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button type="submit" className={styles.search_button}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 21L15.5 15.5M10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </form>
    );
};
